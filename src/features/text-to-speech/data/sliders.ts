interface Slider {
    id: "temperature" | "topP" | "topK" | "repetitionPenalty";
    label: string;
    leftLabel: string;
    rightLabel: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
}

export const sliders: Slider[] = [
    {
        id: "temperature",
        label: "Creativity",
        leftLabel: "Consistent",
        rightLabel: "Expressive",
        min: 0,
        max: 2,
        step: 0.05,
        defaultValue: 0.95,
    },
    {
        id: "topP",
        label: "Voice Variety",
        leftLabel: "Stable",
        rightLabel: "Dynamic",
        min: 0,
        max: 2,
        step: 0.1,
        defaultValue: 0.7,
    },
    {
        id: "topK",
        label: "Style Exaggeration",
        leftLabel: "Subtle",
        rightLabel: "Exaggerated",
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
    },
    {
        id: "repetitionPenalty",
        label: "Repetition Penalty",
        leftLabel: "Normal",
        rightLabel: "Strong",
        min: 0.5,
        max: 2,
        step: 0.05,
        defaultValue: 1.2,
    }
];