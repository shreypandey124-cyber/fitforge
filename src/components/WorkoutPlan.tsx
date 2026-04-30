'use client';

import { UserProfile, WeeklyPlan } from '@/types';
import { useState, useMemo } from 'react';
import styles from './WorkoutPlan.module.css';
import ExerciseCard from './ExerciseCard';

interface Props {
  profile: UserProfile;
  weeklyPlan: WeeklyPlan;
  onRestart: () => void;
}

export default function WorkoutPlan({ profile, weeklyPlan, onRestart }: Props) {
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [savedStatus, setSavedStatus] = useState<'unsaved' | 'saved'>('unsaved');

  const toggleDay = (day: string) => {
    setExpandedDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const handleSave = () => {
    localStorage.setItem('fitforge-plan', JSON.stringify(weeklyPlan));
    setSavedStatus('saved');
  };

  const getGoalTitle = () => {
    const subGoal = profile.subGoal;
    return subGoal.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };

  const workoutDays = weeklyPlan.days.filter(d => !d.isRestDay).length;
  const totalExercises = weeklyPlan.days.reduce((sum, d) => sum + d.exercises.length, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>💪</span>
          <span className={styles.logoText}>FitForge</span>
        </div>
        <button className={styles.restartBtn} onClick={onRestart}>Start Over</button>
      </div>

      <div className={styles.profileSummary}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Goal</span>
            <span className={styles.summaryValue}>{getGoalTitle()}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Schedule</span>
            <span className={styles.summaryValue}>{workoutDays} days/week</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Exercises</span>
            <span className={styles.summaryValue}>{totalExercises} total</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Age</span>
            <span className={styles.summaryValue}>{profile.age}</span>
          </div>
        </div>
      </div>

      <div className={styles.weekHeader}>
        <h1 className={styles.title}>Your Weekly Workout Plan</h1>
        <button className={styles.saveBtn} onClick={handleSave}>
          {savedStatus === 'saved' ? '✓ Saved' : 'Save Plan'}
        </button>
      </div>

      <div className={styles.daysGrid}>
        {weeklyPlan.days.map((day, index) => (
          <div 
            key={day.day} 
            className={`${styles.dayCard} ${day.isRestDay ? styles.restDay : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button 
              className={styles.dayHeader}
              onClick={() => toggleDay(day.day)}
            >
              <div className={styles.dayInfo}>
                <span className={styles.dayName}>{day.day}</span>
                <span className={styles.dayFocus}>
                  {day.isRestDay ? 'Rest Day' : day.focus || 'Workout'}
                </span>
              </div>
              <span className={styles.expandIcon}>
                {expandedDays[day.day] ? '−' : '+'}
              </span>
            </button>
            
            {expandedDays[day.day] && !day.isRestDay && (
              <div className={styles.exercisesList}>
                {day.exercises.map((we, idx) => (
                  <ExerciseCard 
                    key={`${day.day}-${we.exercise.id}-${idx}`} 
                    workoutExercise={we} 
                  />
                ))}
              </div>
            )}
            
            {expandedDays[day.day] && day.isRestDay && (
              <div className={styles.restContent}>
                <span className={styles.restEmoji}>😴</span>
                <p>Rest and recover. Focus on sleep, hydration, and nutrition.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.tips}>
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>Warm up for 5-10 minutes before each workout</li>
          <li>Stay hydrated throughout your session</li>
          <li>Focus on form over weight</li>
          <li>Rest 2-3 minutes between compound exercises</li>
          <li>Stretch after each session</li>
        </ul>
      </div>
    </div>
  );
}