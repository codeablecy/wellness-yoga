"use client";

import type { Event, EventCategory } from "@/types/event";
import { EVENT_CATEGORIES } from "@/types/event";
import { useState } from "react";
import EventCard from "./EventCard";

interface EventsListProps {
  initialEvents: Event[];
}

export default function EventsList({ initialEvents }: EventsListProps) {
  const [events] = useState<Event[]>(initialEvents);
  const [filter, setFilter] = useState<"All" | EventCategory>("All");

  const filteredEvents = events.filter(
    (event) => filter === "All" || event.category === filter
  );

  return (
    <div>
      {/* Filter Dropdown */}
      <div className="mb-8 flex justify-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as "All" | EventCategory)}
          className="px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          aria-label="Filter events by category"
        >
          <option value="All">All Events</option>
          {EVENT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No events found for the selected category.
          </p>
        </div>
      )}
    </div>
  );
}
