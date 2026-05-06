/*
  # Immigration Consultancy - Initial Schema

  1. New Tables
    - `contacts` - Lead generation form submissions (name, phone, email, message, type)
    - `testimonials` - Client success stories
    - `blog_posts` - Blog/update articles

  2. Security
    - Enable RLS on all tables
    - Contacts: insert-only for anon (lead gen), select for authenticated
    - Testimonials/Blog: public read, authenticated write
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  country_interest text DEFAULT '',
  message text DEFAULT '',
  form_type text DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  story text NOT NULL,
  service text DEFAULT '',
  rating integer DEFAULT 5,
  visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visible testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (visible = true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text DEFAULT 'General',
  image_url text DEFAULT '',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Seed testimonials
INSERT INTO testimonials (name, location, story, service, rating) VALUES
('Sarah M.', 'Lagos, Nigeria', 'Global Path made my Canada PR journey seamless. Within 14 months I had my permanent residency. Their team was available every step of the way.', 'Skilled Visa', 5),
('James O.', 'Accra, Ghana', 'I was skeptical at first, but their consultants guided me through every document. I now have my UK work permit and started my new role.', 'Work Permit', 5),
('Priya K.', 'Mumbai, India', 'Got my Australia study visa in record time. The team knew exactly what was needed and my application was approved first try.', 'Study Visa', 5),
('Carlos R.', 'Manila, Philippines', 'Professional, transparent, and fast. My family visitor visa to Europe was approved without any issues. Highly recommended!', 'Visitor Visa', 5),
('Amina D.', 'Nairobi, Kenya', 'I tried twice on my own and failed. Global Path handled everything and I got my USA business visa within 3 weeks.', 'Business Visa', 5);

-- Seed blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, published) VALUES
('Canada Express Entry 2025: What You Need to Know', 'canada-express-entry-2025', 'The latest updates to Canada''s Express Entry system and how they affect your application.', 'Canada Express Entry remains one of the most popular pathways for skilled workers seeking permanent residency. In 2025, the government introduced several key changes that applicants must be aware of. The Comprehensive Ranking System (CRS) cutoff scores have fluctuated, and new occupations have been added to the priority list. Understanding these changes is crucial for a successful application.', 'Canada', 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg', true),
('UK Skilled Worker Visa: Complete 2025 Guide', 'uk-skilled-worker-visa-2025', 'Everything you need to know about applying for a UK Skilled Worker visa this year.', 'The UK Skilled Worker visa replaced the Tier 2 General visa and offers a pathway for skilled professionals to work in the United Kingdom. To qualify, you need a job offer from a UK employer with a valid sponsor licence, a role on the eligible occupations list, and meet the English language and salary requirements.', 'United Kingdom', 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg', true),
('Australia PR: Points Test Explained Simply', 'australia-pr-points-test', 'Breaking down the Australian points test so you know exactly where you stand.', 'Australia''s skilled migration program uses a points-based system to assess applicants for permanent residency. Points are awarded based on age, English proficiency, skilled employment, educational qualifications, and other factors. The minimum score to submit an Expression of Interest (EOI) is 65 points, but competitive scores are typically much higher.', 'Australia', 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg', true);
