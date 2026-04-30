'use client';

import { UserProfile, GoalCategory } from '@/types';
import { goals } from '@/data/goals';
import { useState } from 'react';
import styles from './GoalSelection.module.css';

interface Props {
  profile: Partial<UserProfile>;
  onUpdate: (profile: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function GoalSelection({ profile, onUpdate, onNext, onBack }: Props) {
  const [selectedGoal, setSelectedGoal] = useState<GoalCategory | null>(profile.goal || null);

  const handleGoalSelect = (goalId: GoalCategory) => {
    setSelectedGoal(goalId);
    onUpdate({ goal: goalId, subGoal: '' });
  };

  const handleSubGoalSelect = (subGoalId: string) => {
    onUpdate({ subGoal: subGoalId });
  };

  const canProceed = selectedGoal && profile.subGoal;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose your goal</h1>
        <p className={styles.subtitle}>Select a category and then a specific target</p>
      </div>

      <div className={styles.goalsGrid}>
        {goals.map((goal) => (
          <button
            key={goal.id}
            className={`${styles.goalCard} ${selectedGoal === goal.id ? styles.selected : ''}`}
            onClick={() => handleGoalSelect(goal.id)}
          >
            <span className={styles.goalIcon}>{goal.icon}</span>
            <div className={styles.goalInfo}>
              <h3 className={styles.goalTitle}>{goal.title}</h3>
              <p className={styles.goalDesc}>{goal.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedGoal && (
        <div className={styles.subGoalsSection}>
          <h2 className={styles.subTitle}>Choose your specific target</h2>
          <div className={styles.subGoalsGrid}>
            {goals.find(g => g.id === selectedGoal)?.subCategories.map((sub) => (
              <button
                key={sub.id}
                className={`${styles.subGoalCard} ${profile.subGoal === sub.id ? styles.selected : ''}`}
                onClick={() => handleSubGoalSelect(sub.id)}
              >
                <div className={styles.bodyTypeImage}>
                  <BodyTypeVisual type={sub.targetImage} />
                </div>
                <div className={styles.subGoalInfo}>
                  <h3 className={styles.subGoalTitle}>{sub.title}</h3>
                  <p className={styles.subGoalDesc}>{sub.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack}>← Back</button>
        <button 
          className={styles.nextBtn} 
          onClick={onNext}
          disabled={!canProceed}
        >
          Continue to Schedule →
        </button>
      </div>
    </div>
  );
}

function BodyTypeVisual({ type }: { type: string }) {
  const colors: Record<string, string> = {
    'lean-bulk': '#FF6B35',
    'dirty-bulk': '#FFD93D',
    'recomp': '#6BCB77',
    'maintenance': '#4D96FF',
    'ectomorph': '#00D9FF',
    'mesomorph': '#FF6B35',
    'endomorph': '#FF4757',
    'general-loss': '#A0A0A0',
    'beginner': '#4ADE80',
    'intermediate': '#FFD93D',
    'advanced': '#FF6B35'
  };

  const shapes: Record<string, string> = {
    'lean-bulk': 'lean',
    'dirty-bulk': 'bulky',
    'recomp': 'athletic',
    'maintenance': 'balanced',
    'ectomorph': 'lean',
    'mesomorph': 'muscular',
    'endomorph': 'soft',
    'general-loss': 'balanced',
    'beginner': 'newbie',
    'intermediate': 'athletic',
    'advanced': 'strong'
  };

  const color = colors[type] || '#FF6B35';
  const shape = shapes[type] || 'balanced';

  return (
    <svg viewBox="0 0 100 140" className={styles.bodySvg}>
      {/* Head */}
      <circle cx="50" cy="20" r="12" fill={color} opacity="0.8" />
      
      {/* Body based on type */}
      {shape === 'lean' && (
        <>
          <rect x="35" y="35" width="30" height="45" rx="8" fill={color} opacity="0.6" />
          <rect x="30" y="85" width="18" height="40" rx="6" fill={color} opacity="0.5" />
          <rect x="52" y="85" width="18" height="40" rx="6" fill={color} opacity="0.5" />
        </>
      )}
      {shape === 'bulky' && (
        <>
          <rect x="30" y="35" width="40" height="50" rx="10" fill={color} opacity="0.7" />
          <rect x="22" y="85" width="22" height="42" rx="8" fill={color} opacity="0.6" />
          <rect x="56" y="85" width="22" height="42" rx="8" fill={color} opacity="0.6" />
        </>
      )}
      {shape === 'athletic' && (
        <>
          <rect x="32" y="35" width="36" height="48" rx="8" fill={color} opacity="0.7" />
          <rect x="28" y="85" width="20" height="40" rx="6" fill={color} opacity="0.6" />
          <rect x="52" y="85" width="20" height="40" rx="6" fill={color} opacity="0.6" />
        </>
      )}
      {shape === 'balanced' && (
        <>
          <rect x="33" y="35" width="34" height="46" rx="8" fill={color} opacity="0.6" />
          <rect x="28" y="85" width="20" height="38" rx="6" fill={color} opacity="0.5" />
          <rect x="52" y="85" width="20" height="38" rx="6" fill={color} opacity="0.5" />
        </>
      )}
      {shape === 'muscular' && (
        <>
          <rect x="28" y="35" width="44" height="48" rx="10" fill={color} opacity="0.7" />
          <rect x="24" y="85" width="22" height="40" rx="8" fill={color} opacity="0.6" />
          <rect x="54" y="85" width="22" height="40" rx="8" fill={color} opacity="0.6" />
        </>
      )}
      {shape === 'soft' && (
        <>
          <ellipse cx="50" cy="55" rx="24" ry="22" fill={color} opacity="0.6" />
          <rect x="30" y="80" width="18" height="35" rx="6" fill={color} opacity="0.5" />
          <rect x="52" y="80" width="18" height="35" rx="6" fill={color} opacity="0.5" />
        </>
      )}
      {shape === 'newbie' && (
        <>
          <rect x="35" y="35" width="30" height="40" rx="6" fill={color} opacity="0.5" />
          <rect x="32" y="78" width="16" height="35" rx="5" fill={color} opacity="0.4" />
          <rect x="52" y="78" width="16" height="35" rx="5" fill={color} opacity="0.4" />
        </>
      )}
      {shape === 'strong' && (
        <>
          <rect x="25" y="35" width="50" height="52" rx="12" fill={color} opacity="0.8" />
          <rect x="20" y="88" width="24" height="42" rx="8" fill={color} opacity="0.7" />
          <rect x="56" y="88" width="24" height="42" rx="8" fill={color} opacity="0.7" />
        </>
      )}
    </svg>
  );
}