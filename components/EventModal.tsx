"use client";

import { addToCalendar } from "@/lib/calendar";
import type { Event } from "@/types/event";
import {
  Calendar,
  CalendarPlus,
  ChevronDown,
  Clock,
  Copy,
  Facebook,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Star,
  Twitter,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

// style is modal/overlay
// modal is the event card
// overlay is the background

export default function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isAddingToCalendar, setIsAddingToCalendar] = useState(false);
  const [calendarAdded, setCalendarAdded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showShareMenu) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showShareMenu]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: event.title,
      text: event.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        setShowShareMenu(true);
      }
    } catch (error) {
      console.error("Error sharing:", error);
      setShowShareMenu(true);
    }
  };

  const handleAddToCalendar = async () => {
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

  const shareToSocialMedia = (platform: string) => {
    const shareText = `${event.title} - ${event.description}`;
    const shareUrl = window.location.href;
    const priceInfo =
      event.price === "free" ? "Free event" : `Price: €${event.price}`;

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodeURIComponent(
          `${shareText}\n\n${shareUrl}`
        )}`;
        break;
      case "email":
        shareLink = `mailto:?subject=${encodeURIComponent(
          event.title
        )}&body=${encodeURIComponent(
          `${event.description}\n\n${priceInfo}\n\nDate: ${formatDate(
            event.date
          )} at ${formatTime(event.date)}\n\n${shareUrl}`
        )}`;
        break;
      case "copy":
        navigator.clipboard.writeText(
          `${shareText}\n\nDate: ${formatDate(event.date)} at ${formatTime(
            event.date
          )}\n\n${shareUrl}`
        );
        alert("Event details copied to clipboard!");
        setShowShareMenu(false);
        return;
    }

    window.open(shareLink, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform transition-all duration-300 overflow-hidden ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-48 md:h-64 rounded-t-2xl overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg?height=400&width=800"}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                event.category
              )} backdrop-blur-sm shadow-lg`}
            >
              {event.category}
            </span>
          </div>

          {/* Event Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h1
              id="event-modal-title"
              className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2"
            >
              {event.title}
            </h1>
            <div className="flex items-center text-white/90 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(event.date)}
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              {formatTime(event.date)}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col h-[calc(85vh-12rem)] md:h-[calc(85vh-16rem)]">
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleAddToCalendar}
                  disabled={isAddingToCalendar}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    calendarAdded
                      ? "bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600"
                      : isAddingToCalendar
                      ? "bg-gray-400 dark:bg-gray-500 text-white cursor-not-allowed"
                      : "bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600"
                  }`}
                  aria-label="Add to Calendar"
                >
                  <CalendarPlus className="w-4 h-4 mr-2" />
                  {calendarAdded
                    ? "Added!"
                    : isAddingToCalendar
                    ? "Adding..."
                    : "Add to Calendar"}
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 flex items-center space-x-1"
                  aria-label="Share event"
                >
                  <Share2 className="w-5 h-5" />
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Share Menu Dropdown */}
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                    <div className="py-2">
                      <button
                        onClick={() => shareToSocialMedia("facebook")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          Facebook
                        </span>
                      </button>

                      <button
                        onClick={() => shareToSocialMedia("twitter")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          Twitter
                        </span>
                      </button>

                      <button
                        onClick={() => shareToSocialMedia("linkedin")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          LinkedIn
                        </span>
                      </button>

                      <button
                        onClick={() => shareToSocialMedia("whatsapp")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          WhatsApp
                        </span>
                      </button>

                      <button
                        onClick={() => shareToSocialMedia("email")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          Email
                        </span>
                      </button>

                      <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                      <button
                        onClick={() => shareToSocialMedia("copy")}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-3"
                      >
                        <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          Copy Link
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  About This Event
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What to Expect
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Suitable for all experience levels
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-2" />
                      Small group setting for personalized attention
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-red-500 mr-2" />
                      Focus on mindfulness and wellness
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Event Info */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 text-sm">
                    Event Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs">
                      <Calendar className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {formatTime(event.date)}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <MapPin className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Main Studio
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Users className="w-3 h-3 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Max 15 participants
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Contact
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <Phone className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        (555) 123-4567
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Mail className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        info@yogastudio.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1 text-sm">
                    Pricing
                  </h3>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">
                    {event.price === "free" ? "Free" : `€${event.price}`}
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-400">
                    {event.price === "free" ? "No cost" : "per session"}
                  </p>
                </div>

                {/* Add to Calendar */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 text-sm">
                    Calendar
                  </h3>
                  <button
                    onClick={handleAddToCalendar}
                    disabled={isAddingToCalendar}
                    className={`w-full flex items-center justify-center px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      calendarAdded
                        ? "bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600"
                        : isAddingToCalendar
                        ? "bg-gray-400 dark:bg-gray-500 text-white cursor-not-allowed"
                        : "bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600"
                    }`}
                    aria-label="Add to Calendar"
                  >
                    <CalendarPlus className="w-4 h-4 mr-2" />
                    {calendarAdded
                      ? "Added to Calendar!"
                      : isAddingToCalendar
                      ? "Adding..."
                      : "Add to Calendar"}
                  </button>
                  <p className="text-xs text-purple-700 dark:text-purple-400 mt-1 text-center">
                    {calendarAdded ? "Event downloaded" : "Download .ics file"}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                What to Bring
              </h3>
              {event.what_to_bring && event.what_to_bring.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                  {event.what_to_bring.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400">
                        •
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-gray-500 dark:text-gray-400 italic">
                  No specific items required. Just bring yourself and an open
                  mind!
                </div>
              )}
            </div>
          </div>

          {/* Bottom Spacing */}
          {/* <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ready to join this session?
              </p>
              <button className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 text-sm">
                Book Now
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
