-- Migration to update events table schema
-- Run this in your Supabase SQL editor

-- First, drop the existing check constraint
ALTER TABLE events DROP CONSTRAINT IF EXISTS events_category_check;

-- Add the new check constraint with all categories
ALTER TABLE events ADD CONSTRAINT events_category_check 
CHECK (category IN (
  'Yoga', 'Meditation', 'Pilates', 'Tai Chi', 'Qi Gong', 'Reiki', 
  'Sound Healing', 'Aromatherapy', 'Crystal Healing', 'Chakra Balancing', 
  'Breathwork', 'Mindfulness', 'Stress Relief', 'Energy Healing', 
  'Holistic Wellness', 'Spiritual Counseling', 'Energy Mentoring', 
  'Active-Spiritual Nutrition', 'Zhineng Qigong', 'Personal Empowerment', 
  'Conscious Teaching', 'Energy Center Cleansing', 'Conscious Awakening', 
  'Theosophy', 'Universal Healing', 'Self-Awareness', 'Harmonization'
));

-- Add price column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'price') THEN
    ALTER TABLE events ADD COLUMN price TEXT NOT NULL DEFAULT 'free';
  END IF;
END $$;

-- Add what_to_bring column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'events' AND column_name = 'what_to_bring') THEN
    ALTER TABLE events ADD COLUMN what_to_bring TEXT[] DEFAULT '{}';
  END IF;
END $$;

-- Update existing records to have default values
UPDATE events SET 
  price = COALESCE(price, 'free'),
  what_to_bring = COALESCE(what_to_bring, '{}')
WHERE price IS NULL OR what_to_bring IS NULL;

-- Add price constraint to ensure it's either a number or "free"
ALTER TABLE events DROP CONSTRAINT IF EXISTS events_price_check;

ALTER TABLE events ADD CONSTRAINT events_price_check 
CHECK (
  price = 'free' OR 
  (price ~ '^[0-9]+(\.[0-9]{1,2})?$' AND CAST(price AS DECIMAL) > 0)
);

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_events_price ON events(price);

-- Enable Row Level Security (RLS) if not already enabled
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to events" ON events;
DROP POLICY IF EXISTS "Allow authenticated users to insert events" ON events;
DROP POLICY IF EXISTS "Allow authenticated users to update events" ON events;
DROP POLICY IF EXISTS "Allow authenticated users to delete events" ON events;

-- Create policies
CREATE POLICY "Allow public read access to events" ON events
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to insert events" ON events
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update events" ON events
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete events" ON events
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
DROP TRIGGER IF EXISTS update_events_updated_at ON events;
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Update existing events with sample pricing if they don't have prices
UPDATE events 
SET price = CASE 
  WHEN category = 'Meditation' THEN 'free'
  WHEN category = 'Breathwork' THEN 'free'
  WHEN category = 'Mindfulness' THEN 'free'
  WHEN category = 'Conscious Awakening' THEN 'free'
  WHEN category = 'Yoga' THEN '25'
  WHEN category = 'Pilates' THEN '30'
  WHEN category = 'Tai Chi' THEN '20'
  WHEN category = 'Qi Gong' THEN '25'
  WHEN category = 'Zhineng Qigong' THEN '30'
  WHEN category = 'Reiki' THEN '45'
  WHEN category = 'Sound Healing' THEN '35'
  WHEN category = 'Aromatherapy' THEN '30'
  WHEN category = 'Crystal Healing' THEN '40'
  WHEN category = 'Chakra Balancing' THEN '50'
  WHEN category = 'Stress Relief' THEN '25'
  WHEN category = 'Energy Healing' THEN '60'
  WHEN category = 'Holistic Wellness' THEN '75'
  WHEN category = 'Spiritual Counseling' THEN '80'
  WHEN category = 'Energy Mentoring' THEN '65'
  WHEN category = 'Personal Empowerment' THEN '55'
  WHEN category = 'Conscious Teaching' THEN '70'
  WHEN category = 'Energy Center Cleansing' THEN '45'
  WHEN category = 'Theosophy' THEN '40'
  WHEN category = 'Universal Healing' THEN '60'
  WHEN category = 'Self-Awareness' THEN '35'
  WHEN category = 'Harmonization' THEN '50'
  WHEN category = 'Active-Spiritual Nutrition' THEN '40'
  ELSE '25'
