import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Play, Atom } from 'lucide-react';

interface LandingPageProps {
    onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
    const physicists = [
        {
            name: "Niels Bohr",
            title: "Physics Nobel Prize 1922",
            desc: "Niels Bohr proposed the Bohr model of the atom, where electrons travel in separate orbits around the nucleus. He was a foundational figure in understanding atomic structure and quantum theory.",
        },
        {
            name: "Erwin Schrödinger",
            title: "Physics Nobel Prize 1933",
            desc: "Erwin Schrödinger formulated the Schrödinger equation, which describes how the quantum state of a physical system changes over time. He is also famous for his 'Schrödinger's cat' thought experiment.",
        },
        {
            name: "Werner Heisenberg",
            title: "Physics Nobel Prize 1932",
            desc: "Werner Heisenberg is best known for the uncertainty principle, which states that the position and momentum of a particle cannot be simultaneously measured with arbitrarily high precision.",
        },
        {
            name: "Max Planck",
            title: "Physics Nobel Prize 1918",
            desc: "Max Planck is the originator of quantum theory, which revolutionized human understanding of atomic and subatomic processes. He introduced the concept of energy quanta.",
        }
    ];

    return (
        <div className="relative w-full h-screen bg-slate-900 overflow-x-hidden overflow-y-auto flex flex-col text-white selection:bg-cyan-500/30">
            <Navbar />

            {/* Background Elements - Fixed */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, #4fc3f7 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                    }}
                />
            </div>

            {/* Main Content - Scrollable */}
            <div className="relative z-10 flex flex-col items-center pt-12 pb-43 w-full max-w-7xl mx-auto">

                {/* Hero Section */}
                <div className="text-center mt-32 mb-32 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-white"
                    >
                        Atomic Physics
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        มาเรียนรู้ฟิสิกส์กันเถอะ
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        onClick={onStart}
                        className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(79,195,247,0.5)] transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-3">
                            Start
                            <Play className="w-5 h-5 fill-current" />
                        </span>
                    </motion.button>
                </div>

                {/* Physicists Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                    {physicists.map((physicist, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors duration-300"
                        >
                            <div className="flex flex-col h-full text-left">
                                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                                    <Atom className="w-5 h-5" />
                                    <span className="text-sm font-mono uppercase tracking-widest">{physicist.title}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-white">
                                    {physicist.name}
                                </h2>
                                <p className="text-slate-300 leading-relaxed font-light">
                                    {physicist.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>



                {/* Extra Space for "Longer" feel */}
                <div className="h-64" />
            </div>
        </div>
    );
}
