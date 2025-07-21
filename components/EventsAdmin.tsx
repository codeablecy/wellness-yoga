"use client";

import { createClient } from "@/lib/supabase/client";
import type { Event } from "@/types/event";
import { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventTable from "./EventTable";

interface EventsAdminProps {
  initialEvents: Event[];
}

export default function EventsAdmin({ initialEvents }: EventsAdminProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  // Only fetch events if no initial events provided
  useEffect(() => {
    if (initialEvents.length === 0) {
      fetchEvents();
    }
  }, [initialEvents.length]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
        return;
      }

      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEventCreated = async (newEvent: Event) => {
    setEvents([...events, newEvent]);
    setShowForm(false);
    // Revalidate the page to ensure data consistency
    window.location.reload();
  };

  const handleEventUpdated = async (updatedEvent: Event) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setEditingEvent(null);
    setShowForm(false);
    // Revalidate the page to ensure data consistency
    window.location.reload();
  };

  const handleEventDeleted = async (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
    // Revalidate the page to ensure data consistency
    window.location.reload();
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-600">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Events</h2>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary"
          disabled={showForm}
        >
          Add New Event
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingEvent ? "Edit Event" : "Create New Event"}
          </h3>
          <EventForm
            event={editingEvent}
            onEventCreated={handleEventCreated}
            onEventUpdated={handleEventUpdated}
            onCancel={handleCancelEdit}
          />
        </div>
      )}

      <EventTable
        events={events}
        onEdit={handleEdit}
        onDelete={handleEventDeleted}
      />
    </div>
  );
}
