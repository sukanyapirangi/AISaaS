export interface QuickAction {
    title: string;
    description: string;
    gradient?: string;
    href?: string;
};

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a story",
        description: "Turn your text into captivating narrative audio",
        gradient: "from-[#ff8ee3] to-[#57d7e0]",
        href: "/text-to-speech?text=In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time - but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future"
    },
    {
        title: "Explain a concept",
        description: "Break down complex ideas into simple terms",
        gradient: "from-[#f6d365] to-[#fda085]",
        href: "/text-to-speech?text=Quantum computing is like having a coin that can be both heads and tails at the same time. This superposition allows quantum computers to process massive calculations simultaneously, unlocking solutions that would take classical computers thousands of years."
    },
    {
        title: "Create a podcast intro",
        description: "Generate a professional introduction for your show",
        gradient: "from-[#a18cd1] to-[#fbc2eb]",
        href: "/text-to-speech?text=Welcome back to the Tech Horizons Podcast, where we explore the bleeding edge of artificial intelligence, neuroscience, and space exploration. I'm your host, and today we are diving deep into the future of humanity."
    },
    {
        title: "Voice meditation",
        description: "Guide your listeners through a calming session",
        gradient: "from-[#84fab0] to-[#8fd3f4]",
        href: "/text-to-speech?text=Close your eyes. Take a deep breath in through your nose, holding it for a moment, and then gently release it. Let go of any tension in your shoulders, and simply focus on the natural rhythm of your breathing."
    },
    {
        title: "Record an ad",
        description: "Create high-converting promotional voiceovers",
        gradient: "from-[#ff9a9e] to-[#fecfef]",
        href: "/text-to-speech?text=Are you tired of basic, boring voiceovers? Meet AI SaaS: the ultimate audio platform that turns your text into studio-quality speech in seconds. Sign up today and get your first five standard voice generations absolutely free!"
    }
]