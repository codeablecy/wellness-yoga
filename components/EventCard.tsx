"use client";

import EventModal from "@/components/EventModal";
import { addToCalendar } from "@/lib/calendar";
import type { Event } from "@/types/event";
import { ArrowRight, Calendar, CalendarPlus, Clock, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface EventCardProps {
  event: Event;
}

// style is modal/overlay

export default function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingToCalendar, setIsAddingToCalendar] = useState(false);
  const [calendarAdded, setCalendarAdded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      Yoga: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
      Meditation:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      Pilates:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      "Tai Chi":
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
      "Qi Gong": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
      Reiki: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300",
      "Sound Healing":
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
      Aromatherapy:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
      "Crystal Healing":
        "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300",
      "Chakra Balancing":
        "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300",
      Breathwork:
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300",
      Mindfulness:
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
      "Stress Relief":
        "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300",
      "Energy Healing":
        "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
      "Holistic Wellness":
        "bg-slate-100 dark:bg-slate-900/30 text-slate-800 dark:text-slate-300",
      "Spiritual Counseling":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
      "Energy Mentoring":
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
      "Active-Spiritual Nutrition":
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      "Zhineng Qigong":
        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
      "Personal Empowerment":
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
      "Conscious Teaching":
        "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      "Energy Center Cleansing":
        "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300",
      "Conscious Awakening":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
      Theosophy:
        "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300",
      "Universal Healing":
        "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300",
      "Self-Awareness":
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
      Harmonization:
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300",
    };

    return (
      categoryColors[category] ||
      "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300"
    );
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleAddToCalendar = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAddingToCalendar(true);

    try {
      await addToCalendar(event);
      setCalendarAdded(true);
      setTimeout(() => setCalendarAdded(false), 2000);
    } catch (error) {
      console.error("Failed to add to calendar:", error);
      alert("Failed to add event to calendar. Please try again.");
    } finally {
      setIsAddingToCalendar(false);
    }
  };

  return (
    <>
      <article
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-gray-900/20"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={event.image || "/placeholder.svg?height=200&width=300"}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                event.category
              )} backdrop-blur-sm`}
            >
              {event.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
              <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(event.date)}
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            {formatTime(event.date)}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
            {event.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-12">
            {event.description}
          </p>

          <div className="flex items-center justify-between fixed bottom-2 left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4 mr-1" />
              <span>Open to all levels</span>
            </div>
            <div className="flex items-center space-x-8">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {event.price === "free" ? "Free" : `€${event.price}`}
              </span>
              <button
                onClick={handleAddToCalendar}
                disabled={isAddingToCalendar}
                className={`p-2 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  calendarAdded
                    ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                    : "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                }`}
                aria-label="Add to calendar"
                title={calendarAdded ? "Added to Calendar!" : "Add to Calendar"}
              >
                <CalendarPlus className="w-4 h-4" />
              </button>
              <button
                onClick={handleCardClick}
                className="p-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                aria-label="View event details"
                title="Learn More"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <EventModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
