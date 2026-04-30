import { Exercise } from '@/types';

export const exercises: Exercise[] = [
  // CHEST EXERCISES
  {
    id: 'bench-press',
    name: 'Barbell Bench Press',
    muscles: ['Chest'],
    secondaryMuscles: ['Triceps', 'Shoulders'],
    equipment: ['Barbell', 'Bench'],
    difficulty: 'intermediate',
    instructions: [
      'Lie flat on bench with feet on floor',
      'Grip bar slightly wider than shoulder width',
      'Lower bar to chest with control',
      'Press up to starting position'
    ],
    category: 'compound',
    demonstration: 'bench-press'
  },
  {
    id: 'incline-bench',
    name: 'Incline Barbell Bench Press',
    muscles: ['Upper Chest'],
    secondaryMuscles: ['Triceps', 'Shoulders'],
    equipment: ['Barbell', 'Bench'],
    difficulty: 'intermediate',
    instructions: [
      'Set bench to 30-45 degree incline',
      'Grip bar and lower to upper chest',
      'Press up with control',
      'Keep shoulder blades retracted'
    ],
    category: 'compound',
    demonstration: 'incline-bench'
  },
  {
    id: 'dumbbell-fly',
    name: 'Dumbbell Chest Fly',
    muscles: ['Chest'],
    secondaryMuscles: ['Shoulders'],
    equipment: ['Dumbbells', 'Bench'],
    difficulty: 'beginner',
    instructions: [
      'Lie on bench with dumbbells above chest',
      'Lower arms in arc motion',
      'Feel stretch in chest',
      'Return to start with control'
    ],
    category: 'isolation',
    demonstration: 'dumbbell-fly'
  },
  {
    id: 'push-ups',
    name: 'Push-Ups',
    muscles: ['Chest'],
    secondaryMuscles: ['Triceps', 'Shoulders', 'Core'],
    equipment: ['Bodyweight'],
    difficulty: 'beginner',
    instructions: [
      'Start in plank position',
      'Lower chest to ground',
      'Push back up to start',
      'Keep core tight throughout'
    ],
    category: 'compound',
    demonstration: 'push-ups'
  },
  {
    id: 'cable-crossover',
    name: 'Cable Crossover',
    muscles: ['Chest'],
    secondaryMuscles: ['Shoulders'],
    equipment: ['Cable Machine'],
    difficulty: 'intermediate',
    instructions: [
      'Stand between cable stations',
      'Grab handles and lean forward',
      'Bring hands together in front',
      'Squeeze chest at peak'
    ],
    category: 'isolation',
    demonstration: 'cable-crossover'
  },

  // BACK EXERCISES
  {
    id: 'deadlift',
    name: 'Barbell Deadlift',
    muscles: ['Lower Back', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Traps', 'Core'],
    equipment: ['Barbell'],
    difficulty: 'advanced',
    instructions: [
      'Stand with feet hip-width, bar over mid-foot',
      'Hinge at hips and grip bar',
      'Keep back straight, drive through heels',
      'Stand tall, then reverse movement'
    ],
    category: 'compound',
    demonstration: 'deadlift'
  },
  {
    id: 'barbell-row',
    name: 'Barbell Bent Over Row',
    muscles: ['Lats', 'Rhomboids'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: ['Barbell'],
    difficulty: 'intermediate',
    instructions: [
      'Hinge at hips, back flat',
      'Grip bar shoulder width',
      'Pull bar to lower chest',
      'Squeeze shoulder blades'
    ],
    category: 'compound',
    demonstration: 'barbell-row'
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    muscles: ['Lats'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: ['Cable Machine'],
    difficulty: 'beginner',
    instructions: [
      'Sit at machine, grip wide',
      'Pull bar to upper chest',
      'Squeeze lats at bottom',
      'Control return up'
    ],
    category: 'compound',
    demonstration: 'lat-pulldown'
  },
  {
    id: 'pull-ups',
    name: 'Pull-Ups',
    muscles: ['Lats', 'Biceps'],
    secondaryMuscles: ['Rear Delts', 'Core'],
    equipment: ['Pull-up Bar'],
    difficulty: 'intermediate',
    instructions: [
      'Hang from bar, grip slightly wider',
      'Pull chest toward bar',
      'Squeeze lats at top',
      'Lower with control'
    ],
    category: 'compound',
    demonstration: 'pull-ups'
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    muscles: ['Lats', 'Rhomboids'],
    secondaryMuscles: ['Biceps', 'Core'],
    equipment: ['Cable Machine'],
    difficulty: 'beginner',
    instructions: [
      'Sit at cable row, feet on platform',
      'Grip handle, lean back slightly',
      'Pull to abdomen',
      'Squeeze back at peak'
    ],
    category: 'compound',
    demonstration: 'seated-cable-row'
  },
  {
    id: 'lat-pulldown-narrow',
    name: 'Close Grip Lat Pulldown',
    muscles: ['Lats', 'Biceps'],
    secondaryMuscles: ['Rear Delts'],
    equipment: ['Cable Machine'],
    difficulty: 'intermediate',
    instructions: [
      'Use narrow grip attachment',
      'Pull to upper chest',
      'Focus on lat contraction',
      'Control the negative'
    ],
    category: 'compound',
    demonstration: 'lat-pulldown-narrow'
  },

  // SHOULDERS EXERCISES
  {
    id: 'overhead-press',
    name: 'Barbell Overhead Press',
    muscles: ['Shoulders'],
    secondaryMuscles: ['Triceps', 'Traps'],
    equipment: ['Barbell'],
    difficulty: 'intermediate',
    instructions: [
      'Stand with bar at shoulder height',
      'Press bar overhead',
      'Lock out at top',
      'Lower with control'
    ],
    category: 'compound',
    demonstration: 'overhead-press'
  },
  {
    id: 'lateral-raise',
    name: 'Dumbbell Lateral Raise',
    muscles: ['Side Delts'],
    secondaryMuscles: ['Traps'],
    equipment: ['Dumbbells'],
    difficulty: 'beginner',
    instructions: [
      'Stand with dumbbells at sides',
      'Raise arms to shoulder height',
      'Lead with elbows',
      'Lower slowly'
    ],
    category: 'isolation',
    demonstration: 'lateral-raise'
  },
  {
    id: 'face-pull',
    name: 'Face Pull',
    muscles: ['Rear Delts', 'Rhomboids'],
    secondaryMuscles: ['Traps', 'Rotator Cuff'],
    equipment: ['Cable Machine'],
    difficulty: 'beginner',
    instructions: [
      'Set cable at face height',
      'Pull rope toward face',
      'Separate hands at end',
      'Squeeze rear delts'
    ],
    category: 'isolation',
    demonstration: 'face-pull'
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    muscles: ['Shoulders'],
    secondaryMuscles: ['Triceps'],
    equipment: ['Dumbbells'],
    difficulty: 'intermediate',
    instructions: [
      'Sit with dumbbells at shoulder height',
      'Palms facing you',
      'Press up while rotating palms',
      'Reverse motion on way down'
    ],
    category: 'compound',
    demonstration: 'arnold-press'
  },
  {
    id: 'rear-delt-fly',
    name: 'Rear Delt Fly',
    muscles: ['Rear Delts'],
    secondaryMuscles: ['Rhomboids', 'Traps'],
    equipment: ['Dumbbells'],
    difficulty: 'beginner',
    instructions: [
      'Bend forward at hips',
      'Raise dumbbells to sides',
      'Squeeze rear delts',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'rear-delt-fly'
  },

  // ARMS EXERCISES
  {
    id: 'barbell-curl',
    name: 'Barbell Bicep Curl',
    muscles: ['Biceps'],
    secondaryMuscles: ['Forearms'],
    equipment: ['Barbell'],
    difficulty: 'beginner',
    instructions: [
      'Stand with bar, arms extended',
      'Curl bar to shoulders',
      'Squeeze at top',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'barbell-curl'
  },
  {
    id: 'hammer-curl',
    name: 'Dumbbell Hammer Curl',
    muscles: ['Biceps', 'Brachialis'],
    secondaryMuscles: ['Forearms'],
    equipment: ['Dumbbells'],
    difficulty: 'beginner',
    instructions: [
      'Stand with dumbbells, palms facing in',
      'Curl up keeping wrists neutral',
      'Squeeze at top',
      'Lower slowly'
    ],
    category: 'isolation',
    demonstration: 'hammer-curl'
  },
  {
    id: 'tricep-pushdown',
    name: 'Cable Tricep Pushdown',
    muscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: ['Cable Machine'],
    difficulty: 'beginner',
    instructions: [
      'Grip cable bar at chest height',
      'Push down to extension',
      'Squeeze triceps',
      'Control return'
    ],
    category: 'isolation',
    demonstration: 'tricep-pushdown'
  },
  {
    id: 'skull-crusher',
    name: 'Lying Tricep Extension',
    muscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: ['Barbell', 'Bench'],
    difficulty: 'intermediate',
    instructions: [
      'Lie on bench with bar above chest',
      'Lower bar to forehead',
      'Extend back up',
      'Keep elbows stable'
    ],
    category: 'isolation',
    demonstration: 'skull-crusher'
  },
  {
    id: 'dips',
    name: 'Parallel Bar Dips',
    muscles: ['Triceps'],
    secondaryMuscles: ['Chest', 'Shoulders'],
    equipment: ['Parallel Bars'],
    difficulty: 'intermediate',
    instructions: [
      'Support on bars, arms straight',
      'Lower body by bending elbows',
      'Push back up',
      'Keep torso upright'
    ],
    category: 'compound',
    demonstration: 'dips'
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    muscles: ['Biceps'],
    secondaryMuscles: [],
    equipment: ['Barbell', 'Preacher Bench'],
    difficulty: 'beginner',
    instructions: [
      'Rest arms on preacher bench',
      'Curl bar up',
      'Squeeze at top',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'preacher-curl'
  },

  // LEG EXERCISES
  {
    id: 'squat',
    name: 'Barbell Back Squat',
    muscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core', 'Lower Back'],
    equipment: ['Barbell', 'Squat Rack'],
    difficulty: 'intermediate',
    instructions: [
      'Position bar on upper back',
      'Feet shoulder width apart',
      'Squat down until thighs parallel',
      'Drive up through heels'
    ],
    category: 'compound',
    demonstration: 'squat'
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    muscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings'],
    equipment: ['Leg Press Machine'],
    difficulty: 'beginner',
    instructions: [
      'Sit in machine, feet on platform',
      'Lower weight with control',
      'Press back up without locking',
      'Keep lower back on pad'
    ],
    category: 'compound',
    demonstration: 'leg-press'
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    muscles: ['Hamstrings', 'Glutes'],
    secondaryMuscles: ['Lower Back', 'Core'],
    equipment: ['Barbell'],
    difficulty: 'intermediate',
    instructions: [
      'Hold bar at hip level',
      'Push hips back, lower bar',
      'Feel hamstring stretch',
      'Drive hips forward to stand'
    ],
    category: 'compound',
    demonstration: 'romanian-deadlift'
  },
  {
    id: 'leg-curl',
    name: 'Lying Leg Curl',
    muscles: ['Hamstrings'],
    secondaryMuscles: [],
    equipment: ['Leg Curl Machine'],
    difficulty: 'beginner',
    instructions: [
      'Lie face down on machine',
      'Curl heels toward glutes',
      'Squeeze hamstrings',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'leg-curl'
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    muscles: ['Quads'],
    secondaryMuscles: [],
    equipment: ['Leg Extension Machine'],
    difficulty: 'beginner',
    instructions: [
      'Sit in machine, pad on shins',
      'Extend legs fully',
      'Squeeze quads at top',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'leg-extension'
  },
  {
    id: 'lunges',
    name: 'Walking Lunges',
    muscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: ['Dumbbells'],
    difficulty: 'intermediate',
    instructions: [
      'Step forward into lunge',
      'Lower back knee toward ground',
      'Push off front foot',
      'Alternate legs'
    ],
    category: 'compound',
    demonstration: 'lunges'
  },
  {
    id: 'calf-raise',
    name: 'Standing Calf Raise',
    muscles: ['Calves'],
    secondaryMuscles: [],
    equipment: ['Calf Machine'],
    difficulty: 'beginner',
    instructions: [
      'Stand on calf machine platform',
      'Rise up on toes',
      'Squeeze at top',
      'Lower for full stretch'
    ],
    category: 'isolation',
    demonstration: 'calf-raise'
  },
  {
    id: 'hip-thrust',
    name: 'Barbell Hip Thrust',
    muscles: ['Glutes'],
    secondaryMuscles: ['Hamstrings'],
    equipment: ['Barbell', 'Bench'],
    difficulty: 'intermediate',
    instructions: [
      'Back against bench, bar on hips',
      'Drive hips up squeezing glutes',
      'At top, squeeze hard',
      'Lower with control'
    ],
    category: 'compound',
    demonstration: 'hip-thrust'
  },
  {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    muscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Core'],
    equipment: ['Dumbbell', 'Kettlebell'],
    difficulty: 'beginner',
    instructions: [
      'Hold dumbbell at chest',
      'Squat down between legs',
      'Keep chest up',
      'Drive up through heels'
    ],
    category: 'compound',
    demonstration: 'goblet-squat'
  },

  // CORE EXERCISES
  {
    id: 'plank',
    name: 'Plank',
    muscles: ['Core'],
    secondaryMuscles: ['Shoulders', 'Back'],
    equipment: ['Bodyweight'],
    difficulty: 'beginner',
    instructions: [
      'Hold push-up position on forearms',
      'Keep body straight',
      'Engage core',
      'Hold for time'
    ],
    category: 'isolation',
    demonstration: 'plank'
  },
  {
    id: 'cable-crunch',
    name: 'Cable Crunch',
    muscles: ['Abs'],
    secondaryMuscles: [],
    equipment: ['Cable Machine'],
    difficulty: 'intermediate',
    instructions: [
      'Kneel facing cable machine',
      'Pull weight down with crunch motion',
      'Squeeze abs at bottom',
      'Control return'
    ],
    category: 'isolation',
    demonstration: 'cable-crunch'
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    muscles: ['Abs'],
    secondaryMuscles: ['Hip Flexors'],
    equipment: ['Pull-up Bar'],
    difficulty: 'intermediate',
    instructions: [
      'Hang from pull-up bar',
      'Raise legs to parallel',
      'Squeeze abs at top',
      'Lower with control'
    ],
    category: 'isolation',
    demonstration: 'hanging-leg-raise'
  },
  {
    id: 'russian-twist',
    name: 'Russian Twist',
    muscles: ['Obliques'],
    secondaryMuscles: ['Abs'],
    equipment: ['Bodyweight', 'Dumbbell'],
    difficulty: 'beginner',
    instructions: [
      'Sit with knees bent, lean back',
      'Rotate torso side to side',
      'Keep core engaged',
      'Add weight for resistance'
    ],
    category: 'isolation',
    demonstration: 'russian-twist'
  },
  {
    id: 'ab-wheel',
    name: 'Ab Wheel Rollout',
    muscles: ['Core'],
    secondaryMuscles: ['Shoulders', 'Lats'],
    equipment: ['Ab Wheel'],
    difficulty: 'advanced',
    instructions: [
      'Kneel holding wheel',
      'Roll forward extending body',
      'Keep core tight',
      'Pull back to start'
    ],
    category: 'isolation',
    demonstration: 'ab-wheel'
  },

  // CARDIO EXERCISES
  {
    id: 'treadmill-run',
    name: 'Treadmill Running',
    muscles: ['Legs', 'Core'],
    secondaryMuscles: ['Glutes'],
    equipment: ['Treadmill'],
    difficulty: 'beginner',
    instructions: [
      'Set treadmill to desired speed',
      'Maintain good posture',
      'Land mid-foot',
      'Keep core engaged'
    ],
    category: 'cardio',
    demonstration: 'treadmill-run'
  },
  {
    id: 'cycling',
    name: 'Stationary Bike',
    muscles: ['Legs'],
    secondaryMuscles: ['Glutes', 'Core'],
    equipment: ['Stationary Bike'],
    difficulty: 'beginner',
    instructions: [
      'Set appropriate resistance',
      'Pedal at steady pace',
      'Keep back straight',
      'Engage core'
    ],
    category: 'cardio',
    demonstration: 'cycling'
  },
  {
    id: 'rowing',
    name: 'Rowing Machine',
    muscles: ['Back', 'Legs'],
    secondaryMuscles: ['Core', 'Arms'],
    equipment: ['Rowing Machine'],
    difficulty: 'intermediate',
    instructions: [
      'Start with legs bent',
      'Push with legs first',
      'Lean back and pull handle',
      'Return in reverse order'
    ],
    category: 'cardio',
    demonstration: 'rowing'
  },
  {
    id: 'jump-rope',
    name: 'Jump Rope',
    muscles: ['Calves'],
    secondaryMuscles: ['Shoulders', 'Core'],
    equipment: ['Jump Rope'],
    difficulty: 'intermediate',
    instructions: [
      'Hold rope behind heels',
      'Jump and swing rope over',
      'Land softly on balls of feet',
      'Keep jumps small'
    ],
    category: 'cardio',
    demonstration: 'jump-rope'
  },
  {
    id: 'burpees',
    name: 'Burpees',
    muscles: ['Full Body'],
    secondaryMuscles: ['Chest', 'Legs', 'Core'],
    equipment: ['Bodyweight'],
    difficulty: 'intermediate',
    instructions: [
      'Start standing, drop to plank',
      'Perform push-up',
      'Jump feet to hands',
      'Jump up with arms overhead'
    ],
    category: 'cardio',
    demonstration: 'burpees'
  },
  {
    id: 'mountain-climber',
    name: 'Mountain Climbers',
    muscles: ['Core', 'Hip Flexors'],
    secondaryMuscles: ['Shoulders', 'Legs'],
    equipment: ['Bodyweight'],
    difficulty: 'intermediate',
    instructions: [
      'Start in plank position',
      'Drive knees to chest alternately',
      'Keep hips low',
      'Move quickly'
    ],
    category: 'cardio',
    demonstration: 'mountain-climber'
  },

  // COMPOUND / FULL BODY
  {
    id: 'clean-and-jerk',
    name: 'Clean and Jerk',
    muscles: ['Full Body'],
    secondaryMuscles: ['Legs', 'Back', 'Shoulders'],
    equipment: ['Barbell'],
    difficulty: 'advanced',
    instructions: [
      'Clean bar to shoulders in one motion',
      'Dip and drive with legs',
      'Press bar overhead',
      'Lock out at top'
    ],
    category: 'compound',
    demonstration: 'clean-and-jerk'
  },
  {
    id: 'thrusters',
    name: 'Barbell Thrusters',
    muscles: ['Full Body'],
    secondaryMuscles: ['Legs', 'Shoulders', 'Core'],
    equipment: ['Barbell', 'Dumbbells'],
    difficulty: 'intermediate',
    instructions: [
      'Front squat position',
      'Explode up and press overhead',
      'Full extension at top',
      'Catch and repeat'
    ],
    category: 'compound',
    demonstration: 'thrusters'
  },
  {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing',
    muscles: ['Glutes', 'Hamstrings'],
    secondaryMuscles: ['Core', 'Shoulders'],
    equipment: ['Kettlebell'],
    difficulty: 'intermediate',
    instructions: [
      'Hinge at hips, grip kettlebell',
      'Swing between legs',
      'Drive hips forward',
      'Let momentum swing kettlebell up'
    ],
    category: 'compound',
    demonstration: 'kettlebell-swing'
  }
];

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(e => e.id === id);
};

export const getExercisesByMuscle = (muscle: string): Exercise[] => {
  return exercises.filter(e => 
    e.muscles.includes(muscle) || e.secondaryMuscles.includes(muscle)
  );
};

export const getExercisesByEquipment = (equipment: string[]): Exercise[] => {
  return exercises.filter(e => 
    e.equipment.some(eq => equipment.includes(eq))
  );
};