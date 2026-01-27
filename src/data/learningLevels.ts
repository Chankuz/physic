

// Re-using Level interface for simplicity, though 'question'/'options' might be unused or repurposed
// Actually, let's define a simpler interface for Learning Levels or make Level flexible
export interface LearningLevel {
    id: string;
    index: number;
    title: string;
    content: string; // The educational text
}

export const learningLevels: LearningLevel[] = [
    {
        id: 'learn-1',
        index: 0,
        title: 'Introduction to Atoms',
        content: 'ฉันรักเธอ',
    },
    {
        id: 'learn-2',
        index: 1,
        title: 'Protons',
        content: 'Protons are positively charged particles found in the nucleus. The number of protons determines what element the atom is (e.g., 6 protons = Carbon).',
    },
    {
        id: 'learn-3',
        index: 2,
        title: 'Neutrons',
        content: 'Neutrons are neutral particles (no charge) also located in the nucleus. They help hold the nucleus together against the repulsion of protons.',
    },
    {
        id: 'learn-4',
        index: 3,
        title: 'Electrons',
        content: 'Electrons are negatively charged particles that orbit the nucleus. They are much smaller than protons and neutrons and are involved in chemical bonding.',
    },
    {
        id: 'learn-5',
        index: 4,
        title: 'Electron Shells',
        content: 'Electrons reside in specific energy levels or "shells" around the nucleus. The first shell can hold 2 electrons, the second can hold 8.',
    },
    {
        id: 'learn-6',
        index: 5,
        title: 'Atomic Mass',
        content: 'The mass of an atom is mostly in the nucleus (protons + neutrons). Electrons have almost no mass compared to the nucleons.',
    },
    {
        id: 'learn-7',
        index: 6,
        title: 'Ions',
        content: 'An ion is an atom that has gained or lost electrons, giving it a net positive or negative charge. Cations are positive, Anions are negative.',
    },
    {
        id: 'learn-8',
        index: 7,
        title: 'Valence Electrons',
        content: 'Valence electrons are the electrons in the outermost shell. They determine how an atom interacts and bonds with other atoms.',
    },
    {
        id: 'learn-9',
        index: 8,
        title: 'Radioactivity',
        content: 'Some atomic nuclei are unstable and release energy to become stable. This process is called radioactivity. Common types are Alpha, Beta, and Gamma decay.',
    },
    {
        id: 'learn-10',
        index: 9,
        title: 'Nuclear Fission',
        content: 'Nuclear fission occurs when a heavy nucleus splits into smaller nuclei, releasing a tremendous amount of energy. This is the principle behind nuclear power plants.',
    },
];
