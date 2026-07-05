import TextInputPanel from "@/features/text-to-speech/components/text-input-panel";
import { VoicePreviewPlaceholder } from "@/features/text-to-speech/components/voice-preview-placeholder";
import { SettingsPanel } from "@/features/text-to-speech/components/settings-panel";
import { TextToSpeechForm } from "@/features/text-to-speech/components/text-to-speech-form";

export function TextToSpeechView() {
    return (
        <TextToSpeechForm>
            <div className="flex min-h-0 flex-1 flex-col lg:flex-row overflow-hidden bg-background">
                <div className="flex min-h-0 flex-1 flex-col">
                    <TextInputPanel />
                </div>
                <VoicePreviewPlaceholder />
                <SettingsPanel />
            </div>
        </TextToSpeechForm>
    );
}