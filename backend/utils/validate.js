const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Drink"];
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const isUuid = (v) => typeof v === "string" && UUID.test(v);
const str = (v) => (typeof v === "string" ? v.trim() : "");

// Validates a recipe body. Returns { error } or { data }.
function cleanRecipe(body) {
  const b = body || {};
  const title = str(b.title);
  const description = str(b.description);
  const category = str(b.category);
  const country = str(b.country) || "India";
  const image_url = str(b.image_url);
  const instructions = str(b.instructions);
  const prep = Number(b.prep_time_minutes);
  const servings = Number(b.servings);

  if (title.length < 3 || title.length > 100) return { error: "Title must be 3-100 characters." };
  if (description.length > 300) return { error: "Description must be at most 300 characters." };
  if (!CATEGORIES.includes(category)) return { error: "Please choose a valid category." };
  if (country.length > 60) return { error: "Country name must be at most 60 characters." };
  if (image_url.length > 1000) return { error: "Image URL must be at most 1000 characters." };
  if (!Number.isInteger(prep) || prep < 1 || prep > 1440) return { error: "Prep time must be 1-1440 minutes." };
  if (!Number.isInteger(servings) || servings < 1 || servings > 100) return { error: "Servings must be 1-100." };
  if (instructions.length < 10 || instructions.length > 5000) return { error: "Instructions must be 10-5000 characters." };

  if (!Array.isArray(b.ingredients) || b.ingredients.length < 1 || b.ingredients.length > 40) {
    return { error: "Add between 1 and 40 ingredients." };
  }
  const ingredients = [];
  for (const i of b.ingredients) {
    const name = str(i && i.name);
    const quantity = str(i && i.quantity);
    if (name.length < 1 || name.length > 80) return { error: "Each ingredient needs a name (max 80 characters)." };
    if (quantity.length > 40) return { error: "Ingredient quantity is too long (max 40 characters)." };
    ingredients.push({ name, quantity });
  }

  return {
    data: {
      title,
      description,
      category,
      country,
      image_url,
      prep_time_minutes: prep,
      servings,
      instructions,
      ingredients,
    },
  };
}

module.exports = { CATEGORIES, isUuid, cleanRecipe, str };
