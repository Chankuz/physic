import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

export const GameHUD = () => {
    const { playerLevel, playerXP, xpToNextLevel } = useGameStore();
    const [xpGain, setXpGain] = useState<{ id: number, amount: number }[]>([]);
    const [prevXP, setPrevXP] = useState(playerXP);

    // Calculate progress percentage
    const progress = Math.min((playerXP / xpToNextLevel) * 100, 100);

    // Track XP gains
    useEffect(() => {
        if (playerXP > prevXP) {
            const gain = playerXP - prevXP;
            // Add a new floating text instance
            const id = Date.now();
            setXpGain(prev => [...prev, { id, amount: gain }]);

            // Clean up after animation
            setTimeout(() => {
                setXpGain(prev => prev.filter(item => item.id !== id));
            }, 2000);
        }
        setPrevXP(playerXP);
    }, [playerXP]);

    // Handle Level Up
    useEffect(() => {
        // Simple check: if XP reset to near 0 but level increased (handled in store), trigger effect
        // But store updates level and XP atomically. 
        // We can just rely on the level prop changing if we tracked prevLevel.
        // For now, let's just create a nice pulse whenever level changes.
    }, [playerLevel]);

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-end gap-4 pointer-events-none select-none font-mono">

            <div className="flex gap-4 bg-white/20 rounded-lg p-2">

                {/* Level Badge */}
                <div className="relative group">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-80 animate-pulse" />

                    {/* Badge Container */}
                    <div className="relative w-16 h-16 bg-slate-900/90 border-2 border-cyan-500/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md">
                        <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold opacity-80">Lv.</span>
                        <span className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                            {playerLevel}
                        </span>
                    </div>

                    {/* Level Up Ripple Effect (triggered roughly by prop change if we wanted continuous effect, or kept static for now) */}
                    <motion.div
                        key={playerLevel} // Re-trigger on level change
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: 0 }}
                        className="absolute inset-0 rounded-full border border-cyan-400"
                    />
                </div>

                {/* XP Bar Container */}
                <div className="flex flex-col gap-1 pb-2">

                    {/* Floating XP Text Area */}
                    <div className="h-8 relative w-full">
                        <AnimatePresence>
                            {xpGain.map((gain) => (
                                <motion.div
                                    key={gain.id}
                                    initial={{ opacity: 0, y: 10, x: 0 }}
                                    animate={{ opacity: 1, y: -20 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute left-0 text-emerald-400 font-bold text-sm flex items-center gap-1 shadow-black drop-shadow-md"
                                >
                                    +{gain.amount} XP
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="relative w-64 h-3 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                        {/* Fill */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-emerald-400 shadow-[0_0_10px_rgba(6,182,212,0.5)] relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                            {/* Particles (Simplified as trailing glow) */}
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                        </motion.div>
                    </div>

                    {/* XP Text */}
                    <div className="flex justify-between text-[10px] text-cyan-300/70 font-bold tracking-wider px-1">
                        <span>{Math.floor(playerXP)} / {xpToNextLevel} XP</span>
                        <span>เลเวลต่อไป</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
