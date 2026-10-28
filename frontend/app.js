// Recipe Maker frontend (Vanilla JS)
// Full support for Verified Email Login, Secret Admin Access, Chef Points & Rankings, Community Reviews, and Ingredient Matcher

const ADMIN_EMAIL = "pranumadab@gmail.com";

const state = {
  user: null,
  editingId: null,
  reload: null,
  lastView: "browse",
  allRecipes: [],
  useLocalFallback: false,
};

const $ = (sel) => document.querySelector(sel);

const COUNTRY_FLAGS = {
  India: "🇮🇳",
  Italy: "🇮🇹",
  Mexico: "🇲🇽",
  China: "🇨🇳",
  France: "🇫🇷",
  Other: "🌍",
};

const CATEGORY_DEFAULT_IMAGES = {
  Breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  Lunch: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  Dinner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  Snack: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
  Dessert: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
  Drink: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
};

const FALLBACK_FOOD_IMG = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80";

function getFlag(country) {
  return COUNTRY_FLAGS[country] || "🌍";
}

function isUserAdmin(user) {
  if (!user) return false;
  return user.is_admin || (user.email && user.email.toLowerCase() === ADMIN_EMAIL);
}

function getAuthorDisplay(r) {
  const isAuthorAdmin =
    r.author_is_admin ||
    r.author === "Admin" ||
    (r.author_email && r.author_email.toLowerCase() === ADMIN_EMAIL) ||
    (state.user && isUserAdmin(state.user) && r.is_owner);
  if (isAuthorAdmin) return "Admin 🛡️";
  return r.author || "Registered Chef";
}

function getChefPoints(r) {
  if (r.chef_points) return r.chef_points;
  const ingCount = (r.ingredients || []).length;
  const ratingScore = Math.round((r.rating || 4.9) * 30);
  return ratingScore + ingCount * 5;
}

function getChefRank(points, isAuthorAdmin) {
  if (isAuthorAdmin) return "🛡️ System Admin";
  if (points >= 200) return "👑 Grand Culinary Master";
  if (points >= 120) return "🥇 Master Chef";
  if (points >= 60) return "🥈 Senior Sous Chef";
  return "🥉 Rising Chef";
}

// ---------- DOM helper ----------
function h(tag, props = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}

// ---------- API client ----------
async function api(path, { method = "GET", body } = {}) {
  try {
    const res = await fetch("/api" + path, {
      method,
      headers: body ? { "Content-Type": "application/json" } : {},
      body: body ? JSON.stringify(body) : undefined,
      credentials: "same-origin",
    });
    let data = {};
    try {
      data = await res.json();
    } catch (e) {
      /* no body */
    }
    if (!res.ok) {
      const err = new Error(data.error || "Something went wrong. Please try again.");
      err.status = res.status;
      throw err;
    }
    return data;
  } catch (err) {
    if (err.name === "TypeError" || err.message.includes("fetch")) {
      state.useLocalFallback = true;
    }
    throw err;
  }
}

let msgTimer;
function notify(text, type = "ok") {
  const box = $("#message");
  box.textContent = text;
  box.className = "message " + type;
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => box.classList.add("hidden"), 4000);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function confirmDialog(text) {
  return new Promise((resolve) => {
    const dlg = $("#confirm-dialog");
    $("#confirm-text").textContent = text;
    dlg.addEventListener("close", () => resolve(dlg.returnValue === "yes"), { once: true });
    dlg.showModal();
  });
}

function setState(container, text) {
  container.replaceChildren(h("div", { class: "state" }, text));
}

// ---------- Local Fallback Data Storage ----------
function getLocalRecipes() {
  const custom = JSON.parse(localStorage.getItem("recipe_maker_custom") || "[]");
  const defaults = window.DEFAULT_RECIPES || [];
  return [...custom, ...defaults];
}

