import { AudioLines, BookOpen, Sparkles, Volume2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function VoicePreviewPlaceholder() {
    return (
        <div className="hidden lg:flex w-80 xl:w-96 border-l bg-card flex-col items-center justify-center p-8 gap-6 h-full">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative rounded-full bg-muted p-4">
                    <Volume2 className="size-6 text-muted-foreground" />
                    <div className="absolute -top-1 -right-1 rounded-full bg-primary p-1 text-primary-foreground">
                        <Sparkles className="size-3" />
                    </div>
                </div>

                <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-foreground">Voice Studio</h3>
                    <p className="text-sm text-muted-foreground max-w-[240px]">
                        Select a voice and configure settings to preview your speech.
                    </p>
                </div>

                <div className="flex flex-col gap-2 w-full mt-4">
                    <Button size="sm" variant="outline" className="w-full h-9 pointer" asChild>
                        <Link href="/voices">
                            <AudioLines className="mr-2 size-4" />
                            Browse Voices
                        </Link>
                    </Button>
                    <Button size="sm" variant="secondary" className="w-full h-9 pointer" asChild>
                        <Link href="mailto:AISaas@gmail.com">
                            <Mail className="mr-2 size-4" />
                            Email Support
                        </Link>
                    </Button>
                    <Button size="sm" variant="ghost" className="w-full h-9 pointer" asChild>
                        <Link href="/docs">
                            <BookOpen className="mr-2 size-4" />
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}