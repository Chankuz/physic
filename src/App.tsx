import { useMemo, useEffect, useState } from 'react';
import ReactFlow, {
  type Edge,
  type Node,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { IslandNode } from './nodes/IslandNode';
import { QuestionPanel } from './components/QuestionPanel';
import { LearningPanel } from './components/LearningPanel';
import { Notebook } from './components/Notebook';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { levels } from './data/levels';
import { learningLevels } from './data/learningLevels';
import { useGameStore } from './store/gameStore';

// Define layout logic relative to center
// We use a sine wave pattern for "beautiful symmetry"
const START_X = 150; // Start with some padding on the left
const START_Y = window.innerHeight / 2 - 50; // Center vertically
const X_GAP = 200; // Horizontal gap
const WAVE_AMPLITUDE = 100; // How tall the curve is vertically

// Helper to generate nodes based on levels
const generateNodes = (levelsData: any[], startX: number = START_X): Node[] => {
  return levelsData.map((level, i) => ({
    id: level.id,
    type: 'island',
    position: {
      // Sine wave calculation for smooth symmetry
      x: startX + (i * X_GAP),
      y: START_Y + Math.sin(i) * WAVE_AMPLITUDE
    },
    data: { level },
    draggable: false,
    connectable: false,
  }));
};

const generateEdges = (levelsData: any[]): Edge[] => {
  return levelsData.slice(0, -1).map((level, i) => ({
    id: `e-${level.id}-${levelsData[i + 1].id}`,
    source: level.id,
    target: levelsData[i + 1].id,
    animated: true,
    style: { stroke: '#4fc3f7', strokeWidth: 4, opacity: 0.5 },
    type: 'smoothstep', // smoothstep looks good with sine wave, or 'bezier'
    focusable: false,
    interactionWidth: 0,
  }));
};

const nodeTypes = {
  island: IslandNode,
};

function GameMapContent() {
  const { gameMode } = useGameStore(); // Subscribe to game mode
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Effect to switch map content based on game mode
  useEffect(() => {
    if (gameMode === 'quiz') {
      setNodes(generateNodes(levels));
      setEdges(generateEdges(levels));
    } else {
      setNodes(generateNodes(learningLevels));
      setEdges(generateEdges(learningLevels));
    }
  }, [gameMode, setNodes, setEdges]);

  // We define nodeTypes using useMemo to prevent unnecessary re-renders
  const nodeTypesMemo = useMemo(() => nodeTypes, []);

  return (
    <div className="w-full h-screen bg-slate-900 relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#4fc3f7 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypesMemo}
        fitView
        minZoom={0.5}
        maxZoom={2}
        nodesDraggable={false}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        {/* <Controls showInteractive={false} className="!bg-slate-800 !border-slate-700 !text-white [&>button]:!border-slate-700 [&>button:hover]:!bg-slate-700 !top-20" /> */}
      </ReactFlow>

      <Navbar />

      <QuestionPanel />
      <LearningPanel />
      <Notebook />
    </div>
  );
}

export default function App() {
  const { isGameStarted, setGameStarted } = useGameStore();

  if (!isGameStarted) {
    return <LandingPage onStart={() => setGameStarted(true)} />;
  }

  return (
    <ReactFlowProvider>
      <GameMapContent />
    </ReactFlowProvider>
  );
}
