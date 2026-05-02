import { 
  UserProfile, 
  WorkoutDay, 
  WeeklyPlan, 
  WorkoutExercise,
  Exercise 
} from '@/types';
import { getExerciseById } from './exercises';
import { getGoalById } from './goals';

interface ExerciseSelection {
  primary: string[];
  secondary: string[];
  cardio: string[];
  core: string[];
}

function getAgeGroup(age: number): 'young' | 'middle' | 'senior' {
  if (age < 30) return 'young';
  if (age < 50) return 'middle';
  return 'senior';
}

function getWorkoutParams(profile: UserProfile): {
  exerciseCount: number;
  sets: number;
  reps: string;
  rest: number;
  exercises: ExerciseSelection;
  focus: string;
} {
  const ageGroup = getAgeGroup(profile.age);
  const goal = profile.goal;
  const subGoal = profile.subGoal;

  // BASE PARAMETERS BY GOAL AND AGE
  interface BaseParams {
    sets: number;
    reps: string;
    rest: number;
    exerciseCount: number;
  }
  const baseParams: Record<string, { young: BaseParams; middle: BaseParams; senior: BaseParams }> = {
    'lean-bulk': {
      young: { sets: 4, reps: '8-12', rest: 90, exerciseCount: 7 },
      middle: { sets: 3, reps: '10-12', rest: 90, exerciseCount: 6 },
      senior: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 }
    },
    'dirty-bulk': {
      young: { sets: 5, reps: '6-8', rest: 120, exerciseCount: 7 },
      middle: { sets: 4, reps: '8-10', rest: 90, exerciseCount: 6 },
      senior: { sets: 4, reps: '8-10', rest: 90, exerciseCount: 5 }
    },
    'recomp': {
      young: { sets: 3, reps: '10-12', rest: 60, exerciseCount: 6 },
      middle: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      senior: { sets: 2, reps: '15-20', rest: 45, exerciseCount: 4 }
    },
    'maintenance': {
      young: { sets: 3, reps: '10-12', rest: 90, exerciseCount: 5 },
      middle: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      senior: { sets: 2, reps: '15-20', rest: 45, exerciseCount: 4 }
    },
    'ectomorph-loss': {
      young: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      middle: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      senior: { sets: 2, reps: '15-20', rest: 45, exerciseCount: 4 }
    },
    'mesomorph-loss': {
      young: { sets: 3, reps: '10-12', rest: 60, exerciseCount: 5 },
      middle: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      senior: { sets: 2, reps: '15-20', rest: 45, exerciseCount: 4 }
    },
    'endomorph-loss': {
      young: { sets: 3, reps: '12-15', rest: 45, exerciseCount: 5 },
      middle: { sets: 3, reps: '15-20', rest: 45, exerciseCount: 4 },
      senior: { sets: 2, reps: '20-25', rest: 30, exerciseCount: 4 }
    },
    'general-loss': {
      young: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      middle: { sets: 3, reps: '12-15', rest: 60, exerciseCount: 5 },
      senior: { sets: 2, reps: '15-20', rest: 45, exerciseCount: 4 }
    },
    'beginner-strength': {
      young: { sets: 3, reps: '8-12', rest: 90, exerciseCount: 5 },
      middle: { sets: 3, reps: '10-12', rest: 90, exerciseCount: 5 },
      senior: { sets: 2, reps: '12-15', rest: 60, exerciseCount: 4 }
    },
    'intermediate-strength': {
      young: { sets: 4, reps: '6-8', rest: 120, exerciseCount: 6 },
      middle: { sets: 4, reps: '6-8', rest: 120, exerciseCount: 5 },
      senior: { sets: 3, reps: '8-10', rest: 90, exerciseCount: 5 }
    },
    'advanced-strength': {
      young: { sets: 5, reps: '3-5', rest: 180, exerciseCount: 7 },
      middle: { sets: 5, reps: '3-5', rest: 180, exerciseCount: 6 },
      senior: { sets: 4, reps: '4-6', rest: 120, exerciseCount: 5 }
    }
  };

  // Get appropriate parameters
  const key = subGoal || goal;
  let params = baseParams[key]?.[ageGroup] || baseParams['maintenance']['young'];

  // Adjust for gender
  if (profile.gender === 'female') {
    params = { ...params, sets: Math.max(params.sets - 1, 2) };
  }

  // Get exercise selection based on goal
  const exerciseSelection = getExerciseSelection(goal, subGoal);

  return {
    ...params,
    exercises: exerciseSelection,
    focus: getGoalById(goal)?.subCategories.find(s => s.id === subGoal)?.title || 'General'
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getExerciseSelection(goal: string, _subGoal: string): ExerciseSelection {
  // Exercise pools for different goals
  const muscleGroups = {
    chest: ['bench-press', 'incline-bench', 'push-ups', 'dumbbell-fly', 'cable-crossover'],
    back: ['deadlift', 'barbell-row', 'lat-pulldown', 'pull-ups', 'seated-cable-row'],
    shoulders: ['overhead-press', 'lateral-raise', 'face-pull', 'arnold-press', 'rear-delt-fly'],
    arms: ['barbell-curl', 'hammer-curl', 'tricep-pushdown', 'skull-crusher', 'dips', 'preacher-curl'],
    legs: ['squat', 'leg-press', 'romanian-deadlift', 'leg-curl', 'leg-extension', 'lunges', 'calf-raise', 'hip-thrust', 'goblet-squat'],
    core: ['plank', 'cable-crunch', 'russian-twist', 'hanging-leg-raise'],
    cardio: ['treadmill-run', 'cycling', 'rowing', 'jump-rope', 'burpees', 'mountain-climber']
  };

  // Determine focus based on goal type
  if (goal === 'build-muscle' || goal === 'strength') {
    return {
      primary: [...muscleGroups.chest, ...muscleGroups.back, ...muscleGroups.legs],
      secondary: [...muscleGroups.shoulders, ...muscleGroups.arms],
      cardio: [],
      core: muscleGroups.core
    };
  }

  // Weight loss - more cardio
  if (goal === 'weight-loss') {
    return {
      primary: [...muscleGroups.chest, ...muscleGroups.back, ...muscleGroups.legs],
      secondary: [...muscleGroups.shoulders, ...muscleGroups.arms],
      cardio: muscleGroups.cardio,
      core: muscleGroups.core
    };
  }

  return {
    primary: [...muscleGroups.chest, ...muscleGroups.back, ...muscleGroups.legs],
    secondary: [...muscleGroups.shoulders, ...muscleGroups.arms],
    cardio: [],
    core: muscleGroups.core
  };
}

function selectExercises(params: ExerciseSelection, count: number): Exercise[] {
  const selected: Exercise[] = [];
  
  // Select from primary (compound) exercises
  const primaryCount = Math.ceil(count * 0.5);
  const shuffled = [...params.primary].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < primaryCount && i < shuffled.length; i++) {
    const exercise = getExerciseById(shuffled[i]);
    if (exercise) selected.push(exercise);
  }

  // Fill remainder with secondary
  const remaining = count - selected.length;
  const secondaryShuffled = [...params.secondary].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < remaining && i < secondaryShuffled.length; i++) {
    const exercise = getExerciseById(secondaryShuffled[i]);
    if (exercise && !selected.find(e => e.id === exercise.id)) {
      selected.push(exercise);
    }
  }

  return selected;
}

