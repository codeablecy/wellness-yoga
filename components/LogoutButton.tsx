"use client";

import { logout } from "@/app/admin/logout/actions";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="text-gray-600 hover:text-red-600 hover:border-red-300 transition-colors"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Signing out...
        </>
      ) : (
        <>
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </>
      )}
    </Button>
  );
}
