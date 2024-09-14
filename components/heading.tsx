import { cn } from "@/lib/utils";

export function Heading({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    // Split the text into an array of words
    const words = text.split(" ");
    // Get all words except the last two
    const mainText = words.slice(0, -2).join(" ");
    // Get the last two words
    const lastTwoWords = words.slice(-2).join(" ");

    return (
        <h2
            className={cn("text-center font-bold text-4xl text-blue-100 relative z-20 mb-5", className)}
        >
            {mainText}{" "}
            <span className="text-purple">{lastTwoWords}</span>
        </h2>
    );
}
