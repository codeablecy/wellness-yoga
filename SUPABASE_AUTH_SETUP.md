# Supabase Auth Setup Guide

## 🔐 Complete Supabase Authentication Integration

This guide will help you set up Supabase Auth for your yoga wellness website.

## 📋 Prerequisites

1. **Supabase Account**: Create an account at [supabase.com](https://supabase.com)
2. **Supabase Project**: Create a new project in your Supabase dashboard
3. **Environment Variables**: Configure your project with Supabase credentials

## 🚀 Step-by-Step Setup

### 1. Environment Variables

Create or update your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

**To find your Supabase credentials:**
1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy the "Project URL" and "anon public" key

### 2. Supabase Project Configuration

#### Enable Email Authentication:
1. Go to Authentication → Settings
2. Enable "Email" provider
3. Configure email templates (optional)

#### Set up Row Level Security (RLS):
```sql
-- Enable RLS on events table
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Users can view all events" ON events
  FOR SELECT USING (true);

-- Create policy for authenticated users to insert/update/delete
CREATE POLICY "Authenticated users can manage events" ON events
  FOR ALL USING (auth.role() = 'authenticated');
```

### 3. User Management

#### Create Admin User:
1. Go to Authentication → Users in your Supabase dashboard
2. Click "Add user"
3. Enter admin email and password
4. Set user metadata if needed

#### Alternative: Self-Registration:
- Users can sign up through the login form
- First user becomes admin by default

### 4. Database Schema

Ensure your events table has the correct structure:

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME,
  location TEXT,
  instructor TEXT,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  price DECIMAL(10,2),
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔧 Features Implemented

### ✅ Authentication Features:
- **Email/Password Login**: Secure authentication with Supabase
- **User Registration**: Self-service signup functionality
- **Session Management**: Automatic session handling
- **Route Protection**: Middleware-based route protection
- **Logout**: Secure logout with session cleanup

### ✅ Security Features:
- **Row Level Security (RLS)**: Database-level security
- **JWT Tokens**: Secure token-based authentication
- **HTTPS Enforcement**: Secure communication
- **Session Validation**: Server-side session verification

### ✅ User Experience:
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Mobile-friendly interface
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Technical Implementation

### Client-Side Components:
- `LoginForm`: Email/password authentication form
- `LogoutButton`: Secure logout functionality
- Server actions for authentication

### Server-Side Components:
- `createClient()`: Supabase client utilities
- Middleware: Route protection
- Server actions: Authentication logic

### File Structure:
```
lib/supabase/
├── client.ts      # Browser client
├── server.ts      # Server client
└── middleware.ts  # Middleware utilities

app/admin/
├── login/
│   ├── page.tsx   # Login page
│   └── actions.ts # Login/signup actions
└── logout/
    └── actions.ts # Logout action

components/
├── LoginForm.tsx    # Login form component
└── LogoutButton.tsx # Logout button component
```

## 🔍 Testing Your Setup

### 1. Start Development Server:
```bash
pnpm dev
```

### 2. Test Authentication:
1. Navigate to `/admin/login`
2. Try signing up with a new account
3. Test login with existing credentials
4. Verify logout functionality

### 3. Check Route Protection:
1. Try accessing `/admin/events` without authentication
2. Should redirect to login page
3. After login, should access admin dashboard

## 🚨 Security Best Practices

### Environment Variables:
- ✅ Never commit `.env.local` to git
- ✅ Use different keys for development/production
- ✅ Rotate keys regularly

### Database Security:
- ✅ Enable RLS on all tables
- ✅ Create appropriate policies
- ✅ Use parameterized queries

### Application Security:
- ✅ Validate all inputs
- ✅ Handle errors gracefully
- ✅ Implement rate limiting (optional)

## 🔧 Troubleshooting

### Common Issues:

#### 1. "Invalid credentials" error:
- Check environment variables are correct
- Verify Supabase project is active
- Check email/password format

#### 2. Redirect loops:
- Clear browser cookies
- Check middleware configuration
- Verify route protection logic

#### 3. Session not persisting:
- Check cookie settings
- Verify Supabase client configuration
- Check browser storage settings

### Debug Steps:
1. Check browser console for errors
2. Verify Supabase dashboard logs
3. Test with different browsers
4. Check network requests

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Authentication](https://nextjs.org/docs/authentication)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers)

## 🎯 Next Steps

1. **Customize UI**: Update styling to match your brand
2. **Add Features**: Implement password reset, email verification
3. **Enhance Security**: Add 2FA, rate limiting
4. **Production Setup**: Configure production environment
5. **Monitoring**: Set up error tracking and analytics

---

**Need Help?** Check the Supabase documentation or create an issue in your project repository. 