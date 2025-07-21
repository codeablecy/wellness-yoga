import { getEvents } from "@/lib/supabase";
import EventCard from "./EventCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedEventsProps {
  className?: string;
}

export default async function FeaturedEvents({
  className = "",
}: FeaturedEventsProps) {
  const events = await getEvents();
  const featuredEvents = events.slice(0, 3); // Show first 3 events

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Events & Classes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us for these upcoming transformative experiences designed to
            deepen your practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {events.length > 3 && (
          <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center space-x-2 bg-purple-600 dark:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
          >
            <span>View All Events & Classes</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
