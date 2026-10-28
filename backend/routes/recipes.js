const express = require("express");
const supabase = require("../supabase");
const { optionalAuth, requireAuth } = require("../middleware/auth");
const { CATEGORIES, isUuid, cleanRecipe } = require("../utils/validate");

const router = express.Router();

// Explicitly specify the recipes -> users relationship
const USER_RELATION = "users!recipes_user_id_fkey";

// Fallback high-resolution food images
const IMAGE_LIBRARY = {
  "butter chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
  "paneer tikka": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
  "biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
  "chole bhature": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  "rogan josh": "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
  "dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
  "dal makhani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  "palak paneer": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  "pav bhaji": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
  "kathi roll": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  "prawn curry": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
  "pepper chicken": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
  "malai kofta": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
  "samosa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  "carbonara": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
  "margherita": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
  "pizza": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
  "risotto": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
  "lasagna": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
  "cacio e pepe": "https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80",
  "tiramisu": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
  "birria": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  "taco": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  "enchiladas": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
  "guacamole": "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=800&q=80",
  "mirchi bajji": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Andhra_famous_mirchi_bajji.JPG",
  "bajji": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Andhra_famous_mirchi_bajji.JPG",
  "carnitas": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
  "chiles rellenos": "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80",
  "pozole": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  "kung pao": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
  "dumplings": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
  "jiaozi": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
  "char siu": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  "mapo tofu": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  "dan dan": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
  "siu mai": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
  "french onion": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
  "beef bourguignon": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
  "ratatouille": "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=800&q=80",
  "croque monsieur": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  "sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  "frankie": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  "creme brulee": "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
  "fried rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
  "omelette": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
  "soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
  "milkshake": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
  "pudding": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
};

const CATEGORY_DEFAULTS = {
  Breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  Lunch: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  Dinner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  Snack: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
  Dessert: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
  Drink: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
};

function resolveImage(r) {
  if (r.image_url && typeof r.image_url === "string" && r.image_url.trim().startsWith("http")) {
    return r.image_url.trim();
  }
  // Check description tags like [img:URL]
  if (r.description && r.description.includes("[img:")) {
    const match = r.description.match(/\[img:([^\]]+)\]/);
    if (match && match[1]) return match[1].trim();
  }
  const title = (r.title || "").toLowerCase();
  for (const [key, url] of Object.entries(IMAGE_LIBRARY)) {
    if (title.includes(key)) return url;
  }
  return CATEGORY_DEFAULTS[r.category] || CATEGORY_DEFAULTS.Dinner;
}

function resolveCountry(r) {
  if (r.country && typeof r.country === "string" && r.country.trim().length > 0) {
    return r.country.trim();
  }
  if (r.description && r.description.includes("[country:")) {
    const match = r.description.match(/\[country:([^\]]+)\]/);
    if (match && match[1]) return match[1].trim();
  }
  return "India";
}

function cleanDescription(desc) {
  if (!desc) return "";
  return desc.replace(/\[img:[^\]]+\]/g, "").replace(/\[country:[^\]]+\]/g, "").trim();
}

async function favoriteIds(userId) {
  if (!userId) return new Set();
  const { data, error } = await supabase
    .from("favorites")
    .select("recipe_id")
    .eq("user_id", userId);
  if (error) throw error;
  return new Set(data.map((f) => f.recipe_id));
}

const summary = (r, favs) => ({
  id: r.id,
  title: r.title,
  description: cleanDescription(r.description),
  category: r.category,
  country: resolveCountry(r),
  image_url: resolveImage(r),
  prep_time_minutes: r.prep_time_minutes,
  servings: r.servings,
  author: (r.users && (r.users.email === "pranumadab@gmail.com" || r.users.name === "Admin")) ? "Admin" : (r.users ? r.users.name : "Chef"),
  author_is_admin: (r.users && (r.users.email === "pranumadab@gmail.com" || r.users.name === "Admin")),
  ingredient_count: r.recipe_ingredients ? r.recipe_ingredients.length : 0,
  is_favorite: favs.has(r.id),
});

