-- Recipe Maker database schema (run once in Supabase SQL Editor)
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 60),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists recipes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 100),
  description text not null default '' check (char_length(description) <= 300),
  category text not null check (category in ('Breakfast','Lunch','Dinner','Snack','Dessert','Drink')),
  country text not null default 'India' check (char_length(country) <= 60),
  image_url text default '',
  prep_time_minutes integer not null check (prep_time_minutes between 1 and 1440),
  servings integer not null check (servings between 1 and 100),
  instructions text not null check (char_length(instructions) between 10 and 5000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists recipe_ingredients (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid not null references recipes(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 80),
  quantity text not null default '' check (char_length(quantity) <= 40)
);

create table if not exists favorites (
  user_id uuid not null references users(id) on delete cascade,
  recipe_id uuid not null references recipes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

create index if not exists idx_recipes_user on recipes(user_id);
create index if not exists idx_recipes_category on recipes(category);
create index if not exists idx_recipes_country on recipes(country);
create index if not exists idx_ingredients_recipe on recipe_ingredients(recipe_id);
create index if not exists idx_favorites_user on favorites(user_id);

create or replace function set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

drop trigger if exists trg_recipes_updated on recipes;
create trigger trg_recipes_updated before update on recipes
for each row execute function set_updated_at();

-- Row Level Security: enabled with NO public policies, so the browser
-- (anon key) can never read or write these tables directly.
-- Only our Express backend (service-role key) can access them.
alter table users enable row level security;
alter table recipes enable row level security;
alter table recipe_ingredients enable row level security;
alter table favorites enable row level security;
