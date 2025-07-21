"use client";

import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {/* Modal Overlay */}
      {toasts.length > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6">
            {toasts.map(function ({
              id,
              title,
              description,
              action,
              ...props
            }) {
              return (
                <div key={id} className="w-full">
                  <div className="grid gap-4">
                    {title && (
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                      </div>
                    )}
                    {description && (
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {description}
                      </div>
                    )}
                  </div>
                  {action}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Hidden default viewport */}
      <ToastViewport className="hidden" />
    </ToastProvider>
  );
}
