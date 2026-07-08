import type { VoiceCategory } from "@/generated/prisma/enums";

export const VOICE_CATEGORY_LABELS: Record<VoiceCategory, string> = {
    AUDIOBOOK: "Audiobook",
    CONVERSATIONAL: "Conversational",
    CUSTOMER_SERVICE: "Customer Service",
    GENERAL: "General",
    NARRATIVES: "Narratives",
    CHARACTERS: "Characters",
    MEDITATION: "Meditation",
    MOTIVATIONAL: "Motivational",
    PODCAST: "Podcast",
    ADVERTISING: "Advertising",
    VOICEOVER: "Voiceover",
    CORPORATE: "Corporate",
};

export const VOICE_CATEGORY = Object.keys(
    VOICE_CATEGORY_LABELS,
) as VoiceCategory[];