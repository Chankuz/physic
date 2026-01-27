import React from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import clsx from 'clsx';
import { useGameStore } from '../store/gameStore';
import type { Level } from '../types/game';

// Import images
import islandLocked from '../assets/island-locked-removebg-preview.png';
import islandActive from '../assets/island-active-removebg-preview.png';
import islandCompleted from '../assets/island-completed-removebg-preview.png';

interface IslandNodeData {
    level: Level;
}

export const IslandNode: React.FC<NodeProps<IslandNodeData>> = ({ data }) => {
    const { index } = data.level;
    // Trigger re-render when mode changes by subscribing to it, even if unused directly
    useGameStore((state) => state.gameMode);
    // We need to pass the mode to these selectors if they didn't automatically pick it up from store state
    // But wait, our selectors in store already check state.gameMode!
    // However, we need to make sure re-renders happen when gameMode changes or indices change.
    // Using specific selectors is safer.

    const isUnlocked = useGameStore((state) => state.isLevelUnlocked(index));
    const isCompleted = useGameStore((state) => state.isLevelCompleted(index));
    const openLevelModal = useGameStore((state) => state.openLevelModal);

    // Determine which image to show
    let imageSrc = islandLocked;
    if (isCompleted) imageSrc = islandCompleted;
    else if (isUnlocked) imageSrc = islandActive;

    const handleClick = () => {
        if (isUnlocked) {
            openLevelModal(data.level);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center group nopan">
            {/* Node Content */}
            <div
                className={clsx(
                    "relative w-32 h-32 transition-transform duration-300",
                    !isUnlocked && "opacity-80 grayscale brightness-75",
                    isUnlocked && "cursor-pointer hover:scale-110 drop-shadow-xl",
                    isCompleted && "drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                )}
                onClick={handleClick}
            >
                <img
                    src={imageSrc}
                    alt={`Level ${index + 1}`}
                    className="w-full h-full object-contain pixel-art rendering-pixelated"
                    style={{ imageRendering: 'pixelated' }}
                />

                {/* Level Label Overlay (optional, maybe on hover) */}
                {isUnlocked && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-slate-900/80 text-white text-xs px-2 py-1 rounded border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        {data.level.title}
                    </div>
                )}
            </div>

            {/* Handles for edges */}
            <Handle type="target" position={Position.Left} className="!bg-transparent !border-none" />
            <Handle type="source" position={Position.Right} className="!bg-transparent !border-none" />
        </div>
    );
};
