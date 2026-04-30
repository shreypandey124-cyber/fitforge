'use client';

import { useState } from 'react';
import { UserProfile, WeeklyPlan } from '@/types';
import { generateWeeklyWorkout } from '@/data/workouts';
import BiometricsForm from '@/components/BiometricsForm';
import GoalSelection from '@/components/GoalSelection';
import AvailabilitySelector from '@/components/AvailabilitySelector';
import WorkoutPlan from '@/components/WorkoutPlan';

type Step = 'biometrics' | 'goals' | 'availability' | 'plan';

const defaultProfile: Partial<UserProfile> = {
  weight: 70,
  heightCm: 170,
  age: 25,
  gender: 'male',
  weightUnit: 'kg',
  heightUnit: 'cm',
  availableDays: [],
  goal: undefined,
  subGoal: ''
};

function loadFromStorage() {
  if (typeof window === 'undefined') return null;
  try {
    const p = localStorage.getItem('fitforge-profile');
    const w = localStorage.getItem('fitforge-plan');
    return {
      profile: p ? JSON.parse(p) : null,
      weeklyPlan: w ? JSON.parse(w) : null
    };
  } catch {
    return null;
  }
}

export default function Home() {
  const [step, setStep] = useState<Step>('biometrics');
  const [profile, setProfile] = useState<Partial<UserProfile>>(defaultProfile);
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Client-side only load
  if (!loaded) {
    const stored = loadFromStorage();
    if (stored) {
      if (stored.profile) setProfile(stored.profile);
      if (stored.weeklyPlan) {
        setWeeklyPlan(stored.weeklyPlan);
        setStep('plan');
      }
    }
    setLoaded(true);
  }

  const handleProfileUpdate = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitforge-profile', JSON.stringify(newProfile));
    }
  };

  const handleGenerate = () => {
    const fullProfile: UserProfile = {
      weight: profile.weight || 70,
      heightCm: profile.heightCm || 170,
      age: profile.age || 25,
      gender: profile.gender || 'male',
      goal: profile.goal || 'build-muscle',
      subGoal: profile.subGoal || 'lean-bulk',
      availableDays: profile.availableDays || ['Monday', 'Wednesday', 'Friday'],
      weightUnit: profile.weightUnit || 'kg',
      heightUnit: profile.heightUnit || 'cm'
    };
    
    const plan = generateWeeklyWorkout(fullProfile);
    setWeeklyPlan(plan);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitforge-plan', JSON.stringify(plan));
    }
    setStep('plan');
  };

  const handleRestart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fitforge-profile');
      localStorage.removeItem('fitforge-plan');
    }
    setProfile(defaultProfile);
    setWeeklyPlan(null);
    setStep('biometrics');
  };

  const getStepNumber = (): number => {
    switch (step) {
      case 'biometrics': return 1;
      case 'goals': return 2;
      case 'availability': return 3;
      case 'plan': return 4;
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '24px 16px', background: 'var(--bg-primary)' }}>
      {step !== 'plan' && (
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#FF6B35', marginBottom: '4px' }}>
            💪 FitForge
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Your Personalized Workout Planner
          </p>
        </div>
      )}

      {step !== 'plan' && (
        <div className="step-indicator">
          {['biometrics', 'goals', 'availability', 'plan'].map((s, i) => (
            <div
              key={s}
              className={`step ${step === s ? 'active' : ''} ${getStepNumber() > i + 1 ? 'completed' : ''}`}
            >
              {getStepNumber() > i + 1 ? '✓' : i + 1}
            </div>
          ))}
        </div>
      )}

      {step === 'biometrics' && (
        <BiometricsForm
          profile={profile}
          onUpdate={handleProfileUpdate}
          onNext={() => setStep('goals')}
        />
      )}

      {step === 'goals' && (
        <GoalSelection
          profile={profile}
          onUpdate={handleProfileUpdate}
          onNext={() => setStep('availability')}
          onBack={() => setStep('biometrics')}
        />
      )}

      {step === 'availability' && (
        <AvailabilitySelector
          profile={profile}
          onUpdate={handleProfileUpdate}
          onNext={handleGenerate}
          onBack={() => setStep('goals')}
        />
      )}

      {step === 'plan' && weeklyPlan && profile.goal && profile.subGoal && (
        <WorkoutPlan
          profile={{
            weight: profile.weight || 70,
            heightCm: profile.heightCm || 170,
            age: profile.age || 25,
            gender: profile.gender || 'male',
            goal: profile.goal,
            subGoal: profile.subGoal || '',
            availableDays: profile.availableDays || [],
            weightUnit: profile.weightUnit || 'kg',
            heightUnit: profile.heightUnit || 'cm'
          }}
          weeklyPlan={weeklyPlan}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}