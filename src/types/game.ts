export interface Level {
    id: string;
    index: number;
    title: string;
    objective: string;
    description: string;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
    img?: string
}

export type IslandStatus = 'locked' | 'unlocked' | 'completed';
