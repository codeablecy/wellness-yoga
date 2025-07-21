# Supabase Setup Guide

This guide will help you set up Supabase for your yoga wellness website from scratch.

## Step 1: Create Supabase Project

1. **Go to [supabase.com](https://supabase.com)**
2. **Sign up/Login** with your GitHub account
3. **Create a new project**:
   - Click "New Project"
   - Choose your organization
   - Enter project name: `yoga-wellness-website`
   - Enter database password (save this!)
   - Choose region closest to you
   - Click "Create new project"

## Step 2: Get Your Project Credentials

1. **Go to Settings > API** in your Supabase dashboard
2. **Copy these values**:
   - Project URL (looks like: `https://your-project-id.supabase.co`)
   - Anon public key (starts with `eyJ...`)

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Admin Authentication (from previous setup)
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=your_hashed_password
```

## Step 4: Set Up Database Schema

1. **Go to SQL Editor** in your Supabase dashboard
2. **Copy and paste** the contents of `supabase-setup.sql`
3. **Run the script** to create the events table

## Step 5: Test Your Setup

1. **Start your development server**:
   ```bash
   pnpm dev
   ```

2. **Test the admin panel**:
   - Go to `http://localhost:3000/admin/login`
   - Login with: `admin` / `admin123`
   - Try creating, editing, and deleting events

## Step 6: Verify Database Connection

You can verify your setup by checking the browser console for any errors. The app should now:

- ✅ **Load events** from Supabase
- ✅ **Create new events** and save to database
- ✅ **Update existing events** in real-time
- ✅ **Delete events** from database

## Troubleshooting

### Common Issues:

1. **"Missing Supabase environment variables"**
   - Check your `.env.local` file exists
   - Verify the URL and key are correct
   - Restart your dev server after adding env vars

2. **"Error fetching events"**
   - Check if the `events` table exists in Supabase
   - Verify RLS policies are set up correctly
   - Check browser console for specific error messages

3. **"Error creating event"**
   - Ensure all required fields are filled
   - Check the date format (should be ISO string)
   - Verify category is either "Yoga" or "Meditation"

### Database Schema Details:

```sql
events table:
- id: UUID (auto-generated)
- title: TEXT (required)
- date: TIMESTAMP (required)
- description: TEXT (required)
- category: TEXT (Yoga or Meditation only)
- image: TEXT (optional)
- created_at: TIMESTAMP (auto-generated)
- updated_at: TIMESTAMP (auto-updated)
```

## Security Notes

- The current setup allows all operations for simplicity
- For production, consider implementing proper RLS policies
- The admin authentication is separate from Supabase Auth
- Consider implementing Supabase Auth for better security

## Next Steps

1. **Add more event fields** (location, instructor, price, etc.)
2. **Implement user authentication** with Supabase Auth
3. **Add image upload** functionality
4. **Set up proper RLS policies** for production
5. **Add real-time subscriptions** for live updates 