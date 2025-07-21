import EventsAdmin from "@/components/EventsAdmin";
import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminEventsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

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

        <EventsAdmin />
      </div>
    </div>
  );
}
