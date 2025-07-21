import EventsAdmin from "@/components/EventsAdmin";
import LogoutButton from "@/components/LogoutButton";
import { getEvents } from "@/lib/supabase";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Fetch events server-side for initial load
  const initialEvents = await getEvents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Events Management
            </h1>
            <p className="text-gray-600">Welcome back, {user.email}</p>
          </div>
          <LogoutButton />
        </div>

        <EventsAdmin initialEvents={initialEvents} />
      </div>
    </div>
  );
}
