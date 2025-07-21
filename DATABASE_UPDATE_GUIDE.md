# Database Update Guide

## Issue
The current database schema only supports 'Yoga' and 'Meditation' categories, but the application supports 28 different event categories. This causes events to fail to save when using other categories.

## Solution
Run the migration script in your Supabase SQL editor to update the database schema.


## Steps to Fix

1. **Go to your Supabase Dashboard**
   - Navigate to your project
   - Go to the SQL Editor

2. **Run the Migration Script**
   - Copy the contents of `database-migration.sql`
   - Paste it into the SQL editor
   - Click "Run" to execute the migration

3. **Verify the Changes**
   - Go to the Table Editor
   - Check that the `events` table now has:
     - `price` column (TEXT, default 'free')
     - `what_to_bring` column (TEXT[], default '{}')
     - Updated category constraint supporting all 28 categories

## What This Fixes

- ✅ Events can now be created with any of the 28 categories
- ✅ Events will appear on both admin and public pages
- ✅ Event deletion will work properly
- ✅ All pages will show the same data (no more sync issues)

## Categories Now Supported

- Yoga, Meditation, Pilates, Tai Chi, Qi Gong, Reiki
- Sound Healing, Aromatherapy, Crystal Healing, Chakra Balancing
- Breathwork, Mindfulness, Stress Relief, Energy Healing
- Holistic Wellness, Spiritual Counseling, Energy Mentoring
- Active-Spiritual Nutrition, Zhineng Qigong, Personal Empowerment
- Conscious Teaching, Energy Center Cleansing, Conscious Awakening
- Theosophy, Universal Healing, Self-Awareness, Harmonization

## After Running the Migration

1. **Test Event Creation**
   - Go to `/admin/events`
   - Create a new event with any category
   - Verify it appears on the admin page

2. **Test Event Display**
   - Go to `/events` 
   - Verify the new event appears in the list
   - Test the category filter

3. **Test Event Deletion**
   - Delete an event from the admin page
   - Verify it's removed from both admin and public pages

## Troubleshooting

If you encounter any issues:

1. **Check Supabase Logs**
   - Go to your Supabase dashboard
   - Check the logs for any errors

2. **Verify Environment Variables**
   - Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly

3. **Clear Browser Cache**
   - Hard refresh the pages (Ctrl+F5 or Cmd+Shift+R)

4. **Redeploy the Application**
   - Push the changes to trigger a new deployment on Vercel 