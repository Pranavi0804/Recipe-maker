// FlavorCraft Seed Data: 42 Authentic Recipes across 5 World Cuisines
// Covers: 🇮🇳 India (19), 🇮🇹 Italy (6), 🇲🇽 Mexico (6), 🇨🇳 China (6), 🇫🇷 France (5)
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const bcrypt = require("bcryptjs");
const supabase = require("../supabase");

const RECIPES_SEED = [
  // ==================== INDIA (14) ====================
  {
    title: "Old Delhi Butter Chicken",
    description: "Tender chicken chunks in a rich, buttery, spiced tomato & cashew gravy.",
    category: "Dinner",
    country: "India",
    prep: 35,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken with yogurt, ginger-garlic paste, and chili powder for 20 minutes.\n2. Sear chicken pieces in a pan until lightly charred.\n3. Sauté butter with tomato puree and cashew paste until oil separates.\n4. Add spices, cream, and simmer with the chicken for 15 minutes.\n5. Finish with kasuri methi and extra butter.",
    ingredients: [["Chicken", "500g"], ["Butter", "3 tbsp"], ["Heavy cream", "1/2 cup"], ["Tomato puree", "2 cups"], ["Ginger-garlic paste", "2 tbsp"], ["Garam masala", "1 tsp"], ["Kashmiri chili powder", "1 tsp"], ["Kasuri methi", "1 tbsp"], ["Cashews", "15"], ["Salt", "to taste"]]
  },
  {
    title: "Amritsari Paneer Tikka Masala",
    description: "Smoky marinated cottage cheese cubes simmered in a spiced onion-tomato gravy.",
    category: "Dinner",
    country: "India",
    prep: 30,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cut paneer and peppers into cubes; toss with yogurt, turmeric, and chili powder.\n2. Grill in a pan until charred edges appear.\n3. Prepare gravy by sautéing onions, ginger-garlic, tomatoes, and spices.\n4. Fold in grilled paneer and simmer for 5 minutes.\n5. Swirl with heavy cream.",
    ingredients: [["Paneer", "300g"], ["Onion", "2"], ["Tomato", "3"], ["Bell pepper", "1"], ["Ginger-garlic paste", "1 tbsp"], ["Yogurt", "3 tbsp"], ["Garam masala", "1 tsp"], ["Turmeric", "1/2 tsp"], ["Heavy cream", "2 tbsp"], ["Oil", "2 tbsp"]]
  },
  {
    title: "Royal Hyderabadi Dum Biryani",
    description: "Fragrant basmati rice layered with spiced meat, fried onions, mint, and saffron milk.",
    category: "Dinner",
    country: "India",
    prep: 50,
    servings: 5,
    image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken with yogurt, biryani masala, ginger-garlic, and mint for 30 minutes.\n2. Parboil basmati rice with whole spices until 70% cooked.\n3. Deep-fry sliced onions until crispy and golden brown.\n4. In a heavy pot, layer chicken at bottom, top with half-cooked rice, fried onions, saffron milk, and ghee.\n5. Seal tight and cook on dum for 25 minutes.",
    ingredients: [["Basmati rice", "2 cups"], ["Chicken", "500g"], ["Onions", "3 sliced"], ["Yogurt", "1/2 cup"], ["Biryani masala", "2 tbsp"], ["Saffron", "a pinch"], ["Milk", "1/4 cup"], ["Mint leaves", "1/2 cup"], ["Ghee", "3 tbsp"], ["Green chilies", "3"]]
  },
  {
    title: "Punjabi Chole Bhature",
    description: "Dark, spicy tea-steeped chickpea curry served with golden balloon fried bread.",
    category: "Lunch",
    country: "India",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil soaked chickpeas with a black tea bag for rich dark color and aroma.\n2. Knead flour with yogurt, pinch of baking powder, and water; rest 30 minutes.\n3. Sauté onions, ginger, tomatoes, and chole masala until fragrant; add chickpeas and simmer.\n4. Roll dough into ovals and deep-fry in hot oil until puffed and crisp.\n5. Serve hot with pickled onions.",
    ingredients: [["Chickpeas", "2 cups boiled"], ["Onion", "2 chopped"], ["Tomato", "2 pureed"], ["Chole masala", "2 tbsp"], ["Tea bag", "1"], ["All-purpose flour", "2 cups"], ["Yogurt", "3 tbsp"], ["Ginger", "1 inch julienned"], ["Green chilies", "2"], ["Oil", "for frying"]]
  },
  {
    title: "Kashmiri Rogan Josh",
    description: "Wazwan-style tender mutton in an aromatic gravy of Kashmiri chilies, fennel, and ginger.",
    category: "Dinner",
    country: "India",
    prep: 55,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat mustard oil until smoking, let cool slightly, then add whole spices and hing.\n2. Sear mutton chunks on high heat until browned.\n3. Whisk Kashmiri chili powder and fennel powder into yogurt; pour into the pot and stir continuously.\n4. Add water, cover, and slow-cook on low flame for 45 minutes until meat is tender.\n5. Garnish with fresh ginger slivers.",
    ingredients: [["Mutton or lamb", "500g"], ["Mustard oil", "3 tbsp"], ["Fennel powder", "1 tbsp"], ["Dry ginger powder", "1 tsp"], ["Kashmiri red chili powder", "2 tbsp"], ["Hing", "a pinch"], ["Whisked yogurt", "1/2 cup"], ["Cardamom", "4"], ["Cinnamon", "1 stick"]]
  },
  {
    title: "South Indian Masala Dosa",
    description: "Thin, crispy fermented rice-lentil crepe stuffed with spiced turmeric potato filling.",
    category: "Breakfast",
    country: "India",
    prep: 25,
    servings: 3,
    image_url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat oil in a pan; crackle mustard seeds, curry leaves, and green chilies.\n2. Add onions and sauté until translucent; add turmeric and mashed potatoes with salt.\n3. Heat a flat tawa; pour a ladle of batter and swirl into a thin round circle.\n4. Drizzle ghee around edges until golden and crisp.\n5. Place potato filling in center, fold, and serve with chutney and sambar.",
    ingredients: [["Dosa batter", "3 cups"], ["Potatoes", "3 boiled & mashed"], ["Onion", "1 sliced"], ["Mustard seeds", "1 tsp"], ["Curry leaves", "10"], ["Turmeric powder", "1/2 tsp"], ["Green chilies", "2"], ["Ghee or oil", "3 tbsp"], ["Fresh coriander", "2 tbsp"]]
  },
  {
    title: "Dal Makhani Bukhara Style",
    description: "Whole black lentils and red kidney beans slow-cooked with butter and fresh cream.",
    category: "Dinner",
    country: "India",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Pressure cook soaked urad dal and rajma with salt and water until soft.\n2. Mash lightly with the back of a ladle.\n3. Sauté ginger-garlic paste and tomato puree in butter until aromatic.\n4. Pour in cooked lentils and simmer on lowest heat for 30 minutes, stirring occasionally.\n5. Stir in cream, kasuri methi, and an extra pat of butter before serving.",
    ingredients: [["Whole black urad dal", "1 cup"], ["Rajma", "1/4 cup"], ["Butter", "4 tbsp"], ["Tomato puree", "1 cup"], ["Ginger-garlic paste", "1 tbsp"], ["Heavy cream", "1/4 cup"], ["Kashmiri chili powder", "1 tsp"], ["Kasuri methi", "1 tsp"], ["Salt", "to taste"]]
  },
  {
    title: "Dhaba Style Palak Paneer",
    description: "Fresh cottage cheese cubes simmered in a vibrant emerald spinach garlic gravy.",
    category: "Dinner",
    country: "India",
    prep: 30,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Blanch spinach in boiling salted water for 2 minutes, then plunge into ice water.\n2. Puree blanched spinach with green chili until smooth.\n3. Sauté cumin seeds, garlic, and onions in butter until golden.\n4. Add tomato and spices, then pour in spinach puree and simmer 5 minutes.\n5. Gently fold in paneer cubes and finish with a swirl of cream.",
    ingredients: [["Fresh spinach", "400g"], ["Paneer", "250g cubed"], ["Onion", "1 finely chopped"], ["Garlic", "6 cloves minced"], ["Tomato", "1 chopped"], ["Cumin seeds", "1 tsp"], ["Garam masala", "1/2 tsp"], ["Heavy cream", "2 tbsp"], ["Butter", "1 tbsp"]]
  },
  {
    title: "Mumbai Chowpatty Pav Bhaji",
    description: "Buttery spiced mashed potato and vegetable medley served with toasted pav buns.",
    category: "Snack",
    country: "India",
    prep: 30,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil potatoes, peas, and cauliflower until tender; mash thoroughly.\n2. Melt butter on a tawa; sauté onions and capsicum.\n3. Add tomatoes, pav bhaji masala, and chili; cook until mushy.\n4. Combine mashed vegetables with tomato base, adding water and mashing continuously.\n5. Slit pav buns and toast on tawa with generous butter. Serve with lemon slices.",
    ingredients: [["Potatoes", "3 boiled"], ["Green peas", "1/2 cup"], ["Cauliflower", "1/2 cup"], ["Capsicum", "1 chopped"], ["Onion", "2 chopped"], ["Tomatoes", "3 chopped"], ["Pav bhaji masala", "2 tbsp"], ["Butter", "4 tbsp"], ["Pav buns", "8"], ["Lemon", "1"]]
  },
  {
    title: "Kolkata Nizam's Chicken Kathi Roll",
    description: "Juicy spiced chicken rolled in a flaky egg-layered paratha with onions and lime.",
    category: "Snack",
    country: "India",
    prep: 25,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate chicken with yogurt and spices; sear in a hot skillet.\n2. Cook paratha, pour a beaten egg on tawa and press paratha over it to adhere.\n3. Flip and cook until golden.\n4. Place chicken in the center of the egg paratha.\n5. Top with sliced onions, chaat masala, mint chutney, and roll tightly.",
    ingredients: [["Boneless chicken", "300g"], ["Parathas", "2"], ["Eggs", "2"], ["Onion", "1 thinly sliced"], ["Green chilies", "2"], ["Chaat masala", "1 tsp"], ["Lemon juice", "1 tbsp"], ["Mint chutney", "2 tbsp"], ["Oil", "2 tbsp"]]
  },
  {
    title: "Goan Prawn Curry (Ambot Tik)",
    description: "Coastal fresh prawns in a spiced coconut milk and kokum tamarind gravy.",
    category: "Dinner",
    country: "India",
    prep: 30,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Grind grated coconut, dried chilies, coriander seeds, and garlic into a fine paste.\n2. Sauté the paste in coconut oil until fragrant.\n3. Add coconut milk and water to reach desired gravy consistency.\n4. Drop in kokum petals and bring to a simmer.\n5. Add cleaned prawns and cook for 4-5 minutes until tender.",
    ingredients: [["Prawns", "400g cleaned"], ["Coconut milk", "1 cup"], ["Grated coconut", "1/2 cup"], ["Dried red chilies", "5"], ["Coriander seeds", "1 tbsp"], ["Kokum petals", "4"], ["Garlic", "4 cloves"], ["Turmeric", "1/2 tsp"]]
  },
  {
    title: "Chettinad Spicy Pepper Chicken",
    description: "Fiery Tamil dry chicken roast bursting with freshly ground black peppercorns and fennel.",
    category: "Dinner",
    country: "India",
    prep: 35,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Dry roast black peppercorns and fennel seeds; coarsely grind.\n2. Heat coconut oil; crackle curry leaves and sauté shallots until golden.\n3. Add ginger-garlic paste and tomatoes; cook until soft.\n4. Add chicken, turmeric, salt, and half the pepper masala; cook covered.\n5. Roast uncovered on high heat with remaining pepper masala until dry and dark.",
    ingredients: [["Chicken", "500g"], ["Black peppercorns", "2 tbsp"], ["Fennel seeds", "1 tbsp"], ["Cumin seeds", "1 tsp"], ["Shallots or onions", "1 cup"], ["Curry leaves", "2 sprigs"], ["Ginger-garlic paste", "1 tbsp"], ["Tomatoes", "2 chopped"], ["Coconut oil", "2 tbsp"]]
  },
  {
    title: "Lucknowi Shahi Malai Kofta",
    description: "Cottage cheese and potato dumplings in a velvety cashew and cardamom cream gravy.",
    category: "Dinner",
    country: "India",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mix grated paneer, mashed potatoes, and cornstarch; shape into balls and deep-fry until golden.\n2. Sauté boiled onion paste and ginger-garlic paste in ghee.\n3. Add cashew paste, cardamom, and water; simmer until creamy.\n4. Place fried koftas in a serving dish.\n5. Pour hot velvety gravy over koftas and drizzle with cream.",
    ingredients: [["Paneer", "200g grated"], ["Boiled potatoes", "2 mashed"], ["Cornstarch", "2 tbsp"], ["Cashews", "20"], ["Heavy cream", "1/4 cup"], ["Onion", "2 pureed"], ["Ginger-garlic paste", "1 tbsp"], ["Cardamom powder", "1/2 tsp"], ["Ghee", "2 tbsp"]]
  },
  {
    title: "Dilliwali Samosa Chaat",
    description: "Crushed hot samosas topped with spiced chickpeas, sweet tamarind, yogurt, and sev.",
    category: "Snack",
    country: "India",
    prep: 20,
    servings: 3,
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Warm samosas until crisp and break two onto each plate.\n2. Ladle hot chickpea curry over the broken samosas.\n3. Drizzle with sweet yogurt, mint chutney, and tamarind chutney.\n4. Sprinkle with chopped red onions, chaat masala, and fresh coriander.\n5. Top with crunchy sev and serve immediately.",
    ingredients: [["Samosas", "4"], ["Chickpea curry (chole)", "1 cup"], ["Sweet whisked yogurt", "1/2 cup"], ["Mint chutney", "3 tbsp"], ["Tamarind chutney", "3 tbsp"], ["Red onion", "1 finely chopped"], ["Chaat masala", "1 tsp"], ["Sev", "1/2 cup"]]
  },
  {
    title: "Telangana Sarva Pindi",
    description: "Traditional Telangana savory rice flour pancake with chana dal, roasted peanuts, sesame seeds, and curry leaves.",
    category: "Snack",
    country: "India",
    prep: 25,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Soak chana dal in water for 30 minutes; coarsely crush peanuts.\n2. In a bowl, mix rice flour, soaked chana dal, crushed peanuts, sesame seeds, green chilies, curry leaves, and ginger-garlic paste into a soft dough.\n3. Grease a deep heavy pan with oil and press dough evenly along the bottom, making small holes.\n4. Pour small drops of oil into each hole for even crispness.\n5. Cover and cook on medium flame for 12-15 minutes until the bottom turns deep golden and crispy.",
    ingredients: [["Rice flour", "2 cups"], ["Chana dal", "3 tbsp soaked"], ["Peanuts", "1/4 cup roasted"], ["Sesame seeds", "2 tbsp"], ["Green chilies", "3 chopped"], ["Curry leaves", "2 sprigs"], ["Ginger-garlic paste", "1 tsp"], ["Cumin seeds", "1 tsp"], ["Oil", "3 tbsp"], ["Salt", "1 tsp"]]
  },
  {
    title: "Andhra Gongura Mamsam",
    description: "Iconic spicy, tangy Andhra mutton curry slow-cooked with fresh sorrel leaves and fiery Guntur chilies.",
    category: "Dinner",
    country: "India",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté washed gongura leaves and green chilies in 1 tbsp oil until wilted; grind into a coarse paste.\n2. Pressure cook mutton pieces with turmeric, salt, and ginger-garlic paste until tender.\n3. In a kadai, sauté whole spices, onions, and remaining ginger-garlic until golden.\n4. Add coriander powder, Guntur red chili powder, cooked mutton, and its broth; simmer 10 minutes.\n5. Fold in tart gongura paste and simmer on low for 6 minutes until oil surfaces. Serve with hot rice.",
    ingredients: [["Mutton", "500g"], ["Gongura leaves (sorrel)", "3 bunches"], ["Guntur red chili powder", "2 tbsp"], ["Onions", "2 chopped"], ["Ginger-garlic paste", "2 tbsp"], ["Green chilies", "4 slit"], ["Coriander powder", "1.5 tbsp"], ["Cloves and cinnamon", "4 each"], ["Oil", "3 tbsp"], ["Salt", "to taste"]]
  },
  {
    title: "Andhra Gutti Vankaya Kura",
    description: "Tender baby eggplants stuffed with a roasted peanut, sesame, coconut, and coriander spice paste.",
    category: "Dinner",
    country: "India",
    prep: 35,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Slit baby brinjals in a plus (+) shape keeping stems intact; soak in salted water.\n2. Dry roast peanuts, sesame seeds, grated coconut, coriander seeds, and cumin; grind into a thick paste with tamarind and salt.\n3. Stuff each brinjal generously with the spice paste; reserve leftover paste.\n4. Heat oil in a pan, crackle mustard seeds and curry leaves; sauté onions until translucent.\n5. Add stuffed brinjals, remaining paste, and 1 cup water. Cover and slow-simmer 18 minutes until brinjals are meltingly tender.",
    ingredients: [["Baby brinjals (eggplants)", "8"], ["Peanuts", "1/4 cup"], ["Sesame seeds", "2 tbsp"], ["Grated coconut", "3 tbsp"], ["Coriander seeds", "1 tbsp"], ["Tamarind paste", "1 tbsp"], ["Onion", "1 finely chopped"], ["Curry leaves", "1 sprig"], ["Chili powder", "1 tbsp"], ["Oil", "3 tbsp"]]
  },
  {
    title: "Andhra Natu Kodi Pulusu",
    description: "Fiery Andhra country chicken curry slow-simmered in a rich poppy seed, coconut, and pepper gravy.",
    category: "Dinner",
    country: "India",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Marinate country chicken pieces with turmeric, chili powder, and ginger-garlic paste for 20 minutes.\n2. Grind soaked poppy seeds, grated coconut, and spices with a little water into a smooth paste.\n3. Heat oil in a pressure cooker; temper with cinnamon, cloves, and curry leaves; sauté onions until deep golden.\n4. Add marinated country chicken and sear on high heat for 5 minutes.\n5. Pour in ground poppy-coconut paste and 2 cups water; pressure cook for 4-5 whistles until tender. Serve with hot crispy garelu.",
    ingredients: [["Country chicken (Natu Kodi)", "600g"], ["Poppy seeds", "1.5 tbsp soaked"], ["Grated coconut", "3 tbsp"], ["Onions", "2 chopped"], ["Ginger-garlic paste", "2 tbsp"], ["Red chili powder", "2 tbsp"], ["Curry leaves", "2 sprigs"], ["Coriander powder", "1 tbsp"], ["Garam masala", "1 tsp"], ["Oil or ghee", "3 tbsp"]]
  },
  {
    title: "Telangana Golichina Mamsam",
    description: "Fiery Telangana rustic slow-roasted mutton fry coated in caramelized onions and black pepper.",
    category: "Dinner",
    country: "India",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cook mutton pieces with turmeric, salt, and 1 tbsp ginger-garlic paste in a pressure cooker until 80% tender.\n2. In a heavy iron kadai, heat oil and fry sliced onions, slit green chilies, and curry leaves until golden brown.\n3. Add cooked mutton chunks with remaining broth; boil on high flame until liquid evaporates.\n4. Add chili powder and coriander powder; roast on low flame for 15 minutes, stirring frequently until deeply browned.\n5. Finish with freshly cracked black peppercorns and garam masala until every piece is richly coated.",
    ingredients: [["Mutton", "500g cut into cubes"], ["Onions", "2 thinly sliced"], ["Ginger-garlic paste", "2 tbsp"], ["Black peppercorns", "1.5 tbsp crushed"], ["Green chilies", "4 slit"], ["Curry leaves", "3 sprigs"], ["Red chili powder", "1 tbsp"], ["Coriander powder", "1 tbsp"], ["Garam masala", "1 tsp"], ["Oil", "3 tbsp"]]
  },

  // ==================== ITALY (6) ====================
  {
    title: "Roman Spaghetti alla Carbonara",
    description: "Authentic Roman pasta tossed with crispy guanciale, rich egg yolks, and Pecorino Romano.",
    category: "Dinner",
    country: "Italy",
    prep: 20,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Cook spaghetti in boiling salted water until al dente; reserve pasta water.\n2. Fry diced guanciale or pancetta in a skillet until crisp.\n3. Whisk egg yolks, grated Pecorino Romano, and cracked black pepper into a thick cream.\n4. Toss hot pasta in the skillet with the crispy pork.\n5. Remove from heat, stir in egg mixture with a splash of pasta water until glossy and velvety.",
    ingredients: [["Spaghetti", "250g"], ["Guanciale or pancetta", "100g"], ["Egg yolks", "3"], ["Whole egg", "1"], ["Pecorino Romano cheese", "60g grated"], ["Black pepper", "2 tsp cracked"], ["Salt", "for pasta water"]]
  },
  {
    title: "Artisanal Pizza Margherita",
    description: "Neapolitan classic with crushed San Marzano tomatoes, fresh mozzarella, and sweet basil.",
    category: "Lunch",
    country: "Italy",
    prep: 25,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Stretch dough ball into a 10-12 inch round with a raised crust edge.\n2. Spread crushed San Marzano tomatoes lightly over the base.\n3. Tear fresh mozzarella chunks and scatter evenly.\n4. Bake on a hot pizza stone at 250°C (485°F) for 8-10 minutes until cheese bubbles and crust blisters.\n5. Finish with fresh basil leaves and a drizzle of extra virgin olive oil.",
    ingredients: [["Pizza dough", "1 ball"], ["San Marzano tomatoes", "1 cup crushed"], ["Fresh mozzarella", "150g sliced"], ["Fresh basil", "8 leaves"], ["Extra virgin olive oil", "2 tbsp"], ["Sea salt", "1/2 tsp"]]
  },
  {
    title: "Creamy Wild Mushroom Risotto",
    description: "Slow-stirred arborio rice cooked with sautéed mushrooms, vegetable broth, and parmesan.",
    category: "Dinner",
    country: "Italy",
    prep: 35,
    servings: 3,
    image_url: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté sliced mushrooms in olive oil until golden brown; set aside.\n2. Sauté minced shallots in butter; add arborio rice and toast for 2 minutes.\n3. Pour in white wine and stir until fully absorbed.\n4. Add warm broth ladle by ladle, stirring continuously until rice is creamy and al dente.\n5. Remove from heat, vigorously beat in remaining butter and parmesan, then fold in mushrooms.",
    ingredients: [["Arborio rice", "1.5 cups"], ["Mixed mushrooms", "300g sliced"], ["Vegetable broth", "4 cups warm"], ["Shallot", "1 minced"], ["White wine", "1/2 cup"], ["Butter", "3 tbsp"], ["Parmesan cheese", "1/2 cup grated"], ["Olive oil", "2 tbsp"]]
  },
  {
    title: "Classic Lasagna alla Bolognese",
    description: "Layered pasta sheets with rich slow-cooked meat ragu, creamy bechamel, and melted cheese.",
    category: "Dinner",
    country: "Italy",
    prep: 60,
    servings: 6,
    image_url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté diced onion, carrot, and celery; brown ground meat thoroughly.\n2. Add crushed tomatoes, cover and simmer 40 minutes into a rich Bolognese sauce.\n3. Make bechamel by whisking flour into melted butter, then whisking in warm milk and nutmeg until smooth.\n4. Layer ragu, pasta sheets, bechamel, and grated cheese in a baking dish.\n5. Bake at 190°C (375°F) for 35 minutes until bubbling and golden.",
    ingredients: [["Lasagna sheets", "12"], ["Ground beef", "400g"], ["Crushed tomatoes", "2 cups"], ["Onion", "1"], ["Carrot", "1"], ["Milk", "2 cups"], ["Butter", "3 tbsp"], ["Flour", "3 tbsp"], ["Mozzarella & Parmesan", "1.5 cups grated"]]
  },
  {
    title: "Roman Tonnarelli Cacio e Pepe",
    description: "Minimalist Roman pasta perfection with sharp Pecorino Romano and toasted black pepper.",
    category: "Dinner",
    country: "Italy",
    prep: 15,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toast cracked black peppercorns in a dry skillet for 1 minute until fragrant.\n2. Add a ladle of hot pasta water to the skillet to create a peppery broth.\n3. Whisk grated Pecorino with a splash of warm pasta water into a smooth paste.\n4. Drop al dente pasta into the skillet.\n5. Off the heat, toss vigorously with the Pecorino cream until a silky sauce coats every strand.",
    ingredients: [["Spaghetti or tonnarelli", "250g"], ["Pecorino Romano cheese", "100g finely grated"], ["Black peppercorns", "1.5 tbsp whole cracked"], ["Sea salt", "for pasta water"]]
  },
  {
    title: "Authentic Venetian Tiramisù",
    description: "Espresso-dipped ladyfingers layered with rich mascarpone cream and Dutch cocoa powder.",
    category: "Dessert",
    country: "Italy",
    prep: 30,
    servings: 6,
    image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk egg yolks with sugar until pale and thick; fold in mascarpone gently.\n2. Whip egg whites to stiff peaks and fold into mascarpone cream.\n3. Dip ladyfinger biscuits briefly into cooled espresso (1 second per side).\n4. Arrange a layer of dipped biscuits in a dish and spread half the mascarpone cream.\n5. Repeat with a second layer, dust generously with cocoa powder, and chill 4 hours.",
    ingredients: [["Ladyfingers (savoiardi)", "24"], ["Mascarpone cheese", "400g"], ["Eggs", "3 separated"], ["Sugar", "1/2 cup"], ["Brewed espresso", "1.5 cups cooled"], ["Cocoa powder", "3 tbsp unsweetened"]]
  },

  // ==================== MEXICO (6) ====================
  {
    title: "Crispy Birria QuesaTacos",
    description: "Braised beef folded in corn tortillas, dipped in red consommé, and griddled with cheese.",
    category: "Dinner",
    country: "Mexico",
    prep: 50,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toast dried chilies and blend with garlic, onion, cumin, and vinegar into a smooth paste.\n2. Sear beef chuck roast; pour in chili sauce and broth; simmer for 2 hours until tender.\n3. Shred beef and skim red chili fat from the broth.\n4. Dip tortillas in the warm broth; griddle on hot pan with cheese and shredded beef.\n5. Fold in half and fry until crisp; serve with bowls of warm consommé for dipping.",
    ingredients: [["Beef roast", "600g"], ["Dried guajillo chilies", "4"], ["Corn tortillas", "12"], ["Oaxaca or Jack cheese", "200g"], ["Beef broth", "3 cups"], ["Onion", "1"], ["Garlic", "4 cloves"], ["Cilantro & lime", "for garnish"]]
  },
  {
    title: "Enchiladas Verdes Suizas",
    description: "Corn tortillas rolled with shredded chicken in roasted tomatillo salsa and melted cheese.",
    category: "Dinner",
    country: "Mexico",
    prep: 35,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Boil tomatillos, chilies, and garlic; blend with cilantro and stir in Mexican crema.\n2. Lightly soften tortillas in hot oil for 5 seconds.\n3. Roll shredded chicken in each tortilla and arrange in a baking dish.\n4. Pour hot green salsa over enchiladas and top with shredded cheese.\n5. Bake at 200°C (400°F) for 15 minutes until bubbly and golden.",
    ingredients: [["Corn tortillas", "10"], ["Shredded chicken", "300g cooked"], ["Fresh tomatillos", "500g"], ["Jalapeño peppers", "2"], ["Mexican crema or sour cream", "1/2 cup"], ["Monterey Jack cheese", "1.5 cups shredded"], ["Cilantro", "1 cup"]]
  },
  {
    title: "Authentic Aztec Guacamole & Chips",
    description: "Stone-crushed Hass avocados with fresh lime juice, diced jalapeño, onion, and cilantro.",
    category: "Snack",
    country: "Mexico",
    prep: 15,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mash finely diced onion, jalapeño, and salt in a bowl with a fork to release juices.\n2. Halve avocados, scoop flesh into the bowl, and coarsely mash with a fork.\n3. Gently fold in diced tomatoes, chopped cilantro, and fresh lime juice.\n4. Season to taste with sea salt.\n5. Serve immediately with warm, crispy tortilla chips.",
    ingredients: [["Ripe avocados", "3"], ["Fresh limes", "2 juiced"], ["White onion", "1/2 diced"], ["Jalapeño", "1 minced"], ["Tomato", "1 diced"], ["Fresh cilantro", "1/4 cup"], ["Sea salt", "1 tsp"], ["Tortilla chips", "1 bag"]]
  },
  {
    title: "Michoacán Pork Carnitas",
    description: "Slow-confit Mexican pulled pork with juicy interiors and crispy browned edges.",
    category: "Dinner",
    country: "Mexico",
    prep: 55,
    servings: 5,
    image_url: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Rub pork shoulder chunks with salt, cumin, and Mexican oregano.\n2. Brown pork chunks in a Dutch oven with oil or lard.\n3. Add fresh orange juice, orange peel, garlic cloves, bay leaves, and water to cover.\n4. Simmer uncovered for 2 hours until water evaporates and meat is tender.\n5. Fry in its own rendered fat for 5 minutes until crispy on edges. Shred coarsely for tacos.",
    ingredients: [["Pork shoulder", "750g"], ["Orange", "1 juiced with peel"], ["Garlic", "4 cloves smashed"], ["Cumin", "1 tsp"], ["Dried oregano", "1 tsp"], ["Bay leaves", "2"], ["Salt", "1.5 tsp"], ["Oil", "3 tbsp"]]
  },
  {
    title: "Chiles Rellenos de Queso",
    description: "Charred poblano peppers stuffed with melting cheese, fried in an airy golden egg batter.",
    category: "Dinner",
    country: "Mexico",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Char poblano peppers over high flame until blackened; steam in a bag 10 minutes and peel.\n2. Slit open, remove seeds, and stuff with sticks of melting cheese.\n3. Dust peppers lightly in flour.\n4. Whip egg whites to stiff peaks, fold in yolks and salt to create a fluffy batter.\n5. Dip peppers into batter and shallow-fry until golden. Serve with warm tomato caldillo.",
    ingredients: [["Poblano peppers", "4 large"], ["Oaxaca or Jack cheese", "250g"], ["Eggs", "3 separated"], ["Flour", "1/2 cup"], ["Oil", "for frying"], ["Tomatoes", "4 for sauce"], ["Onion", "1/2"]]
  },
  {
    title: "Jalisco Pozole Rojo",
    description: "Hearty Mexican soup of hominy corn and braised meat in a rich guajillo-ancho chili broth.",
    category: "Dinner",
    country: "Mexico",
    prep: 50,
    servings: 6,
    image_url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Simmer pork chunks in 6 cups of water with onion and garlic until tender; skim broth.\n2. Soak dried guajillo and ancho chilies; blend with garlic and oregano into a red sauce.\n3. Strain red chili sauce into the simmering pork broth.\n4. Add drained hominy corn and simmer for 30 minutes so flavors meld.\n5. Ladle into bowls and serve with fresh radishes, shredded cabbage, and lime wedges.",
    ingredients: [["White hominy corn", "1 can (800g)"], ["Pork shoulder", "500g cubed"], ["Dried guajillo chilies", "4"], ["Dried ancho chili", "1"], ["Garlic", "6 cloves"], ["Onion", "1"], ["Mexican oregano", "1 tbsp"], ["Radishes & cabbage", "for garnish"]]
  },

  // ==================== CHINA (6) ====================
  {
    title: "Sichuan Kung Pao Chicken",
    description: "Wok-seared diced chicken with roasted peanuts, scallions, and numbing Sichuan peppercorns.",
    category: "Dinner",
    country: "China",
    prep: 25,
    servings: 3,
    image_url: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Toss diced chicken with soy sauce and cornstarch; rest 10 minutes.\n2. Stir-fry dried red chilies and Sichuan peppercorns in hot oil until fragrant.\n3. Add chicken and flash-fry on highest heat until cooked through.\n4. Add garlic, ginger, and scallions; pour in sauce (soy sauce, black vinegar, sugar).\n5. Toss vigorously until glossy, stir in roasted peanuts, and serve hot.",
    ingredients: [["Chicken thighs", "400g diced"], ["Roasted peanuts", "1/2 cup"], ["Dried red chilies", "8"], ["Sichuan peppercorns", "1 tsp"], ["Scallions", "4 batons"], ["Soy sauce", "2 tbsp"], ["Black vinegar", "1.5 tbsp"], ["Cornstarch", "1 tbsp"]]
  },
  {
    title: "Handmade Pork & Chive Dumplings",
    description: "Savory potstickers packed with seasoned minced pork and fresh garlic chives.",
    category: "Lunch",
    country: "China",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mix minced pork with soy sauce, sesame oil, ginger, and garlic chives until sticky.\n2. Spoon 1 tbsp filling into each dumpling wrapper, moisten edges with water, pleat and seal.\n3. Heat oil in a flat skillet; place dumplings flat-side down and cook 2 minutes until browned.\n4. Pour in 1/3 cup water, immediately cover tightly, and steam 6 minutes.\n5. Uncover and let liquid evaporate until bottoms are crispy. Serve with chili soy dip.",
    ingredients: [["Dumpling wrappers", "30"], ["Ground pork", "350g"], ["Chinese chives", "1.5 cups chopped"], ["Ginger", "1 tbsp minced"], ["Soy sauce", "2 tbsp"], ["Sesame oil", "1 tbsp"], ["White pepper", "1/2 tsp"], ["Oil", "for frying"]]
  },
  {
    title: "Cantonese Char Siu BBQ Pork",
    description: "Sweet and savory barbecued pork tenderloin strips roasted with a honey-maltose glaze.",
    category: "Dinner",
    country: "China",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk hoisin sauce, soy sauce, honey, five-spice powder, and garlic into a marinade.\n2. Coat pork strips thoroughly and marinate for at least 4 hours.\n3. Roast on a wire rack at 200°C (400°F) for 25 minutes, turning once.\n4. Brush pork generously with honey glaze.\n5. Broil for 3-5 minutes until caramelized and charred at edges. Slice thinly and serve.",
    ingredients: [["Pork tenderloin or shoulder", "600g"], ["Hoisin sauce", "2 tbsp"], ["Soy sauce", "2 tbsp"], ["Honey", "3 tbsp"], ["Chinese five-spice", "1 tsp"], ["Garlic", "3 cloves minced"]]
  },
  {
    title: "Authentic Sichuan Mapo Tofu",
    description: "Silken tofu in fiery fermented chili-bean paste sauce with Sichuan tingling málà heat.",
    category: "Dinner",
    country: "China",
    prep: 25,
    servings: 3,
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Simmer tofu cubes in salted water for 2 minutes to firm up; drain.\n2. Brown minced beef in a wok until crispy.\n3. Add Doubanjiang chili paste and fermented black beans; stir-fry until oil turns bright red.\n4. Add garlic, ginger, and 1 cup broth; slide in drained tofu and simmer 4 minutes.\n5. Drizzle cornstarch slurry until glossy; finish with ground Sichuan peppercorns.",
    ingredients: [["Silken tofu", "400g cubed"], ["Minced beef", "100g"], ["Doubanjiang chili paste", "2 tbsp"], ["Fermented black beans", "1 tbsp"], ["Sichuan pepper powder", "1 tsp"], ["Scallions", "2 sliced"], ["Cornstarch slurry", "2 tbsp"]]
  },
  {
    title: "Chengdu Dan Dan Noodles",
    description: "Noodles in a spicy sesame-chili oil broth crowned with crispy minced pork and greens.",
    category: "Lunch",
    country: "China",
    prep: 20,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Fry ground pork with garlic and pickled mustard greens until crisp and dry.\n2. In serving bowls, mix sesame paste, chili oil, soy sauce, black vinegar, and warm broth.\n3. Boil fresh noodles until chewy al dente; drain well.\n4. Place hot noodles directly into the bowls of sauce.\n5. Top with crispy pork mince, toasted peanuts, and scallions. Toss thoroughly before enjoying.",
    ingredients: [["Fresh Chinese noodles", "300g"], ["Ground pork", "150g"], ["Sichuan chili oil", "2 tbsp"], ["Sesame paste or tahini", "2 tbsp"], ["Soy sauce", "2 tbsp"], ["Pickled mustard greens", "2 tbsp"], ["Scallions & peanuts", "for topping"]]
  },
  {
    title: "Cantonese Dim Sum Siu Mai",
    description: "Open-basket steamed dumplings packed with minced pork, shrimp, shiitake, and sesame.",
    category: "Snack",
    country: "China",
    prep: 30,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Mix minced pork, diced shrimp, minced mushrooms, soy sauce, and cornstarch.\n2. Beat mixture vigorously in one direction until bouncy.\n3. Cup a wrapper in your hand, fill with 1 tbsp meat, and squeeze into an open-topped basket.\n4. Garnish the exposed top with finely grated carrot.\n5. Steam in a bamboo steamer over boiling water for 8-10 minutes.",
    ingredients: [["Wonton wrappers", "20 rounds"], ["Ground pork", "250g"], ["Raw shrimp", "150g peeled & diced"], ["Dried shiitake mushrooms", "2 rehydrated"], ["Soy sauce", "1 tbsp"], ["Sesame oil", "1 tsp"], ["Cornstarch", "1 tbsp"], ["Carrot", "for topping"]]
  },

  // ==================== FRANCE (5) ====================
  {
    title: "Parisian French Onion Soup",
    description: "Slow-caramelized sweet onions in rich savory broth with toasted baguette and melted Gruyère.",
    category: "Dinner",
    country: "France",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté sliced onions in butter on low heat for 35 minutes until deep mahogany brown.\n2. Deglaze pot with white wine, scraping up all browned bits.\n3. Add beef broth and fresh thyme; simmer gently for 20 minutes.\n4. Ladle hot soup into oven-safe bowls; float toasted baguette slices on top.\n5. Smother with grated Gruyère cheese and broil 4 minutes until bubbling and golden.",
    ingredients: [["Yellow onions", "4 large sliced"], ["Butter", "3 tbsp"], ["Beef broth", "4 cups"], ["Dry white wine", "1/2 cup"], ["Fresh thyme", "3 sprigs"], ["French baguette", "8 toasted slices"], ["Gruyère cheese", "1.5 cups grated"]]
  },
  {
    title: "Burgundy Beef Bourguignon",
    description: "Tender beef chuck slow-simmered in red wine with bacon lardons, carrots, and mushrooms.",
    category: "Dinner",
    country: "France",
    prep: 70,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté bacon lardons until crisp; sear beef chunks in bacon fat until deeply browned.\n2. Stir in tomato paste, garlic, and flour; cook 1 minute.\n3. Pour in red wine and beef stock; add browned bacon, sliced carrots, and thyme.\n4. Cover and braise on low heat for 1.5 hours until beef is melt-in-mouth tender.\n5. Sauté mushrooms and pearl onions in butter; stir into stew for the final 15 minutes.",
    ingredients: [["Beef chuck roast", "700g cubed"], ["Bacon lardons", "150g diced"], ["Dry red wine", "2 cups"], ["Beef stock", "2 cups"], ["Carrots", "3 sliced"], ["Button mushrooms", "200g halved"], ["Pearl onions", "10"], ["Tomato paste", "1 tbsp"], ["Garlic & thyme", "to taste"]]
  },
  {
    title: "Provençal Ratatouille",
    description: "French summer vegetable stew of tender eggplant, zucchini, bell peppers, and tomatoes.",
    category: "Dinner",
    country: "France",
    prep: 40,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Sauté diced eggplant in olive oil until golden; set aside.\n2. Sauté zucchini cubes until tender-crisp; set aside.\n3. Sauté onions, garlic, and bell peppers until softened; stir in diced tomatoes and Herbes de Provence.\n4. Return eggplant and zucchini to the pot.\n5. Cover and simmer gently for 15 minutes until flavors meld. Garnish with fresh basil.",
    ingredients: [["Eggplant", "1 diced"], ["Zucchini", "2 diced"], ["Bell peppers", "2 diced"], ["Plum tomatoes", "3 diced"], ["Onion", "1 chopped"], ["Garlic", "4 cloves minced"], ["Olive oil", "4 tbsp"], ["Herbes de Provence", "1 tbsp"], ["Fresh basil", "handful"]]
  },
  {
    title: "Classic Parisian Croque Monsieur",
    description: "Decadent toasted sandwich with smoked ham and silky béchamel under broiled Gruyère.",
    category: "Lunch",
    country: "France",
    prep: 20,
    servings: 2,
    image_url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Whisk flour into melted butter, then whisk in warm milk until a smooth béchamel thickens.\n2. Toast bread slices; spread Dijon mustard on bottom slices.\n3. Layer smoked ham, a spoonful of béchamel, and grated Gruyère; close with top bread slice.\n4. Spread remaining béchamel over the top of the sandwich and scatter with more Gruyère.\n5. Bake at 200°C (400°F) for 10 minutes, then broil 3 minutes until bubbling and golden-brown.",
    ingredients: [["Sourdough or brioche bread", "4 slices"], ["Smoked ham", "4 slices"], ["Gruyère cheese", "150g grated"], ["Butter", "2 tbsp"], ["Flour", "1.5 tbsp"], ["Milk", "1 cup"], ["Dijon mustard", "1 tbsp"], ["Nutmeg", "a pinch"]]
  },
  {
    title: "Vanilla Bean Crème Brûlée",
    description: "Baked rich vanilla custard finished with a brittle, crackling layer of torched caramelized sugar.",
    category: "Dessert",
    country: "France",
    prep: 45,
    servings: 4,
    image_url: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
    instructions: "1. Heat cream with vanilla bean seeds and pod until warm; steep 15 minutes.\n2. Whisk egg yolks with sugar until combined.\n3. Slowly whisk warm cream into yolks to temper; strain into 4 ramekins.\n4. Place ramekins in a baking pan with hot water halfway up sides (water bath).\n5. Bake at 160°C (325°F) for 35-40 minutes until set with gentle wobble. Chill 4 hours, sprinkle sugar on top, and torch until amber crisp.",
    ingredients: [["Heavy whipping cream", "2 cups"], ["Egg yolks", "5"], ["Sugar", "1/3 cup + 4 tbsp for crust"], ["Vanilla bean or paste", "1 pod"], ["Pinch of salt", "1"]]
  }
];