function createWorkoutDay(
  dayName: string, 
  focus: string, 
  params: ReturnType<typeof getWorkoutParams>,
  isRestDay: boolean = false
): WorkoutDay {
  if (isRestDay) {
    return {
      day: dayName,
      isRestDay: true,
      exercises: []
    };
  }

  const selectedExercises = selectExercises(params.exercises, params.exerciseCount);
  
  const workoutExercises: WorkoutExercise[] = selectedExercises.map(exercise => ({
    exercise,
    sets: params.sets,
    reps: params.reps,
    rest: params.rest,
    notes: exercise.instructions[0]
  }));

  // Add cardio for weight loss goals
  if (params.exercises.cardio.length > 0) {
    const cardioExercise = getExerciseById(params.exercises.cardio[Math.floor(Math.random() * params.exercises.cardio.length)]);
    if (cardioExercise) {
      workoutExercises.push({
        exercise: cardioExercise,
        sets: 1,
        reps: '15-20 min',
        rest: 0,
        notes: 'Steady state cardio'
      });
    }
  }

  return {
    day: dayName,
    isRestDay: false,
    focus,
    exercises: workoutExercises
  };
}

export function generateWeeklyWorkout(profile: UserProfile): WeeklyPlan {
  const availableDays = profile.availableDays;
  const params = getWorkoutParams(profile);
  
  const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Muscle group rotation for variety
  const muscleFocuses = ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Full Body', 'Active Recovery'];
  
  // Filter to only available days and distribute workouts
  const availableSorted = dayOrder.filter(d => availableDays.includes(d));
  
  const days: WorkoutDay[] = dayOrder.map((day, index) => {
    const isAvailable = availableDays.includes(day);
    
    if (!isAvailable) {
      return createWorkoutDay(day, 'Rest', params, true);
    }

    // Distribute workout types across available days
    const availableIndex = availableSorted.indexOf(day);
    const focusIndex = availableIndex % muscleFocuses.length;
    const focus = muscleFocuses[focusIndex];

    // Add rest days if too many consecutive workout days
    if (availableIndex > 0 && availableSorted[availableIndex - 1] === dayOrder[index - 1]) {
      // Check if we need a rest day between
      if (availableIndex % 3 === 0 && availableSorted.length > 4) {
        return createWorkoutDay(day, 'Active Recovery', params, true);
      }
    }

    return createWorkoutDay(day, focus, params, false);
  });

  return {
    days,
    userProfile: profile,
    generatedAt: new Date().toISOString()
  };
}

export function getWorkoutSummary(plan: WeeklyPlan): string {
  const workoutDays = plan.days.filter(d => !d.isRestDay);
  const totalExercises = workoutDays.reduce((sum, day) => sum + day.exercises.length, 0);
  
  return `${workoutDays.length} workout days, ${totalExercises} total exercises`;
}