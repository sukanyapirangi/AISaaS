"use client";

import { useStore } from "@tanstack/react-form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { sliders } from "../data/sliders";

import { ttsFormOptions } from "./text-to-speech-form";

export function SettingsPanelSettings() {
    const form = useTypedAppFormContext(ttsFormOptions);
    const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

    return (
        <>
            <div className="border-b border-dashed p-4">
                <p className="text-sm text-muted-foreground">
                    Voice selector coming soon
                </p>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
                <FieldGroup className="gap-8">
                    {sliders.map((slider) => (
                        <form.Field
                            key={slider.id}
                            name={slider.id}
                            children={(field) => (
                                <Field className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <FieldLabel className="text-sm font-medium">
                                            {slider.label}
                                        </FieldLabel>
                                        <span className="text-xs text-muted-foreground font-medium tabular-nums">
                                            {field.state.value}
                                        </span>
                                    </div>
                                    <Slider
                                        value={[field.state.value]}
                                        disabled={isSubmitting}
                                        min={slider.min}
                                        max={slider.max}
                                        step={slider.step}
                                        onValueChange={(val) => field.handleChange(val[0])}
                                        className="[&_[data-slot=slider-thumb]]:size-3 [&_[data-slot=slider-thumb]]:bg-foreground [&_[data-slot=slider-track]]:h-1"
                                    />
                                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                                        <span>{slider.leftLabel}</span>
                                        <span>{slider.rightLabel}</span>
                                    </div>
                                </Field>
                            )}
                        />
                    ))}
                </FieldGroup>
            </div>
        </>
    );
}