(async () => {
  console.log("Starting database seed with 37 authentic world recipes...");
  const email = "demo@recipemaker.com";
  let { data: user } = await supabase.from("users").select("id").eq("email", email).maybeSingle();
  if (!user) {
    const password_hash = await bcrypt.hash("Demo@1234", 10);
    const r = await supabase.from("users").insert({ name: "Executive Chef", email, password_hash }).select("id").single();
    if (r.error) {
      console.error("Could not create demo user:", r.error.message);
      process.exit(1);
    }
    user = r.data;
  }

  // Check if recipes already exist
  const { data: existing } = await supabase.from("recipes").select("title");
  const existingTitles = new Set((existing || []).map((e) => e.title.toLowerCase().trim()));

  let insertedCount = 0;
  for (const item of RECIPES_SEED) {
    if (existingTitles.has(item.title.toLowerCase().trim())) {
      continue;
    }

    // Try inserting with country and image_url first
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

    // If database schema does not have country/image_url columns yet, embed in description
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
        item.ingredients.map(([name, quantity]) => ({ recipe_id: rec.id, name, quantity }))
      );
      insertedCount++;
    }
  }

  console.log(`Seed complete! Added ${insertedCount} new recipes. Total in catalog: ${insertedCount + existingTitles.size}`);
  console.log("Demo login: demo@recipemaker.com / Demo@1234");
})();
