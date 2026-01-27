export interface Level {
    id: string;
    index: number;
    title: string;
    objective: string;
    description: string;
    question: string;
    options: string[];
    img?: string
    correctAnswer: number; // Index of the correct option
}

export type IslandStatus = 'locked' | 'unlocked' | 'completed';
