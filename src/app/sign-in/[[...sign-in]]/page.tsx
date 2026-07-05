"use client";

import { SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      const timer = setTimeout(() => {
        window.location.href = "/org-selection";
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSignedIn]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <SignIn />
    </div>
  );
}