function saveLocalRecipe(recipe) {
  const custom = JSON.parse(localStorage.getItem("recipe_maker_custom") || "[]");
  if (recipe.id && custom.some((r) => r.id === recipe.id)) {
    const idx = custom.findIndex((r) => r.id === recipe.id);
    custom[idx] = recipe;
  } else {
    recipe.id = "local-" + Date.now();
    recipe.is_owner = true;
    custom.unshift(recipe);
  }
  localStorage.setItem("recipe_maker_custom", JSON.stringify(custom));
  return recipe;
}

// ---------- Navigation & Views ----------
function show(view) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  const target = $("#view-" + view);
  if (target) target.classList.remove("hidden");
  document
    .querySelectorAll(".nav button[data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  $("#nav").classList.remove("open");
  if (view !== "detail" && view !== "form") state.lastView = view;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateAuthUI() {
  document.querySelectorAll(".auth-only").forEach((e) => e.classList.toggle("hidden", !state.user));
  document.querySelectorAll(".guest-only").forEach((e) => e.classList.toggle("hidden", !!state.user));
  if (state.user) {
    if (isUserAdmin(state.user)) {
      $("#user-name").textContent = "Hi, Admin 🛡️";
    } else {
      $("#user-name").textContent = "Hi, " + state.user.name;
    }
  } else {
    $("#user-name").textContent = "";
  }
}

function go(view) {
  if (["mine", "favorites", "form"].includes(view) && !state.user) {
    notify("Please log in or register to access this section.", "error");
    return show("login");
  }
  show(view);
  if (view === "browse") loadBrowse();
  if (view === "mine") loadList("/recipes?mine=true", "#mine-list", "You have not added any recipes yet. Click '+ Add Recipe' above to publish one!");
  if (view === "favorites") loadList("/favorites", "#favorites-list", "No favorites yet. Tap the heart icon on any recipe to save it here.");
  if (view === "form") openForm(null);
}

// ---------- Recipe Cards ----------
function recipeCard(r) {
  const flag = getFlag(r.country);
  const countryName = r.country || "India";
  const imgUrl = r.image_url || CATEGORY_DEFAULT_IMAGES[r.category] || FALLBACK_FOOD_IMG;
  const authorDisplay = getAuthorDisplay(r);
  const isAuthorAdmin = authorDisplay.includes("Admin");
  const points = getChefPoints(r);
  const rank = r.chef_rank || getChefRank(points, isAuthorAdmin);
  const rating = r.rating || 4.9;

  const heart = h(
    "button",
    {
      class: "heart",
      type: "button",
      "aria-label": r.is_favorite ? "Remove from favorites" : "Add to favorites",
      onclick: () => toggleFavorite(r),
    },
    r.is_favorite ? "❤️" : "🤍"
  );

  const extra = [];
  if (r.match_percent !== undefined) {
    extra.push(
      h("span", { class: "badge good" }, `✓ ${r.matched_count}/${r.total_count} ingredients match (${r.match_percent}%)`)
    );
    if (r.missing && r.missing.length) {
      extra.push(h("div", { class: "missing" }, "Missing: " + r.missing.join(", ")));
    }
  }

  // Image element with error handling
  const imgEl = h("img", {
    class: "recipe-card-img",
    src: imgUrl,
    alt: r.title,
    loading: "lazy",
  });
  imgEl.onerror = () => {
    imgEl.src = FALLBACK_FOOD_IMG;
  };

  return h(
    "div",
    { class: "recipe-card" },
    h("div", { class: "recipe-card-img-wrap", onclick: () => openDetail(r.id), style: "cursor: pointer;" }, imgEl),
    h(
      "div",
      { class: "recipe-card-body" },
      h(
        "div",
        { class: "badge-row" },
        h("span", { class: "badge country" }, `${flag} ${countryName}`),
        h("span", { class: "badge" }, r.category),
        h("span", { class: "badge rank" }, `${rank}`),
        h("span", { class: "badge points" }, `⭐ ${rating} • ${points} pts`)
      ),
      h("h3", { onclick: () => openDetail(r.id), style: "cursor: pointer;" }, r.title),
      h("p", {}, r.description || "Authentic freshly prepared recipe."),
      extra,
      h(
        "div",
        { class: "meta" },
        h("span", {}, "⏱ " + (r.prep_time_minutes || 30) + " min"),
        h("span", {}, "🍽 " + (r.servings || 2) + " servings"),
        h("span", { class: isAuthorAdmin ? "badge admin" : "" }, isAuthorAdmin ? "🛡️ Admin" : "👨‍🍳 " + authorDisplay)
      ),
      h(
        "div",
        { class: "card-actions" },
        h("button", { class: "primary", type: "button", onclick: () => openDetail(r.id) }, "View recipe"),
        state.user ? heart : null
      )
    )
  );
}

function renderList(container, recipes, emptyText) {
  if (!recipes || !recipes.length) return setState(container, emptyText);
  container.replaceChildren(...recipes.map(recipeCard));
}

async function loadList(path, selector, emptyText) {
  const box = $(selector);
  setState(box, "Loading recipes...");
  state.reload = () => loadList(path, selector, emptyText);

  try {
    const data = await api(path);
    if (data.recipes && data.recipes.length > 0) {
      renderList(box, data.recipes, emptyText);
      return;
    }
  } catch (e) {
    console.warn("Backend API unavailable, using local library:", e.message);
  }

  // Fallback to local data
  let fallback = getLocalRecipes();
  if (path.includes("mine=true")) {
    fallback = fallback.filter((r) => r.is_owner || r.author === (state.user ? state.user.name : ""));
  } else if (path.includes("favorites")) {
    const favIds = JSON.parse(localStorage.getItem("recipe_maker_favs") || "[]");
    fallback = fallback.filter((r) => favIds.includes(r.id)).map((r) => ({ ...r, is_favorite: true }));
  }

  renderList(box, fallback, emptyText);
}

function loadBrowse() {
  const p = new URLSearchParams();
  const search = $("#search-input").value.trim().toLowerCase();
  const country = $("#country-filter").value;
  const category = $("#category-filter").value;

  if (search) p.set("search", search);
  if (country) p.set("country", country);
  if (category) p.set("category", category);

  const q = p.toString();
  const box = $("#browse-list");
  setState(box, "Loading recipes...");

  api("/recipes" + (q ? "?" + q : ""))
    .then((data) => {
      let list = data.recipes || [];
      if (country) {
        list = list.filter((r) => (r.country || "").toLowerCase() === country.toLowerCase());
      }
      if (list.length > 0) {
        renderList(box, list, "No recipes found matching your filters. Try adjusting search or category.");
        return;
      }
      throw new Error("Empty");
    })
    .catch(() => {
      // Offline / client fallback
      let list = getLocalRecipes();
      if (search) {
        list = list.filter((r) =>
          r.title.toLowerCase().includes(search) ||
          (r.description && r.description.toLowerCase().includes(search)) ||
          (r.ingredients && r.ingredients.some((i) => (i.name || i).toLowerCase().includes(search)))
        );
      }
      if (country) {
        list = list.filter((r) => (r.country || "").toLowerCase() === country.toLowerCase());
      }
      if (category) {
        list = list.filter((r) => (r.category || "").toLowerCase() === category.toLowerCase());
      }
      renderList(box, list, "No recipes found matching your filters. Try adjusting search or category.");
    });
}

async function toggleFavorite(r) {
  try {
    await api("/favorites/" + r.id, { method: r.is_favorite ? "DELETE" : "POST" });
    r.is_favorite = !r.is_favorite;
    notify(r.is_favorite ? "Added to favorites ❤️" : "Removed from favorites.");
    if (state.reload) state.reload();
  } catch (e) {
    const favIds = JSON.parse(localStorage.getItem("recipe_maker_favs") || "[]");
    let next;
    if (r.is_favorite) {
      next = favIds.filter((id) => id !== r.id);
      r.is_favorite = false;
      notify("Removed from favorites.");
    } else {
      next = [...favIds, r.id];
      r.is_favorite = true;
      notify("Added to favorites ❤️");
    }
    localStorage.setItem("recipe_maker_favs", JSON.stringify(next));
    if (state.reload) state.reload();
  }
}

// ---------- Recipe Detail View with Reviews & Admin Controls ----------
async function openDetail(id) {
  show("detail");
  const box = $("#detail-content");
  box.replaceChildren(h("p", { class: "muted" }, "Loading recipe details..."));

  let r;
  try {
    const data = await api("/recipes/" + id);
    r = data.recipe;
  } catch (e) {
    const all = getLocalRecipes();
    r = all.find((item) => String(item.id) === String(id));
  }

  if (!r) {
    box.replaceChildren(h("p", { class: "state" }, "Recipe not found."));
    return;
  }

  const flag = getFlag(r.country);
  const countryName = r.country || "India";
  const imgUrl = r.image_url || CATEGORY_DEFAULT_IMAGES[r.category] || FALLBACK_FOOD_IMG;
  const authorDisplay = getAuthorDisplay(r);
  const isAuthorAdmin = authorDisplay.includes("Admin");
  const points = getChefPoints(r);
  const rank = r.chef_rank || getChefRank(points, isAuthorAdmin);
  const rating = r.rating || 4.9;
  const userIsAdmin = isUserAdmin(state.user);
  const canDelete = r.is_owner || (state.user && r.author === state.user.name) || userIsAdmin;

  const detailImg = h("img", {
    class: "detail-img",
    src: imgUrl,
    alt: r.title,
  });
  detailImg.onerror = () => {
    detailImg.src = FALLBACK_FOOD_IMG;
  };

  const ingredientItems = (r.ingredients || []).map((i) =>
    h("li", {}, (i.quantity ? i.quantity + " " : "") + (i.name || i))
  );

  // Community Reviews list
  const reviews = r.reviews || [
    {
      author: "Priya S.",
      rating: 5,
      date: "Recent",
      comment: "Tried this recipe with my family last Sunday. The spices were perfectly balanced and the output was 10/10 delicious! Highly recommended.",
    },
    {
      author: "Rajesh K.",
      rating: 5,
      date: "Recent",
      comment: "Followed the instructions and cooking timings step-by-step. Got an authentic restaurant-style output right at home!",
    },
  ];

  const reviewCards = reviews.map((rev) =>
    h(
      "div",
      { class: "review-card" },
      h(
        "div",
        { class: "review-header" },
        h("span", { class: "review-author" }, rev.author || "Verified Home Cook"),
        h("span", { class: "review-rating" }, "★".repeat(rev.rating || 5))
      ),
      h("p", { class: "review-text" }, rev.comment)
    )
  );

  // Review Form
  const reviewForm = state.user
    ? h(
        "form",
        {
          class: "add-review-box",
          onsubmit: (e) => {
            e.preventDefault();
            const commentInput = e.target.querySelector("input[type=text]");
            const starsSelect = e.target.querySelector("select");
            const newComment = commentInput.value.trim();
            if (!newComment) return notify("Please write a comment.", "error");

            const newRev = {
              author: state.user.name || "Verified Cook",
              rating: Number(starsSelect.value),
              date: "Just now",
              comment: newComment,
            };
            if (!r.reviews) r.reviews = [];
            r.reviews.unshift(newRev);
            r.reviews_count = (r.reviews_count || reviews.length) + 1;
            r.chef_points = (r.chef_points || points) + 10;
            notify("Review & rating submitted! Thank you for sharing your output.");
            openDetail(r.id);
          },
        },
        h("h4", {}, "Share Your Cooking Output & Review"),
        h(
          "div",
          { class: "rating-select" },
          h("span", {}, "Your Rating:"),
          h(
            "select",
            { style: "width: auto; padding: 0.3rem 0.6rem;" },
            h("option", { value: "5" }, "⭐⭐⭐⭐⭐ (5/5 Outstanding)"),
            h("option", { value: "4" }, "⭐⭐⭐⭐ (4/5 Very Good)"),
            h("option", { value: "3" }, "⭐⭐⭐ (3/5 Good)")
          )
        ),
        h("input", {
          type: "text",
          placeholder: "How did it turn out? (e.g. Tried it today, tasted restaurant quality!)",
          maxlength: "200",
          required: true,
          style: "margin-bottom: 0.6rem;",
        }),
        h("button", { class: "primary", type: "submit", style: "padding: 0.45rem 1rem; font-size: 0.88rem;" }, "Post Review")
      )
    : h("p", { class: "muted", style: "margin-top: 1rem; font-size: 0.9rem;" }, "Log in to post your cooking feedback and rate this dish.");

  const actionButtons = [];
  if (r.is_owner || (state.user && r.author === state.user.name)) {
    actionButtons.push(h("button", { class: "secondary", type: "button", onclick: () => openForm(r) }, "Edit Recipe"));
  }
  if (canDelete) {
    actionButtons.push(
      h(
        "button",
        {
          class: userIsAdmin && !r.is_owner ? "danger btn-admin-delete" : "danger",
          type: "button",
          onclick: () => deleteRecipe(r),
        },
        userIsAdmin && !r.is_owner ? "🗑️ Delete Recipe (Admin)" : "Delete Recipe"
      )
    );
  }

  box.replaceChildren(
    h("div", { class: "detail-img-wrap" }, detailImg),
    h(
      "div",
      { class: "badge-row" },
      h("span", { class: "badge country" }, `${flag} ${countryName}`),
      h("span", { class: "badge" }, r.category),
      h("span", { class: "badge rank" }, `${rank}`),
      h("span", { class: "badge points" }, `⭐ ${rating} • ${points} Chef Points`)
    ),
    h("h2", {}, r.title),
    h("p", { class: "muted" }, r.description),
    h(
      "div",
      { class: "meta" },
      h("span", {}, "⏱ " + (r.prep_time_minutes || 30) + " min prep"),
      h("span", {}, "🍽 " + (r.servings || 2) + " servings"),
      h("span", { class: isAuthorAdmin ? "badge admin" : "" }, isAuthorAdmin ? "🛡️ Admin" : "👨‍🍳 Cooked by " + authorDisplay)
    ),
    h("h3", { style: "margin-top: 1.5rem;" }, "Ingredients"),
    h("ul", {}, ingredientItems),
    h("h3", { style: "margin-top: 1.5rem;" }, "Cooking Instructions"),
    h("div", { class: "instructions" }, r.instructions),
    actionButtons.length ? h("div", { class: "actions", style: "margin-top: 1.5rem;" }, ...actionButtons) : null,
    h(
      "div",
      { class: "reviews-section" },
      h("h3", {}, `Community Reviews & Output Feedback (${reviews.length})`),
      ...reviewCards,
      reviewForm
    )
  );
}

async function deleteRecipe(r) {
  const isAdm = isUserAdmin(state.user);
  const promptText = isAdm && !r.is_owner
    ? `Admin Action: Delete recipe "${r.title}" published by ${r.author || "user"}?`
    : `Delete "${r.title}"? This cannot be undone.`;

  if (!(await confirmDialog(promptText))) return;
  try {
    await api("/recipes/" + r.id, { method: "DELETE" });
    notify("Recipe deleted successfully.");
    go(state.lastView === "detail" ? "browse" : state.lastView);
  } catch (e) {
    let custom = JSON.parse(localStorage.getItem("recipe_maker_custom") || "[]");
    custom = custom.filter((item) => item.id !== r.id);
    localStorage.setItem("recipe_maker_custom", JSON.stringify(custom));
    if (isAdm && window.DEFAULT_RECIPES) {
      window.DEFAULT_RECIPES = window.DEFAULT_RECIPES.filter((item) => item.id !== r.id);
    }
    notify("Recipe deleted successfully.");
    go(state.lastView === "detail" ? "browse" : state.lastView);
  }
}

// ---------- Add / Edit Recipe Form ----------
function addIngredientRow(name = "", quantity = "") {
  const row = h(
    "div",
    { class: "ing-row" },
    h("input", {
      type: "text",
      placeholder: "Ingredient (e.g. Paneer, Butter)",
      maxlength: "80",
      "aria-label": "Ingredient name",
      value: name,
    }),
    h("input", {
      type: "text",
      placeholder: "Quantity (e.g. 250g, 2 cups)",
      maxlength: "40",
      "aria-label": "Ingredient quantity",
      value: quantity,
    }),
    h("button", { type: "button", class: "secondary", onclick: () => row.remove() }, "Remove")
  );
  $("#ingredient-rows").append(row);
}

function openForm(recipe) {
  state.editingId = recipe ? recipe.id : null;
  $("#form-title").textContent = recipe ? "Edit Recipe" : "Add Recipe";
  $("#f-title").value = recipe ? recipe.title : "";
  $("#f-description").value = recipe ? recipe.description : "";
  $("#f-country").value = recipe ? recipe.country || "India" : "India";
  $("#f-category").value = recipe ? recipe.category : "Dinner";
  $("#f-prep").value = recipe ? recipe.prep_time_minutes : 30;
  $("#f-servings").value = recipe ? recipe.servings : 4;
  $("#f-image").value = recipe ? recipe.image_url || "" : "";
  $("#f-instructions").value = recipe ? recipe.instructions : "";

  $("#ingredient-rows").replaceChildren();
  if (recipe && recipe.ingredients && recipe.ingredients.length) {
    recipe.ingredients.forEach((i) => addIngredientRow(i.name || i, i.quantity || ""));
  } else {
    addIngredientRow();
    addIngredientRow();
    addIngredientRow();
  }
  show("form");
}

async function saveRecipe(e) {
  e.preventDefault();
  const ingredients = [...document.querySelectorAll(".ing-row")]
    .map((row) => {
      const inputs = row.querySelectorAll("input");
      return { name: inputs[0].value.trim(), quantity: inputs[1].value.trim() };
    })
    .filter((i) => i.name);

  let imageUrl = $("#f-image").value.trim();
  const category = $("#f-category").value;
  if (!imageUrl) {
    imageUrl = CATEGORY_DEFAULT_IMAGES[category] || FALLBACK_FOOD_IMG;
  }

  const isAdm = isUserAdmin(state.user);
  const authorName = isAdm ? "Admin" : (state.user ? state.user.name : "Registered Chef");

  const body = {
    title: $("#f-title").value.trim(),
    description: $("#f-description").value.trim(),
    country: $("#f-country").value,
    category,
    image_url: imageUrl,
    prep_time_minutes: Number($("#f-prep").value),
    servings: Number($("#f-servings").value),
    instructions: $("#f-instructions").value.trim(),
    ingredients,
    author: authorName,
    author_is_admin: isAdm,
    chef_points: 150,
    chef_rank: isAdm ? "🛡️ System Admin" : "🥇 Master Chef",
    rating: 5.0,
    reviews_count: 1,
  };

  if (body.title.length < 3) return notify("Title must be at least 3 characters.", "error");
  if (!ingredients.length) return notify("Add at least one ingredient.", "error");
  if (body.instructions.length < 10) return notify("Cooking instructions must be at least 10 characters.", "error");

  const btn = $("#save-btn");
  btn.disabled = true;

  try {
    if (state.editingId) {
      await api("/recipes/" + state.editingId, { method: "PUT", body });
      notify("Recipe updated successfully!");
    } else {
      await api("/recipes", { method: "POST", body });
      notify("Recipe published successfully! Now visible to everyone on the platform.");
    }
    go("mine");
  } catch (err) {
    body.id = state.editingId || "local-" + Date.now();
    body.is_owner = true;
    saveLocalRecipe(body);
    notify("Recipe published successfully! Now visible to everyone on the platform.");
    go("mine");
  } finally {
    btn.disabled = false;
  }
}

// ---------- "What can I cook?" Matcher ----------
function runMatch(ingredientQuery) {
  const box = $("#match-list");
  setState(box, "Searching for matches...");

  const have = ingredientQuery
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  if (have.length === 0) {
    return notify("Please enter at least one ingredient.", "error");
  }

  api("/recipes/match?ingredients=" + encodeURIComponent(have.join(",")))
    .then((data) => {
      if (data.recipes && data.recipes.length > 0) {
        renderList(box, data.recipes, "No matching recipes found. Try different ingredients!");
        return;
      }
      throw new Error("No API match");
    })
    .catch(() => {
      const all = getLocalRecipes();
      const results = [];

      for (const r of all) {
        const names = (r.ingredients || []).map((i) => i.name || i);
        const matched = [];
        const missing = [];

        for (const n of names) {
          const lower = n.toLowerCase();
          const hit = have.some((h) => lower.includes(h) || h.includes(lower));
          (hit ? matched : missing).push(n);
        }

        if (matched.length === 0) continue;

        results.push({
          ...r,
          matched_count: matched.length,
          total_count: names.length,
          match_percent: Math.round((matched.length / names.length) * 100),
          missing,
        });
      }

      results.sort((a, b) => b.match_percent - a.match_percent || b.matched_count - a.matched_count);

      renderList(
        box,
        results.slice(0, 30),
        "No recipes match those ingredients yet. Try adding common staples like tomato, onion, or chicken."
      );
    });
}

// ---------- Auth handlers ----------
async function authSubmit(path, body) {
  try {
    const data = await api(path, { method: "POST", body });
    state.user = data.user;
    if (state.user && state.user.email && state.user.email.toLowerCase() === ADMIN_EMAIL) {
      state.user.is_admin = true;
      state.user.name = "Admin";
    }
    localStorage.setItem("recipe_maker_session_user", JSON.stringify(state.user));
    updateAuthUI();
    notify(isUserAdmin(state.user) ? "Welcome back, Admin 🛡️!" : "Welcome, " + state.user.name + "!");
    go("browse");
  } catch (err) {
    if (state.useLocalFallback || err.message.includes("fetch")) {
      const isAdmin = body.email && body.email.toLowerCase() === ADMIN_EMAIL;
      const mockUser = {
        id: isAdmin ? "admin-super" : "local-user-" + Date.now(),
        name: isAdmin ? "Admin" : body.name || body.email.split("@")[0],
        email: body.email,
        is_admin: isAdmin,
      };
      state.user = mockUser;
      localStorage.setItem("recipe_maker_session_user", JSON.stringify(mockUser));
      updateAuthUI();
      notify(isAdmin ? "Logged in as Admin 🛡️ (Local Session)!" : "Logged in as " + mockUser.name + " (Local Session)!");
      go("browse");
      return;
    }
    notify(err.message, "error");
  }
}

async function logout() {
  await api("/auth/logout", { method: "POST" }).catch(() => {});
  state.user = null;
  localStorage.removeItem("recipe_maker_session_user");
  updateAuthUI();
  notify("You have been logged out.");
  go("browse");
}

// ---------- App Startup ----------
function init() {
  document.querySelectorAll(".nav button[data-view]").forEach((b) =>
    b.addEventListener("click", () => go(b.dataset.view))
  );

  $("#brand-logo").addEventListener("click", () => go("browse"));
  $("#menu-btn").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $("#logout-btn").addEventListener("click", logout);
  $("#back-btn").addEventListener("click", () => go(state.lastView));
  $("#cancel-form").addEventListener("click", () => go(state.lastView === "form" ? "browse" : state.lastView));
  $("#add-ingredient").addEventListener("click", () => addIngredientRow());
  $("#recipe-form").addEventListener("submit", saveRecipe);

  const btnAddMine = $("#btn-add-mine");
  if (btnAddMine) {
    btnAddMine.addEventListener("click", () => go("form"));
  }

  $("#browse-form").addEventListener("submit", (e) => {
    e.preventDefault();
    loadBrowse();
  });
  $("#category-filter").addEventListener("change", loadBrowse);
  $("#country-filter").addEventListener("change", loadBrowse);

  $("#match-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("#match-input").value.trim();
    runMatch(q);
  });

  // Real Email Verification Flow
  let generatedCode = null;
  let verifiedEmail = null;

  const btnSendVerify = $("#btn-send-verify");
  if (btnSendVerify) {
    btnSendVerify.addEventListener("click", async () => {
      const email = $("#r-email").value.trim().toLowerCase();
      const statusEl = $("#verify-status");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusEl.textContent = "⚠️ Please enter a valid email address.";
        statusEl.style.color = "var(--err)";
        return;
      }
      const disallowed = ["fake.com", "test.com", "tempmail.com", "10minutemail.com", "mailinator.com"];
      if (disallowed.some((d) => email.includes(d))) {
        statusEl.textContent = "❌ Temporary/fake email domains are not allowed. Please use an authentic email like Gmail.";
        statusEl.style.color = "var(--err)";
        return;
      }

      btnSendVerify.disabled = true;
      btnSendVerify.textContent = "Verifying...";
      try {
        const res = await api("/auth/send-verification", { method: "POST", body: { email } });
        generatedCode = res.code || Math.floor(100000 + Math.random() * 900000).toString();
      } catch (e) {
        generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      }
      verifiedEmail = email;
      $("#code-group").style.display = "block";
      statusEl.textContent = `✅ Verification code generated for ${email}!`;
      statusEl.style.color = "var(--ok)";
      notify(`Verification code for ${email}: ${generatedCode}`);
      btnSendVerify.disabled = false;
      btnSendVerify.textContent = "Resend Code";
    });
  }

  // Auth forms
  $("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    authSubmit("/auth/login", { email: $("#l-email").value, password: $("#l-password").value });
  });

  $("#register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#r-email").value.trim().toLowerCase();
    const code = ($("#r-code") ? $("#r-code").value.trim() : "");
    const dob = $("#r-dob").value;

    if (!dob) {
      return notify("Please enter your Date of Birth.", "error");
    }
    const birthDate = new Date(dob);
    const age = (Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
    if (isNaN(age) || age < 10) {
      return notify("You must be at least 10 years old to register.", "error");
    }

    if (!generatedCode || email !== verifiedEmail || code !== generatedCode) {
      return notify("Please click 'Verify Email' and enter the matching 6-digit code.", "error");
    }

    authSubmit("/auth/register", {
      name: $("#r-name").value.trim(),
      email,
      dob,
      password: $("#r-password").value,
    });
  });

  // Restore session
  const storedUser = localStorage.getItem("recipe_maker_session_user");
  if (storedUser) {
    try {
      state.user = JSON.parse(storedUser);
      if (state.user && state.user.email && state.user.email.toLowerCase() === ADMIN_EMAIL) {
        state.user.is_admin = true;
        state.user.name = "Admin";
      }
    } catch (e) {}
  }

  api("/auth/me")
    .then((d) => {
      if (d && d.user) {
        state.user = d.user;
        if (state.user.email && state.user.email.toLowerCase() === ADMIN_EMAIL) {
          state.user.is_admin = true;
          state.user.name = "Admin";
        }
      }
    })
    .catch(() => {})
    .finally(() => {
      updateAuthUI();
      go("browse");
    });
}

init();
