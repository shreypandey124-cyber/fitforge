'use client';

import { WorkoutExercise } from '@/types';
import { useState } from 'react';
import styles from './ExerciseCard.module.css';
import ExerciseDemo from './ExerciseDemo';

interface Props {
  workoutExercise: WorkoutExercise;
}

export default function ExerciseCard({ workoutExercise }: Props) {
  const { exercise, sets, reps, rest } = workoutExercise;
  const [expanded, setExpanded] = useState(false);

  const getMuscleColor = (muscle: string): string => {
    const colors: Record<string, string> = {
      'Chest': '#FF6B35',
      'Upper Chest': '#FF8C5A',
      'Lats': '#00D9FF',
      'Lower Back': '#00B8D9',
      'Shoulders': '#4ADE80',
      'Side Delts': '#6BCB77',
      'Rear Delts': '#3CE07F',
      'Biceps': '#FFD93D',
      'Triceps': '#FFB800',
      'Quads': '#A855F7',
      'Glutes': '#9333EA',
      'Hamstrings': '#7C3AED',
      'Calves': '#6366F1',
      'Abs': '#EC4899',
      'Obliques': '#F472B6',
      'Core': '#F472B6',
      'Full Body': '#FF6B35',
      'Legs': '#A855F7',
      'Back': '#00D9FF',
      'Hip Flexors': '#F59E0B',
    };
    return colors[muscle] || '#A0A0A0';
  };

  return (
    <div className={styles.card}>
      <div className={styles.mainRow}>
        <div className={styles.demoWrapper}>
          <ExerciseDemo exerciseId={exercise.demonstration} />
        </div>
        
        <div className={styles.info}>
          <h4 className={styles.exerciseName}>{exercise.name}</h4>
          
          <div className={styles.tags}>
            {exercise.muscles.map(m => (
              <span 
                key={m} 
                className={styles.tag}
                style={{ backgroundColor: getMuscleColor(m) + '20', color: getMuscleColor(m) }}
              >
                {m}
              </span>
            ))}
          </div>
          
          <div className={styles.setsInfo}>
            <div className={styles.setItem}>
              <span className={styles.setLabel}>Sets</span>
              <span className={styles.setValue}>{sets}</span>
            </div>
            <div className={styles.setItem}>
              <span className={styles.setLabel}>Reps</span>
              <span className={styles.setValue}>{reps}</span>
            </div>
            {rest > 0 && (
              <div className={styles.setItem}>
                <span className={styles.setLabel}>Rest</span>
                <span className={styles.setValue}>{rest}s</span>
              </div>
            )}
          </div>
        </div>
        
        <button 
          className={styles.expandBtn}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '−' : '+'}
        </button>
      </div>
      
      {expanded && (
        <div className={styles.details}>
          <div className={styles.section}>
            <h5>Instructions</h5>
            <ol>
              {exercise.instructions.map((inst, idx) => (
                <li key={idx}>{inst}</li>
              ))}
            </ol>
          </div>
          
          <div className={styles.section}>
            <h5>Equipment</h5>
            <div className={styles.equipment}>
              {exercise.equipment.map(eq => (
                <span key={eq} className={styles.eqTag}>{eq}</span>
              ))}
            </div>
          </div>
          
          {exercise.secondaryMuscles.length > 0 && (
            <div className={styles.section}>
              <h5>Secondary Muscles</h5>
              <div className={styles.equipment}>
                {exercise.secondaryMuscles.map(m => (
                  <span 
                    key={m} 
                    className={styles.secondaryTag}
                    style={{ borderColor: getMuscleColor(m), color: getMuscleColor(m) }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}