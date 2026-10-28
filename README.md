# 🍳 Recipe Maker — Authentic World & Indian Recipes

A modern full-stack web application where users explore authentic culinary masterpieces from **India 🇮🇳, Italy 🇮🇹, Mexico 🇲🇽, China 🇨🇳, and France 🇫🇷**, discover what they can cook with their available ingredients, and register to add, share, and bookmark their own recipes with photos.

---

## 🌟 Key Features

1. **40 Authentic Master Recipes by Country:**
   - 🇮🇳 **India (14 regional specialties):** Butter Chicken, Paneer Tikka Masala, Royal Hyderabadi Biryani, Punjabi Chole Bhature, Kashmiri Rogan Josh, Masala Dosa, Dal Makhani, Palak Paneer, Mumbai Pav Bhaji, Kolkata Kathi Roll, Goan Prawn Curry, Chettinad Pepper Chicken, Malai Kofta, Samosa Chaat.
   - 🇮🇹 **Italy (6 trattoria classics):** Spaghetti alla Carbonara, Pizza Margherita, Creamy Mushroom Risotto, Lasagna Bolognese, Cacio e Pepe, Authentic Venetian Tiramisù.
   - 🇲🇽 **Mexico (6 heritage dishes):** Crispy Birria QuesaTacos, Enchiladas Verdes Suizas, Aztec Guacamole & Chips, Pork Carnitas, Chiles Rellenos, Jalisco Pozole Rojo.
   - 🇨🇳 **China (6 wok & dim sum dishes):** Sichuan Kung Pao Chicken, Handmade Pork & Chive Dumplings, Char Siu BBQ Pork, Mapo Tofu, Chengdu Dan Dan Noodles, Cantonese Siu Mai.
   - 🇫🇷 **France (5 haute cuisine legends):** Parisian French Onion Soup, Burgundy Beef Bourguignon, Provençal Ratatouille, Croque Monsieur, Vanilla Bean Crème Brûlée.

2. **High-Definition Food Photography:**
   - Every recipe comes with an optimized, publicly accessible high-resolution photo.
   - Robust fallback handling ensures photos load reliably on any machine or browser.

3. **Smart "What can I cook?" Pantry Matcher:**
   - Type in the ingredients in your kitchen (e.g. `chicken, tomato, butter` or `paneer, onion`).
   - Ranks recipes by matching percentage (`%`) and highlights missing ingredients.

4. **Registered User Recipe Publishing:**
   - Any registered/logged-in user can click **"+ Add Recipe"** or go to **"My Recipes"** to add their own creations with:
     - Title & Description
     - Country / Cuisine selector (India, Italy, Mexico, China, France, Other)
     - Category (Breakfast, Lunch, Dinner, Snack, Dessert, Drink)
     - Prep time & Servings
     - Image URL (with automatic appetizing food photo fallback if omitted)
     - Dynamic Ingredients list with quantities
     - Cooking instructions
   - Newly added recipes are immediately published and displayed for everyone!
   - Authors can edit or delete their own recipes.

5. **Favorites & Bookmarks:**
   - 1-click heart icon to save favorite dishes to a personal bookmark list.

6. **Dual Mode / Offline Resilient:**
   - **Full Stack Mode:** Runs with Express & Supabase PostgreSQL backend.
   - **Standalone / Demo Mode:** Can be opened directly in any browser (`frontend/index.html`) with all 40 recipes, images, search, country filtering, and ingredient matching working offline!

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, Modern CSS3, JavaScript (ES6+). Zero external framework dependencies.
- **Backend:** Node.js + Express.
- **Database:** Supabase PostgreSQL with Row Level Security (RLS).
- **Security:** `bcryptjs` for password hashing, `httpOnly` signed JWT cookies, `helmet` security headers configured with external media support, `express-rate-limit`.

---

## 🚀 How to Run

### Option 1: Direct Browser Launch (Quickest)
Double-click `frontend/index.html` to open it in your browser. All 40 recipes, images, filters, and the "What can I cook?" tool work immediately!

### Option 2: Full-Stack Mode (Express + Supabase)
1. Open a terminal in the `backend` folder:
   ```bash
   cd backend
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

### Demo Account (Pre-configured)
- **Email:** `demo@recipemaker.com`
- **Password:** `Demo@1234`

---

## 📁 Project Structure

```text
recipe-maker/
├── frontend/
│   ├── index.html        # Main application UI
│   ├── styles.css        # Clean, modern responsive design
│   ├── app.js            # Frontend application logic & API client
│   └── seed-recipes.js   # 40 authentic global recipes & image catalog
├── backend/
│   ├── server.js         # Express server & Helmet security configuration
│   ├── supabase.js       # Supabase database client
│   ├── routes/
│   │   ├── auth.js       # Register, login, logout, me
│   │   ├── recipes.js    # Recipes CRUD, search, country filter & matching
│   │   └── favorites.js  # Favorites bookmarking
│   ├── middleware/
│   │   ├── auth.js       # JWT cookie authentication
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── seed.js       # Database seeder with 40 world recipes
│   │   └── validate.js   # Input validation
│   └── .env              # Secrets (PORT, JWT_SECRET, SUPABASE credentials)
├── database/
│   ├── schema.sql        # Full Supabase SQL schema
│   └── add_image_and_country.sql # Quick migration script
└── README.md
```
