import EventsList from "@/components/EventsList";
import { getEvents } from "@/lib/supabase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Serenity Yoga Studio",
  description:
    "Discover our upcoming yoga and meditation events. Join us for transformative classes and workshops.",
};

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us for yoga classes, meditation sessions, and wellness
            workshops designed to nurture your practice.
          </p>
        </div>
        <EventsList initialEvents={events} />
      </div>
    </div>
  );
}
