'use client';

import { UserProfile } from '@/types';
import styles from './AvailabilitySelector.module.css';

interface Props {
  profile: Partial<UserProfile>;
  onUpdate: (profile: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function AvailabilitySelector({ profile, onUpdate, onNext, onBack }: Props) {
  const toggleDay = (day: string) => {
    const current = profile.availableDays || [];
    if (current.includes(day)) {
      onUpdate({ availableDays: current.filter(d => d !== day) });
    } else {
      onUpdate({ availableDays: [...current, day] });
    }
  };

  const canProceed = (profile.availableDays?.length || 0) > 0;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>When can you work out?</h1>
        <p className={styles.subtitle}>Select the days you&apos;re available to exercise</p>
      </div>

      <div className={styles.daysGrid}>
        {days.map((day) => (
          <button
            key={day}
            className={`${styles.dayBtn} ${profile.availableDays?.includes(day) ? styles.selected : ''}`}
            onClick={() => toggleDay(day)}
          >
            <span className={styles.dayIcon}>
              {profile.availableDays?.includes(day) ? '✓' : '+'}
            </span>
            <span className={styles.dayName}>{day.slice(0, 3)}</span>
          </button>
        ))}
      </div>

      <div className={styles.info}>
        <p>Selected: {profile.availableDays?.length || 0} day(s)</p>
        <p className={styles.hint}>
          {profile.availableDays?.length === 7 
            ? 'You\'re a beast! Full week of training.'
            : profile.availableDays?.length === 0
            ? 'Select at least one day to continue'
            : 'We\'ll create a personalized schedule for your available days'}
        </p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.backBtn} onClick={onBack}>← Back</button>
        <button 
          className={styles.nextBtn} 
          onClick={onNext}
          disabled={!canProceed}
        >
          Generate My Workout →
        </button>
      </div>
    </div>
  );
}