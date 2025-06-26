-- Doumar's Website Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Menu Categories
CREATE TABLE menu_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Menu Items
CREATE TABLE menu_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_id UUID REFERENCES menu_categories(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Item Customizations (for add-ons, modifications)
CREATE TABLE item_customizations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    item_id UUID REFERENCES menu_items(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    options JSONB NOT NULL, -- Array of options with prices
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID, -- For registered users (optional)
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled')),
    order_type VARCHAR(20) NOT NULL CHECK (order_type IN ('pickup', 'delivery')),
    customer_name VARCHAR(200) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    customer_email VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order Items
CREATE TABLE order_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    item_id UUID REFERENCES menu_items(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    customizations JSONB, -- Selected customizations
    price DECIMAL(10,2) NOT NULL, -- Price at time of order
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Catering Requests
CREATE TABLE catering_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    event_date DATE NOT NULL,
    guest_count INTEGER NOT NULL,
    message TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'confirmed', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Catering Packages
CREATE TABLE catering_packages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price_per_person DECIMAL(10,2) NOT NULL,
    min_guests INTEGER NOT NULL DEFAULT 10,
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products (Merchandise)
CREATE TABLE products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    images TEXT[] NOT NULL DEFAULT '{}',
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product Variants (sizes, colors)
CREATE TABLE product_variants (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    size VARCHAR(50),
    color VARCHAR(50),
    sku VARCHAR(100) UNIQUE,
    additional_price DECIMAL(10,2) DEFAULT 0,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Historical Photos
CREATE TABLE historical_photos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    year INTEGER,
    image_url TEXT NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Testimonials
CREATE TABLE testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_name VARCHAR(200) NOT NULL,
    review TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO menu_categories (name, description, display_order) VALUES
('Cones & Ice Cream', 'Our famous waffle cones and ice cream treats', 1),
('BBQ Sandwiches', 'Delicious barbecue sandwiches made fresh daily', 2),
('Beverages', 'Refreshing drinks including our famous limeade', 3),
('Sides', 'Perfect accompaniments to your meal', 4);

INSERT INTO menu_items (category_id, name, description, price, available) VALUES
((SELECT id FROM menu_categories WHERE name = 'Cones & Ice Cream'), 'Original Waffle Cone', 'Our world-famous waffle cone made fresh on the original 1905 machine', 4.50, true),
((SELECT id FROM menu_categories WHERE name = 'Cones & Ice Cream'), 'Ice Cream Sundae', 'Premium ice cream topped with your choice of syrup, whipped cream, and cherry', 6.95, true),
((SELECT id FROM menu_categories WHERE name = 'BBQ Sandwiches'), 'BBQ Pork Sandwich', 'Slow-cooked pork barbecue on a fresh bun', 8.95, true),
((SELECT id FROM menu_categories WHERE name = 'BBQ Sandwiches'), 'BBQ Beef Sandwich', 'Tender beef barbecue with our signature sauce', 9.95, true),
((SELECT id FROM menu_categories WHERE name = 'Beverages'), 'Famous Limeade', 'Our signature limeade recipe, served ice cold', 3.50, true),
((SELECT id FROM menu_categories WHERE name = 'Beverages'), 'Sweet Tea', 'Southern-style sweet tea', 2.95, true),
((SELECT id FROM menu_categories WHERE name = 'Sides'), 'French Fries', 'Crispy golden fries', 3.95, true),
((SELECT id FROM menu_categories WHERE name = 'Sides'), 'Coleslaw', 'Fresh, creamy coleslaw', 2.95, true);

INSERT INTO historical_photos (title, description, year, image_url, display_order) VALUES
('1904 World''s Fair', 'Abe Doumar at the St. Louis World''s Fair where he invented the waffle cone', 1904, '/images/historical/1904-worlds-fair.jpg', 1),
('Original Cone Machine', 'Our original 1905 waffle cone machine still in use today', 1905, '/images/restaurant/cone-machine-operator.jpg', 2),
('Doumar Family', 'The Doumar family continuing the tradition', 2020, '/images/restaurant/doumar-family.jpg', 3);

INSERT INTO testimonials (customer_name, review, rating, featured) VALUES
('Sarah Johnson', 'The best ice cream cones in Virginia! You can taste the history in every bite.', 5, true),
('Mike Rodriguez', 'Been coming here for 20 years. The BBQ is amazing and the cones are unbeatable.', 5, true),
('Emily Chen', 'A true Norfolk institution. The limeade alone is worth the trip!', 5, false);

INSERT INTO products (name, description, price, category, images, stock_quantity) VALUES
('Doumar''s T-Shirt', 'Official Doumar''s t-shirt with vintage logo', 24.95, 'apparel', ARRAY['/images/products/tshirt-front.jpg'], 50),
('Doumar''s Baseball Cap', 'Classic baseball cap with embroidered logo', 19.95, 'apparel', ARRAY['/images/products/cap.jpg'], 30),
('Hot Sauce Bottle', 'Doumar''s signature BBQ sauce to take home', 8.95, 'food', ARRAY['/images/products/hot-sauce.jpg'], 100),
('Waffle Cone Gift Box', 'Box of 12 fresh waffle cones to enjoy at home', 15.95, 'food', ARRAY['/images/products/cone-box.jpg'], 25);

-- Enable Row Level Security (RLS)
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE item_customizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE catering_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE catering_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE historical_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON menu_categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON item_customizations FOR SELECT USING (true);
CREATE POLICY "Public read access" ON catering_packages FOR SELECT USING (true);
CREATE POLICY "Public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access" ON product_variants FOR SELECT USING (true);
CREATE POLICY "Public read access" ON historical_photos FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (featured = true);

-- Create policies for order creation
CREATE POLICY "Anyone can create orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create order items" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create catering requests" ON catering_requests FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_menu_items_category ON menu_items(category_id);
CREATE INDEX idx_menu_items_available ON menu_items(available);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_historical_photos_display_order ON historical_photos(display_order);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_available ON products(available);