// GET /api/recipes?search=&category=&country=&mine=true
router.get("/", optionalAuth, async (req, res, next) => {
  try {
    let q = supabase
      .from("recipes")
      .select("*, " + USER_RELATION + "(name), recipe_ingredients(name)")
      .order("created_at", { ascending: false })
      .limit(100);

    const search = String(req.query.search || "")
      .replace(/[%_,()]/g, " ")
      .trim()
      .slice(0, 60);

    const category = String(req.query.category || "");
    const country = String(req.query.country || "").trim();

    if (category) {
      if (!CATEGORIES.includes(category)) {
        return res.status(400).json({ error: "Invalid category." });
      }
      q = q.eq("category", category);
    }

    if (search) q = q.ilike("title", "%" + search + "%");

    if (req.query.mine === "true") {
      if (!req.user) {
        return res.status(401).json({ error: "Please log in first." });
      }
      q = q.eq("user_id", req.user.id);
    }

    const { data, error } = await q;
    if (error) throw error;

    const favs = await favoriteIds(req.user && req.user.id);
    let list = (data || []).map((r) => summary(r, favs));

    if (country) {
      list = list.filter((r) => r.country.toLowerCase() === country.toLowerCase());
    }

    res.json({ recipes: list });
  } catch (err) {
    next(err);
  }
});

// GET /api/recipes/match?ingredients=egg,rice,onion
router.get("/match", optionalAuth, async (req, res, next) => {
  try {
    const have = String(req.query.ingredients || "")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 20);

    if (have.length === 0) {
      return res.status(400).json({ error: "Enter at least one ingredient." });
    }

    const { data, error } = await supabase
      .from("recipes")
      .select("*, " + USER_RELATION + "(name), recipe_ingredients(name)")
      .limit(300);

    if (error) throw error;

    const favs = await favoriteIds(req.user && req.user.id);
    const results = [];

    for (const r of data || []) {
      const names = (r.recipe_ingredients || []).map((i) => i.name);
      const matched = [];
      const missing = [];

      for (const n of names) {
        const lower = n.toLowerCase();
        const hit = have.some((h) => lower.includes(h) || h.includes(lower));
        (hit ? matched : missing).push(n);
      }

      if (matched.length === 0) continue;

      results.push({
        ...summary(r, favs),
        matched_count: matched.length,
        total_count: names.length,
        match_percent: names.length ? Math.round((matched.length / names.length) * 100) : 0,
        missing,
      });
    }

    results.sort((a, b) => b.match_percent - a.match_percent || b.matched_count - a.matched_count);

    res.json({ recipes: results.slice(0, 30) });
  } catch (err) {
    next(err);
  }
});

