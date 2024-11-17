import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    uniqueNamesGenerator,
    Config,
    adjectives,
    colors,
    animals,
} from "unique-names-generator";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getRandomNumber(range: number): number {
    return Math.floor(Math.random() * range) + 1;
}

export function generateUniqueUsername(): string {
    // Define configuration for the username generator
    const config: Config = {
        dictionaries: [adjectives, colors, animals], // Use adjectives, colors, and animals dictionaries
        separator: "-", // Choose a separator for words
        length: 2, // Number of words in the generated username
        style: "lowerCase", // Style of words in the username (lowercase)
    };

    // Generate the username based on the config
    return uniqueNamesGenerator(config);
}
