'use client';

import { UserProfile } from '@/types';
import { useState } from 'react';
import styles from './BiometricsForm.module.css';

interface Props {
  profile: Partial<UserProfile>;
  onUpdate: (profile: Partial<UserProfile>) => void;
  onNext: () => void;
}

export default function BiometricsForm({ profile, onUpdate, onNext }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!profile.weight || profile.weight < 30 || profile.weight > 300) {
      newErrors.weight = 'Please enter a valid weight (30-300)';
    }
    if (!profile.heightCm || profile.heightCm < 100 || profile.heightCm > 250) {
      newErrors.heightCm = 'Please enter a valid height (100-250 cm)';
    }
    if (!profile.age || profile.age < 10 || profile.age > 100) {
      newErrors.age = 'Please enter a valid age (10-100)';
    }
    if (!profile.gender) {
      newErrors.gender = 'Please select your gender';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onNext();
    }
  };

  const convertWeight = (value: number, toUnit: 'kg' | 'lbs'): number => {
    if (toUnit === 'lbs') {
      return Math.round(value * 2.20462);
    }
    return Math.round(value / 2.20462);
  };

  const convertHeight = (value: number, toUnit: 'cm' | 'ft'): string => {
    if (toUnit === 'ft') {
      const totalInches = value / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      return `${feet}'${inches}"`;
    }
    return `${value}`;
  };

  const displayWeight = profile.weightUnit === 'lbs' 
    ? convertWeight(profile.weight || 70, 'lbs')
    : profile.weight || 70;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tell us about yourself</h1>
        <p className={styles.subtitle}>We need your details to create a personalized plan</p>
      </div>

      <div className={styles.form}>
        {/* Weight */}
        <div className={styles.field}>
          <label className={styles.label}>Weight</label>
          <div className={styles.inputGroup}>
            <input
              type="number"
              className={styles.input}
              value={displayWeight}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                const actualValue = profile.weightUnit === 'lbs' 
                  ? convertWeight(val, 'kg')
                  : val;
                onUpdate({ weight: actualValue });
              }}
              placeholder="70"
            />
            <div className={styles.toggle}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${profile.weightUnit === 'kg' ? styles.active : ''}`}
                onClick={() => onUpdate({ weightUnit: 'kg' })}
              >
                kg
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${profile.weightUnit === 'lbs' ? styles.active : ''}`}
                onClick={() => onUpdate({ weightUnit: 'lbs' })}
              >
                lbs
              </button>
            </div>
          </div>
          {errors.weight && <span className={styles.error}>{errors.weight}</span>}
        </div>

        {/* Height */}
        <div className={styles.field}>
          <label className={styles.label}>Height</label>
          <div className={styles.inputGroup}>
            <div className={styles.heightDisplay}>
              {profile.heightUnit === 'ft' ? (
                <span className={styles.heightValue}>
                  {convertHeight(profile.heightCm || 170, 'ft')}
                </span>
              ) : (
                <input
                  type="number"
                  className={styles.input}
                  value={profile.heightCm}
                  onChange={(e) => onUpdate({ heightCm: parseInt(e.target.value) || 0 })}
                  placeholder="170"
                />
              )}
              <span className={styles.heightUnit}>
                {profile.heightUnit === 'ft' ? '' : 'cm'}
              </span>
            </div>
            <div className={styles.toggle}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${profile.heightUnit === 'cm' ? styles.active : ''}`}
                onClick={() => onUpdate({ heightUnit: 'cm' })}
              >
                cm
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${profile.heightUnit === 'ft' ? styles.active : ''}`}
                onClick={() => onUpdate({ heightUnit: 'ft' })}
              >
                ft
              </button>
            </div>
          </div>
          {errors.heightCm && <span className={styles.error}>{errors.heightCm}</span>}
        </div>

        {/* Age */}
        <div className={styles.field}>
          <label className={styles.label}>Age</label>
          <input
            type="number"
            className={styles.input}
            value={profile.age}
            onChange={(e) => onUpdate({ age: parseInt(e.target.value) || 0 })}
            placeholder="25"
          />
          {errors.age && <span className={styles.error}>{errors.age}</span>}
        </div>

        {/* Gender */}
        <div className={styles.field}>
          <label className={styles.label}>Gender</label>
          <div className={styles.genderOptions}>
            {(['male', 'female', 'other'] as const).map((g) => (
              <button
                key={g}
                type="button"
                className={`${styles.genderBtn} ${profile.gender === g ? styles.selected : ''}`}
                onClick={() => onUpdate({ gender: g })}
              >
                {g === 'male' ? '👨' : g === 'female' ? '👩' : '🧑'} {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
          {errors.gender && <span className={styles.error}>{errors.gender}</span>}
        </div>
      </div>

      <button className={styles.nextBtn} onClick={handleSubmit}>
        Continue to Goals →
      </button>
    </div>
  );
}