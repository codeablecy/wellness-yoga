"use client";

import { createClient } from "@/lib/supabase/client";
import type { Event } from "@/types/event";
import { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventTable from "./EventTable";

export default function EventsAdmin() {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
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

  const handleEventCreated = (newEvent: Event) => {
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  const handleEventUpdated = (updatedEvent: Event) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setEditingEvent(null);
    setShowForm(false);
  };

  const handleEventDeleted = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
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
