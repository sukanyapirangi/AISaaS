"use client"

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function GenerateButton({
    size,
    disabled,
    isSubmitting,
    onSubmit,
    className,
}: {
    size?: "default" | "sm";
    disabled: boolean;
    isSubmitting: boolean;
    onSubmit: () => void;
    className?: string;
}) {
    return (
        <Button
            size={size}
            disabled={disabled}
            onClick={onSubmit}
            className="w-full sm:w-auto font-semibold px-6 pointer shrink-0"
        >
            {isSubmitting ? (
                <>
                    <Spinner className="size-3" />
                    generating...
                </>
            ) : (
                "Generate Speech"
            )}
        </Button>
    );
}