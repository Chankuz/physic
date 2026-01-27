import { useGameStore } from '../store/gameStore';
import clsx from 'clsx';
import { BookOpen, HelpCircle, Home } from 'lucide-react';

export const Navbar = () => {
    const { gameMode, setGameMode, setGameStarted, isGameStarted } = useGameStore();

    const handleModeSwitch = (mode: 'quiz' | 'learning') => {
        setGameMode(mode);
        if (!isGameStarted) {
            setGameStarted(true);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-slate-900/90 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-6 shadow-xl opacity-80">
            {/* Left: Logo */}
            <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => setGameStarted(false)}>
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-900 text-xl font-mono shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                    A
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-white font-bold tracking-wider font-mono text-lg">ATOMIC</span>
                    <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">Adventure</span>
                </div>
            </div>

            {/* Right: Mode Switcher */}
            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-white/5">
                {isGameStarted && (
                    <>
                        <button
                            onClick={() => setGameStarted(false)}
                            className="flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                            <Home size={16} />
                            <span>หน้าหลัก (Main)</span>
                        </button>
                        <div className="w-px h-6 bg-white/10 mx-2" />
                    </>
                )}

                <button
                    onClick={() => handleModeSwitch('quiz')}
                    className={clsx(
                        "flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all duration-200",
                        gameMode === 'quiz'
                            ? "bg-cyan-600 text-white shadow-lg"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                >
                    <HelpCircle size={16} />
                    <span>โจทย์ (Quiz)</span>
                </button>

                <button
                    onClick={() => handleModeSwitch('learning')}
                    className={clsx(
                        "flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all duration-200",
                        gameMode === 'learning'
                            ? "bg-emerald-600 text-white shadow-lg"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                >
                    <BookOpen size={16} />
                    <span>เรียนรู้ (Learn)</span>
                </button>
            </div>
        </nav>
    );
};
