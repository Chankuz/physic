import React from 'react';
import { Atom, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import scientist1 from '../assets/sciencetist/images.jpeg';
import scientist2 from '../assets/sciencetist/images (1).jpeg';
import scientist3 from '../assets/sciencetist/images (2).jpeg';
import scientist4 from '../assets/sciencetist/images (3).jpeg';

interface LandingPageProps {
    onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    const physicists = [
        {
            name: "Niels Bohr",
            role: "Quantum Structure",
            description: "นีลส์ โบร์ (Niels Bohr) นักฟิสิกส์ชาวเดนมาร์กผู้ได้รับรางวัลโนเบล (ค.ศ. 1922) เป็นผู้เสนอแบบจำลองอะตอมในปี 1913 โดยปรับปรุงแนวคิดของ รัทเทอร์ฟอร์ด โดยใช้ทฤษฎีควอนตัม อธิบายว่าอิเล็กตรอนโคจรรอบนิวเคลียสเป็นชั้นพลังงานเฉพาะตัว (Energy Levels) คล้ายวงโคจรดาวเคราะห์ ระดับพลังงานต่ำสุดอยู่ใกล้นิวเคลียสที่สุด และอิเล็กตรอนจะแผ่หรือดูดซับพลังงานเมื่อเปลี่ยนระดับพลังงาน ซึ่งอธิบายเส้นสเปกตรัมของไฮโดรเจนได้สำเร็จ ",
            image: scientist1,
            color: "cyan",
            link: "https://en.wikipedia.org/wiki/Niels_Bohr"
        },
        {
            name: "Erwin Schrödinger",
            role: "Wave Mechanics",
            description: "เออร์วิน ชเรอดิงเงอร์ (Erwin Schrödinger) นักฟิสิกส์ชาวออสเตรียผู้ได้รับรางวัลโนเบล (ค.ศ. 1933) เป็นผู้พัฒนาทฤษฎีกลศาสตร์คลื่น (Wave Mechanics) ในปี 1926 โดยใช้สมการชเรอดิงเงอร์ (Schrödinger Equation) อธิบายพฤติกรรมของอิเล็กตรอนในอะตอมในรูปของฟังก์ชันคลื่น (Wave Function) ซึ่งแสดงความน่าจะเป็นที่จะพบอิเล็กตรอนในตำแหน่งต่างๆ รอบนิวเคลียส แนวคิดนี้ปฏิวัติความเข้าใจเกี่ยวกับอะตอมและเป็นรากฐานสำคัญของกลศาสตร์ควอนตัมสมัยใหม่ ",
            image: scientist2,
            color: "emerald",
            link: "https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger"
        },
        {
            name: "Werner Heisenberg",
            role: "Uncertainty Principle",
            description: "แวร์เนอร์ ไฮเซนเบิร์ก (Werner Heisenberg) นักฟิสิกส์ชาวเยอรมันผู้ได้รับรางวัลโนเบล (ค.ศ. 1932) เป็นผู้พัฒนาหลักความไม่แน่นอน (Uncertainty Principle) ในปี 1927 ซึ่งเป็นหลักการพื้นฐานของกลศาสตร์ควอนตัม ระบุว่าไม่สามารถวัดตำแหน่ง (Position) และโมเมนตัม (Momentum) ของอนุภาคพร้อมกันได้อย่างแม่นยำสมบูรณ์แบบ ยิ่งวัดค่าหนึ่งได้แม่นยำ อีกค่าจะยิ่งไม่แน่นอน หลักการนี้แสดงให้เห็นถึงธรรมชาติของควอนตัมที่แตกต่างจากฟิสิกส์ดั้งเดิมอย่างสิ้นเชิง ",
            image: scientist3,
            color: "violet",
            link: "https://en.wikipedia.org/wiki/Werner_Heisenberg"
        },
        {
            name: "Max Planck",
            role: "Quantum Theory",
            description: "มักซ์ พลังค์ (Max Planck) นักฟิสิกส์ชาวเยอรมันผู้ได้รับรางวัลโนเบล (ค.ศ. 1918) ได้รับการยกย่องว่าเป็นผู้บุกเบิกทฤษฎีควอนตัม (Quantum Theory) ในปี 1900 โดยเสนอแนวคิดว่าพลังงานไม่ได้ถูกปล่อยออกมาอย่างต่อเนื่อง แต่เป็นก้อนพลังงานไม่ต่อเนื่องที่เรียกว่า ควอนตา (Quanta) หรือ โฟตอน (Photon) พลังงานของควอนตัมแปรผันตรงกับความถี่ของรังสี (E = hf) การค้นพบนี้ปฏิวัติความเข้าใจเกี่ยวกับธรรมชาติของพลังงานและสสารในระดับอะตอมและอนุภาค ซึ่งเป็นรากฐานสำคัญของฟิสิกส์สมัยใหม่ ",
            image: scientist4,
            color: "amber",
            link: "https://en.wikipedia.org/wiki/Max_Planck"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500/30 overflow-hidden">
            <Navbar />
            {/* Main Scroll Container - Added h-screen and overflow-y-auto to fix scrolling */}
            <div className="h-screen overflow-y-auto scroll-smooth">

                {/* Hero Section */}
                <header className="relative h-screen flex flex-col items-center justify-center p-6 text-center select-none">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] opacity-50 animate-pulse" />
                        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-500/20 rounded-full blur-[96px] opacity-40 animate-pulse delay-1000" />
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative z-10 max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-serif bg-gradient-to-r from-cyan-400 via-white to-emerald-400 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-sm">
                            Atomic Physics
                        </h1>
                        <p className="text-[12px] md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                            ฟิสิกส์อะตอม (Atomic Physics) คือแขนงหนึ่งของฟิสิกส์ที่ศึกษาเกี่ยวกับโครงสร้างของอะตอม คุณสมบัติของอะตอม และปฏิสัมพันธ์ระหว่างอะตอมกับรังสีแม่เหล็กไฟฟ้า โดยเฉพาะอย่างยิ่งการศึกษาเกี่ยวกับอิเล็กตรอนในอะตอมและปฏิสัมพันธ์ของอิเล็กตรอนกับนิวเคลียส
                        </p>

                        <button
                            onClick={onStart}
                            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] border border-cyan-500/30 hover:border-cyan-400"
                        >
                            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300" />
                            <span className="relative font-mono font-bold text-cyan-300 group-hover:text-white tracking-widest uppercase flex items-center gap-3">
                                เริ่มต้นการเรียนรู้ <Atom className="animate-spin-slow" size={20} />
                            </span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce cursor-pointer"
                        onClick={() => {
                            // Simple scroll hint
                            const nextSection = document.getElementById('physicists-section');
                            nextSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </header>

                {/* Legendary Physicists Section */}
                <section id="physicists-section" className="relative py-12 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-200 p-6 mb-6 relative inline-block">
                            ประวัติของนักฟิสิกส์
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto font-light">
                            ประวัติของนักฟิสิกส์ที่เกี่ยวข้องกับฟิสิกส์อะตอม
                        </p>
                    </div>

                    <div className="space-y-32">
                        {physicists.map((physicist, index) => (
                            <motion.div
                                key={physicist.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
                            >
                                {/* Image Side */}
                                <div className="flex-1 w-full max-w-md relative group">
                                    <div className={`absolute inset-0 bg-${physicist.color}-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60" />
                                        <img
                                            src={physicist.image}
                                            alt={physicist.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Overlay Name on Image (Mobile/Stylistic choice) */}
                                        <div className="absolute bottom-0 left-0 w-full p-6 mt-3 md:hidden">
                                            <h3 className="text-2xl font-bold text-white font-serif">{physicist.name}</h3>
                                            <span className={`text-${physicist.color}-400 font-mono text-xs uppercase tracking-wider`}>{physicist.role}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="flex-1 text-center md:text-left space-y-6">
                                    <div className="hidden md:block">
                                        <h3 className="text-4xl font-bold text-white font-serif mb-2">{physicist.name}</h3>
                                        <div className={`inline-flex items-center gap-2 px-3 py-2 my-2 rounded-full bg-${physicist.color}-500/10 border border-${physicist.color}-500/20 text-${physicist.color}-300 font-mono text-xs uppercase tracking-widest`}>
                                            <Atom size={12} />
                                            {physicist.role}
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-300 leading-relaxed font-light">
                                        {physicist.description}
                                    </p>

                                    <div className="pt-4">
                                        <button className={`px-6 py-2 rounded-lg text-sm font-mono border border-white/10 hover:border-${physicist.color}-500/50 hover:bg-${physicist.color}-500/10 transition-colors text-slate-400 hover:text-white`}>
                                            <a href={physicist.link} target="_blank" rel="noopener noreferrer">
                                                Learn More
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About This Website Section footer add space*/}
                <div className="max-w-6xl mx-auto px-4 py-2 mt-32 border-t border-white/5">
                    {/* Placeholder for About This Website content if needed, but structure uses separate sections */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
