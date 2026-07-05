"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
    const { isLoaded, user } = useUser();
    return (
        <div className="flex items-start justify-between">
            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                    nice to see you !
                </p>
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    {
                        isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."
                    }

                </h1>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                    <Link href="https://wa.me/918007310948?text=Hi,%20I%20need%20help%20with%20design%20-%20UI/UX%20templates">
                        <Headphones className="h-4 w-4 mr-2" />
                        Support
                    </Link>
                </Button>
                <Button size="sm" asChild>
                    <Link href="https://wa.me/918007310948?text=Hi,%20I%20need%20help%20with%20design%20-%20UI/UX%20templates">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Feedback
                    </Link>
                </Button>
            </div>
        </div>
    )
}