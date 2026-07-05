import { cookies } from "next/headers"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/features/dashboard/components/dasboard-sidebar"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <SidebarProvider defaultOpen={defaultOpen}
            className="h-svh">
            <DashboardSidebar />
            <SidebarInset className="min-h-0 min-w-0">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                </header>
                <main className="flex min-h-0 flex-1 flex-col">
                    {children}
                </main>

            </SidebarInset>

        </SidebarProvider>

    )

};