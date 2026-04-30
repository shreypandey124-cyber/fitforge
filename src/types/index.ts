export interface UserProfile {
  weight: number;
  heightCm: number;
  age: number;
  gender: 'male' | 'female' | 'other';
  goal: GoalCategory;
  subGoal: string;
  availableDays: string[];
  weightUnit: 'kg' | 'lbs';
  heightUnit: 'cm' | 'ft';
}

export type GoalCategory = 'build-muscle' | 'weight-loss' | 'strength';

export interface GoalOption {
  id: GoalCategory;
  title: string;
  description: string;
  subCategories: SubCategory[];
  icon: string;
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  targetImage: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscles: string[];
  secondaryMuscles: string[];
  equipment: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  category: 'compound' | 'isolation' | 'cardio';
  demonstration: string;
}

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  reps: string;
  rest: number;
  notes?: string;
}

export interface WorkoutDay {
  day: string;
  isRestDay: boolean;
  focus?: string;
  exercises: WorkoutExercise[];
}

export interface WeeklyPlan {
  days: WorkoutDay[];
  userProfile: UserProfile;
  generatedAt: string;
}