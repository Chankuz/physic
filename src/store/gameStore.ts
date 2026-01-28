import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Level } from '../types/game';
import { learningLevels, type LearningLevel } from '../data/learningLevels';
import { levels } from '../data/levels';

interface GameState {
    unlockedLevelIndex: number; // Quiz progress
    unlockedLearningIndex: number; // Learning progress
    currentActionLevel: Level | null; // Quiz modal data
    currentLearningLevel: LearningLevel | null; // Learning modal data
    isModalOpen: boolean;
    isNotebookOpen: boolean;
    gameMode: 'quiz' | 'learning';
    isGameStarted: boolean;

    // Player Stats
    playerLevel: number;
    playerXP: number;
    xpToNextLevel: number;

    setGameStarted: (started: boolean) => void;
    setGameMode: (mode: 'quiz' | 'learning') => void;
    toggleNotebook: () => void;
    openLevelModal: (level: Level | LearningLevel) => void;
    closeLevelModal: () => void;
    unlockNextLevel: () => void;
    gainXP: (amount: number) => void;
    isLevelUnlocked: (index: number) => boolean;
    isLevelCompleted: (index: number) => boolean;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            unlockedLevelIndex: 0, // Start with only level 0 unlocked
            unlockedLearningIndex: 0,
            currentActionLevel: null,
            currentLearningLevel: null,
            isModalOpen: false,
            isNotebookOpen: false,
            gameMode: 'quiz', // Default to quiz mode
            isGameStarted: false,

            // Initial Stats
            playerLevel: 1,
            playerXP: 0,
            xpToNextLevel: 100,

            setGameStarted: (started) => set({ isGameStarted: started }),
            setGameMode: (mode) => set({ gameMode: mode, isModalOpen: false, isNotebookOpen: false }),
            toggleNotebook: () => set((state) => ({ isNotebookOpen: !state.isNotebookOpen, isModalOpen: false })),

            gainXP: (amount) => set((state) => {
                let newXP = state.playerXP + amount;
                let newLevel = state.playerLevel;
                let newMaxXP = state.xpToNextLevel;

                // Level Up Logic
                if (newXP >= newMaxXP) {
                    newXP -= newMaxXP;
                    newLevel += 1;
                    // Simple formula: each level takes 1.5x more XP or just +50 flat
                    // Let's do a smooth curve: Previous Max * 1.2
                    newMaxXP = Math.floor(newMaxXP * 1.2);
                }

                return {
                    playerXP: newXP,
                    playerLevel: newLevel,
                    xpToNextLevel: newMaxXP
                };
            }),

            openLevelModal: (level) => {
                const state = get();
                // Check type of level to determine which modal to open
                if ('content' in level) {
                    // It's a LearningLevel
                    if (state.isLevelUnlocked(level.index)) {
                        set({ currentLearningLevel: level as LearningLevel, isModalOpen: true });
                    }
                } else {
                    // It's a Quiz Level
                    if (state.isLevelUnlocked(level.index)) {
                        set({ currentActionLevel: level as Level, isModalOpen: true });
                    }
                }
            },

            closeLevelModal: () => set({ isModalOpen: false, currentActionLevel: null, currentLearningLevel: null }),

            unlockNextLevel: () =>
                set((state) => {
                    if (state.gameMode === 'quiz') {
                        const nextIndex = state.unlockedLevelIndex + 1;
                        return {
                            unlockedLevelIndex: Math.min(nextIndex, levels.length - 1),
                            isModalOpen: false, // Close modal on success
                        };
                    } else {
                        const nextIndex = state.unlockedLearningIndex + 1;
                        return {
                            unlockedLearningIndex: Math.min(nextIndex, learningLevels.length - 1),
                            isModalOpen: false,
                        };
                    }
                }),

            isLevelUnlocked: (index) => {
                const state = get();
                if (state.gameMode === 'quiz') return index <= state.unlockedLevelIndex;
                return index <= state.unlockedLearningIndex;
            },
            isLevelCompleted: (index) => {
                const state = get();
                if (state.gameMode === 'quiz') return index < state.unlockedLevelIndex;
                return index < state.unlockedLearningIndex;
            },
        }),
        {
            name: 'game-storage', // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
            partialize: (state) => ({
                // Only persist these fields
                unlockedLevelIndex: state.unlockedLevelIndex,
                unlockedLearningIndex: state.unlockedLearningIndex,
                playerLevel: state.playerLevel,
                playerXP: state.playerXP,
                xpToNextLevel: state.xpToNextLevel,
                gameMode: state.gameMode,
                isGameStarted: state.isGameStarted
            }),
        }
    )
);
