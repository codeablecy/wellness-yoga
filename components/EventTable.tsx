"use client";

import type { Event } from "@/types/event";
import { AlertTriangle, Edit, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface EventTableProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (eventId: string) => void;
}

export default function EventTable({
  events,
  onEdit,
  onDelete,
}: EventTableProps) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    eventId: string;
    eventTitle: string;
  }>({
    isOpen: false,
    eventId: "",
    eventTitle: "",
  });

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && deleteModal.isOpen) {
        handleCancelDelete();
      }
    };

    if (deleteModal.isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [deleteModal.isOpen]);

  const handleDeleteClick = (eventId: string, eventTitle: string) => {
    setDeleteModal({
      isOpen: true,
      eventId,
      eventTitle,
    });
  };

  const handleCancelDelete = () => {
    setDeleteModal({
      isOpen: false,
      eventId: "",
      eventTitle: "",
    });
  };

  const handleConfirmDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(deleteModal.eventId);

    try {
      const response = await fetch(`/api/events?id=${deleteModal.eventId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete event");

      onDelete(deleteModal.eventId);

      // Close modal immediately
      handleCancelDelete();

      toast.success("Event deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error deleting event:", error);

      toast.error("Failed to delete event. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.title}
                    </div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {event.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(event.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.category === "Yoga"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {event.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEdit(event)}
                        className="text-purple-600 hover:text-purple-900 p-1 transition-colors duration-200"
                        aria-label={`Edit ${event.title}`}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(event.id, event.title)}
                        className={`p-1 transition-colors duration-200 ${
                          isDeleting === event.id
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-red-600 hover:text-red-900"
                        }`}
                        aria-label={`Delete ${event.title}`}
                        disabled={isDeleting === event.id}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No events found. Create your first event to get started.
            </p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal Overlay */}
      {deleteModal.isOpen && (
        <div
          className="fixed -top-8  inset-0 bg-black h-screen w-screen bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-200"
          onClick={handleCancelDelete} // Close on backdrop click
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Confirm Deletion
                </h3>
              </div>
              <button
                onClick={handleCancelDelete}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close modal"
                disabled={isDeleting === deleteModal.eventId}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <strong className="text-gray-900">
                  "{deleteModal.eventTitle}"
                </strong>
                ? This action cannot be undone.
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-3 justify-end">
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isDeleting === deleteModal.eventId}
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  disabled={isDeleting === deleteModal.eventId}
                >
                  {isDeleting === deleteModal.eventId ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} />
                      <span>Delete Event</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