END
WHERE price IS NULL OR price = '';

-- Update existing events with appropriate what_to_bring items
UPDATE events 
SET what_to_bring = CASE 
  WHEN category = 'Yoga' THEN '["Yoga mat", "Comfortable clothes", "Water bottle", "Small towel", "Open mind"]'::jsonb
  WHEN category = 'Meditation' THEN '["Cushion or pillow", "Comfortable clothes", "Water bottle", "Quiet mind", "Optional: meditation app"]'::jsonb
  WHEN category = 'Pilates' THEN '["Yoga mat", "Comfortable clothes", "Water bottle", "Small towel", "Focus on breathing"]'::jsonb
  WHEN category = 'Tai Chi' THEN '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Patience"]'::jsonb
  WHEN category = 'Qi Gong' THEN '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Receptive attitude"]'::jsonb
  WHEN category = 'Zhineng Qigong' THEN '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Receptive attitude", "Focus on energy flow"]'::jsonb
  WHEN category = 'Reiki' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to receive", "Relaxed state"]'::jsonb
  WHEN category = 'Sound Healing' THEN '["Comfortable clothes", "Yoga mat or cushion", "Water bottle", "Open mind", "Willingness to relax"]'::jsonb
  WHEN category = 'Aromatherapy' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Sensitivity to scents", "Relaxed state"]'::jsonb
  WHEN category = 'Crystal Healing' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Personal crystal (optional)", "Receptive attitude"]'::jsonb
  WHEN category = 'Chakra Balancing' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Personal intention", "Receptive energy"]'::jsonb
  WHEN category = 'Breathwork' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to breathe deeply", "Relaxed state"]'::jsonb
  WHEN category = 'Mindfulness' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Present moment awareness", "Non-judgmental attitude"]'::jsonb
  WHEN category = 'Stress Relief' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to let go", "Relaxed state"]'::jsonb
  WHEN category = 'Energy Healing' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Receptive attitude", "Trust in the process"]'::jsonb
  WHEN category = 'Holistic Wellness' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Health questionnaire", "Personal goals"]'::jsonb
  WHEN category = 'Spiritual Counseling' THEN '["Open mind", "Personal questions", "Journal (optional)", "Willingness to explore", "Trust in the process"]'::jsonb
  WHEN category = 'Energy Mentoring' THEN '["Open mind", "Personal energy awareness", "Journal", "Willingness to learn", "Practice commitment"]'::jsonb
  WHEN category = 'Active-Spiritual Nutrition' THEN '["Open mind", "Food diary (optional)", "Water bottle", "Nutritional awareness", "Willingness to change"]'::jsonb
  WHEN category = 'Personal Empowerment' THEN '["Open mind", "Personal goals", "Journal", "Willingness to grow", "Self-reflection"]'::jsonb
  WHEN category = 'Conscious Teaching' THEN '["Open mind", "Teaching materials", "Journal", "Willingness to guide others", "Personal practice"]'::jsonb
  WHEN category = 'Energy Center Cleansing' THEN '["Comfortable clothes", "Open mind", "Water bottle", "Personal intention", "Receptive energy", "Crystal (optional)"]'::jsonb
  WHEN category = 'Conscious Awakening' THEN '["Open mind", "Personal intention", "Journal", "Willingness to transform", "Trust in the journey"]'::jsonb
  WHEN category = 'Theosophy' THEN '["Open mind", "Study materials", "Journal", "Willingness to learn", "Philosophical curiosity"]'::jsonb
  WHEN category = 'Universal Healing' THEN '["Open mind", "Personal intention", "Water bottle", "Receptive attitude", "Trust in universal energy"]'::jsonb
  WHEN category = 'Self-Awareness' THEN '["Open mind", "Personal reflection", "Journal", "Willingness to explore", "Honest self-assessment"]'::jsonb
  WHEN category = 'Harmonization' THEN '["Open mind", "Personal balance", "Water bottle", "Willingness to harmonize", "Inner peace"]'::jsonb
  ELSE '["Comfortable clothes", "Water bottle", "Open mind"]'::jsonb
