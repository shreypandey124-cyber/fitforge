'use client';

import { ReactNode } from 'react';
import styles from './ExerciseDemo.module.css';

interface Props {
  exerciseId: string;
}

export default function ExerciseDemo({ exerciseId }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={styles.demo}>
      <defs>
        <linearGradient id="muscleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C5A', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00D9FF', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#00B8D9', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      
      {/* Common stick figure for all exercises */}
      {renderExercise(exerciseId)}
    </svg>
  );
}

function renderExercise(exerciseId: string): ReactNode {
  const exercises: Record<string, ReactNode> = {
    // CHEST EXERCISES
    'bench-press': (
      <>
        {/* Bench */}
        <rect x="15" y="70" width="70" height="8" rx="2" fill="#333" />
        {/* Person lying on bench */}
        <circle cx="50" cy="45" r="8" fill="#FF6B35" />
        <rect x="42" y="52" width="16" height="25" rx="4" fill="url(#muscleGradient)" />
        <line x1="35" y1="55" x2="25" y2="65" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="55" x2="75" y2="65" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Barbell */}
        <line x1="20" y1="38" x2="80" y2="38" stroke="#666" strokeWidth="3" />
        <rect x="18" y="35" width="6" height="6" fill="#888" />
        <rect x="76" y="35" width="6" height="6" fill="#888" />
        {/* Legs */}
        <line x1="48" y1="77" x2="40" y2="88" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="52" y1="77" x2="60" y2="88" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'incline-bench': (
      <>
        {/* Incline bench */}
        <line x1="20" y1="75" x2="70" y2="60" stroke="#333" strokeWidth="6" />
        <line x1="70" y1="60" x2="80" y2="60" stroke="#333" strokeWidth="4" />
        {/* Person on incline */}
        <circle cx="50" cy="38" r="7" fill="#FF6B35" />
        <rect x="43" y="44" width="14" height="20" rx="3" fill="url(#muscleGradient)" transform="rotate(-20 50 54)" />
        <line x1="45" y1="45" x2="35" y2="40" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="45" x2="62" y2="38" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Barbell */}
        <line x1="25" y1="30" x2="75" y2="20" stroke="#666" strokeWidth="2" />
      </>
    ),
    'dumbbell-fly': (
      <>
        {/* Bench */}
        <rect x="20" y="70" width="60" height="6" rx="2" fill="#333" />
        {/* Person */}
        <circle cx="50" cy="42" r="7" fill="#FF6B35" />
        <rect x="43" y="48" width="14" height="22" rx="3" fill="url(#muscleGradient)" />
        {/* Arms out wide */}
        <line x1="38" y1="50" x2="20" y2="45" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="50" x2="80" y2="45" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Dumbbells */}
        <circle cx="18" cy="45" r="4" fill="#888" />
        <circle cx="82" cy="45" r="4" fill="#888" />
      </>
    ),
    'push-ups': (
      <>
        {/* Ground line */}
        <line x1="10" y1="80" x2="90" y2="80" stroke="#333" strokeWidth="2" />
        {/* Person in plank */}
        <circle cx="75" cy="55" r="6" fill="#FF6B35" />
        <rect x="50" y="58" width="30" height="12" rx="2" fill="url(#muscleGradient)" transform="rotate(0)" />
        {/* Arms */}
        <line x1="65" y1="60" x2="45" y2="75" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="75" y1="68" x2="55" y2="80" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <line x1="45" y1="62" x2="25" y2="70" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
        <line x1="35" y1="63" x2="15" y2="75" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
      </>
    ),
    'cable-crossover': (
      <>
        {/* Cable machines */}
        <rect x="10" y="20" width="8" height="60" fill="#444" />
        <rect x="82" y="20" width="8" height="60" fill="#444" />
        <line x1="18" y1="25" x2="82" y2="25" stroke="#888" strokeWidth="2" />
        {/* Person */}
        <circle cx="50" cy="45" r="7" fill="#FF6B35" />
        <rect x="43" y="51" width="14" height="20" rx="3" fill="url(#muscleGradient)" />
        {/* Arms reaching up/out */}
        <line x1="42" y1="53" x2="25" y2="35" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="53" x2="75" y2="35" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <line x1="47" y1="71" x2="40" y2="85" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="71" x2="60" y2="85" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // BACK EXERCISES
    'deadlift': (
      <>
        {/* Barbell */}
        <line x1="15" y1="78" x2="85" y2="78" stroke="#666" strokeWidth="4" />
        <rect x="12" y="73" width="6" height="10" fill="#888" />
        <rect x="82" y="73" width="6" height="10" fill="#888" />
        {/* Person */}
        <circle cx="50" cy="35" r="7" fill="#00D9FF" />
        <rect x="43" y="41" width="14" height="22" rx="3" fill="url(#secondaryGradient)" />
        {/* Bent over position */}
        <line x1="45" y1="45" x2="35" y2="60" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="45" x2="65" y2="60" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="63" x2="42" y2="80" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="63" x2="58" y2="80" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'barbell-row': (
      <>
        {/* Barbell */}
        <line x1="15" y1="65" x2="85" y2="65" stroke="#666" strokeWidth="3" />
        <rect x="13" y="60" width="6" height="10" fill="#888" />
        <rect x="81" y="60" width="6" height="10" fill="#888" />
        {/* Person bent over */}
        <circle cx="50" cy="32" r="7" fill="#00D9FF" />
        <rect x="42" y="38" width="16" height="24" rx="4" fill="url(#secondaryGradient)" />
        <line x1="42" y1="42" x2="30" y2="50" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="42" x2="70" y2="50" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="46" y1="62" x2="42" y2="75" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="62" x2="58" y2="75" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'lat-pulldown': (
      <>
        {/* Machine */}
        <rect x="40" y="5" width="20" height="50" fill="#444" />
        <line x1="25" y1="10" x2="75" y2="10" stroke="#888" strokeWidth="3" />
        <line x1="30" y1="15" x2="30" y2="40" stroke="#666" strokeWidth="2" />
        <line x1="70" y1="15" x2="70" y2="40" stroke="#666" strokeWidth="2" />
        {/* Person sitting */}
        <circle cx="50" cy="60" r="7" fill="#00D9FF" />
        <rect x="43" y="66" width="14" height="18" rx="3" fill="url(#secondaryGradient)" />
        <line x1="43" y1="70" x2="35" y2="55" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="57" y1="70" x2="65" y2="55" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="84" x2="40" y2="90" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="84" x2="60" y2="90" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'pull-ups': (
      <>
        {/* Pull-up bar */}
        <line x1="20" y1="20" x2="80" y2="20" stroke="#444" strokeWidth="4" />
        <line x1="30" y1="20" x2="30" y2="10" stroke="#333" strokeWidth="3" />
        <line x1="70" y1="20" x2="70" y2="10" stroke="#333" strokeWidth="3" />
        {/* Person hanging */}
        <circle cx="50" cy="42" r="6" fill="#00D9FF" />
        <rect x="44" y="47" width="12" height="18" rx="3" fill="url(#secondaryGradient)" />
        <line x1="46" y1="50" x2="40" y2="30" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="50" x2="60" y2="30" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="46" y1="65" x2="44" y2="78" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="65" x2="56" y2="78" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'seated-cable-row': (
      <>
        {/* Cable machine */}
        <rect x="75" y="30" width="10" height="40" fill="#444" />
        <line x1="80" y1="35" x2="40" y2="35" stroke="#888" strokeWidth="2" />
        {/* Seat */}
        <rect x="25" y="70" width="30" height="8" rx="2" fill="#333" />
        {/* Person sitting */}
        <circle cx="40" cy="50" r="6" fill="#00D9FF" />
        <rect x="35" y="55" width="10" height="15" rx="2" fill="url(#secondaryGradient)" />
        <line x1="35" y1="58" x2="45" y2="45" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="58" x2="55" y2="45" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="38" y1="70" x2="35" y2="82" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="42" y1="70" x2="45" y2="82" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'lat-pulldown-narrow': (
      <>
        {/* Machine */}
        <rect x="40" y="5" width="20" height="50" fill="#444" />
        <line x1="40" y1="10" x2="60" y2="10" stroke="#888" strokeWidth="3" />
        {/* Person */}
        <circle cx="50" cy="55" r="6" fill="#00D9FF" />
        <rect x="44" y="60" width="12" height="15" rx="2" fill="url(#secondaryGradient)" />
        <line x1="46" y1="63" x2="45" y2="45" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="63" x2="55" y2="45" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // SHOULDER EXERCISES
    'overhead-press': (
      <>
        {/* Barbell */}
        <line x1="20" y1="20" x2="80" y2="20" stroke="#666" strokeWidth="3" />
        <rect x="18" y="15" width="6" height="10" fill="#888" />
        <rect x="76" y="15" width="6" height="10" fill="#888" />
        {/* Person */}
        <circle cx="50" cy="50" r="7" fill="#4ADE80" />
        <rect x="43" y="56" width="14" height="20" rx="3" fill="#4ADE80" />
        <line x1="43" y1="58" x2="30" y2="40" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="57" y1="58" x2="70" y2="40" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="76" x2="42" y2="88" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="76" x2="58" y2="88" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'lateral-raise': (
      <>
        {/* Person */}
        <circle cx="50" cy="38" r="7" fill="#4ADE80" />
        <rect x="43" y="44" width="14" height="22" rx="3" fill="#4ADE80" />
        {/* Arms out to sides */}
        <line x1="38" y1="48" x2="15" y2="35" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="48" x2="85" y2="35" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        {/* Dumbbells */}
        <line x1="12" y1="35" x2="18" y2="35" stroke="#888" strokeWidth="3" />
        <line x1="82" y1="35" x2="88" y2="35" stroke="#888" strokeWidth="3" />
        {/* Legs */}
        <line x1="47" y1="66" x2="40" y2="82" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="66" x2="60" y2="82" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'face-pull': (
      <>
        {/* Cable machine */}
        <rect x="45" y="15" width="10" height="30" fill="#444" />
        <line x1="50" y1="20" x2="50" y2="40" stroke="#888" strokeWidth="2" />
        {/* Person */}
        <circle cx="50" cy="50" r="7" fill="#4ADE80" />
        <rect x="43" y="56" width="14" height="18" rx="3" fill="#4ADE80" />
        {/* Pulling toward face */}
        <line x1="42" y1="58" x2="48" y2="48" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="58" x2="52" y2="48" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="74" x2="40" y2="85" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="74" x2="60" y2="85" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'arnold-press': (
      <>
        {/* Person seated */}
        <circle cx="50" cy="40" r="7" fill="#4ADE80" />
        <rect x="43" y="46" width="14" height="18" rx="3" fill="#4ADE80" />
        {/* Dumbbells at shoulder */}
        <rect x="30" y="40" width="10" height="14" rx="2" fill="#888" />
        <rect x="60" y="40" width="10" height="14" rx="2" fill="#888" />
        {/* Arms up */}
        <line x1="35" y1="42" x2="30" y2="25" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="42" x2="70" y2="25" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="64" x2="40" y2="78" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="64" x2="60" y2="78" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'rear-delt-fly': (
      <>
        {/* Person bent forward */}
        <circle cx="50" cy="42" r="7" fill="#4ADE80" />
        <rect x="43" y="48" width="14" height="20" rx="3" fill="#4ADE80" transform="rotate(20 50 58)" />
        {/* Arms out back */}
        <line x1="38" y1="50" x2="20" y2="60" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="50" x2="80" y2="60" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="68" x2="40" y2="82" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="68" x2="60" y2="82" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // ARM EXERCISES
    'barbell-curl': (
      <>
        {/* Barbell */}
        <line x1="25" y1="45" x2="75" y2="45" stroke="#666" strokeWidth="3" />
        <rect x="23" y="40" width="6" height="10" fill="#888" />
        <rect x="71" y="40" width="6" height="10" fill="#888" />
        {/* Person */}
        <circle cx="50" cy="52" r="7" fill="#FFD93D" />
        <rect x="43" y="58" width="14" height="16" rx="3" fill="#FFD93D" />
        {/* Curling arms */}
        <line x1="42" y1="60" x2="35" y2="48" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="60" x2="65" y2="48" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="74" x2="42" y2="85" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="74" x2="58" y2="85" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'hammer-curl': (
      <>
        {/* Dumbbells */}
        <rect x="22" y="35" width="8" height="14" rx="2" fill="#888" />
        <rect x="70" y="35" width="8" height="14" rx="2" fill="#888" />
        {/* Person */}
        <circle cx="50" cy="52" r="7" fill="#FFD93D" />
        <rect x="43" y="58" width="14" height="16" rx="3" fill="#FFD93D" />
        {/* Neutral grip arms */}
        <line x1="42" y1="60" x2="26" y2="42" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="60" x2="74" y2="42" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="74" x2="42" y2="85" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="74" x2="58" y2="85" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'tricep-pushdown': (
      <>
        {/* Cable machine */}
        <rect x="45" y="25" width="10" height="50" fill="#444" />
        <line x1="50" y1="30" x2="50" y2="45" stroke="#888" strokeWidth="2" />
        {/* Bar */}
        <line x1="35" y1="45" x2="65" y2="45" stroke="#666" strokeWidth="3" />
        {/* Person */}
        <circle cx="50" cy="60" r="7" fill="#FFB800" />
        <rect x="43" y="66" width="14" height="16" rx="3" fill="#FFB800" />
        {/* Pushing down */}
        <line x1="44" y1="68" x2="45" y2="50" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="56" y1="68" x2="55" y2="50" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="82" x2="40" y2="90" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="82" x2="60" y2="90" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'skull-crusher': (
      <>
        {/* Bench */}
        <rect x="15" y="75" width="70" height="6" rx="2" fill="#333" />
        {/* Person lying */}
        <circle cx="50" cy="45" r="7" fill="#FFB800" />
        <rect x="42" y="50" width="16" height="20" rx="3" fill="#FFB800" />
        {/* Arms over head */}
        <line x1="38" y1="52" x2="30" y2="35" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="52" x2="70" y2="35" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        {/* Barbell */}
        <line x1="25" y1="30" x2="75" y2="30" stroke="#666" strokeWidth="2" />
        {/* Legs */}
        <line x1="48" y1="70" x2="40" y2="82" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="52" y1="70" x2="60" y2="82" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'dips': (
      <>
        {/* Parallel bars */}
        <line x1="20" y1="30" x2="20" y2="80" stroke="#444" strokeWidth="3" />
        <line x1="80" y1="30" x2="80" y2="80" stroke="#444" strokeWidth="3" />
        {/* Person on bars */}
        <circle cx="50" cy="50" r="6" fill="#FFB800" />
        <rect x="44" y="55" width="12" height="16" rx="2" fill="#FFB800" />
        {/* Supporting on bars */}
        <line x1="44" y1="58" x2="25" y2="45" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="56" y1="58" x2="75" y2="45" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        {/* Legs bent */}
        <line x1="47" y1="71" x2="45" y2="82" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="71" x2="55" y2="82" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'preacher-curl': (
      <>
        {/* Preacher bench */}
        <rect x="30" y="60" width="40" height="6" rx="2" fill="#333" />
        <rect x="35" y="66" width="30" height="20" fill="#333" />
        {/* Person */}
        <circle cx="50" cy="45" r="7" fill="#FFD93D" />
        <rect x="43" y="51" width="14" height="14" rx="3" fill="#FFD93D" />
        {/* Arms on bench */}
        <line x1="43" y1="53" x2="40" y2="62" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="57" y1="53" x2="60" y2="62" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        {/* Barbell */}
        <line x1="35" y1="48" x2="65" y2="48" stroke="#666" strokeWidth="2" />
      </>
    ),

    // LEG EXERCISES
    'squat': (
      <>
        {/* Barbell on shoulders */}
        <line x1="25" y1="35" x2="75" y2="35" stroke="#666" strokeWidth="3" />
        <rect x="23" y="30" width="6" height="10" fill="#888" />
        <rect x="71" y="30" width="6" height="10" fill="#888" />
        {/* Person in squat */}
        <circle cx="50" cy="40" r="7" fill="#A855F7" />
        <rect x="43" y="46" width="14" height="18" rx="3" fill="#A855F7" />
        {/* Squatting legs */}
        <line x1="45" y1="60" x2="35" y2="75" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="60" x2="65" y2="75" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="75" x2="30" y2="88" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="75" x2="70" y2="88" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'leg-press': (
      <>
        {/* Machine */}
        <rect x="20" y="50" width="60" height="30" fill="#444" />
        <rect x="15" y="55" width="10" height="20" fill="#333" />
        <rect x="75" y="55" width="10" height="20" fill="#333" />
        {/* Person sitting */}
        <circle cx="50" cy="40" r="6" fill="#A855F7" />
        <rect x="44" y="45" width="12" height="14" rx="2" fill="#A855F7" />
        {/* Pressing platform */}
        <line x1="30" y1="60" x2="70" y2="60" stroke="#666" strokeWidth="4" />
        {/* Legs pushing */}
        <line x1="46" y1="55" x2="40" y2="58" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="55" x2="60" y2="58" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'romanian-deadlift': (
      <>
        {/* Barbell */}
        <line x1="20" y1="50" x2="80" y2="50" stroke="#666" strokeWidth="3" />
        <rect x="18" y="45" width="6" height="10" fill="#888" />
        <rect x="76" y="45" width="6" height="10" fill="#888" />
        {/* Person */}
        <circle cx="50" cy="38" r="7" fill="#9333EA" />
        <rect x="43" y="44" width="14" height="20" rx="3" fill="#9333EA" />
        {/* Hinging at hips */}
        <line x1="44" y1="48" x2="35" y2="60" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
        <line x1="56" y1="48" x2="65" y2="60" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="64" x2="40" y2="80" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="64" x2="60" y2="80" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'leg-curl': (
      <>
        {/* Machine */}
        <rect x="25" y="55" width="50" height="10" fill="#444" />
        <rect x="20" y="65" width="10" height="25" fill="#333" />
        <rect x="70" y="65" width="10" height="25" fill="#333" />
        {/* Person lying face down */}
        <circle cx="50" cy="38" r="6" fill="#A855F7" />
        <rect x="44" y="43" width="12" height="16" rx="2" fill="#A855F7" transform="rotate(0)" />
        {/* Legs being curled */}
        <line x1="47" y1="55" x2="45" y2="70" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="55" x2="55" y2="70" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="70" x2="42" y2="80" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="70" x2="58" y2="80" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'leg-extension': (
      <>
        {/* Machine */}
        <rect x="30" y="55" width="40" height="8" fill="#444" />
        <rect x="25" y="50" width="10" height="10" fill="#333" />
        {/* Person sitting */}
        <circle cx="50" cy="40" r="6" fill="#A855F7" />
        <rect x="44" y="45" width="12" height="14" rx="2" fill="#A855F7" />
        {/* Legs extending */}
        <line x1="46" y1="55" x2="45" y2="40" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="55" x2="55" y2="40" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="40" x2="42" y2="32" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="40" x2="58" y2="32" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'lunges': (
      <>
        {/* Person */}
        <circle cx="50" cy="38" r="7" fill="#A855F7" />
        <rect x="43" y="44" width="14" height="18" rx="3" fill="#A855F7" />
        {/* Lunging legs */}
        <line x1="46" y1="58" x2="30" y2="70" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="58" x2="70" y2="70" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="70" x2="25" y2="85" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="70" y1="70" x2="75" y2="85" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        {/* Dumbbells */}
        <rect x="38" y="48" width="6" height="12" rx="1" fill="#888" />
        <rect x="56" y="48" width="6" height="12" rx="1" fill="#888" />
      </>
    ),
    'calf-raise': (
      <>
        {/* Machine */}
        <rect x="35" y="70" width="30" height="5" fill="#444" />
        <line x1="50" y1="50" x2="50" y2="70" stroke="#333" strokeWidth="3" />
        {/* Person on toes */}
        <circle cx="50" cy="40" r="6" fill="#6366F1" />
        <rect x="44" y="45" width="12" height="14" rx="2" fill="#6366F1" />
        {/* Standing on toes */}
        <line x1="47" y1="59" x2="45" y2="72" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="59" x2="55" y2="72" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'hip-thrust': (
      <>
        {/* Bench */}
        <rect x="15" y="55" width="70" height="8" rx="2" fill="#333" />
        <rect x="20" y="63" width="10" height="20" fill="#333" />
        <rect x="70" y="63" width="10" height="20" fill="#333" />
        {/* Barbell */}
        <line x1="30" y1="38" x2="70" y2="38" stroke="#666" strokeWidth="4" />
        <rect x="28" y="34" width="6" height="8" fill="#888" />
        <rect x="66" y="34" width="6" height="8" fill="#888" />
        {/* Person thrusting */}
        <circle cx="50" cy="48" r="6" fill="#9333EA" />
        <rect x="44" y="52" width="12" height="10" rx="2" fill="#9333EA" />
        {/* Hip thrust position */}
        <line x1="46" y1="58" x2="42" y2="62" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="58" x2="58" y2="62" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'goblet-squat': (
      <>
        {/* Kettlebell */}
        <rect x="42" y="28" width="16" height="14" rx="3" fill="#888" />
        <rect x="47" y="24" width="6" height="5" fill="#666" />
        {/* Person */}
        <circle cx="50" cy="45" r="7" fill="#A855F7" />
        <rect x="43" y="51" width="14" height="18" rx="3" fill="#A855F7" />
        {/* Squatting */}
        <line x1="45" y1="65" x2="35" y2="78" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="65" x2="65" y2="78" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="78" x2="30" y2="90" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="78" x2="70" y2="90" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // CORE EXERCISES
    'plank': (
      <>
        {/* Ground */}
        <line x1="10" y1="75" x2="90" y2="75" stroke="#333" strokeWidth="2" />
        {/* Person in plank */}
        <circle cx="75" cy="55" r="5" fill="#EC4899" />
        <rect x="50" y="57" width="28" height="10" rx="2" fill="#EC4899" />
        <line x1="60" y1="59" x2="40" y2="70" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="64" x2="45" y2="75" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="42" y1="60" x2="25" y2="68" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="62" x2="20" y2="72" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'cable-crunch': (
      <>
        {/* Cable machine */}
        <rect x="80" y="30" width="8" height="40" fill="#444" />
        <line x1="80" y1="35" x2="50" y2="35" stroke="#888" strokeWidth="2" />
        {/* Person kneeling */}
        <circle cx="45" cy="50" r="6" fill="#EC4899" />
        <rect x="39" y="55" width="12" height="14" rx="2" fill="#EC4899" />
        {/* Crunching motion */}
        <line x1="40" y1="58" x2="50" y2="50" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="58" x2="60" y2="50" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="43" y1="69" x2="38" y2="82" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="47" y1="69" x2="52" y2="82" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'hanging-leg-raise': (
      <>
        {/* Pull-up bar */}
        <line x1="20" y1="15" x2="80" y2="15" stroke="#444" strokeWidth="3" />
        {/* Person hanging */}
        <circle cx="50" cy="42" r="5" fill="#EC4899" />
        <rect x="45" y="46" width="10" height="14" rx="2" fill="#EC4899" />
        {/* Hanging */}
        <line x1="47" y1="50" x2="45" y2="30" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        <line x1="53" y1="50" x2="55" y2="30" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        {/* Legs raised */}
        <line x1="47" y1="60" x2="45" y2="50" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="53" y1="60" x2="55" y2="50" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'russian-twist': (
      <>
        {/* Person seated */}
        <circle cx="50" cy="45" r="6" fill="#F472B6" />
        <rect x="44" y="50" width="12" height="14" rx="2" fill="#F472B6" />
        {/* Leaning back */}
        <line x1="45" y1="53" x2="35" y2="50" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="53" x2="65" y2="50" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        {/* Legs bent */}
        <line x1="46" y1="64" x2="40" y2="70" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="64" x2="60" y2="70" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        {/* Weight */}
        <circle cx="60" cy="52" r="4" fill="#888" />
      </>
    ),
    'ab-wheel': (
      <>
        {/* Ab wheel */}
        <ellipse cx="70" cy="65" rx="8" ry="5" fill="#666" />
        <line x1="70" y1="65" x2="75" y2="60" stroke="#888" strokeWidth="3" />
        {/* Person rolling out */}
        <circle cx="30" cy="55" r="5" fill="#EC4899" />
        <rect x="25" y="59" width="10" height="12" rx="2" fill="#EC4899" />
        <line x1="30" y1="62" x2="55" y2="62" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="27" y1="67" x2="20" y2="78" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
        <line x1="33" y1="67" x2="40" y2="78" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // CARDIO EXERCISES
    'treadmill-run': (
      <>
        {/* Treadmill */}
        <rect x="20" y="65" width="60" height="12" rx="3" fill="#444" />
        <rect x="15" y="55" width="10" height="15" fill="#333" />
        <rect x="75" y="55" width="10" height="15" fill="#333" />
        <line x1="25" y1="68" x2="75" y2="68" stroke="#666" strokeWidth="2" strokeDasharray="3,2" />
        {/* Person running */}
        <circle cx="50" cy="40" r="6" fill="#EF4444" />
        <rect x="44" y="45" width="12" height="14" rx="2" fill="#EF4444" />
        {/* Running pose */}
        <line x1="45" y1="48" x2="38" y2="40" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="48" x2="65" y2="55" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="46" y1="59" x2="40" y2="62" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="59" x2="60" y2="65" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'cycling': (
      <>
        {/* Bike */}
        <circle cx="30" cy="55" r="15" fill="#444" stroke="#666" strokeWidth="3" />
        <circle cx="30" cy="55" r="5" fill="#333" />
        <line x1="30" y1="40" x2="30" y2="55" stroke="#666" strokeWidth="2" />
        <line x1="30" y1="55" x2="45" y2="75" stroke="#666" strokeWidth="2" />
        <rect x="40" y="70" width="20" height="5" fill="#333" />
        {/* Person sitting */}
        <circle cx="50" cy="42" r="6" fill="#EF4444" />
        <rect x="44" y="47" width="12" height="14" rx="2" fill="#EF4444" />
        {/* Legs on pedals */}
        <line x1="46" y1="57" x2="38" y2="62" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="57" x2="50" y2="65" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'rowing': (
      <>
        {/* Rowing machine */}
        <rect x="15" y="65" width="70" height="8" rx="2" fill="#444" />
        <rect x="25" y="55" width="5" height="15" fill="#333" />
        {/* Person rowing */}
        <circle cx="50" cy="38" r="6" fill="#EF4444" />
        <rect x="43" y="43" width="14" height="16" rx="2" fill="#EF4444" />
        {/* Rowing pose */}
        <line x1="42" y1="46" x2="25" y2="55" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="58" y1="46" x2="75" y2="55" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="59" x2="35" y2="70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="59" x2="65" y2="70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'jump-rope': (
      <>
        {/* Jump rope */}
        <path d="M 25 50 Q 50 20 75 50" stroke="#888" strokeWidth="2" fill="none" />
        {/* Person jumping */}
        <circle cx="50" cy="55" r="6" fill="#EF4444" />
        <rect x="44" y="60" width="12" height="14" rx="2" fill="#EF4444" />
        {/* Jumping pose */}
        <line x1="46" y1="63" x2="45" y2="58" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="63" x2="55" y2="58" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        {/* Feet off ground */}
        <line x1="46" y1="74" x2="42" y2="70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="74" x2="58" y2="70" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'burpees': (
      <>
        {/* Ground */}
        <line x1="10" y1="80" x2="90" y2="80" stroke="#333" strokeWidth="2" />
        {/* Person in burpee position */}
        <circle cx="75" cy="55" r="5" fill="#EF4444" />
        <rect x="50" y="57" width="30" height="10" rx="2" fill="#EF4444" />
        {/* Plunk position */}
        <line x1="65" y1="60" x2="55" y2="75" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="70" y1="65" x2="60" y2="80" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        {/* Jumping up arms */}
        <line x1="60" y1="60" x2="50" y2="45" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="60" x2="60" y2="45" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'mountain-climber': (
      <>
        {/* Ground */}
        <line x1="10" y1="75" x2="90" y2="75" stroke="#333" strokeWidth="2" />
        {/* Person in plank */}
        <circle cx="75" cy="50" r="5" fill="#EF4444" />
        <rect x="50" y="52" width="28" height="10" rx="2" fill="#EF4444" />
        <line x1="60" y1="54" x2="45" y2="65" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="58" x2="50" y2="72" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        {/* Driving knee */}
        <line x1="45" y1="65" x2="35" y2="60" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="72" x2="40" y2="75" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      </>
    ),

    // COMPOUND / FULL BODY
    'clean-and-jerk': (
      <>
        {/* Barbell */}
        <line x1="20" y1="65" x2="80" y2="65" stroke="#666" strokeWidth="4" />
        {/* Person in clean position */}
        <circle cx="50" cy="38" r="7" fill="#FF6B35" />
        <rect x="43" y="44" width="14" height="20" rx="3" fill="#FF6B35" />
        {/* Explosive position */}
        <line x1="44" y1="48" x2="35" y2="55" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="56" y1="48" x2="65" y2="55" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="46" y1="64" x2="40" y2="75" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="54" y1="64" x2="60" y2="75" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'thrusters': (
      <>
        {/* Barbell */}
        <line x1="25" y1="35" x2="75" y2="35" stroke="#666" strokeWidth="3" />
        {/* Person in squat-thrust */}
        <circle cx="50" cy="50" r="7" fill="#FF6B35" />
        <rect x="43" y="56" width="14" height="18" rx="3" fill="#FF6B35" />
        {/* Overhead press position */}
        <line x1="43" y1="58" x2="35" y2="45" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="57" y1="58" x2="65" y2="45" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="45" y1="70" x2="35" y2="80" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="55" y1="70" x2="65" y2="80" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    'kettlebell-swing': (
      <>
        {/* Kettlebell */}
        <ellipse cx="30" cy="65" rx="8" ry="6" fill="#888" />
        <rect x="27" y="58" width="6" height="4" fill="#666" />
        {/* Person */}
        <circle cx="55" cy="40" r="7" fill="#FF6B35" />
        <rect x="48" y="46" width="14" height="18" rx="3" fill="#FF6B35" />
        {/* Hip hinge */}
        <line x1="50" y1="50" x2="40" y2="60" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="50" x2="70" y2="60" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        {/* Swing path */}
        <path d="M 30 65 Q 50 80 70 50" stroke="#FF6B35" strokeWidth="2" fill="none" strokeDasharray="4,2" />
        <line x1="48" y1="64" x2="42" y2="78" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <line x1="62" y1="64" x2="68" y2="78" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      </>
    )
  };

  return exercises[exerciseId] || (
    <>
      {/* Default figure */}
      <circle cx="50" cy="40" r="8" fill="#FF6B35" />
      <rect x="40" y="50" width="20" height="30" rx="4" fill="#FF6B35" opacity="0.8" />
      <line x1="40" y1="55" x2="30" y2="70" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="55" x2="70" y2="70" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      <line x1="45" y1="80" x2="40" y2="95" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
      <line x1="55" y1="80" x2="60" y2="95" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
    </>
  );
}