// Master Seed Script for Recipe Maker Database
// 72 Researched Authentic Dishes: 🇮🇳 India (54 Regional Specialties & Drinks), 🇮🇹 Italy (6), 🇲🇽 Mexico (6), 🇫🇷 France (5), 🇨🇳 Street-Style Chinese Noodles (1)
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const bcrypt = require("bcryptjs");
const supabase = require("../supabase");

// Load master catalog from seed-recipes.js
global.window = {};
require("../../frontend/seed-recipes.js");

const RECIPES_SEED = (global.window.DEFAULT_RECIPES || []).map((r) => ({
  title: r.title,
  description: r.description,
  category: r.category,
  country: r.country,
  prep: r.prep_time_minutes || 30,
  servings: r.servings || 4,
  image_url: r.image_url,
  instructions: r.instructions,
  ingredients: (r.ingredients || []).map((i) => (Array.isArray(i) ? i : [i.name, i.quantity || ""])),
}));

(async () => {
  console.log("Starting database seeding for Recipe Maker...");

  // Verify demo user exists or create one
  let { data: user } = await supabase.from("users").select("id").eq("email", "demo@recipemaker.com").maybeSingle();
  if (!user) {
    const password_hash = await bcrypt.hash("Demo@1234", 10);
    const r = await supabase.from("users").insert({
      name: "Master Chef",
      email: "demo@recipemaker.com",
      password_hash,
    }).select("id").single();
    if (r.error) {
      console.error("Failed to create demo user:", r.error.message);
      process.exit(1);
    }
    user = r.data;
  }

  // Check existing titles to avoid duplicate insertions
  const { data: existing } = await supabase.from("recipes").select("title");
  const existingTitles = new Set((existing || []).map((e) => e.title.toLowerCase().trim()));

  let insertedCount = 0;
  for (const item of RECIPES_SEED) {
    if (existingTitles.has(item.title.toLowerCase().trim())) {
      continue;
    }

    let insertObj = {
      user_id: user.id,
      title: item.title,
      description: item.description,
      category: item.category,
      country: item.country,
      image_url: item.image_url,
      prep_time_minutes: item.prep,
      servings: item.servings,
      instructions: item.instructions,
    };

    let { data: rec, error } = await supabase.from("recipes").insert(insertObj).select("id").maybeSingle();

    if (error && (error.message.includes("column") || error.code === "PGRST204")) {
      let metaDesc = item.description;
      if (item.country) metaDesc += ` [country:${item.country}]`;
      if (item.image_url) metaDesc += ` [img:${item.image_url}]`;

      insertObj = {
        user_id: user.id,
        title: item.title,
        description: metaDesc.slice(0, 300),
        category: item.category,
        prep_time_minutes: item.prep,
        servings: item.servings,
        instructions: item.instructions,
      };

      const fallback = await supabase.from("recipes").insert(insertObj).select("id").single();
      if (fallback.error) {
        console.error("Error inserting", item.title, fallback.error.message);
        continue;
      }
      rec = fallback.data;
    } else if (error) {
      console.error("Error inserting", item.title, error.message);
      continue;
    }

    if (rec && rec.id) {
      await supabase.from("recipe_ingredients").insert(
        item.ingredients.map((ing) => {
          const name = Array.isArray(ing) ? ing[0] : (ing.name || "");
          const quantity = Array.isArray(ing) ? ing[1] : (ing.quantity || "");
          return { recipe_id: rec.id, name, quantity };
        })
      );
      insertedCount++;
    }
  }

  console.log(`Seeding complete! Added ${insertedCount} new recipes. Total in catalog: ${insertedCount + existingTitles.size}`);
  console.log("Demo user: demo@recipemaker.com / Demo@1234");
})();
