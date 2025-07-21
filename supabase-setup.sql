-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Yoga', 'Meditation')),
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for now - you can restrict this later)
CREATE POLICY "Allow all operations on events" ON events
  FOR ALL USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_events_updated_at 
  BEFORE UPDATE ON events 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data
INSERT INTO events (title, date, description, category, image) VALUES
  ('Morning Vinyasa Flow', '2024-01-15T09:00:00Z', 'Start your day with an energizing vinyasa flow class suitable for all levels. Focus on breath and movement.', 'Yoga', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop'),
  ('Mindfulness Meditation', '2024-01-16T18:00:00Z', 'Join us for a peaceful meditation session to cultivate mindfulness and inner calm.', 'Meditation', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'),
  ('Restorative Yoga', '2024-01-17T19:30:00Z', 'Unwind with gentle, supported poses designed to promote deep relaxation and stress relief.', 'Yoga', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop')
ON CONFLICT DO NOTHING; 