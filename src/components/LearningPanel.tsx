import { useGameStore } from '../store/gameStore';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const LearningPanel = () => {
    const { currentLearningLevel, isModalOpen, closeLevelModal, unlockNextLevel } = useGameStore();

    if (!currentLearningLevel) return null;

    const handleComplete = () => {
        unlockNextLevel();
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLevelModal}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-slate-900/95 border-l-4 border-emerald-500 z-50 p-8 shadow-2xl flex flex-col text-white overflow-y-auto"
                    >
                        <button
                            onClick={closeLevelModal}
                            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mt-8 flex-1">
                            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                                Learning Module {currentLearningLevel.index + 1}
                            </span>
                            <h2 className="text-3xl font-bold mb-6 font-mono border-b border-emerald-500/30 pb-4">
                                {currentLearningLevel.title}
                            </h2>

                            <div className="prose prose-invert prose-emerald max-w-none">
                                <p className="text-slate-200 text-lg leading-relaxed whitespace-pre-line">
                                    {currentLearningLevel.content}
                                </p>
                            </div>

                            <div className="mt-12 bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-500/20 rounded-full text-emerald-400">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-emerald-300 mb-1">Knowledge Check</h3>
                                        <p className="text-emerald-100/70 text-sm">
                                            Read the content above to understand the concept. Designing the future requires understanding the building blocks of the universe!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleComplete}
                            className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all mt-6 shadow-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20 hover:shadow-emerald-500/40"
                        >
                            I Understand <Check size={20} />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