// GET /api/recipes/:id
router.get("/:id", optionalAuth, async (req, res, next) => {
  try {
    if (!isUuid(req.params.id)) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    const { data: r, error } = await supabase
      .from("recipes")
      .select("*, " + USER_RELATION + "(name), recipe_ingredients(id,name,quantity)")
      .eq("id", req.params.id)
      .maybeSingle();

    if (error) throw error;
    if (!r) return res.status(404).json({ error: "Recipe not found." });

    const favs = await favoriteIds(req.user && req.user.id);

    res.json({
      recipe: {
        id: r.id,
        title: r.title,
        description: cleanDescription(r.description),
        category: r.category,
        country: resolveCountry(r),
        image_url: resolveImage(r),
        prep_time_minutes: r.prep_time_minutes,
        servings: r.servings,
        instructions: r.instructions,
        author: r.users ? r.users.name : "Chef",
        ingredients: (r.recipe_ingredients || []).map((i) => ({
          name: i.name,
          quantity: i.quantity,
        })),
        is_favorite: favs.has(r.id),
        is_owner: !!req.user && req.user.id === r.user_id,
      },
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/recipes
router.post("/", requireAuth, async (req, res, next) => {
  try {
    const { error: vErr, data: d } = cleanRecipe(req.body);
    if (vErr) return res.status(400).json({ error: vErr });

    // Try inserting with country and image_url first
    let insertData = {
      user_id: req.user.id,
      title: d.title,
      description: d.description,
      category: d.category,
      country: d.country,
      image_url: d.image_url,
      prep_time_minutes: d.prep_time_minutes,
      servings: d.servings,
      instructions: d.instructions,
    };

    let { data: recipe, error } = await supabase
      .from("recipes")
      .insert(insertData)
      .select("id")
      .single();

    // If database doesn't have country/image_url columns yet, embed them gracefully in description
    if (error && (error.message.includes("column") || error.code === "PGRST204")) {
      let metaDesc = d.description;
      if (d.country) metaDesc += ` [country:${d.country}]`;
      if (d.image_url) metaDesc += ` [img:${d.image_url}]`;

      insertData = {
        user_id: req.user.id,
        title: d.title,
        description: metaDesc.slice(0, 300),
        category: d.category,
        prep_time_minutes: d.prep_time_minutes,
        servings: d.servings,
        instructions: d.instructions,
      };

      const fallbackRes = await supabase
        .from("recipes")
        .insert(insertData)
        .select("id")
        .single();

      if (fallbackRes.error) throw fallbackRes.error;
      recipe = fallbackRes.data;
      error = null;
    } else if (error) {
      throw error;
    }

    const rows = d.ingredients.map((i) => ({
      recipe_id: recipe.id,
      name: i.name,
      quantity: i.quantity,
    }));

    const { error: iErr } = await supabase.from("recipe_ingredients").insert(rows);

    if (iErr) {
      await supabase.from("recipes").delete().eq("id", recipe.id);
      throw iErr;
    }

    res.status(201).json({ id: recipe.id });
  } catch (err) {
    next(err);
  }
});

// PUT /api/recipes/:id
router.put("/:id", requireAuth, async (req, res, next) => {
  try {
    if (!isUuid(req.params.id)) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    const { data: existing, error: fErr } = await supabase
      .from("recipes")
      .select("user_id")
      .eq("id", req.params.id)
      .maybeSingle();

    if (fErr) throw fErr;
    if (!existing) return res.status(404).json({ error: "Recipe not found." });

    if (existing.user_id !== req.user.id) {
      return res.status(403).json({ error: "You can only edit your own recipes." });
    }

    const { error: vErr, data: d } = cleanRecipe(req.body);
    if (vErr) return res.status(400).json({ error: vErr });

    let updateData = {
      title: d.title,
      description: d.description,
      category: d.category,
      country: d.country,
      image_url: d.image_url,
      prep_time_minutes: d.prep_time_minutes,
      servings: d.servings,
      instructions: d.instructions,
    };

    let { error } = await supabase
      .from("recipes")
      .update(updateData)
      .eq("id", req.params.id);

    if (error && (error.message.includes("column") || error.code === "PGRST204")) {
      let metaDesc = d.description;
      if (d.country) metaDesc += ` [country:${d.country}]`;
      if (d.image_url) metaDesc += ` [img:${d.image_url}]`;

      updateData = {
        title: d.title,
        description: metaDesc.slice(0, 300),
        category: d.category,
        prep_time_minutes: d.prep_time_minutes,
        servings: d.servings,
        instructions: d.instructions,
      };

      const fallbackUpdate = await supabase
        .from("recipes")
        .update(updateData)
        .eq("id", req.params.id);

      if (fallbackUpdate.error) throw fallbackUpdate.error;
      error = null;
    } else if (error) {
      throw error;
    }

    await supabase.from("recipe_ingredients").delete().eq("recipe_id", req.params.id);

    const rows = d.ingredients.map((i) => ({
      recipe_id: req.params.id,
      name: i.name,
      quantity: i.quantity,
    }));

    const { error: iErr } = await supabase.from("recipe_ingredients").insert(rows);
    if (iErr) throw iErr;

    res.json({ message: "Recipe updated." });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/recipes/:id
router.delete("/:id", requireAuth, async (req, res, next) => {
  try {
    if (!isUuid(req.params.id)) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    const { data: existing, error: fErr } = await supabase
      .from("recipes")
      .select("user_id")
      .eq("id", req.params.id)
      .maybeSingle();

    if (fErr) throw fErr;
    if (!existing) return res.status(404).json({ error: "Recipe not found." });

    const isAdmin = req.user && (req.user.email === "pranumadab@gmail.com" || req.user.is_admin);
    if (existing.user_id !== req.user.id && !isAdmin) {
      return res.status(403).json({ error: "You can only delete your own recipes." });
    }

    const { error } = await supabase.from("recipes").delete().eq("id", req.params.id);
    if (error) throw error;

    res.json({ message: "Recipe deleted." });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
