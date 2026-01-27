import type { Level } from '../types/game';

export const levels: Level[] = [
    {
        id: 'island-1',
        index: 0,
        title: 'Atomic Structure',
        objective: 'Understand protons, neutrons, and electrons',
        description: 'Welcome, explorer! Navigate the subatomic seas. Your first task is to identify the charged particles within an atom.',
        question: 'Which particle has a positive electrical charge?',
        options: [
            'Electron',
            'Neutron',
            'Proton',
            'Photon'
        ],
        correctAnswer: 2,
    },
    {
        id: 'island-2',
        index: 1,
        title: 'Atomic Number',
        objective: 'Understand atomic number and elements',
        description: 'Elements are defined by their proton count. Can you identify an element based on its nucleus?',
        question: 'An atom with 6 protons belongs to which element?',
        options: [
            'Oxygen',
            'Carbon',
            'Nitrogen',
            'Hydrogen'
        ],
        correctAnswer: 1,
    },
    {
        id: 'island-3',
        index: 2,
        title: 'Isotopes',
        objective: 'Understand isotopes and neutron differences',
        description: 'Atoms of the same element can have different weights. These are called isotopes.',
        question: 'What is the main difference between Carbon-12 and Carbon-14?',
        options: [
            'Number of protons',
            'Number of electrons',
            'Number of neutrons',
            'Atomic number'
        ],
        correctAnswer: 2,
    },
    {
        id: 'island-4',
        index: 3,
        title: 'Electron Energy Levels',
        objective: 'Understand electron energy transitions',
        description: 'Electrons orbit at specific energy levels. They can jump between these levels by absorbing or releasing energy.',
        question: 'What happens when an electron absorbs energy?',
        options: [
            'It moves to a lower energy level',
            'It moves to a higher energy level',
            'It leaves the atom completely',
            'It turns into a proton'
        ],
        correctAnswer: 1,
    },
    {
        id: 'island-5',
        index: 4,
        title: 'Energy Emission',
        objective: 'Understand light emission from atoms',
        description: 'When an electron falls back down, it must release its excess energy. This is the source of atomic light!',
        question: 'How is light (a photon) produced in an atom?',
        options: [
            'An electron moves to a higher level',
            'A proton absorbs energy',
            'An electron falls to a lower energy level',
            'Two atoms collide'
        ],
        correctAnswer: 2,
    },
    {
        id: 'island-6',
        index: 5,
        title: 'Atomic Mass',
        objective: 'Understand mass contribution',
        description: 'Electrons are tiny compared to the nucleus. Where does most of the mass come from?',
        question: 'Which particles contribute most to atomic mass?',
        options: [
            'Electrons only',
            'Protons and Neutrons',
            'Neutrons only',
            'Photons'
        ],
        correctAnswer: 1,
    },
    {
        id: 'island-7',
        index: 6,
        title: 'Ions',
        objective: 'Understand charged atoms',
        description: 'If an atom loses an electron, its charge balance changes.',
        question: 'What is an atom with a positive or negative charge called?',
        options: [
            'Isotope',
            'Molecule',
            'Ion',
            'Element'
        ],
        correctAnswer: 2,
    },
    {
        id: 'island-8',
        index: 7,
        title: 'Valence Electrons',
        objective: 'Identify bonding electrons',
        description: 'Chemical reactions happen on the surface of the atom.',
        question: 'Where are valence electrons located?',
        options: [
            'In the nucleus',
            'In the innermost shell',
            'In the outermost shell',
            'Floating freely outside'
        ],
        correctAnswer: 2,
    },
    {
        id: 'island-9',
        index: 8,
        title: 'Radioactivity',
        objective: 'Understand instability',
        description: 'Unstable nuclei try to fix themselves by releasing particles.',
        question: 'What is the process of an unstable nucleus releasing energy?',
        options: [
            'Radioactive Decay',
            'Electron Capture',
            'Ionization',
            'Fusion'
        ],
        correctAnswer: 0,
    },
    {
        id: 'island-10',
        index: 9,
        title: 'Nuclear Fission',
        objective: 'Understand splitting atoms',
        description: 'Splitting an atom releases massive energy.',
        question: 'What happens during nuclear fission?',
        options: [
            'Two atoms merge',
            'An atom loses an electron',
            'A nucleus splits into smaller parts',
            'A proton turns into a neutron'
        ],
        correctAnswer: 2,
    },
];
