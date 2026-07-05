"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar";

import { Skeleton } from "@/components/ui/skeleton";

import {
    OrganizationSwitcher, UserButton, useClerk
} from "@clerk/nextjs";

import { type LucideIcon, Home, LayoutGrid, AudioLines, Volume2, Settings, Headphones, } from "lucide-react"

import Link from "next/link";

interface MenuItem {
    title: string;
    url?: string;
    icon: LucideIcon;
    onClick?: () => void;
}

interface NavSectionProps {
    label?: string;
    items: MenuItem[];
    pathname: string;
}

function NavSection({ label, items, pathname }: NavSectionProps) {
    return (
        <SidebarGroup>
            {label && (
                <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
                    {label}
                </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild={!!item.url}
                                isActive={
                                    item.url
                                        ? item.url === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(item.url) : false
                                }
                                onClick={item.onClick}
                                tooltip={item.title}
                            >
                                {item.url ? (
                                    <Link href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <item.icon />
                                        <span>{item.title}</span></>
                                )}

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export function DashboardSidebar() {
    const pathname = usePathname();
    const clerk = useClerk();
    const { state } = useSidebar();

    const mainMenuItems: MenuItem[] = [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
        },
        {
            title: "Explore voices",
            url: "/voices",
            icon: LayoutGrid,
        },
        {
            title: "Text to speech",
            url: "/text-to-speech",
            icon: AudioLines,
        },
        {
            title: "Voice cloning",
            icon: Volume2,
        },
    ];

    const othersMenuItems: MenuItem[] = [
        {
            title: "Settings",
            icon: Settings,
            onClick: () => clerk.openOrganizationProfile(),
        },
        {
            title: "Help and Support",
            url: "mailto:AISaas@gmail.com",
            icon: Headphones,
        }
    ]
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2 pl-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
                    <video
                        src="/LOGO.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-15 w-15 object-cover rounded-md shrink-0"
                    />
                    <span className="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground"> AI SaaS</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavSection items={mainMenuItems} pathname={pathname} />
                <NavSection label="Others" items={othersMenuItems} pathname={pathname} />
            </SidebarContent>
            <SidebarFooter className="p-4 border-t flex flex-col gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:items-center">
                <div className="w-full flex justify-center group-data-[collapsible=icon]:w-auto">
                    <OrganizationSwitcher
                        appearance={{
                            elements: {
                                rootBox: "w-full group-data-[collapsible=icon]:w-auto group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center",
                                organizationSwitcherTrigger: "w-full flex justify-between items-center border border-input bg-background p-2 rounded-md hover:bg-accent hover:text-accent-foreground group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-none group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:hover:bg-accent",
                                organizationPreviewTextContainer: "group-data-[collapsible=icon]:hidden",
                                organizationSwitcherTriggerIcon: "group-data-[collapsible=icon]:hidden",
                            }
                        }}
                        hidePersonal


                    />
                </div>
                <div className="flex items-center gap-2 w-full group-data-[collapsible=icon]:justify-center">
                    <UserButton showName={state !== "collapsed"} />
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}