-- Run this in Supabase SQL Editor if you already created the tables earlier:
ALTER TABLE recipes ADD COLUMN IF NOT EXISTS image_url text DEFAULT '';
ALTER TABLE recipes ADD COLUMN IF NOT EXISTS country text DEFAULT 'India';
CREATE INDEX IF NOT EXISTS idx_recipes_country ON recipes(country);
