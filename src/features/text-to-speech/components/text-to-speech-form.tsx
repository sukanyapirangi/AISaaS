"use client";

import { z } from "zod";
import { formOptions } from "@tanstack/react-form";
import { useAppForm } from "@/hooks/use-app-form";

export const ttsFormSchema = z.object({
    text: z.string().min(1, "please enter some text"),
    voiceId: z.string().min(1, "please select a voice"),
    temperature: z.number(),
    topP: z.number(),
    topK: z.number(),
    repetitionPenalty: z.number(),
});

export type TTSForm = z.infer<typeof ttsFormSchema>;

export const defaultTTSValues: TTSForm = {
    text: "",
    voiceId: "",
    temperature: 0.95,
    topP: 0.7,
    topK: 50,
    repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
    defaultValues: defaultTTSValues,
});

export function TextToSpeechForm({
    children,
    defaultValues
}: {
    children: React.ReactNode;
    defaultValues?: TTSForm;
}) {
    const form = useAppForm({
        ...ttsFormOptions,
        defaultValues: defaultValues ?? defaultTTSValues,
        validators: {
            onSubmit: ttsFormSchema,
        },
        onSubmit: async () => {

        },
    });

    return <form.AppForm>{children}</form.AppForm>
}