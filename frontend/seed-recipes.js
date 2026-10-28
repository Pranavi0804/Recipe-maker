// Master Recipe Database for Recipe Maker
// 72 Researched Authentic Dishes: 🇮🇳 India (54 Regional Specialties & Drinks), 🇮🇹 Italy (6), 🇲🇽 Mexico (6), 🇫🇷 France (5), 🇨🇳 Street-Style Chinese Noodles (1)
window.DEFAULT_RECIPES = [
  // ==========================================================================
  // INDIA 🇮🇳 — BREAKFAST (10 Authentic Regional Classics)
  // ==========================================================================
  {
    id: "seed-ind-06",
    title: "South Indian Masala Dosa",
    description: "Crispy golden fermented rice-lentil crepe wrapped around a fragrant spiced turmeric potato filling, served with coconut chutney and sambar.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 3,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 38,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat oil in a pan; crackle mustard seeds, curry leaves, and green chilies.\n2. Add sliced onions and sauté until translucent; add turmeric and coarsely mashed boiled potatoes with salt.\n3. Heat a cast-iron tawa until screaming hot; pour a ladle of batter and swirl into a paper-thin circle.\n4. Drizzle golden ghee around edges until crisp and golden brown.\n5. Spoon potato filling in the center, fold snugly, and serve hot with fresh coconut chutney.",
    ingredients: [
      { name: "Fermented Dosa batter", quantity: "3 cups" },
      { name: "Boiled potatoes", quantity: "3 mashed" },
      { name: "Onion", quantity: "1 sliced" },
      { name: "Mustard seeds", quantity: "1 tsp" },
      { name: "Curry leaves", quantity: "10 leaves" },
      { name: "Turmeric powder", quantity: "1/2 tsp" },
      { name: "Green chilies", quantity: "2 slit" },
      { name: "Desi Ghee", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Kavitha R.", rating: 5, date: "Yesterday", comment: "Tried this for breakfast! The batter spread paper-thin and potato filling had the exact Saravana Bhavan taste." },
      { author: "Suresh P.", rating: 5, date: "3 days ago", comment: "The ghee roasted crust was shatteringly crisp. Output was 10/10!" }
    ]
  },
  {
    id: "seed-ind-20",
    title: "Andhra Pesarattu with Upma (MLA Style)",
    description: "Traditional Andhra whole green gram dosa spread thin on a tawa, filled with soft ginger rava upma and served with fiery allam (ginger) pachadi.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 29,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grind soaked whole green moong dal with green chilies, cumin seeds, and fresh ginger into a smooth batter.\n2. Prepare a soft, savory semolina (rava) upma with mustard seeds and curry leaves.\n3. Pour a ladle of moong batter on a hot tawa and spread outwards.\n4. Top generously with finely chopped raw onions, green chilies, and cumin seeds; drizzle oil around.\n5. Place a scoop of warm upma in the center, fold in half, and serve hot with spicy ginger chutney.",
    ingredients: [
      { name: "Whole green gram (Moong)", quantity: "2 cups soaked" },
      { name: "Fresh Ginger", quantity: "2 inch piece" },
      { name: "Green chilies", quantity: "4" },
      { name: "Cumin seeds", quantity: "1.5 tsp" },
      { name: "Semolina (Rava Upma)", quantity: "1 cup cooked" },
      { name: "Onions", quantity: "1 finely chopped" },
      { name: "Oil or Ghee", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Venkat Rao", rating: 5, date: "2 days ago", comment: "The combination of hot pesarattu and ginger chutney is heavenly. Authentic Vijayawada style output!" }
    ]
  },
  {
    id: "seed-ind-21",
    title: "Crispy South Indian Medu Vada with Sambar",
    description: "Fluffy, golden, shatteringly crisp black lentil fritters with crushed black pepper, fresh coconut, and curry leaves, soaked in hot lentil sambar.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 32,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grind soaked urad dal with minimal water into an airy, fluffy batter using a grinder or mixer.\n2. Beat vigorously with hands for 3 minutes to incorporate air bubbles.\n3. Fold in cracked black peppercorns, fresh coconut bits, chopped ginger, and curry leaves.\n4. Wet hands, shape batter into a donut ring with a hole in the center, and drop into hot oil.\n5. Deep-fry on medium flame until evenly deep golden and crispy. Dip in piping hot sambar.",
    ingredients: [
      { name: "Whole white urad dal", quantity: "2 cups soaked" },
      { name: "Black peppercorns", quantity: "1 tbsp cracked" },
      { name: "Fresh coconut bits", quantity: "2 tbsp" },
      { name: "Ginger", quantity: "1 tbsp minced" },
      { name: "Curry leaves", quantity: "2 sprigs" },
      { name: "Oil", quantity: "for deep frying" },
      { name: "Hot Lentil Sambar", quantity: "2 cups for serving" }
    ],
    reviews: [
      { author: "Ananya M.", rating: 5, date: "4 days ago", comment: "Airing the batter made the vadas so light and crunchy outside, soft inside. Best breakfast recipe!" }
    ]
  },
  {
    id: "seed-ind-22",
    title: "Soft Steamed Thatte Idli with Gunpowder Podi",
    description: "Plate-sized, pillow-soft steamed fermented rice and lentil cakes drenched in melted desi ghee and fiery roasted lentil podi.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 25,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Ferment idli batter (parboiled rice and urad dal) overnight for 12 hours until double in volume.\n2. Grease traditional flat circular thatte plates with ghee.\n3. Pour batter gently without deflating air pockets.\n4. Steam in an idli steamer on high heat for 10-12 minutes.\n5. Demold gently with a wet knife; smother with pure melted desi ghee and spiced idli podi.",
    ingredients: [
      { name: "Idli batter", quantity: "4 cups fermented" },
      { name: "Desi Ghee", quantity: "4 tbsp melted" },
      { name: "Idli Podi (Gunpowder)", quantity: "3 tbsp" },
      { name: "Fresh Coconut Chutney", quantity: "1 cup" }
    ],
    reviews: [
      { author: "Deepak S.", rating: 5, date: "5 days ago", comment: "Turned out super soft and spongy like Bidadi Thatte Idli. The ghee podi topping was amazing." }
    ]
  },
  {
    id: "seed-ind-23",
    title: "Kerala Malabar Appam with Coconut Veg Stew",
    description: "Lacy, bowl-shaped fermented rice pancakes with a pillowy soft center, paired with a mildly spiced coconut milk vegetable stew.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 22,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grind raw rice with coconut water, yeast, and sugar; ferment for 8 hours into a light, bubbly batter.\n2. Simmer diced potatoes, carrots, and beans in thin coconut milk with ginger and whole spices.\n3. Pour thick coconut milk into the stew, temper with curry leaves and coconut oil, then turn off heat.\n4. Heat an appachatti pan, pour a ladle of batter, swirl once, cover and cook 2 minutes until edges are crisp and lacy.\n5. Serve hot appams with warm fragrant coconut stew.",
    ingredients: [
      { name: "Raw rice (soaked)", quantity: "2 cups" },
      { name: "Thick Coconut milk", quantity: "1.5 cups" },
      { name: "Carrots & Potatoes", quantity: "2 cups diced" },
      { name: "Green chilies & Ginger", quantity: "2 tbsp sliced" },
      { name: "Whole spices (clove, cinnamon)", quantity: "1 set" },
      { name: "Coconut oil", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Mathew V.", rating: 5, date: "1 week ago", comment: "The crispy lacy edges with soft cloud center were spot-on Kerala restaurant style!" }
    ]
  },
  {
    id: "seed-ind-24",
    title: "Crispy Hotel Style Rava Onion Dosa",
    description: "Instant netted semolina and rice flour crepe laced with chopped onions, crushed black pepper, ginger, and green chilies.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 15,
    servings: 3,
    author: "Executive Chef",
    rating: 4.7,
    reviews_count: 21,
    chef_points: 150,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mix semolina (rava), rice flour, all-purpose flour, water, and buttermilk into a thin, watery batter.\n2. Stir in crushed black pepper, cumin seeds, minced ginger, and green chilies; rest 15 minutes.\n3. Heat a tawa screaming hot; scatter finely chopped onions across the surface.\n4. Splash the watery batter from the outside inward, forming a lacy, netted sheet.\n5. Drizzle oil in holes and cook on medium flame without flipping until golden and crackling crisp.",
    ingredients: [
      { name: "Semolina (Rava)", quantity: "1 cup" },
      { name: "Rice flour", quantity: "1 cup" },
      { name: "Onion", quantity: "1 finely chopped" },
      { name: "Cumin seeds & Black pepper", quantity: "1 tsp each" },
      { name: "Green chilies", quantity: "2 minced" },
      { name: "Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Nikhil T.", rating: 5, date: "3 days ago", comment: "So quick and shatteringly crisp! The onion bits caramelized beautifully on the cast iron pan." }
    ]
  },
  {
    id: "seed-ind-25",
    title: "Andhra Punugulu with Spicy Allam Chutney",
    description: "Crunchy golden bite-sized dumplings made from fermented batter, onions, and cumin, served hot with tangy tomato-ginger chutney.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 34,
    chef_points: 160,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Take thick leftover idli or dosa batter; fold in a spoon of rice flour for crispiness.\n2. Add finely chopped onions, green chilies, grated ginger, cumin seeds, and fresh curry leaves.\n3. Heat oil in a kadai for deep frying.\n4. Drop small coin-sized balls of batter into medium-hot oil.\n5. Fry evenly until deep golden brown and crunchy. Drain and serve immediately with hot chutney.",
    ingredients: [
      { name: "Idli or Dosa batter", quantity: "2 cups thick" },
      { name: "Rice flour", quantity: "3 tbsp" },
      { name: "Onion", quantity: "1 finely chopped" },
      { name: "Green chilies", quantity: "2 minced" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Oil", quantity: "for frying" }
    ],
    reviews: [
      { author: "Harika B.", rating: 5, date: "Yesterday", comment: "Tasted exactly like the famous street-side punugulu in Vijayawada! Super crunchy outside." }
    ]
  },
  {
    id: "seed-ind-26",
    title: "Poori Masala with Halwai Style Potato Bhaji",
    description: "Puffed golden whole wheat fried breads served with mildly spiced, comforting turmeric potato and onion curry.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 27,
    chef_points: 155,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Knead a tight, stiff dough using whole wheat flour, pinch of salt, and warm water; rest 15 minutes.\n2. For bhaji, sauté mustard seeds, ginger, green chilies, and onions in oil; add turmeric, salt, and crushed boiled potatoes with water.\n3. Simmer bhaji for 6 minutes until a rich, semi-thick gravy forms.\n4. Roll dough into small discs without flour (use oil drops).\n5. Slide into hot smoking oil and press gently with a slotted ladle until it puffs into a round balloon.",
    ingredients: [
      { name: "Whole wheat flour (Atta)", quantity: "2 cups" },
      { name: "Boiled potatoes", quantity: "4 coarsely crushed" },
      { name: "Onion", quantity: "2 sliced" },
      { name: "Ginger & Green chilies", quantity: "1 tbsp minced" },
      { name: "Mustard seeds & Turmeric", quantity: "1 tsp each" },
      { name: "Oil", quantity: "for deep frying" }
    ],
    reviews: [
      { author: "Rohan D.", rating: 5, date: "4 days ago", comment: "Every poori puffed up like a balloon and stayed crisp! The potato bhaji was pure comfort." }
    ]
  },
  {
    id: "seed-ind-27",
    title: "Amritsari Aloo Kulcha & Stuffed Paratha",
    description: "Crispy, multi-layered tandoori flatbread stuffed with spiced crushed potatoes, pomegranate seeds, and fresh coriander, served with white butter.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 3,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 36,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mash boiled potatoes with chopped onions, green chilies, carom seeds (ajwain), anardana (pomegranate powder), and garam masala.\n2. Knead a soft pliable dough; roll into a small circle, stuff generously with spiced potato, and seal tightly.\n3. Roll out gently with light pressure to prevent tearing.\n4. Cook on a hot tawa with generous dollops of desi ghee, pressing edges until blistered and golden.\n5. Crush gently with hands to release crispy flaky layers; crown with white butter.",
    ingredients: [
      { name: "Wheat flour", quantity: "2 cups" },
      { name: "Boiled potatoes", quantity: "3 mashed" },
      { name: "Anardana (dry pomegranate)", quantity: "1 tsp" },
      { name: "Carom seeds (Ajwain)", quantity: "1/2 tsp" },
      { name: "Desi Ghee or Butter", quantity: "4 tbsp" },
      { name: "Green chilies & Cilantro", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Gurpreet S.", rating: 5, date: "2 days ago", comment: "Flaky and packed with Punjabi dhaba flavors. The anardana seed tang made all the difference!" }
    ]
  },
  {
    id: "seed-ind-28",
    title: "Maharashtra Kanda Poha with Peanuts",
    description: "Light, fluffy flattened rice tossed with golden caramelized onions, roasted crunchy peanuts, mustard seeds, turmeric, and fresh lemon juice.",
    category: "Breakfast",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 15,
    servings: 3,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 24,
    chef_points: 145,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Rinse thick poha (flattened rice) in a colander under running water for 30 seconds; drain and rest 5 minutes.\n2. Heat oil in a pan; fry raw peanuts until crunchy and set aside.\n3. In the same oil, crackle mustard seeds, curry leaves, and green chilies.\n4. Sauté diced onions until translucent; add turmeric powder and salt.\n5. Gently toss in drained poha and roasted peanuts. Cover on low flame for 2 minutes; finish with fresh coriander and lemon juice.",
    ingredients: [
      { name: "Thick Poha (flattened rice)", quantity: "2.5 cups" },
      { name: "Raw peanuts", quantity: "1/3 cup" },
      { name: "Onions", quantity: "2 finely chopped" },
      { name: "Mustard seeds & Turmeric", quantity: "1 tsp each" },
      { name: "Fresh Curry leaves", quantity: "12 leaves" },
      { name: "Fresh Lemon juice", quantity: "1.5 tbsp" }
    ],
    reviews: [
      { author: "Sneha P.", rating: 5, date: "5 days ago", comment: "Super light and fluffy! The crunchy peanuts and lemon juice balance it perfectly." }
    ]
  },

  // ==========================================================================
  // INDIA 🇮🇳 — SNACKS (10 Famous Authentic Regional Snacks)
  // ==========================================================================
  {
    id: "seed-ind-09",
    title: "Mumbai Chowpatty Pav Bhaji",
    description: "Buttery, spiced mashed vegetable medley of potatoes, cauliflower, and peas, served steaming hot with butter-toasted pav buns.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 42,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil potatoes, peas, and cauliflower until tender; mash thoroughly.\n2. Melt butter on a wide tawa; sauté onions, garlic, and diced capsicum.\n3. Add chopped tomatoes, red chili powder, and pav bhaji masala; cook until pulpy.\n4. Combine mashed vegetables with tomato masala, adding warm water and mashing vigorously.\n5. Slit pav buns, toast on the tawa with generous butter, and serve with lemon wedges and diced raw onions.",
    ingredients: [
      { name: "Potatoes", quantity: "3 boiled" },
      { name: "Green peas & Cauliflower", quantity: "1 cup mixed" },
      { name: "Capsicum", quantity: "1 finely chopped" },
      { name: "Pav bhaji masala", quantity: "2.5 tbsp" },
      { name: "Unsalted Butter", quantity: "5 tbsp" },
      { name: "Pav buns", quantity: "8" }
    ],
    reviews: [
      { author: "Aakash V.", rating: 5, date: "Yesterday", comment: "Tastes just like Juhu Beach pav bhaji! The butter-toasted pav was incredible." }
    ]
  },
  {
    id: "seed-ind-10",
    title: "Kolkata Nizam's Chicken Kathi Roll",
    description: "Juicy, spiced pan-seared chicken kebab chunks rolled inside a flaky egg-coated layered paratha with slivered red onions and chaat masala.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 2,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 31,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken thigh chunks in yogurt, ginger-garlic, and tandoori spices; sear in a hot skillet.\n2. Cook layered paratha on a tawa; pour a beaten egg directly on the tawa and press paratha over it to bind.\n3. Flip and cook until golden brown.\n4. Arrange seared chicken skewers down the center of the egg-layered paratha.\n5. Top with sliced red onions, green chilies, mint chutney, and fresh lime juice; roll tightly in paper.",
    ingredients: [
      { name: "Chicken thigh chunks", quantity: "350g" },
      { name: "Flaky Parathas", quantity: "2" },
      { name: "Eggs", quantity: "2 beaten" },
      { name: "Red onion", quantity: "1 thinly sliced" },
      { name: "Mint chutney & Chaat masala", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Subhash C.", rating: 5, date: "3 days ago", comment: "The egg coating on the paratha and the spiced chicken filling are authentic Park Street style!" }
    ]
  },
  {
    id: "seed-ind-14",
    title: "Dilliwali Samosa Chaat",
    description: "Crushed piping hot samosas drowned in spiced chickpea curry, whipped sweet yogurt, tangy tamarind chutney, and crisp sev.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 3,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 37,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Re-crisp freshly fried samosas in oven or pan; crush two onto each serving plate.\n2. Ladle steaming hot chickpea curry (chole) generously over the broken samosas.\n3. Drizzle creamy sweet yogurt, spicy mint chutney, and date-tamarind chutney.\n4. Scatter chopped red onions, fresh coriander leaves, and roasted cumin powder.\n5. Top with a mountain of crispy gram flour sev and serve immediately.",
    ingredients: [
      { name: "Crispy Samosas", quantity: "4" },
      { name: "Spiced Chickpea curry (Chole)", quantity: "1.5 cups" },
      { name: "Sweet whisked yogurt", quantity: "1/2 cup" },
      { name: "Mint & Tamarind chutneys", quantity: "3 tbsp each" },
      { name: "Crunchy Sev", quantity: "1/2 cup" }
    ],
    reviews: [
      { author: "Pooja K.", rating: 5, date: "1 day ago", comment: "Chatpata perfection! Tangy, sweet, spicy, and crunchy all in one bite." }
    ]
  },
  {
    id: "seed-ind-15",
    title: "Telangana Sarva Pindi (Thapala Chekka)",
    description: "Authentic Telangana spiced crispy rice flour flatbread studded with soaked chana dal, roasted peanuts, white sesame seeds, and fresh curry leaves.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 35,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Soak chana dal in warm water for 30 minutes; coarsely crush roasted peanuts.\n2. In a wide bowl, mix rice flour, soaked chana dal, crushed peanuts, sesame seeds, chopped green chilies, curry leaves, and ginger-garlic paste into a soft dough.\n3. Grease a deep heavy bottom pan (sarva pindi kadai) with oil.\n4. Press dough evenly along the bottom and sides; poke multiple holes across the surface.\n5. Pour small drops of oil into each hole; cover and cook on medium flame for 12-15 minutes until bottom is deep golden and crackling crisp.",
    ingredients: [
      { name: "Rice flour", quantity: "2 cups" },
      { name: "Chana dal", quantity: "3 tbsp soaked" },
      { name: "Roasted peanuts", quantity: "1/4 cup crushed" },
      { name: "White sesame seeds", quantity: "2 tbsp" },
      { name: "Green chilies", quantity: "3 chopped" },
      { name: "Curry leaves", quantity: "2 sprigs" },
      { name: "Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Srinivas G.", rating: 5, date: "2 days ago", comment: "The crunch of peanuts and sesame with the crispy rice base is traditional Warangal style! Loved it." }
    ]
  },
  {
    id: "seed-ind-29",
    title: "Andhra Cut Mirchi Bajji with Stuffed Masala",
    description: "Large bhavnagri chilies stuffed with tangy ajwain-tamarind paste, double-fried in spiced gram flour batter and tossed with onions and lemon.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 28,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Slit large mild green chilies down the center; deseed and stuff with roasted carom seed and tamarind powder.\n2. Whisk gram flour (besan), rice flour, carom seeds, baking soda, and water into a smooth, thick batter.\n3. Dip stuffed chilies in batter and deep fry until 80% cooked; remove and cool slightly.\n4. Cut each fried chili into 1-inch bite pieces.\n5. Flash-fry cut pieces in smoking hot oil until crunchy; toss with chopped onions, chat masala, and fresh lemon juice.",
    ingredients: [
      { name: "Large mild green chilies (Mirchi)", quantity: "8" },
      { name: "Gram flour (Besan)", quantity: "1.5 cups" },
      { name: "Rice flour", quantity: "2 tbsp" },
      { name: "Ajwain (Carom seeds)", quantity: "1 tsp" },
      { name: "Onion & Lemon", quantity: "for garnish" },
      { name: "Oil", quantity: "for deep frying" }
    ],
    reviews: [
      { author: "Kalyan C.", rating: 5, date: "Yesterday", comment: "Double frying makes it insanely crispy! The ajwain tamarind stuffing cut right through the chili heat." }
    ]
  },
  {
    id: "seed-ind-30",
    title: "Telangana Traditional Sakinalu",
    description: "Festival specialty of Telangana: crispy concentric spiral rings crafted from freshly milled raw rice flour, sesame seeds, and carom seeds.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 6,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 22,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Soak raw rice for 3 hours, drain, and grind into a moist, fine flour.\n2. Mix with plenty of white sesame seeds, carom seeds (vaamu), and salt.\n3. Add small drops of water to bind into a soft, malleable dough.\n4. On a dry cotton cloth, pipe or roll dough with fingertips into concentric circular spirals.\n5. Deep-fry spirals in hot oil on medium flame until light golden and crunching crisp.",
    ingredients: [
      { name: "Raw rice flour (moist milled)", quantity: "3 cups" },
      { name: "White sesame seeds (Nuvvulu)", quantity: "1/2 cup" },
      { name: "Ajwain (Vaamu)", quantity: "1.5 tbsp" },
      { name: "Salt", quantity: "1.5 tsp" },
      { name: "Oil", quantity: "for deep frying" }
    ],
    reviews: [
      { author: "Pranavi M.", rating: 5, date: "3 days ago", comment: "Reminded me of Sankranti back home in Karimnagar! Crisp, fragrant with ajwain, and perfectly light." }
    ]
  },
  {
    id: "seed-ind-31",
    title: "Andhra Pappu Chekkalu (Spiced Rice Crackers)",
    description: "Crispy, savory golden discs made from rice flour, soaked chana dal, crushed green chilies, ginger, and cumin, deep-fried to a brittle crunch.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 5,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 20,
    chef_points: 160,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    instructions: "1. In a bowl, mix rice flour, soaked chana dal, crushed green chili-ginger paste, cumin, and hot melted ghee.\n2. Add warm water gradually to form a non-sticky pliable dough.\n3. Divide into marble-sized balls and press thin on a greased plastic sheet or poori press.\n4. Prick lightly with a fork so they do not puff.\n5. Fry in hot oil on medium flame until bubbles cease and chekkalu turn light golden.",
    ingredients: [
      { name: "Rice flour", quantity: "2 cups" },
      { name: "Chana dal", quantity: "3 tbsp soaked" },
      { name: "Hot Desi Ghee", quantity: "2 tbsp" },
      { name: "Green chili & Ginger paste", quantity: "1.5 tbsp" },
      { name: "Curry leaves", quantity: "finely chopped" },
      { name: "Oil", quantity: "for frying" }
    ],
    reviews: [
      { author: "Madhav K.", rating: 5, date: "5 days ago", comment: "So brittle and flavorful! Great tea-time snack that stores well for weeks." }
    ]
  },
  {
    id: "seed-ind-32",
    title: "Crispy Onion Pakoda (Kanda Bhaji)",
    description: "Tea-stall style golden fritters made with thinly sliced onions barely coated in seasoned besan and rice flour, fried with curry leaves and green chilies.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 15,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 30,
    chef_points: 160,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Thinly slice onions lengthwise; toss with salt, red chili powder, carom seeds, and crushed green chilies.\n2. Squeeze with hands for 2 minutes until onions release natural moisture.\n3. Sprinkle besan and rice flour just enough to coat strands (do NOT add extra water).\n4. Scatter loose clusters of coated onions into hot oil.\n5. Fry until crisp, golden brown, and crunchy throughout. Drain and toss with fried green chilies.",
    ingredients: [
      { name: "Yellow onions", quantity: "3 large sliced" },
      { name: "Gram flour (Besan)", quantity: "3/4 cup" },
      { name: "Rice flour", quantity: "2 tbsp" },
      { name: "Carom seeds & Chili powder", quantity: "1 tsp each" },
      { name: "Fresh Curry leaves", quantity: "2 sprigs" },
      { name: "Oil", quantity: "for deep frying" }
    ],
    reviews: [
      { author: "Vikas M.", rating: 5, date: "4 days ago", comment: "The zero-water technique worked like magic. Super crispy onions without turning soggy!" }
    ]
  },
  {
    id: "seed-ind-33",
    title: "Golden Mysore Bonda with Coconut Chutney",
    description: "Fluffy spherical fritters with a crisp exterior and airy pillowy center, flavored with crushed black pepper, ginger, cumin, and coconut bits.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.7,
    reviews_count: 26,
    chef_points: 155,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk sour curd (yogurt) with salt and baking soda until frothy.\n2. Fold in all-purpose flour and rice flour; beat vigorously for 4 minutes to incorporate air.\n3. Mix in cumin seeds, cracked black pepper, chopped ginger, and coconut bits.\n4. Wet fingertips, scoop round dollops of batter, and drop into medium-hot oil.\n5. Gently stir until bondas puff into spherical golden balls. Serve with spicy red coconut chutney.",
    ingredients: [
      { name: "All-purpose flour (Maida)", quantity: "1.5 cups" },
      { name: "Rice flour", quantity: "2 tbsp" },
      { name: "Sour yogurt (Curd)", quantity: "3/4 cup" },
      { name: "Cumin seeds & Ginger", quantity: "1 tbsp each" },
      { name: "Baking soda", quantity: "1/4 tsp" },
      { name: "Oil", quantity: "for frying" }
    ],
    reviews: [
      { author: "Latha R.", rating: 5, date: "6 days ago", comment: "Pillowy and light as air inside! Tastes just like the hot tiffin centers in Bangalore." }
    ]
  },
  {
    id: "seed-ind-34",
    title: "Karnataka Maddur Vada with Onion & Semolina",
    description: "Famous Mysore-route highway snack: crisp golden patties of semolina, rice flour, caramelized onions, curry leaves, and green chilies.",
    category: "Snack",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 20,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 23,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    instructions: "1. In a bowl, combine semolina (rava), rice flour, maida, sliced onions, minced ginger, curry leaves, and green chilies.\n2. Pour smoking hot oil over the flour mixture to make it flaky (moyan).\n3. Sprinkle warm water gradually to form a stiff dough.\n4. Flatten small portions into thin patties on greased paper.\n5. Deep-fry on medium flame until edges are shatteringly crisp and golden brown.",
    ingredients: [
      { name: "Semolina (Rava)", quantity: "1 cup" },
      { name: "Rice flour", quantity: "1/2 cup" },
      { name: "All-purpose flour", quantity: "1/4 cup" },
      { name: "Onion", quantity: "2 finely sliced" },
      { name: "Hot oil for dough", quantity: "2 tbsp" },
      { name: "Oil", quantity: "for deep frying" }
    ],
    reviews: [
      { author: "Prashanth N.", rating: 5, date: "3 days ago", comment: "Brought back train memories to Mysore! Crispy on edges and savory with onions." }
    ]
  },

  // ==========================================================================
  // INDIA 🇮🇳 — LUNCH (14 Iconic World-Class Curries & Biryanis)
  // ==========================================================================
  {
    id: "seed-ind-03",
    title: "Royal Hyderabadi Dum Biryani",
    description: "The crown jewel of Hyderabad: long-grain basmati rice layered with yogurt-marinated tender meat, caramelized fried onions (birista), fresh mint, and saffron milk, slow-cooked under dough seal (*dum*).",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 50,
    servings: 5,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 58,
    chef_points: 220,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken chunks with thick yogurt, ginger-garlic paste, Shahi biryani masala, mint, cilantro, and lemon juice for 45 minutes.\n2. Boil aged basmati rice with whole spices (shahi jeera, cardamom, cloves) until 70% cooked; drain.\n3. Deep-fry sliced onions until crispy and deep mahogany (birista).\n4. In a heavy bottom handi, spread marinated meat at base; layer parboiled rice on top.\n5. Drizzle saffron milk, pure ghee, kewra water, and fried onions; seal lid with dough and cook on low dum for 25 minutes.",
    ingredients: [
      { name: "Aged Basmati rice", quantity: "3 cups" },
      { name: "Chicken or Mutton", quantity: "750g" },
      { name: "Onions (for Birista)", quantity: "4 sliced" },
      { name: "Thick Yogurt", quantity: "1 cup" },
      { name: "Kashmiri Saffron", quantity: "1 pinch in warm milk" },
      { name: "Desi Ghee", quantity: "4 tbsp" },
      { name: "Fresh Mint & Cilantro", quantity: "1 cup chopped" }
    ],
    reviews: [
      { author: "Feroz Khan", rating: 5, date: "Yesterday", comment: "The aroma when lifting the dum seal filled the entire house. Perfectly separated grains and juicy meat!" },
      { author: "Manasa T.", rating: 5, date: "3 days ago", comment: "Authentic Hyderabadi Bawarchi taste. 10/10 perfection!" }
    ]
  },
  {
    id: "seed-ind-04",
    title: "Amritsari Chole Bhature",
    description: "Dark, spiced tea-steeped chickpea curry cooked with pomegranate seeds and ginger, served with giant golden balloon fried bhature.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 39,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook soaked kabuli chana with a black tea pouch and whole spices for a rich mahogany color.\n2. Sauté chopped onions, ginger, and pureed tomatoes with anardana powder and chole masala until oil separates.\n3. Add cooked chickpeas and simmer for 20 minutes while lightly mashing to thicken gravy.\n4. Knead flour with yogurt, pinch of baking powder, and water; rest 2 hours.\n5. Roll bhatura oval and deep-fry in smoking oil until it balloons into an airy golden cloud.",
    ingredients: [
      { name: "Kabuli Chickpeas", quantity: "2 cups soaked" },
      { name: "Black tea bag", quantity: "1 pouch" },
      { name: "Chole masala & Anardana", quantity: "2 tbsp" },
      { name: "Onions & Tomatoes", quantity: "2 each pureed" },
      { name: "All-purpose flour (for Bhatura)", quantity: "2.5 cups" },
      { name: "Yogurt", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Simran K.", rating: 5, date: "2 days ago", comment: "The tea bag trick gave it that authentic dark Amritsari color. Bhature were cloud-soft!" }
    ]
  },
  {
    id: "seed-ind-07",
    title: "Dal Makhani (Slow-Cooked Bukhara Style)",
    description: "Whole black urad lentils and kidney beans slow-simmered for 12 hours with fresh tomato puree, white butter, and velvet cream.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 45,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 44,
    chef_points: 210,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook soaked black urad dal and rajma with salt and Kashmiri chili powder until meltingly soft.\n2. Sauté fresh ginger-garlic paste and strained tomato puree in butter until aromatic.\n3. Pour in cooked lentils and simmer on the lowest flame for 45 minutes, stirring continuously.\n4. Whisk in heavy cream and generous cubes of chilled unsalted butter.\n5. Rub dried kasuri methi between palms and swirl into dal before serving with garlic naan.",
    ingredients: [
      { name: "Whole black urad dal", quantity: "1.5 cups" },
      { name: "Red kidney beans (Rajma)", quantity: "1/4 cup" },
      { name: "Unsalted Butter", quantity: "60g" },
      { name: "Heavy cream", quantity: "1/2 cup" },
      { name: "Tomato puree", quantity: "1.5 cups" },
      { name: "Kasuri methi", quantity: "1 tbsp" }
    ],
    reviews: [
      { author: "Karan Johar", rating: 5, date: "Yesterday", comment: "Tastes identical to ITC Maurya Bukhara! Incredibly creamy and comforting." }
    ]
  },
  {
    id: "seed-ind-11",
    title: "Goan Prawn Curry (Ambot Tik)",
    description: "Juicy coastal sea prawns simmered in a vibrant spiced coconut milk and tart kokum gravy, flavored with coriander and Kashmiri chilies.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 27,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grind grated coconut, dried Kashmiri chilies, coriander seeds, cumin, garlic, and turmeric into a velvet-smooth paste.\n2. Sauté ground paste in coconut oil until fragrant.\n3. Add warm water and thin coconut milk to reach curry consistency; bring to a boil.\n4. Drop in dried kokum petals to infuse a pleasant fruity sourness.\n5. Slide in cleaned deveined prawns and simmer for just 4-5 minutes until tender and pink.",
    ingredients: [
      { name: "Sea Prawns (cleaned & deveined)", quantity: "450g" },
      { name: "Coconut milk", quantity: "1.5 cups" },
      { name: "Fresh grated coconut", quantity: "1/2 cup" },
      { name: "Dried kokum petals", quantity: "4" },
      { name: "Kashmiri red chilies", quantity: "6" },
      { name: "Coconut oil", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Clive Fernandes", rating: 5, date: "4 days ago", comment: "Authentic Goan shack flavors! The kokum tang with coconut milk is pure magic on rice." }
    ]
  },
  {
    id: "seed-ind-16",
    title: "Andhra Gongura Mamsam (Sorrel Mutton Curry)",
    description: "The crown specialty of Andhra: tender succulent mutton slow-simmered in a tart, spicy wild sorrel (gongura) and fiery Guntur chili masala.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 45,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 48,
    chef_points: 215,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté fresh red-stem gongura leaves and green chilies in 1 tbsp oil until completely wilted; grind coarsely.\n2. Pressure cook mutton pieces with turmeric, salt, and ginger-garlic paste until fork-tender.\n3. In a heavy pot, sauté whole spices, sliced onions, and remaining ginger-garlic until deep golden brown.\n4. Add coriander powder, fiery Guntur red chili powder, cooked mutton chunks, and its rich broth; simmer 10 minutes.\n5. Fold in tart gongura paste and simmer on low for 6 minutes until spiced oil separates on top. Serve with hot steamed rice and ghee.",
    ingredients: [
      { name: "Mutton chunks (bone-in)", quantity: "600g" },
      { name: "Fresh Gongura leaves (red stem)", quantity: "3 large bunches" },
      { name: "Guntur red chili powder", quantity: "2.5 tbsp" },
      { name: "Onions", quantity: "2 chopped" },
      { name: "Ginger-garlic paste", quantity: "2 tbsp" },
      { name: "Cloves & Cinnamon", quantity: "4 each" },
      { name: "Desi Ghee or Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Satya Murthy", rating: 5, date: "Yesterday", comment: "The tangy gongura cuts the mutton richness so perfectly. Tastes like home in Guntur!" }
    ]
  },
  {
    id: "seed-ind-17",
    title: "Andhra Gutti Vankaya Kura (Stuffed Brinjal)",
    description: "Mouth-watering baby eggplants stuffed with a freshly roasted paste of peanuts, white sesame, desiccated coconut, and spices, simmered in tamarind gravy.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 33,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Slit baby brinjals in a four-way plus (+) keeping stems attached; soak in salted water to prevent darkening.\n2. Dry roast peanuts, sesame seeds, grated coconut, coriander seeds, and cumin; grind into a rich, thick paste with tamarind and salt.\n3. Stuff each slit brinjal generously with the ground masala.\n4. Heat oil in a pan, crackle mustard seeds and curry leaves; sauté onions until translucent.\n5. Add stuffed brinjals, remaining paste, and 1 cup water. Cover and slow-simmer for 18 minutes until brinjals turn buttery soft.",
    ingredients: [
      { name: "Small purple baby brinjals", quantity: "8" },
      { name: "Raw peanuts", quantity: "1/4 cup" },
      { name: "White sesame seeds", quantity: "2 tbsp" },
      { name: "Grated coconut", quantity: "3 tbsp" },
      { name: "Tamarind paste", quantity: "1 tbsp" },
      { name: "Onion & Curry leaves", quantity: "1 set" },
      { name: "Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Padmavathi D.", rating: 5, date: "3 days ago", comment: "The roasted peanut-sesame masala was so aromatic! Brinjals were melt-in-mouth soft." }
    ]
  },
  {
    id: "seed-ind-18",
    title: "Andhra Natu Kodi Pulusu with Garelu",
    description: "Fiery Rayalaseema country chicken curry slow-simmered in a rich poppy seed, coconut, and pepper gravy, served with crunchy medu garelu.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 45,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 41,
    chef_points: 210,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate country chicken with turmeric, Guntur chili powder, and ginger-garlic paste for 25 minutes.\n2. Grind soaked poppy seeds (khus-khus), coconut, and cloves into a fine velvet paste.\n3. Heat oil in a pressure cooker; temper with whole spices and curry leaves; brown sliced onions.\n4. Add marinated country chicken and sear on high flame for 6 minutes to lock in juices.\n5. Pour in poppy-coconut paste and 2 cups water; pressure cook for 5 whistles until meat is succulent. Serve with hot crispy garelu.",
    ingredients: [
      { name: "Country Chicken (Natu Kodi)", quantity: "700g" },
      { name: "Poppy seeds (Khus-khus)", quantity: "2 tbsp soaked" },
      { name: "Grated coconut", quantity: "3 tbsp" },
      { name: "Onions", quantity: "2 chopped" },
      { name: "Guntur red chili powder", quantity: "2 tbsp" },
      { name: "Ginger-garlic paste", quantity: "2 tbsp" },
      { name: "Curry leaves & Ghee", quantity: "for tempering" }
    ],
    reviews: [
      { author: "Chaitanya R.", rating: 5, date: "Yesterday", comment: "Eating hot medu vadas dipped in this fiery pulusu is unmatched heaven!" }
    ]
  },
  {
    id: "seed-ind-35",
    title: "Rayalaseema Ragi Sangati with Natu Kodi",
    description: "Nutritious finger millet and rice balls (Ragi Mudde) served steaming hot with a puddle of melted desi ghee and fiery country chicken pulusu.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 46,
    chef_points: 215,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cook raw rice in plenty of water until very soft and mushy.\n2. Sprinkle fine ragi (finger millet) flour over boiling rice without stirring; cover and steam 5 minutes.\n3. Using a wooden sangati stick or rolling pin, stir vigorously until a glossy, lump-free dark dough forms.\n4. Shape into smooth spheres with wet hands or a greased bowl.\n5. Make a depression on top, fill with melted desi ghee, and ladle fiery chicken pulusu alongside.",
    ingredients: [
      { name: "Ragi flour (Finger millet)", quantity: "1.5 cups" },
      { name: "Raw rice (cooked soft)", quantity: "1 cup" },
      { name: "Desi Ghee", quantity: "4 tbsp" },
      { name: "Water & Salt", quantity: "for cooking" },
      { name: "Fiery Chicken curry", quantity: "for pairing" }
    ],
    reviews: [
      { author: "Kishore Reddy", rating: 5, date: "2 days ago", comment: "Authentic Rayalaseema village style! Healthy, hearty, and unbelievably delicious." }
    ]
  },
  {
    id: "seed-ind-36",
    title: "Telangana Bagara Rice with Dalcha",
    description: "Fragrant basmati rice tempered with whole spices, mint, and caramelized onions, paired with slow-simmered chana dal and bottle gourd gravy.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 5,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 37,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat ghee in a pot; crackle bay leaves, shahi jeera, star anise, cardamom, and cinnamon.\n2. Sauté sliced onions and slit green chilies until light golden; stir in ginger-garlic and mint leaves.\n3. Add soaked basmati rice and warm water; cook covered until rice is fragrant, fluffy, and separate.\n4. For Dalcha, simmer chana dal with bottle gourd chunks, tamarind pulp, and mutton/bone broth until thick.\n5. Serve piping hot bagara annam drenched with tangy savory dalcha.",
    ingredients: [
      { name: "Basmati rice", quantity: "3 cups" },
      { name: "Whole Bagara spices", quantity: "1 set" },
      { name: "Mint leaves & Onions", quantity: "1 cup each" },
      { name: "Chana dal (for Dalcha)", quantity: "1 cup" },
      { name: "Bottle gourd (Kaddu)", quantity: "1 cup cubed" },
      { name: "Tamarind pulp", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Zeeshan A.", rating: 5, date: "Yesterday", comment: "The aroma of mint and whole spices in the rice with tangy dalcha is legendary Telangana wedding food." }
    ]
  },
  {
    id: "seed-ind-37",
    title: "Nellore Chepala Pulusu (Clay-Pot Fish Curry)",
    description: "Traditional coastal Andhra fish curry cooked in an earthen pot with fresh tamarind extract, raw mango, fenugreek, and shallots.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 34,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Rub fresh river/sea fish steaks with turmeric and salt.\n2. In an earthen clay pot, heat sesame oil; crackle mustard seeds, fenugreek (methi) seeds, and curry leaves.\n3. Sauté shallots (sambar onions) and green chilies until soft; add pureed tomatoes and red chili powder.\n4. Pour in thick tamarind water and sliced raw mango pieces; simmer 10 minutes into a tangy broth.\n5. Gently slide in fish steaks, swirl the pot (do not stir with spoon), and simmer 8 minutes. Best enjoyed after resting 4 hours.",
    ingredients: [
      { name: "Fresh fish steaks (Murrel or Rohu)", quantity: "600g" },
      { name: "Thick Tamarind extract", quantity: "1/2 cup" },
      { name: "Raw mango slices", quantity: "1/2 cup" },
      { name: "Shallots (small onions)", quantity: "1 cup" },
      { name: "Fenugreek seeds (Methi)", quantity: "1/2 tsp" },
      { name: "Gingelly/Sesame oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Narayana Swamy", rating: 5, date: "3 days ago", comment: "Tastes even better the next day! The tamarind, fenugreek, and fish infused into the clay pot." }
    ]
  },
  {
    id: "seed-ind-38",
    title: "Hyderabadi Shahi Haleem",
    description: "Centuries-old Nizami delicacy: slow-cooked broken wheat, lentils, and tender mutton pounded into a rich, silky paste with ghee and rose water.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 60,
    servings: 5,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 52,
    chef_points: 230,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cook soaked broken wheat, chana dal, urad dal, and oats until tender and mash into a paste.\n2. Pressure cook mutton chunks with whole garam masala, ginger-garlic, turmeric, and chili powder until falling off the bone.\n3. Shred meat finely and combine with cooked wheat-lentil mash in a heavy pot.\n4. Pound vigorously with a heavy wooden masher (ghotni) on low heat while swirling in pure desi ghee.\n5. Garnish with crisp brown onions, fried cashews, slivered ginger, and a generous squeeze of fresh lemon.",
    ingredients: [
      { name: "Boneless tender mutton", quantity: "600g" },
      { name: "Broken wheat (Dalia)", quantity: "1 cup" },
      { name: "Mixed lentils (Chana & Urad)", quantity: "1/2 cup" },
      { name: "Pure Desi Ghee", quantity: "6 tbsp" },
      { name: "Fried onions & Cashews", quantity: "for garnish" },
      { name: "Fresh Mint & Lemon", quantity: "for serving" }
    ],
    reviews: [
      { author: "Syed Imran", rating: 5, date: "Yesterday", comment: "Silky, rich, and bursting with authentic Old City Hyderabad spices. Pure culinary perfection." }
    ]
  },
  {
    id: "seed-ind-39",
    title: "Andhra Pappu Charu with Ghee & Steamed Rice",
    description: "Soothing comfort food of Andhra: spiced toor dal broth tempered with garlic, mustard seeds, curry leaves, and tomatoes, served over hot rice.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 29,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook toor dal with tomatoes, onions, green chilies, and turmeric until mushy; whisk smooth.\n2. Dilute with water and tamarind extract to create a liquid broth.\n3. Add crushed garlic cloves, coriander powder, and salt; boil for 10 minutes.\n4. In a small pan, heat ghee; crackle mustard seeds, cumin seeds, dried red chilies, and curry leaves.\n5. Pour sizzling tadka into the boiling charu and cover immediately to trap aromas. Serve with hot rice and papad.",
    ingredients: [
      { name: "Toor dal (split pigeon peas)", quantity: "1 cup" },
      { name: "Ripe tomatoes", quantity: "3 chopped" },
      { name: "Crushed garlic cloves", quantity: "8 cloves" },
      { name: "Tamarind pulp", quantity: "1 tbsp" },
      { name: "Desi Ghee", quantity: "2 tbsp" },
      { name: "Mustard & Cumin seeds", quantity: "1 tsp each" }
    ],
    reviews: [
      { author: "Bhanu Prakash", rating: 5, date: "4 days ago", comment: "The crushed garlic tadka with toor dal is true Andhra soul food. Delicious and comforting." }
    ]
  },
  {
    id: "seed-ind-40",
    title: "Karnataka Bisi Bele Bath with Kara Boondi",
    description: "Classic Karnataka one-pot meal of rice, toor dal, assorted vegetables, and fresh coconut-spiced Bisi Bele Bath powder, drizzled with ghee.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 31,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook rice and toor dal together until very soft.\n2. Boil carrots, beans, peas, and shallots with tamarind water, jaggery, and turmeric.\n3. Roast spices with dry coconut and grind into authentic Bisi Bele Bath powder.\n4. Combine cooked rice-dal with vegetables, ground spice powder, and water; simmer 10 minutes.\n5. Temper with mustard seeds, cashews, and curry leaves in hot ghee; top with crunchy spicy boondi.",
    ingredients: [
      { name: "Sona Masoori Rice", quantity: "1 cup" },
      { name: "Toor dal", quantity: "3/4 cup" },
      { name: "Mixed vegetables", quantity: "2 cups" },
      { name: "Bisi Bele Bath powder", quantity: "2.5 tbsp" },
      { name: "Desi Ghee", quantity: "3 tbsp" },
      { name: "Spicy Kara Boondi", quantity: "1/2 cup for topping" }
    ],
    reviews: [
      { author: "Ashwin K.", rating: 5, date: "2 days ago", comment: "The roasted cinnamon and coconut powder gives it the unmistakable MTR Bangalore taste!" }
    ]
  },
  {
    id: "seed-ind-41",
    title: "Punjabi Rajma Chawal (Slow-Cooked Kidney Beans)",
    description: "Red kidney beans slow-simmered in a thick, hearty onion-tomato masala spiced with ginger, garam masala, and cumin, served over fluffy basmati rice.",
    category: "Lunch",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 45,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook soaked red rajma with salt and whole spices until tender and creamy.\n2. Sauté finely chopped onions in ghee until caramelized deep brown.\n3. Add ginger-garlic paste, pureed tomatoes, coriander powder, and Kashmiri chili; cook until oil separates.\n4. Add cooked beans along with their broth; lightly mash a ladleful of beans against pot sides to thicken sauce.\n5. Simmer on low flame for 20 minutes; finish with garam masala and serve over steaming hot basmati rice.",
    ingredients: [
      { name: "Red kidney beans (Rajma)", quantity: "2 cups soaked" },
      { name: "Onions", quantity: "2 finely chopped" },
      { name: "Tomatoes", quantity: "3 pureed" },
      { name: "Ginger & Garlic paste", quantity: "2 tbsp" },
      { name: "Garam masala & Coriander", quantity: "1 tbsp each" },
      { name: "Desi Ghee", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Harpreet Singh", rating: 5, date: "Yesterday", comment: "The thick gravy coated the basmati rice so well. Pure comfort food at its finest." }
    ]
  },

  // ==========================================================================
  // INDIA 🇮🇳 — DINNER (10 Authentic Celebrated Dinners)
  // ==========================================================================
  {
    id: "seed-ind-01",
    title: "Old Delhi Butter Chicken (Murgh Makhani)",
    description: "Tender tandoor-charred chicken chunks simmered in a velvety, buttery spiced tomato and rich cashew cream gravy with kasuri methi.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 64,
    chef_points: 240,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken with yogurt, ginger-garlic paste, and Kashmiri chili powder for 30 minutes.\n2. Pan-sear chicken pieces on high heat until charred blisters appear.\n3. Sauté butter with strained tomato puree and smooth cashew paste until oil separates.\n4. Add garam masala, kasuri methi, heavy cream, and simmer seared chicken for 12 minutes.\n5. Finish with extra butter cubes and serve piping hot with garlic butter naan.",
    ingredients: [
      { name: "Chicken thighs (boneless)", quantity: "600g" },
      { name: "Unsalted Butter", quantity: "50g" },
      { name: "Heavy cream", quantity: "1/2 cup" },
      { name: "Tomato puree", quantity: "2 cups strained" },
      { name: "Raw cashews (ground to paste)", quantity: "20 pieces" },
      { name: "Kasuri methi", quantity: "1 tbsp crushed" }
    ],
    reviews: [
      { author: "Aman Varma", rating: 5, date: "Yesterday", comment: "Pure restaurant silk texture. Straining the gravy made all the difference in the world!" }
    ]
  },
  {
    id: "seed-ind-02",
    title: "Amritsari Paneer Tikka Masala",
    description: "Smoky tandoor-marinated cottage cheese cubes and crisp bell peppers simmered in a rich, spiced onion-tomato and cashew gravy.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 38,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toss paneer cubes and bell peppers with yogurt, mustard oil, ajwain, and Kashmiri chili powder.\n2. Grill in a screaming hot pan until charred edges develop.\n3. Sauté onions, ginger-garlic, pureed tomatoes, and roasted spices until thick.\n4. Fold in charred paneer and simmer gently for 5 minutes so cheese absorbs flavor.\n5. Swirl with heavy cream and serve with hot tandoori roti.",
    ingredients: [
      { name: "Fresh Malai Paneer", quantity: "400g cubed" },
      { name: "Bell peppers & Onions", quantity: "2 each" },
      { name: "Mustard oil", quantity: "2 tbsp" },
      { name: "Thick Greek Yogurt", quantity: "4 tbsp" },
      { name: "Heavy cream", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Neha Gupta", rating: 5, date: "3 days ago", comment: "The paneer stayed melt-in-mouth soft and the gravy had that authentic dhaba smoky flavor." }
    ]
  },
  {
    id: "seed-ind-05",
    title: "Kashmiri Rogan Josh",
    description: "Royal Kashmiri Wazwan mutton braised in an intensely aromatic ruby-red gravy flavored with Kashmiri chilies, maval petals, fennel, and dry ginger.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 55,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 36,
    chef_points: 200,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat mustard oil until smoking, cool slightly, then add whole spices and asafoetida (hing).\n2. Sear mutton chunks on high heat until browned on all sides.\n3. Whisk Kashmiri chili powder, fennel powder (saunf), and ginger powder (sonth) into fresh yogurt.\n4. Pour yogurt sauce into the pot while stirring vigorously to prevent curdling.\n5. Add water, cover tight, and slow-cook on low flame for 50 minutes until meat is tender enough to cut with a spoon.",
    ingredients: [
      { name: "Mutton or lamb chunks", quantity: "600g" },
      { name: "Mustard oil", quantity: "4 tbsp" },
      { name: "Fennel powder (Saunf)", quantity: "1.5 tbsp" },
      { name: "Dry ginger powder (Sonth)", quantity: "1 tsp" },
      { name: "Kashmiri red chili powder", quantity: "2.5 tbsp" },
      { name: "Whisked yogurt", quantity: "1 cup" }
    ],
    reviews: [
      { author: "Tariq Butt", rating: 5, date: "2 days ago", comment: "Authentic Pandit-style Rogan Josh without onions or garlic. The fennel aroma is mesmerizing!" }
    ]
  },
  {
    id: "seed-ind-08",
    title: "Dhaba Style Palak Paneer",
    description: "Fresh cottage cheese cubes simmered in a vibrant emerald gravy of blanched spinach, roasted garlic, green chilies, and cream.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 30,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Blanch washed spinach in boiling water for 2 minutes, then immediately plunge into ice-cold water to retain emerald color.\n2. Puree blanched spinach with green chili into a smooth sauce.\n3. Sauté cumin seeds, generous minced garlic, and onions in butter until golden.\n4. Add pureed tomatoes, garam masala, and spinach puree; simmer 5 minutes.\n5. Slide in fresh paneer cubes and finish with a swirl of fresh cream and kasuri methi.",
    ingredients: [
      { name: "Fresh baby spinach", quantity: "500g" },
      { name: "Malai Paneer", quantity: "300g cubed" },
      { name: "Garlic", quantity: "8 cloves minced" },
      { name: "Butter & Cream", quantity: "2 tbsp each" },
      { name: "Green chilies", quantity: "2" }
    ],
    reviews: [
      { author: "Divya N.", rating: 5, date: "5 days ago", comment: "The ice bath technique kept the spinach bright green! Very flavorful and healthy." }
    ]
  },
  {
    id: "seed-ind-12",
    title: "Chettinad Spicy Pepper Chicken",
    description: "Fiery Tamil Nadu dry chicken roast bursting with freshly ground whole black peppercorns, roasted fennel, and crispy curry leaves.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 35,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Dry-roast black peppercorns, fennel seeds, coriander seeds, and cumin; coarsely grind into fresh masala.\n2. In a heavy iron kadai, heat coconut oil; crackle curry leaves and shallots until golden brown.\n3. Add ginger-garlic paste and chopped tomatoes; cook until soft.\n4. Add chicken pieces, turmeric, salt, and half the pepper masala; cook covered for 15 minutes.\n5. Remove lid and roast on high heat with remaining pepper masala until dry, dark, and glistening.",
    ingredients: [
      { name: "Chicken chunks", quantity: "600g" },
      { name: "Black peppercorns", quantity: "2.5 tbsp" },
      { name: "Fennel seeds", quantity: "1 tbsp" },
      { name: "Shallots (small onions)", quantity: "1.5 cups" },
      { name: "Curry leaves", quantity: "3 sprigs" },
      { name: "Coconut oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Karthik Subramanian", rating: 5, date: "Yesterday", comment: "Bold black pepper heat that warms the throat. Authentic Chettinad flavor!" }
    ]
  },
  {
    id: "seed-ind-13",
    title: "Lucknowi Shahi Malai Kofta",
    description: "Melt-in-mouth paneer and potato dumplings stuffed with cashews and raisins, simmered in a velvet white cashew and cardamom gravy.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 29,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grate paneer and mix with mashed boiled potatoes, cornstarch, and cardamom.\n2. Shape into balls, stuffing center with chopped cashews and golden raisins; deep fry until golden.\n3. Boil onions, cashews, and melon seeds; puree into a fine white paste.\n4. Sauté paste in desi ghee with ginger, green cardamom, and white pepper; simmer with cream.\n5. Arrange fried koftas in a serving bowl; ladle velvety hot gravy over top immediately before serving.",
    ingredients: [
      { name: "Fresh Paneer", quantity: "250g grated" },
      { name: "Boiled potatoes", quantity: "2 mashed" },
      { name: "Raw Cashews", quantity: "25 pieces" },
      { name: "Heavy cream", quantity: "1/3 cup" },
      { name: "Cardamom powder", quantity: "1/2 tsp" },
      { name: "Desi Ghee", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Meenakshi S.", rating: 5, date: "4 days ago", comment: "The koftas literally melt on the tongue. Restaurant quality royal gravy!" }
    ]
  },
  {
    id: "seed-ind-19",
    title: "Telangana Golichina Mamsam (Spicy Mutton Fry)",
    description: "Rustic Telangana village delicacy: tender mutton chunks slow-roasted in an iron kadai with caramelized onions, cracked black pepper, and curry leaves.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 47,
    chef_points: 215,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook mutton pieces with turmeric, salt, and ginger-garlic paste with 1/2 cup water until 80% tender.\n2. In a heavy iron kadai, heat oil; fry sliced onions, slit green chilies, and heaps of curry leaves until golden brown.\n3. Add cooked mutton chunks with remaining broth; evaporate liquid on high heat.\n4. Add coriander powder and red chili; slow-roast on low flame for 18 minutes, stirring continuously until deeply browned.\n5. Finish with freshly cracked black peppercorns and garam masala until every piece is richly coated in a spicy crust.",
    ingredients: [
      { name: "Mutton chunks (cut small)", quantity: "600g" },
      { name: "Onions", quantity: "2 thinly sliced" },
      { name: "Black peppercorns", quantity: "1.5 tbsp crushed" },
      { name: "Green chilies", quantity: "4 slit" },
      { name: "Curry leaves", quantity: "3 sprigs" },
      { name: "Desi Ghee or Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Ramesh Goud", rating: 5, date: "Yesterday", comment: "The iron kadai roasting gives it that deep caramelized flavor. Perfect with steamed rice and rasam!" }
    ]
  },
  {
    id: "seed-ind-42",
    title: "Royal Kaju Paneer Biryani",
    description: "A vegetarian royal feast: fragrant basmati rice layered with golden pan-fried cashews, spiced malai paneer, mint, saffron, and fried onions.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 32,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Golden fry whole cashews and paneer cubes in ghee; set aside.\n2. Sauté sliced onions, ginger-garlic, tomatoes, and biryani spices; fold in yogurt, fried paneer, and cashews.\n3. Cook aged basmati rice with whole spices until 70% done.\n4. Layer paneer-cashew gravy and parboiled rice alternately in a heavy pot.\n5. Drizzle saffron milk, ghee, fried onions, and mint; seal and cook on low dum for 20 minutes.",
    ingredients: [
      { name: "Basmati rice", quantity: "2.5 cups" },
      { name: "Fresh Paneer", quantity: "350g cubed" },
      { name: "Whole Cashews", quantity: "1/2 cup" },
      { name: "Thick Yogurt", quantity: "3/4 cup" },
      { name: "Desi Ghee", quantity: "4 tbsp" },
      { name: "Saffron milk & Mint", quantity: "1 set" }
    ],
    reviews: [
      { author: "Shalini M.", rating: 5, date: "2 days ago", comment: "The crunch of whole cashews with soft paneer and saffron rice was heavenly!" }
    ]
  },
  {
    id: "seed-ind-43",
    title: "Andhra Kodi Vepudu (Spicy Chicken Fry)",
    description: "Fiery dry chicken fry tossed in roasted coriander, cumin, cloves, garlic, and heaps of curry leaves, served with hot chapathi.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 37,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken pieces with turmeric, Guntur red chili powder, ginger-garlic paste, and lemon juice.\n2. In a heavy pan, heat oil; add mustard seeds, slit green chilies, and fresh curry leaves.\n3. Add marinated chicken and cook on high heat for 6 minutes until chicken seals.\n4. Lower flame, cover and cook 12 minutes in its own moisture until tender.\n5. Uncover, add freshly roasted coriander-pepper powder, and fry until dry and aromatic.",
    ingredients: [
      { name: "Chicken pieces", quantity: "600g" },
      { name: "Guntur red chili powder", quantity: "2 tbsp" },
      { name: "Coriander & Cumin powder", quantity: "1.5 tbsp" },
      { name: "Curry leaves", quantity: "3 sprigs" },
      { name: "Ginger-garlic paste", quantity: "2 tbsp" },
      { name: "Oil", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Kiran Kumar", rating: 5, date: "Yesterday", comment: "Spicy, savory, and the curry leaves flavor was infused into every bite of chicken." }
    ]
  },
  {
    id: "seed-ind-44",
    title: "Dhaba Style Dal Tadka with Phulka",
    description: "Yellow toor and moong dal simmered with tomatoes and finished with a sizzling double tadka of ghee, cumin seeds, garlic, and dried red chilies.",
    category: "Dinner",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 31,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook toor dal and moong dal with turmeric and water until mushy; whisk smooth.\n2. Sauté chopped onions, ginger, and tomatoes in ghee until soft.\n3. Pour in cooked lentils and simmer for 6 minutes.\n4. In a tadka pan, heat pure ghee; add cumin seeds, sliced garlic, dried red chilies, and hing until crackling.\n5. Add a pinch of Kashmiri chili powder, immediately pour over dal, and cover to seal the smoky aroma.",
    ingredients: [
      { name: "Toor dal & Moong dal", quantity: "1.5 cups mixed" },
      { name: "Tomatoes & Onions", quantity: "2 each" },
      { name: "Sliced Garlic cloves", quantity: "6 cloves" },
      { name: "Desi Ghee", quantity: "3 tbsp" },
      { name: "Dried Kashmiri chilies", quantity: "3" },
      { name: "Cumin seeds & Hing", quantity: "1 tsp each" }
    ],
    reviews: [
      { author: "Anil Sharma", rating: 5, date: "3 days ago", comment: "The sizzling garlic ghee tadka makes this taste just like roadside Punjabi dhaba dal!" }
    ]
  },

  // ==========================================================================
  // INDIA 🇮🇳 — REFRESHING DRINKS (5 Perfect Biryani Pairings)
  // ==========================================================================
  {
    id: "seed-ind-45",
    title: "Hyderabadi Masala Majjiga (Spiced Buttermilk)",
    description: "Chilled, frothy churned yogurt infused with crushed ginger, green chilies, fresh curry leaves, coriander, and black salt—the ultimate cooling digestif for Biryani.",
    category: "Drink",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 10,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 40,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk thick yogurt with chilled water in a pitcher until frothy and smooth.\n2. In a mortar, crush ginger, green chili, and curry leaves with sea salt.\n3. Stir crushed aromatics, roasted cumin powder, and black salt (kala namak) into the buttermilk.\n4. Optionally temper with a splash of oil, mustard seeds, and asafoetida.\n5. Pour into clay kulhads over ice cubes, garnish with mint, and serve alongside hot spicy biryani.",
    ingredients: [
      { name: "Fresh plain yogurt", quantity: "2 cups" },
      { name: "Chilled water", quantity: "3 cups" },
      { name: "Fresh Ginger", quantity: "1 inch crushed" },
      { name: "Green chili & Curry leaves", quantity: "1 set" },
      { name: "Black salt (Kala namak)", quantity: "1/2 tsp" },
      { name: "Roasted cumin powder", quantity: "1 tsp" }
    ],
    reviews: [
      { author: "Naveen Reddy", rating: 5, date: "Yesterday", comment: "Cools the stomach immediately after eating spicy mutton biryani. So refreshing and aromatic!" }
    ]
  },
  {
    id: "seed-ind-46",
    title: "Nimbu Shikanji (Fresh Mint Lemon Soda)",
    description: "Crisp, effervescent Indian street-style lemonade with freshly squeezed lime, crushed mint leaves, black salt, cumin, and bubbly soda.",
    category: "Drink",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 5,
    servings: 2,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 28,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    instructions: "1. In tall glasses, muddle fresh mint leaves with sugar syrup, black salt, and roasted cumin powder.\n2. Squeeze fresh lime juice into each glass.\n3. Add plenty of crushed ice cubes.\n4. Pour chilled sparkling club soda directly over the mixture.\n5. Stir gently with a bar spoon, garnish with a lime wheel and mint sprig, and enjoy sparkling cold.",
    ingredients: [
      { name: "Fresh juicy limes", quantity: "3 juiced" },
      { name: "Chilled club soda", quantity: "2 bottles (600ml)" },
      { name: "Fresh mint leaves", quantity: "15 leaves" },
      { name: "Black salt & Cumin powder", quantity: "1/2 tsp each" },
      { name: "Sugar syrup", quantity: "3 tbsp" }
    ],
    reviews: [
      { author: "Pooja V.", rating: 5, date: "2 days ago", comment: "The cumin and black salt kick with sparkling soda is the best thirst quencher on a hot day!" }
    ]
  },
  {
    id: "seed-ind-47",
    title: "Sweet Kesari Mango Lassi",
    description: "Thick, creamy chilled yogurt shake blended with sweet Alphonso mango pulp, saffron strands, and fragrant green cardamom, topped with pistachios.",
    category: "Drink",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 10,
    servings: 3,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 45,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    instructions: "1. In a blender, combine thick Greek yogurt, Alphonso mango pulp, sugar, and chilled milk.\n2. Add crushed green cardamom seeds and saffron infused in 1 tbsp warm milk.\n3. Blend on high speed for 1 minute until thick, frothy, and velvety smooth.\n4. Pour into chilled glasses over ice cubes.\n5. Garnish with slivered pistachios and saffron threads.",
    ingredients: [
      { name: "Alphonso Mango pulp", quantity: "1.5 cups" },
      { name: "Thick chilled yogurt", quantity: "2 cups" },
      { name: "Cardamom powder & Saffron", quantity: "1 pinch each" },
      { name: "Sugar or Honey", quantity: "2 tbsp" },
      { name: "Slivered pistachios", quantity: "1 tbsp" }
    ],
    reviews: [
      { author: "Kavya Menon", rating: 5, date: "Yesterday", comment: "Rich and thick like a dessert drink. Balances out spicy curries effortlessly!" }
    ]
  },
  {
    id: "seed-ind-48",
    title: "Royal Rooh Afza Sharbat with Sabja Seeds",
    description: "Nostalgic cooling beverage: fragrant rose-herbal syrup stirred into chilled milk or water, loaded with plump basil seeds (sabja) and rose petals.",
    category: "Drink",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 10,
    servings: 3,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 26,
    chef_points: 160,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Soak sweet basil seeds (sabja) in warm water for 10 minutes until they swell into jelly-like pearls.\n2. In a pitcher, stir Rooh Afza rose syrup into chilled milk or iced water until rich pink.\n3. Add a splash of kewra water for royal fragrance.\n4. Stir in the plump basil seeds and crushed ice.\n5. Serve cold in tall glasses garnished with dried edible rose petals.",
    ingredients: [
      { name: "Rooh Afza syrup", quantity: "4 tbsp" },
      { name: "Chilled whole milk or water", quantity: "3 cups" },
      { name: "Sabja seeds (sweet basil)", quantity: "1.5 tbsp soaked" },
      { name: "Crushed ice", quantity: "1 cup" }
    ],
    reviews: [
      { author: "Zainab Begum", rating: 5, date: "4 days ago", comment: "The jelly sabja seeds with cooling rose milk make it the ultimate summer cooler!" }
    ]
  },
  {
    id: "seed-ind-49",
    title: "South Indian Kumbakonam Degree Filter Coffee",
    description: "Strong, aromatic chicory-blended coffee decoction slow-dripped through a brass filter, frothed with boiling whole milk and served in a traditional dabarah.",
    category: "Drink",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 10,
    servings: 2,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 38,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Add dark-roast coffee and chicory powder into the upper chamber of a traditional brass filter; press down lightly with the umbrella plunger.\n2. Pour boiling water over coffee, cover, and let drip for 10 minutes into thick first decoction.\n3. Boil fresh full-fat milk with sugar in a saucepan.\n4. Pour 3 tablespoons of hot decoction into a tumbler; top with boiling milk from a height to generate thick crema foam.\n5. Pour back and forth between dabarah and tumbler once and serve immediately.",
    ingredients: [
      { name: "Filter coffee powder (80:20 chicory)", quantity: "3 tbsp" },
      { name: "Boiling water", quantity: "1/2 cup" },
      { name: "Full cream milk", quantity: "1.5 cups" },
      { name: "Sugar", quantity: "2 tsp" }
    ],
    reviews: [
      { author: "Raghavan K.", rating: 5, date: "Yesterday", comment: "The frothy crema and deep chicory aroma are unmatched. Real Tamil filter kaapi perfection!" }
    ]
  },

  // ==========================================================================
  // INDIA 🇮🇳 — RESTAURANT DESSERTS & BAKERY PASTRIES (4 Famous Specialties)
  // ==========================================================================
  {
    id: "seed-ind-50",
    title: "Classic Indian Bakery Black Forest Pastry",
    description: "The quintessential Indian bakery classic: moist chocolate sponge cake layered with sweet whipped vanilla cream, dark cherries, and chocolate shavings.",
    category: "Dessert",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 35,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Bake a light and airy Dutch cocoa sponge cake; cool completely.\n2. Slice sponge into three even horizontal layers; brush generously with cherry sugar syrup.\n3. Whip heavy dairy cream with powdered sugar and vanilla until stiff peaks form.\n4. Spread whipped cream and pitted dark cherry compote between cake layers.\n5. Frost exterior with smooth cream, coat sides with dark chocolate shavings, and top with maraschino cherries.",
    ingredients: [
      { name: "Chocolate sponge cake", quantity: "3 layers" },
      { name: "Whipped cream", quantity: "2 cups" },
      { name: "Dark cherries in syrup", quantity: "1 cup" },
      { name: "Dark chocolate shavings", quantity: "1/2 cup" }
    ],
    reviews: [
      { author: "Snehal D.", rating: 5, date: "2 days ago", comment: "Tastes exactly like the nostalgic pastries from local Indian bakeries! Light, moist, and not overly sweet." }
    ]
  },
  {
    id: "seed-ind-51",
    title: "Fresh Pineapple Cream Pastry (Indian Bakery Style)",
    description: "Golden vanilla sponge soaked in tangy pineapple nectar, layered with light whipped cream and sweet pineapple compote, crowned with yellow piping.",
    category: "Dessert",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 28,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Bake a fluffy vanilla sponge; slice into two even layers.\n2. Brush sponge thoroughly with sweet pineapple juice to ensure moist bite.\n3. Whip fresh cream until glossy and stiff.\n4. Spread whipped cream and diced caramelized pineapple chunks between layers.\n5. Cover top with cream, spread shimmering yellow pineapple glaze, and garnish with candied cherries.",
    ingredients: [
      { name: "Vanilla sponge cake", quantity: "2 layers" },
      { name: "Canned pineapple (diced in syrup)", quantity: "1.5 cups" },
      { name: "Whipped fresh cream", quantity: "2 cups" },
      { name: "Candied cherries", quantity: "4" }
    ],
    reviews: [
      { author: "Arjun Verma", rating: 5, date: "3 days ago", comment: "The sponge soaked in pineapple syrup is so tender and refreshing. Everyone at birthday party loved it!" }
    ]
  },
  {
    id: "seed-ind-52",
    title: "Hyderabadi Shahi Tukda (Double Ka Meetha)",
    description: "Royal Nizam dessert: crispy desi ghee-fried bread triangles soaked in fragrant saffron sugar syrup, blanketed in creamy rabri, almonds, and pistachios.",
    category: "Dessert",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 30,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 42,
    chef_points: 210,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Simmer whole milk with cardamom and saffron on low heat for 40 minutes, scraping sides, until reduced to thick rabri.\n2. Trim crusts from white bread slices and cut diagonally into triangles.\n3. Deep-fry bread in pure desi ghee until crunchy and deep golden brown.\n4. Dip fried bread briefly into warm saffron-cardamom sugar syrup.\n5. Arrange soaked bread in a silver dish, smother with chilled thick rabri, and garnish with roasted slivered almonds and pistachios.",
    ingredients: [
      { name: "Milk bread triangles", quantity: "6 pieces" },
      { name: "Pure Desi Ghee", quantity: "1/2 cup for frying" },
      { name: "Thick reduced milk (Rabri)", quantity: "1.5 cups" },
      { name: "Saffron & Cardamom sugar syrup", quantity: "1 cup" },
      { name: "Slivered pistachios & almonds", quantity: "2 tbsp" }
    ],
    reviews: [
      { author: "Mirza Baig", rating: 5, date: "Yesterday", comment: "Pure Hyderabadi wedding royal dessert. The crunch of ghee bread under chilled rabri is unmatched!" }
    ]
  },
  {
    id: "seed-ind-53",
    title: "Hot Gulab Jamun with Vanilla Ice Cream",
    description: "Golden-fried milk-solid dumplings soaked in rose and cardamom sugar syrup, served steaming hot alongside a scoop of cold vanilla bean ice cream.",
    category: "Dessert",
    country: "India",
    countryFlag: "🇮🇳",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 5.0,
    reviews_count: 55,
    chef_points: 220,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Knead fresh khoya (mawa) and paneer with a pinch of flour and cardamom into a smooth, crack-free dough.\n2. Roll into small marble-sized round balls.\n3. Deep-fry on low flame in ghee, swirling gently until evenly deep golden brown.\n4. Transfer hot jamuns directly into warm saffron-rose sugar syrup and steep for 30 minutes.\n5. Serve two warm, syrup-soaked jamuns in a bowl with a cold scoop of rich vanilla ice cream.",
    ingredients: [
      { name: "Khoya / Mawa", quantity: "250g" },
      { name: "Paneer (grated fine)", quantity: "50g" },
      { name: "Saffron-rose sugar syrup", quantity: "2 cups" },
      { name: "Desi Ghee", quantity: "for frying" },
      { name: "Vanilla bean ice cream", quantity: "for serving" }
    ],
    reviews: [
      { author: "Rahul Sengupta", rating: 5, date: "Yesterday", comment: "The contrast of piping hot soft gulab jamun melting with cold vanilla ice cream is pure bliss." }
    ]
  },

  // ==========================================================================
  // CHINA 🇨🇳 — STREET NOODLES ONLY (As requested: Hakka Noodles)
  // ==========================================================================
  {
    id: "seed-chn-01",
    title: "Street-Style Indo-Chinese Hakka Noodles",
    description: "Famous roadside wok-tossed noodles with shredded cabbage, crunchy carrots, bell peppers, garlic, soy sauce, and spring onions over high heat.",
    category: "Dinner",
    country: "China",
    countryFlag: "🇨🇳",
    prep_time_minutes: 20,
    servings: 3,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 48,
    chef_points: 200,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil hakka noodles in salted water until al dente (85% cooked); drain and rinse with cold water, toss with 1 tsp oil.\n2. Heat a wok screaming hot with oil; stir-fry minced garlic, ginger, and green chilies for 30 seconds.\n3. Add julienned carrots, capsicum, and shredded cabbage; flash-fry on highest flame for 2 minutes to keep them crunchy.\n4. Add boiled noodles, dark soy sauce, green chili sauce, vinegar, and white pepper.\n5. Toss vigorously using two spatulas until noodles are coated with smoky wok aroma. Garnish with spring onion greens.",
    ingredients: [
      { name: "Hakka Noodles", quantity: "300g" },
      { name: "Shredded cabbage", quantity: "1 cup" },
      { name: "Carrot & Capsicum (julienned)", quantity: "1 cup" },
      { name: "Garlic (minced)", quantity: "1.5 tbsp" },
      { name: "Dark Soy sauce & Chili sauce", quantity: "1.5 tbsp each" },
      { name: "Spring onions", quantity: "1/2 cup chopped" }
    ],
    reviews: [
      { author: "Deepika R.", rating: 5, date: "Yesterday", comment: "Got that smoky roadside street cart wok flavor! Crunchy vegetables and perfectly separated noodles." }
    ]
  },

  // ==========================================================================
  // ITALY 🇮🇹 (6 Authentic Classics)
  // ==========================================================================
  {
    id: "seed-ita-01",
    title: "Roman Spaghetti alla Carbonara",
    description: "Authentic Roman pasta tossed with crispy guanciale, rich egg yolks, and Pecorino Romano.",
    category: "Dinner",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 20,
    servings: 2,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 35,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cook spaghetti in boiling salted water until al dente; reserve pasta water.\n2. Fry diced guanciale or pancetta in a skillet until crisp.\n3. Whisk egg yolks, grated Pecorino Romano, and cracked black pepper into a thick cream.\n4. Toss hot pasta in the skillet with the crispy pork.\n5. Remove from heat, stir in egg mixture with a splash of pasta water until glossy and velvety.",
    ingredients: [
      { name: "Spaghetti", quantity: "250g" },
      { name: "Guanciale or pancetta", quantity: "100g" },
      { name: "Egg yolks", quantity: "3" },
      { name: "Whole egg", quantity: "1" },
      { name: "Pecorino Romano cheese", quantity: "60g grated" },
      { name: "Black pepper", quantity: "2 tsp cracked" }
    ],
    reviews: [
      { author: "Marco R.", rating: 5, date: "3 days ago", comment: "No cream, pure egg and pecorino silkiness. The authentic Roman way!" }
    ]
  },
  {
    id: "seed-ita-02",
    title: "Artisanal Pizza Margherita",
    description: "Neapolitan classic with crushed San Marzano tomatoes, fresh mozzarella, and sweet basil.",
    category: "Lunch",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 25,
    servings: 2,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 31,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Stretch dough ball into a 10-12 inch round with a raised crust edge.\n2. Spread crushed San Marzano tomatoes lightly over the base.\n3. Tear fresh mozzarella chunks and scatter evenly.\n4. Bake on a hot pizza stone at 250°C (485°F) for 8-10 minutes until cheese bubbles and crust blisters.\n5. Finish with fresh basil leaves and a drizzle of extra virgin olive oil.",
    ingredients: [
      { name: "Pizza dough", quantity: "1 ball" },
      { name: "San Marzano tomatoes", quantity: "1 cup crushed" },
      { name: "Fresh mozzarella", quantity: "150g sliced" },
      { name: "Fresh basil", quantity: "8 leaves" }
    ],
    reviews: [
      { author: "Sofia L.", rating: 5, date: "4 days ago", comment: "Simplicity at its best! Crispy blistered crust with sweet tomatoes." }
    ]
  },
  {
    id: "seed-ita-03",
    title: "Creamy Wild Mushroom Risotto",
    description: "Slow-stirred arborio rice cooked with sautéed mushrooms, vegetable broth, and parmesan.",
    category: "Dinner",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 35,
    servings: 3,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 24,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté sliced mushrooms in olive oil until golden brown; set aside.\n2. Sauté minced shallots in butter; add arborio rice and toast for 2 minutes.\n3. Pour in white wine and stir until fully absorbed.\n4. Add warm broth ladle by ladle, stirring continuously until rice is creamy and al dente.\n5. Remove from heat, vigorously beat in butter and parmesan, then fold in mushrooms.",
    ingredients: [
      { name: "Arborio rice", quantity: "1.5 cups" },
      { name: "Mixed mushrooms", quantity: "300g sliced" },
      { name: "Vegetable broth", quantity: "4 cups warm" },
      { name: "Parmesan cheese", quantity: "1/2 cup grated" }
    ],
    reviews: [
      { author: "Luca B.", rating: 5, date: "5 days ago", comment: "Creamy without heavy cream, rich in earthy mushroom flavors." }
    ]
  },
  {
    id: "seed-ita-04",
    title: "Classic Lasagna alla Bolognese",
    description: "Layered pasta sheets with rich slow-cooked meat ragu, creamy bechamel, and melted cheese.",
    category: "Dinner",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 60,
    servings: 6,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 40,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté diced onion, carrot, and celery; brown ground meat thoroughly.\n2. Add crushed tomatoes, cover and simmer 40 minutes into a rich Bolognese sauce.\n3. Make bechamel by whisking flour into melted butter, then whisking in warm milk and nutmeg until smooth.\n4. Layer ragu, pasta sheets, bechamel, and grated cheese in a baking dish.\n5. Bake at 190°C (375°F) for 35 minutes until bubbling and golden.",
    ingredients: [
      { name: "Lasagna sheets", quantity: "12" },
      { name: "Ground beef", quantity: "400g" },
      { name: "Crushed tomatoes", quantity: "2 cups" },
      { name: "Milk & Butter", quantity: "for bechamel" },
      { name: "Mozzarella & Parmesan", quantity: "1.5 cups grated" }
    ],
    reviews: [
      { author: "Gianna M.", rating: 5, date: "1 week ago", comment: "The layers baked to perfection with bubbling golden edges." }
    ]
  },
  {
    id: "seed-ita-05",
    title: "Roman Tonnarelli Cacio e Pepe",
    description: "Minimalist Roman pasta perfection with sharp Pecorino Romano and toasted black pepper.",
    category: "Dinner",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 15,
    servings: 2,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 27,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toast cracked black peppercorns in a dry skillet for 1 minute until fragrant.\n2. Add a ladle of hot pasta water to the skillet to create a peppery broth.\n3. Whisk grated Pecorino with a splash of warm pasta water into a smooth paste.\n4. Drop al dente pasta into the skillet.\n5. Off the heat, toss vigorously with the Pecorino cream until a silky sauce coats every strand.",
    ingredients: [
      { name: "Spaghetti or tonnarelli", quantity: "250g" },
      { name: "Pecorino Romano cheese", quantity: "100g finely grated" },
      { name: "Black peppercorns", quantity: "1.5 tbsp whole cracked" }
    ],
    reviews: [
      { author: "Matteo P.", rating: 5, date: "3 days ago", comment: "Just 3 ingredients, but creamy and peppery perfection." }
    ]
  },
  {
    id: "seed-ita-06",
    title: "Authentic Venetian Tiramisù",
    description: "Espresso-dipped ladyfingers layered with rich mascarpone cream and Dutch cocoa powder.",
    category: "Dessert",
    country: "Italy",
    countryFlag: "🇮🇹",
    prep_time_minutes: 30,
    servings: 6,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 36,
    chef_points: 185,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk egg yolks with sugar until pale and thick; fold in mascarpone gently.\n2. Whip egg whites to stiff peaks and fold into mascarpone cream.\n3. Dip ladyfinger biscuits briefly into cooled espresso (1 second per side).\n4. Arrange a layer of dipped biscuits in a dish and spread half the mascarpone cream.\n5. Repeat with a second layer, dust generously with cocoa powder, and chill 4 hours.",
    ingredients: [
      { name: "Ladyfingers (savoiardi)", quantity: "24" },
      { name: "Mascarpone cheese", quantity: "400g" },
      { name: "Eggs", quantity: "3 separated" },
      { name: "Brewed espresso", quantity: "1.5 cups cooled" },
      { name: "Cocoa powder", quantity: "3 tbsp unsweetened" }
    ],
    reviews: [
      { author: "Silvia T.", rating: 5, date: "Yesterday", comment: "The coffee and creamy mascarpone balance is sublime." }
    ]
  },

  // ==========================================================================
  // MEXICO 🇲🇽 (6 Authentic Classics - Fixed Guacamole Image)
  // ==========================================================================
  {
    id: "seed-mex-01",
    title: "Crispy Birria QuesaTacos",
    description: "Braised beef folded in corn tortillas, dipped in red consommé, and griddled with cheese.",
    category: "Dinner",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 50,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 44,
    chef_points: 200,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toast dried chilies and blend with garlic, onion, cumin, and vinegar into a smooth paste.\n2. Sear beef chuck roast; pour in chili sauce and broth; simmer for 2 hours until tender.\n3. Shred beef and skim red chili fat from the broth.\n4. Dip tortillas in the warm broth; griddle on hot pan with cheese and shredded beef.\n5. Fold in half and fry until crisp; serve with bowls of warm consommé for dipping.",
    ingredients: [
      { name: "Beef roast", quantity: "600g" },
      { name: "Dried guajillo chilies", quantity: "4" },
      { name: "Corn tortillas", quantity: "12" },
      { name: "Oaxaca or Jack cheese", quantity: "200g" }
    ],
    reviews: [
      { author: "Carlos M.", rating: 5, date: "Yesterday", comment: "Dipping the taco in the rich consommé gave an unbeatable crunch!" }
    ]
  },
  {
    id: "seed-mex-02",
    title: "Enchiladas Verdes Suizas",
    description: "Corn tortillas rolled with shredded chicken in roasted tomatillo salsa and melted cheese.",
    category: "Dinner",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 28,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil tomatillos, chilies, and garlic; blend with cilantro and stir in Mexican crema.\n2. Lightly soften tortillas in hot oil for 5 seconds.\n3. Roll shredded chicken in each tortilla and arrange in a baking dish.\n4. Pour hot green salsa over enchiladas and top with shredded cheese.\n5. Bake at 200°C (400°F) for 15 minutes until bubbly and golden.",
    ingredients: [
      { name: "Corn tortillas", quantity: "10" },
      { name: "Shredded chicken", quantity: "300g cooked" },
      { name: "Fresh tomatillos", quantity: "500g" },
      { name: "Monterey Jack cheese", quantity: "1.5 cups shredded" }
    ],
    reviews: [
      { author: "Elena G.", rating: 5, date: "3 days ago", comment: "Creamy, tangy salsa verde baked to bubbling perfection." }
    ]
  },
  {
    id: "seed-mex-03",
    title: "Authentic Aztec Guacamole & Chips",
    description: "Stone-crushed Hass avocados with fresh lime juice, diced jalapeño, onion, and cilantro, served with warm crispy tortilla chips.",
    category: "Snack",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 15,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 50,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mash finely diced onion, jalapeño, and salt in a bowl with a fork to release juices.\n2. Halve avocados, scoop flesh into the bowl, and coarsely mash with a fork.\n3. Gently fold in diced tomatoes, chopped cilantro, and fresh lime juice.\n4. Season to taste with sea salt.\n5. Serve immediately with warm, crispy tortilla chips.",
    ingredients: [
      { name: "Ripe avocados", quantity: "3" },
      { name: "Fresh limes", quantity: "2 juiced" },
      { name: "White onion", quantity: "1/2 diced" },
      { name: "Jalapeño", quantity: "1 minced" },
      { name: "Fresh cilantro", quantity: "1/4 cup" },
      { name: "Crispy Tortilla chips", quantity: "1 bag" }
    ],
    reviews: [
      { author: "Mateo C.", rating: 5, date: "Yesterday", comment: "Chunky, fresh, and zesty with lime! Perfect bowl of guacamole with chips." }
    ]
  },
  {
    id: "seed-mex-04",
    title: "Michoacán Pork Carnitas",
    description: "Slow-confit Mexican pulled pork with juicy interiors and crispy browned edges.",
    category: "Dinner",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 55,
    servings: 5,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 36,
    chef_points: 195,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Rub pork shoulder chunks with salt, cumin, and Mexican oregano.\n2. Brown pork chunks in a Dutch oven with oil or lard.\n3. Add fresh orange juice, orange peel, garlic cloves, bay leaves, and water to cover.\n4. Simmer uncovered for 2 hours until water evaporates and meat is tender.\n5. Fry in its own rendered fat for 5 minutes until crispy on edges. Shred coarsely for tacos.",
    ingredients: [
      { name: "Pork shoulder", quantity: "750g" },
      { name: "Orange", quantity: "1 juiced with peel" },
      { name: "Garlic", quantity: "4 cloves smashed" },
      { name: "Corn tortillas", quantity: "for serving" }
    ],
    reviews: [
      { author: "Raul D.", rating: 5, date: "4 days ago", comment: "Crispy caramelized crust with juicy meat inside. Best street tacos!" }
    ]
  },
  {
    id: "seed-mex-05",
    title: "Chiles Rellenos de Queso",
    description: "Charred poblano peppers stuffed with melting cheese, fried in an airy golden egg batter.",
    category: "Dinner",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 40,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 25,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Char poblano peppers over high flame until blackened; steam in a bag 10 minutes and peel.\n2. Slit open, remove seeds, and stuff with sticks of melting cheese.\n3. Dust peppers lightly in flour.\n4. Whip egg whites to stiff peaks, fold in yolks and salt to create a fluffy batter.\n5. Dip peppers into batter and shallow-fry until golden. Serve with warm tomato caldillo.",
    ingredients: [
      { name: "Poblano peppers", quantity: "4 large" },
      { name: "Oaxaca or Jack cheese", quantity: "250g" },
      { name: "Eggs", quantity: "3 separated" },
      { name: "Flour & Oil", quantity: "for frying" }
    ],
    reviews: [
      { author: "Isabella N.", rating: 5, date: "5 days ago", comment: "The cloud-like egg batter puffed up perfectly around the melted cheese." }
    ]
  },
  {
    id: "seed-mex-06",
    title: "Jalisco Pozole Rojo",
    description: "Hearty Mexican soup of hominy corn and braised meat in a rich guajillo-ancho chili broth.",
    category: "Dinner",
    country: "Mexico",
    countryFlag: "🇲🇽",
    prep_time_minutes: 50,
    servings: 6,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 29,
    chef_points: 180,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Simmer pork chunks in 6 cups of water with onion and garlic until tender; skim broth.\n2. Soak dried guajillo and ancho chilies; blend with garlic and oregano into a red sauce.\n3. Strain red chili sauce into the simmering pork broth.\n4. Add drained hominy corn and simmer for 30 minutes so flavors meld.\n5. Ladle into bowls and serve with fresh radishes, shredded cabbage, and lime wedges.",
    ingredients: [
      { name: "White hominy corn", quantity: "1 can (800g)" },
      { name: "Pork shoulder", quantity: "500g cubed" },
      { name: "Dried guajillo chilies", quantity: "4" },
      { name: "Radishes & cabbage", quantity: "for garnish" }
    ],
    reviews: [
      { author: "Miguel Angel", rating: 5, date: "1 week ago", comment: "Comforting, earthy, and the lime and radishes on top make it pop!" }
    ]
  },

  // ==========================================================================
  // FRANCE 🇫🇷 (5 Authentic Classics)
  // ==========================================================================
  {
    id: "seed-fra-01",
    title: "Classic French Onion Soup Gratinée",
    description: "Caramelized sweet onions in rich beef broth, topped with toasted baguette slices and melted Gruyère cheese.",
    category: "Lunch",
    country: "France",
    countryFlag: "🇫🇷",
    prep_time_minutes: 45,
    servings: 4,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 26,
    chef_points: 175,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Melt butter in a heavy pot and cook sliced onions on low heat for 40 minutes until deep brown and caramelized.\n2. Deglaze pot with white wine, scraping up browned bits.\n3. Add beef broth and thyme; simmer gently for 20 minutes.\n4. Ladle soup into oven-safe crocks, top with toasted baguette slices, and smother with grated Gruyère cheese.\n5. Broil under high heat until cheese is melted, bubbling, and golden brown.",
    ingredients: [
      { name: "Yellow onions", quantity: "1kg thinly sliced" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Beef broth", quantity: "4 cups" },
      { name: "Gruyère cheese", quantity: "150g grated" },
      { name: "French baguette", quantity: "8 slices toasted" }
    ],
    reviews: [
      { author: "Claire D.", rating: 5, date: "3 days ago", comment: "The caramelized onions gave such a rich, sweet depth under the gooey cheese." }
    ]
  },
  {
    id: "seed-fra-02",
    title: "Burgundy Beef Bourguignon",
    description: "Slow-braised beef chuck roast in red wine with pearl onions, carrots, bacon lardons, and fresh thyme.",
    category: "Dinner",
    country: "France",
    countryFlag: "🇫🇷",
    prep_time_minutes: 75,
    servings: 6,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 38,
    chef_points: 210,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Brown bacon lardons in a Dutch oven; remove and set aside.\n2. Sear seasoned beef chunks in the rendered bacon fat until deeply browned on all sides.\n3. Sauté carrots and onions with tomato paste; pour in red wine and beef stock to cover.\n4. Return beef and bacon to pot with a bouquet garni (thyme, bay leaf, parsley).\n5. Cover and braise in a 160°C (325°F) oven for 2.5 hours until beef is melt-in-the-mouth tender. Stir in sautéed mushrooms and pearl onions.",
    ingredients: [
      { name: "Beef chuck roast", quantity: "800g cubed" },
      { name: "Bacon or pancetta", quantity: "150g diced" },
      { name: "Dry red wine", quantity: "2 cups" },
      { name: "Button mushrooms", quantity: "200g halved" },
      { name: "Pearl onions", quantity: "15 peeled" }
    ],
    reviews: [
      { author: "Pierre L.", rating: 5, date: "4 days ago", comment: "The sauce reduced to velvet. Classic Julia Child bistro style!" }
    ]
  },
  {
    id: "seed-fra-03",
    title: "Provençal Summer Ratatouille",
    description: "Layers of thinly sliced zucchini, eggplant, and ripe tomatoes baked over an aromatic sweet bell pepper and herb reduction.",
    category: "Dinner",
    country: "France",
    countryFlag: "🇫🇷",
    prep_time_minutes: 35,
    servings: 4,
    author: "Executive Chef",
    rating: 4.7,
    reviews_count: 22,
    chef_points: 165,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté diced onions, garlic, and bell peppers; blend half into a smooth piperade sauce and spread over baking dish.\n2. Thinly slice eggplant, zucchini, yellow squash, and plum tomatoes into uniform 1/8-inch rounds.\n3. Arrange vegetable slices in alternating concentric spirals over the sauce base.\n4. Drizzle with extra virgin olive oil, minced garlic, and fresh thyme leaves.\n5. Cover with parchment paper and bake at 180°C (350°F) for 40 minutes until vegetables are tender.",
    ingredients: [
      { name: "Eggplant", quantity: "1 medium" },
      { name: "Zucchini", quantity: "2 medium" },
      { name: "Plum tomatoes", quantity: "4" },
      { name: "Bell peppers", quantity: "2 diced" },
      { name: "Fresh thyme", quantity: "1 tbsp" }
    ],
    reviews: [
      { author: "Amelie B.", rating: 5, date: "5 days ago", comment: "Visually stunning and tastes like summer in Provence." }
    ]
  },
  {
    id: "seed-fra-04",
    title: "Parisian Croque Monsieur",
    description: "Decadent toasted brioche sandwich with Dijon mustard, layered with ham, blanketed in creamy béchamel and bubbling Gruyère.",
    category: "Breakfast",
    country: "France",
    countryFlag: "🇫🇷",
    prep_time_minutes: 15,
    servings: 2,
    author: "Executive Chef",
    rating: 4.8,
    reviews_count: 29,
    chef_points: 170,
    chef_rank: "🥇 Master Chef",
    image_url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Make a quick béchamel: melt butter, whisk in flour, then gradually whisk in warm milk and nutmeg until thickened.\n2. Lightly toast sturdy country bread slices; spread one side with Dijon mustard.\n3. Layer slices of ham and shredded Gruyère cheese; close sandwiches.\n4. Spread top of each sandwich generously with béchamel and more shredded cheese.\n5. Bake and broil at 200°C (400°F) for 8 minutes until cheese is browned and bubbling.",
    ingredients: [
      { name: "Thick brioche bread", quantity: "4 slices" },
      { name: "Cooked ham", quantity: "4 slices" },
      { name: "Gruyère cheese", quantity: "150g shredded" },
      { name: "Dijon mustard", quantity: "1 tbsp" },
      { name: "Butter & Milk", quantity: "for béchamel" }
    ],
    reviews: [
      { author: "Julien V.", rating: 5, date: "2 days ago", comment: "The béchamel topping broiled to a golden crust. Best café breakfast sandwich." }
    ]
  },
  {
    id: "seed-fra-05",
    title: "Traditional Vanilla Crème Brûlée",
    description: "Silky Madagascar vanilla bean custard crowned with a shatteringly crisp caramelized sugar glass crust.",
    category: "Dessert",
    country: "France",
    countryFlag: "🇫🇷",
    prep_time_minutes: 25,
    servings: 4,
    author: "Executive Chef",
    rating: 4.9,
    reviews_count: 37,
    chef_points: 190,
    chef_rank: "👑 Grand Culinary Master",
    image_url: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat heavy cream with a split vanilla bean and seeds until steaming; steep 15 minutes.\n2. Whisk egg yolks with granulated sugar until pale.\n3. Slowly temper warm cream into egg yolks, whisking continuously to avoid curdling; strain through a fine sieve.\n4. Pour into shallow ramekins set inside a water bath (bain-marie); bake at 150°C (300°F) for 35 minutes until centers gently wobble.\n5. Chill 4 hours; sprinkle granulated sugar over top and caramelize with a kitchen torch into a brittle glass crust.",
    ingredients: [
      { name: "Heavy whipping cream", quantity: "2 cups" },
      { name: "Vanilla bean", quantity: "1 split" },
      { name: "Egg yolks", quantity: "5 large" },
      { name: "Granulated sugar", quantity: "1/3 cup + extra for torching" }
    ],
    reviews: [
      { author: "Camille R.", rating: 5, date: "Yesterday", comment: "Cracking that sugar crust with a spoon is pure joy. Custard was velvet smooth." }
    ]
  }
];
