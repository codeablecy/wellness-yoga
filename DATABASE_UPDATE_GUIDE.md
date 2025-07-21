# Database Update Guide

## Overview
This guide will help you update your Supabase database to support the expanded wellness categories for your yoga and wellness studio events.

## Steps to Update Your Database

### 1. Access Your Supabase Dashboard
1. Go to [supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your yoga wellness project

### 2. Navigate to SQL Editor
1. In your Supabase dashboard, click on "SQL Editor" in the left sidebar
2. Click "New query" to create a new SQL query

### 3. Run the Migration Script
1. Copy the entire contents of `database-migration.sql`
2. Paste it into the SQL editor
3. Click "Run" to execute the migration

### 4. Verify the Changes
After running the migration, you can verify the changes by running:

```sql
-- Check the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'events';

-- Check the category constraint
SELECT conname, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'events'::regclass AND contype = 'c';

-- View sample events
SELECT title, category, date FROM events ORDER BY date LIMIT 5;
```

## What the Migration Does

### ✅ **Schema Updates:**
- **Expanded Categories**: Adds 13 new wellness categories beyond Yoga and Meditation
- **Price Field**: New price field supporting numbers or "free" for events
- **Data Integrity**: Enforces category and price constraints to prevent invalid entries
- **Performance**: Creates indexes for faster queries
- **Security**: Enables Row Level Security (RLS) with proper policies

### ✅ **New Categories Added:**
- **Pilates** - Core strength and stability
- **Tai Chi** - Balance and coordination
- **Qi Gong** - Energy flow practices
- **Reiki** - Energy healing
- **Sound Healing** - Vibrational therapy
- **Aromatherapy** - Essential oil therapy
- **Crystal Healing** - Crystal therapy
- **Chakra Balancing** - Energy center alignment
- **Breathwork** - Breathing techniques
- **Mindfulness** - Present moment awareness
- **Stress Relief** - Stress management
- **Energy Healing** - Universal energy work
- **Holistic Wellness** - Comprehensive wellness

### ✅ **Sample Data:**
- **15 Sample Events** - One for each category with realistic descriptions
- **Varied Pricing** - Mix of free and paid events (€20-€75)
- **Future Dates** - Events scheduled for the next 15 days
- **Varied Content** - Different types of wellness activities

### ✅ **Price Field Features:**
- **Flexible Pricing** - Supports numbers (€25) or "free" text
- **Validation** - Database constraint ensures valid price format
- **Visual Display** - Price shown prominently on cards and modals
- **Calendar Integration** - Price included in calendar event details
- **Sharing** - Price information included in social media shares

## Frontend Updates

The following components have been updated to support the new categories:

### ✅ **Updated Files:**
- `types/event.ts` - TypeScript interfaces with new categories
- `components/EventForm.tsx` - Dropdown with all 15 categories
- `components/EventModal.tsx` - Color-coded category badges
- `components/EventCard.tsx` - Color-coded category display

### ✅ **Color Coding:**
Each category has a unique color scheme for easy identification:
- **Yoga**: Purple
- **Meditation**: Blue
- **Pilates**: Green
- **Tai Chi**: Orange
- **Qi Gong**: Red
- **Reiki**: Pink
- **Sound Healing**: Indigo
- **Aromatherapy**: Yellow
- **Crystal Healing**: Teal
- **Chakra Balancing**: Violet
- **Breathwork**: Cyan
- **Mindfulness**: Emerald
- **Stress Relief**: Rose
- **Energy Healing**: Amber
- **Holistic Wellness**: Slate

## Testing the Updates

### 1. **Create New Events**
1. Go to your admin panel
2. Try creating events with different categories
3. Verify the color coding displays correctly

### 2. **View Existing Events**
1. Check the events page
2. Verify all categories display with proper colors
3. Test the calendar integration

### 3. **Modal Functionality**
1. Click on event cards to open modals
2. Verify category badges show correct colors
3. Test the calendar download feature

## Troubleshooting

### If you encounter errors:

1. **Check Supabase Connection**: Ensure your environment variables are correct
2. **Verify Migration**: Run the verification queries above
3. **Clear Cache**: Restart your development server
4. **Check Console**: Look for any TypeScript errors

### Common Issues:

- **TypeScript Errors**: Make sure all type definitions are updated
- **Category Not Found**: Verify the migration ran successfully
- **Color Not Displaying**: Check that the color mapping is correct

## Next Steps

After updating your database:

1. **Test All Features**: Ensure everything works as expected
2. **Add Real Events**: Create actual events for your studio
3. **Customize Content**: Update descriptions and images
4. **Monitor Performance**: Check that queries are fast

## Support

If you encounter any issues:
1. Check the Supabase logs in your dashboard
2. Verify your environment variables
3. Test with a simple query first
4. Contact support if needed

---

**Note**: This migration is safe to run multiple times as it uses `IF NOT EXISTS` and `ON CONFLICT DO NOTHING` clauses. 