"use client";

import { useRef, useEffect } from "react";
import { Coins } from "lucide-react";
import { useStore } from "@tanstack/react-form";

import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useTypedAppFormContext } from "@/hooks/use-app-form";

import { TEXT_MAX_LENGTH } from "../data/constants";
import { ttsFormOptions } from "./text-to-speech-form";
import { GenerateButton } from "./generate-button";

export default function TextInputPanel() {
    const form = useTypedAppFormContext(ttsFormOptions);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Subscribe to form state values using useStore
    const textValue = useStore(form.store, (s) => s.values.text);
    const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

    const textLength = textValue?.length || 0;

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [textValue]);

    return (
        <div className="flex-1 overflow-y-auto bg-background p-4 lg:p-8">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="relative">
                    <form.Field
                        name="text"
                        children={(field) => (
                            <Textarea
                                ref={textareaRef}
                                placeholder="Type or paste text here to generate speech..."
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="w-full resize-none border border-input bg-card rounded-2xl p-4 lg:p-6 text-base!
                                leading-relaxed tracking-tight shadow-sm focus-visible:ring-1 focus-visible:ring-ring
                                min-h-[250px] md:min-h-[350px] max-h-[600px] overflow-y-auto transition-all"
                                maxLength={TEXT_MAX_LENGTH}
                            />
                        )}
                    />
                </div>

                {/* Controls and Stats under the text area */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2">
                    <div className="flex items-center gap-3">
                        {textLength > 0 ? (
                            <>
                                <Badge variant="outline" className="gap-1.5 border-dashed bg-card">
                                    <Coins className="size-3 text-chart-5" />
                                    <span className="text-xs">
                                        <span className="tabular-nums">
                                            ${(textLength * 0.003).toFixed(4)}
                                        </span>{" "}
                                        estimated
                                    </span>
                                </Badge>
                                <span className="text-xs text-muted-foreground font-medium">
                                    {textLength.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()} characters
                                </span>
                            </>
                        ) : (
                            <span className="text-xs text-muted-foreground font-medium">
                                Start typing to estimate cost
                            </span>
                        )}
                    </div>

                    <GenerateButton
                        disabled={!textValue?.trim()}
                        isSubmitting={isSubmitting}
                        onSubmit={() => form.handleSubmit()}
                    />
                </div>
            </div>
        </div>
    );
}