END
WHERE what_to_bring IS NULL OR what_to_bring = '[]'::jsonb;

-- Insert sample data only if the table is empty
INSERT INTO events (title, date, description, category, price, image, what_to_bring) 
SELECT * FROM (VALUES
  ('Morning Yoga Flow', NOW() + INTERVAL '1 day', 'Start your day with a gentle yoga flow to energize your body and mind.', 'Yoga', '25', '/placeholder.svg', '["Yoga mat", "Comfortable clothes", "Water bottle", "Small towel", "Open mind"]'::jsonb),
  ('Meditation for Beginners', NOW() + INTERVAL '2 days', 'Learn the basics of meditation in this guided session for beginners.', 'Meditation', 'free', '/placeholder.svg', '["Cushion or pillow", "Comfortable clothes", "Water bottle", "Quiet mind", "Optional: meditation app"]'::jsonb),
  ('Pilates Core Strength', NOW() + INTERVAL '3 days', 'Strengthen your core with this Pilates session focusing on stability and control.', 'Pilates', '30', '/placeholder.svg', '["Yoga mat", "Comfortable clothes", "Water bottle", "Small towel", "Focus on breathing"]'::jsonb),
  ('Tai Chi for Balance', NOW() + INTERVAL '4 days', 'Improve your balance and coordination with gentle Tai Chi movements.', 'Tai Chi', '20', '/placeholder.svg', '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Patience"]'::jsonb),
  ('Qi Gong Energy Flow', NOW() + INTERVAL '5 days', 'Harness your life force energy with traditional Qi Gong practices.', 'Qi Gong', '25', '/placeholder.svg', '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Receptive attitude"]'::jsonb),
  ('Reiki Healing Session', NOW() + INTERVAL '6 days', 'Experience the gentle healing energy of Reiki for deep relaxation.', 'Reiki', '45', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to receive", "Relaxed state"]'::jsonb),
  ('Sound Healing with Singing Bowls', NOW() + INTERVAL '7 days', 'Immerse yourself in the healing vibrations of crystal singing bowls.', 'Sound Healing', '35', '/placeholder.svg', '["Comfortable clothes", "Yoga mat or cushion", "Water bottle", "Open mind", "Willingness to relax"]'::jsonb),
  ('Aromatherapy Relaxation', NOW() + INTERVAL '8 days', 'Discover the therapeutic benefits of essential oils for stress relief.', 'Aromatherapy', '30', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Sensitivity to scents", "Relaxed state"]'::jsonb),
  ('Crystal Healing Workshop', NOW() + INTERVAL '9 days', 'Learn about crystal properties and their healing benefits.', 'Crystal Healing', '40', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Personal crystal (optional)", "Receptive attitude"]'::jsonb),
  ('Chakra Balancing Session', NOW() + INTERVAL '10 days', 'Align and balance your seven chakras for optimal energy flow.', 'Chakra Balancing', '50', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Personal intention", "Receptive energy"]'::jsonb),
  ('Breathwork for Anxiety', NOW() + INTERVAL '11 days', 'Learn breathing techniques to reduce anxiety and increase calm.', 'Breathwork', 'free', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to breathe deeply", "Relaxed state"]'::jsonb),
  ('Mindfulness in Daily Life', NOW() + INTERVAL '12 days', 'Integrate mindfulness practices into your everyday activities.', 'Mindfulness', 'free', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Present moment awareness", "Non-judgmental attitude"]'::jsonb),
  ('Stress Relief Techniques', NOW() + INTERVAL '13 days', 'Learn practical techniques to manage and reduce stress levels.', 'Stress Relief', '25', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Willingness to let go", "Relaxed state"]'::jsonb),
  ('Energy Healing Session', NOW() + INTERVAL '14 days', 'Experience deep healing through energy work and intention.', 'Energy Healing', '60', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Receptive attitude", "Trust in the process"]'::jsonb),
  ('Holistic Wellness Consultation', NOW() + INTERVAL '15 days', 'Comprehensive wellness assessment and personalized recommendations.', 'Holistic Wellness', '75', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Health questionnaire", "Personal goals"]'::jsonb),
  ('Spiritual Counseling Session', NOW() + INTERVAL '16 days', 'Personal guidance for your spiritual journey and self-discovery.', 'Spiritual Counseling', '80', '/placeholder.svg', '["Open mind", "Personal questions", "Journal (optional)", "Willingness to explore", "Trust in the process"]'::jsonb),
  ('Energy Mentoring Workshop', NOW() + INTERVAL '17 days', 'Learn to work with and direct your energy for personal empowerment.', 'Energy Mentoring', '65', '/placeholder.svg', '["Open mind", "Personal energy awareness", "Journal", "Willingness to learn", "Practice commitment"]'::jsonb),
  ('Active-Spiritual Nutrition', NOW() + INTERVAL '18 days', 'Nourish your body and spirit through conscious eating practices.', 'Active-Spiritual Nutrition', '40', '/placeholder.svg', '["Open mind", "Food diary (optional)", "Water bottle", "Nutritional awareness", "Willingness to change"]'::jsonb),
  ('Zhineng Qigong Practice', NOW() + INTERVAL '19 days', 'Ancient Chinese energy practice for modern spiritual awakening.', 'Zhineng Qigong', '30', '/placeholder.svg', '["Comfortable clothes", "Flat shoes", "Water bottle", "Open space", "Receptive attitude", "Focus on energy flow"]'::jsonb),
  ('Personal Empowerment Workshop', NOW() + INTERVAL '20 days', 'Unlock your inner strength and potential through conscious practices.', 'Personal Empowerment', '55', '/placeholder.svg', '["Open mind", "Personal goals", "Journal", "Willingness to grow", "Self-reflection"]'::jsonb),
  ('Conscious Teaching Training', NOW() + INTERVAL '21 days', 'Learn to become a guide for others on their spiritual path.', 'Conscious Teaching', '70', '/placeholder.svg', '["Open mind", "Teaching materials", "Journal", "Willingness to guide others", "Personal practice"]'::jsonb),
  ('Energy Center Cleansing', NOW() + INTERVAL '22 days', 'Clear and balance your energy centers for optimal spiritual flow.', 'Energy Center Cleansing', '45', '/placeholder.svg', '["Comfortable clothes", "Open mind", "Water bottle", "Personal intention", "Receptive energy", "Crystal (optional)"]'::jsonb),
  ('Conscious Awakening Journey', NOW() + INTERVAL '23 days', 'Deepen your spiritual awareness and conscious evolution.', 'Conscious Awakening', 'free', '/placeholder.svg', '["Open mind", "Personal intention", "Journal", "Willingness to transform", "Trust in the journey"]'::jsonb),
  ('Theosophy Study Group', NOW() + INTERVAL '24 days', 'Explore ancient wisdom and spiritual philosophy for modern seekers.', 'Theosophy', '40', '/placeholder.svg', '["Open mind", "Study materials", "Journal", "Willingness to learn", "Philosophical curiosity"]'::jsonb),
  ('Universal Healing Practice', NOW() + INTERVAL '25 days', 'Connect with universal healing energy for personal transformation.', 'Universal Healing', '60', '/placeholder.svg', '["Open mind", "Personal intention", "Water bottle", "Receptive attitude", "Trust in universal energy"]'::jsonb),
  ('Self-Awareness Workshop', NOW() + INTERVAL '26 days', 'Develop deeper self-awareness through guided exploration and reflection.', 'Self-Awareness', '35', '/placeholder.svg', '["Open mind", "Personal reflection", "Journal", "Willingness to explore", "Honest self-assessment"]'::jsonb),
  ('Harmonization Practice', NOW() + INTERVAL '27 days', 'Find inner balance and harmony through spiritual practices.', 'Harmonization', '50', '/placeholder.svg', '["Open mind", "Personal balance", "Water bottle", "Willingness to harmonize", "Inner peace"]'::jsonb)
) AS v(title, date, description, category, price, image, what_to_bring)
WHERE NOT EXISTS (SELECT 1 FROM events LIMIT 1); 