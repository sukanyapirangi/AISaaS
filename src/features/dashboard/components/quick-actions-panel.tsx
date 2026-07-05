import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { quickActions } from "../data/quick-actions";

export function QuickActionPanel() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">Quick Actions</h2>
                <p className="text-sm text-muted-foreground">Try these out</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {quickActions.map((action) => (
                    <Link key={action.title} href={action.href || "#"} className="group block">
                        <Card className="relative overflow-hidden p-6 transition-all duration-300 hover:shadow-md hover:border-muted-foreground/30 flex flex-col justify-between h-full min-h-[140px] rounded-2xl">
                            {/* Decorative background gradient glow on hover */}
                            <div className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br ${action.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
                            
                            {/* Left gradient accent strip */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${action.gradient}`} />
                            
                            <div className="space-y-2 pl-2">
                                <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {action.description}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors mt-4 pl-2">
                                Try action
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

        </div>
    )
}