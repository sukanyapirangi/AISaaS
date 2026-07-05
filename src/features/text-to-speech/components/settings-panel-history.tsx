"use client";

import { AudioLines, AudioWaveform, Clock } from "lucide-react";

export function SettingsPanelHistory() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            {/* Stacked decorative icons wrapper with fixed height to prevent collapse */}
            <div className="relative flex w-24 h-16 items-center justify-center">
                <div className="absolute left-1 -rotate-12 rounded-full bg-muted p-3">
                    <AudioLines className="size-4 text-muted-foreground" />
                </div>
                
                <div className="absolute z-10 rounded-full bg-foreground p-3.5 shadow-md">
                    <AudioWaveform className="size-5 text-background" />
                </div>
                
                <div className="absolute right-1 rotate-12 rounded-full bg-muted p-3">
                    <Clock className="size-4 text-muted-foreground" />
                </div>
            </div>

            <div className="space-y-1 flex flex-col items-center">
                <p className="font-semibold tracking-tight text-foreground text-sm">No History</p>
                <p className="max-w-[200px] text-xs text-muted-foreground leading-relaxed">
                    Generate some audio and it will appear here.
                </p>
            </div>
        </div>
    );
}