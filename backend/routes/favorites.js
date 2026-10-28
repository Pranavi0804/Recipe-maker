const express = require("express");
const supabase = require("../supabase");
const { requireAuth } = require("../middleware/auth");
const { isUuid } = require("../utils/validate");

const router = express.Router();
router.use(requireAuth);

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

// GET /api/favorites
router.get("/", async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .select("created_at, recipes(*, users!recipes_user_id_fkey(name), recipe_ingredients(name))")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const recipes = (data || [])
      .filter((f) => f.recipes)
      .map((f) => {
        const r = f.recipes;
        return {
          id: r.id,
          title: r.title,
          description: cleanDescription(r.description),
          category: r.category,
          country: resolveCountry(r),
          image_url: resolveImage(r),
          prep_time_minutes: r.prep_time_minutes,
          servings: r.servings,
          author: r.users ? r.users.name : "Chef",
          ingredient_count: r.recipe_ingredients ? r.recipe_ingredients.length : 0,
          is_favorite: true,
        };
      });

    res.json({ recipes });
  } catch (err) {
    next(err);
  }
});

// POST /api/favorites/:recipeId
router.post("/:recipeId", async (req, res, next) => {
  try {
    if (!isUuid(req.params.recipeId)) return res.status(404).json({ error: "Recipe not found." });
    const { data: r, error: rErr } = await supabase.from("recipes").select("id").eq("id", req.params.recipeId).maybeSingle();
    if (rErr) throw rErr;
    if (!r) return res.status(404).json({ error: "Recipe not found." });

    const { error } = await supabase.from("favorites")
      .upsert({ user_id: req.user.id, recipe_id: req.params.recipeId }, { onConflict: "user_id,recipe_id" });
    if (error) throw error;
    res.status(201).json({ message: "Added to favorites." });
  } catch (err) { next(err); }
});

// DELETE /api/favorites/:recipeId
router.delete("/:recipeId", async (req, res, next) => {
  try {
    if (!isUuid(req.params.recipeId)) return res.status(404).json({ error: "Recipe not found." });
    const { error } = await supabase.from("favorites").delete()
      .eq("user_id", req.user.id).eq("recipe_id", req.params.recipeId);
    if (error) throw error;
    res.json({ message: "Removed from favorites." });
  } catch (err) { next(err); }
});

module.exports = router;
