import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

export const QuestionPanel = () => {
    const { currentActionLevel, isModalOpen, closeLevelModal, unlockNextLevel } = useGameStore();
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);

    if (!currentActionLevel) return null;

    const handleOptionClick = (index: number) => {
        if (showFeedback === 'correct') return; // Prevent changing answer if already correct
        setSelectedOption(index);
        setShowFeedback(null);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        if (selectedOption === currentActionLevel.correctAnswer) {
            setShowFeedback('correct');
            setTimeout(() => {
                unlockNextLevel();
                // Reset state for next time
                setSelectedOption(null);
                setShowFeedback(null);
            }, 1500);
        } else {
            setShowFeedback('incorrect');
        }
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
                        className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-slate-900/90 border-l-4 border-cyan-500 z-50 p-8 shadow-2xl flex flex-col text-white overflow-y-auto"
                    >
                        <button
                            onClick={closeLevelModal}
                            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mt-8 flex-1">
                            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                                Level {currentActionLevel.index + 1}
                            </span>
                            <h2 className="text-3xl font-bold mb-4 font-mono">{currentActionLevel.title}</h2>

                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 mb-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Objective</h3>
                                <p className="text-slate-200 leading-relaxed text-sm">
                                    {currentActionLevel.description}
                                </p>
                                <div className="mt-2 text-cyan-300 font-semibold text-sm">
                                    Goal: {currentActionLevel.objective}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4 text-white">Challenge</h3>
                                <p className="text-lg text-slate-200 mb-6">{currentActionLevel.question}</p>

                                <div className="space-y-3">
                                    <div className="my-8">
                                        <img src={currentActionLevel.img} alt="" className='rounded-lg' />
                                    </div>
                                    {currentActionLevel.options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(idx)}
                                            className={clsx(
                                                "w-full p-4 rounded-lg text-left transition-all border-2 flex items-center justify-between group relative overflow-hidden",
                                                selectedOption === idx
                                                    ? "bg-cyan-900/40 border-cyan-400 text-white"
                                                    : "bg-slate-800/40 border-slate-700 hover:border-slate-500 text-slate-300"
                                            )}
                                        >
                                            <span className="relative z-10">{option}</span>
                                            {selectedOption === idx && <div className="absolute inset-0 bg-cyan-400/10 z-0" />}
                                        </button>
                                    ))}
                                </div>

                            </div>

                            {/* Feedback Area */}
                            <div className="h-16 flex items-center">
                                {showFeedback === 'incorrect' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 flex items-center gap-2 bg-red-900/20 px-4 py-2 rounded border border-red-500/30"
                                    >
                                        <X size={18} />
                                        <span>ผิด! ลองใหม่</span>
                                    </motion.div>
                                )}
                                {showFeedback === 'correct' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 flex items-center gap-2 bg-green-900/20 px-4 py-2 rounded border border-green-500/30"
                                    >
                                        <Check size={18} />
                                        <span>ถูกต้อง! ไปต่อได้เลย</span>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={selectedOption === null || showFeedback === 'correct'}
                            className={clsx(
                                "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all mt-6 shadow-lg",
                                selectedOption !== null && showFeedback !== 'correct'
                                    ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/20 hover:shadow-cyan-500/40 translate-y-0"
                                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                            )}
                        >
                            Submit Answer <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
