import { useGameStore } from '../store/gameStore';
import { learningLevels } from '../data/learningLevels';
import book from '../assets/book.png'
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Notebook = () => {
    const { isNotebookOpen, toggleNotebook, unlockedLearningIndex } = useGameStore();

    const collectedNotes = learningLevels.filter((_, idx) => idx <= unlockedLearningIndex);

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={toggleNotebook}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className="fixed bottom-8 right-8 z-50 w-32 h-32 rounded-full flex items-center justify-center focus:outline-none drop-shadow-2xl"
            >
                <img
                    src={book}
                    alt="Notebook"
                    className="w-full h-full object-contain filtering-pixelated drop-shadow-lg scale-125"
                    style={{ imageRendering: 'pixelated' }}
                />
            </motion.button>

            <AnimatePresence>
                {isNotebookOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleNotebook}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#fdf6e3] text-slate-900 border-4 border-slate-900 rounded-2xl w-full max-w-2xl h-[70vh] flex flex-col relative shadow-[10px_10px_0px_#1e293b] font-mono overflow-hidden"
                            >
                                {/* Header */}
                                <div className="bg-[#eee8d5] p-4 border-b-4 border-slate-900 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold uppercase tracking-wider">Explorer's Log</h2>
                                    <button onClick={toggleNotebook} className="p-2 hover:bg-slate-900 hover:text-[#fdf6e3] rounded-lg transition-colors">
                                        <X size={24} strokeWidth={3} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {collectedNotes.length === 0 ? (
                                        <div className="text-center text-slate-500 py-10 opacity-60">
                                            <p>No discoveries yet.</p>
                                            <p className="text-sm">Explore islands to fill your notebook!</p>
                                        </div>
                                    ) : (
                                        collectedNotes.map((note) => (
                                            <div key={note.id} className="border-2 border-slate-900/10 bg-white p-4 rounded-xl shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="bg-slate-900 text-[#fdf6e3] text-xs px-2 py-1 rounded">
                                                        REF #{note.index + 1}
                                                    </span>
                                                    <h3 className="font-bold text-lg">{note.title}</h3>
                                                </div>
                                                <p className="text-slate-700 leading-relaxed text-sm">
                                                    {note.content}
                                                </p>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="bg-[#eee8d5] p-3 border-t-4 border-slate-900 text-center text-xs text-slate-500 uppercase tracking-widest">
                                     // VER 1.0
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
