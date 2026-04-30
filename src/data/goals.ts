import { GoalOption, GoalCategory, SubCategory } from '@/types';

export const goals: GoalOption[] = [
  {
    id: 'build-muscle',
    title: 'Build Muscle',
    description: 'Gain muscle mass and strength',
    icon: '💪',
    subCategories: [
      {
        id: 'lean-bulk',
        title: 'Lean Bulk',
        description: 'Moderate calorie surplus with focus on muscle definition. Best for showing muscle growth while staying relatively lean.',
        targetImage: 'lean-bulk'
      },
      {
        id: 'dirty-bulk',
        title: 'Dirty Bulk',
        description: 'High calorie surplus for maximum muscle gain. Accept some fat gain for faster muscle building.',
        targetImage: 'dirty-bulk'
      },
      {
        id: 'recomp',
        title: 'Recomp',
        description: 'Build muscle while losing fat simultaneously. Slower but no bulk phase needed.',
        targetImage: 'recomp'
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        description: 'Maintain current weight while improving muscle tone and strength.',
        targetImage: 'maintenance'
      }
    ]
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Burn fat and get leaner',
    icon: '🔥',
    subCategories: [
      {
        id: 'ectomorph-loss',
        title: 'Ectomorph (Hard Gainer)',
        description: 'Fast metabolism, lean build. Focus on strength training with cardio to preserve muscle while losing fat.',
        targetImage: 'ectomorph'
      },
      {
        id: 'mesomorph-loss',
        title: 'Mesomorph (Muscular)',
        description: 'Naturally athletic build. Balanced approach of strength and cardio for optimal fat loss.',
        targetImage: 'mesomorph'
      },
      {
        id: 'endomorph-loss',
        title: 'Endomorph (Easy Gainer)',
        description: 'Stores fat easily. Higher cardio and HIIT focus with cleaner diet to shed pounds.',
        targetImage: 'endomorph'
      },
      {
        id: 'general-loss',
        title: 'General Weight Loss',
        description: 'Universal approach that works for any body type. Moderate everything approach.',
        targetImage: 'general-loss'
      }
    ]
  },
  {
    id: 'strength',
    title: 'Strength Training',
    description: 'Build raw power and strength',
    icon: '🏋️',
    subCategories: [
      {
        id: 'beginner-strength',
        title: 'Beginner',
        description: 'Foundation building. Learn proper form on key compound movements.',
        targetImage: 'beginner'
      },
      {
        id: 'intermediate-strength',
        title: 'Intermediate',
        description: 'Progressive overload. Challenge yourself with heavier weights and volume.',
        targetImage: 'intermediate'
      },
      {
        id: 'advanced-strength',
        title: 'Advanced',
        description: 'Peak strength. Specialized training for maximum power output.',
        targetImage: 'advanced'
      }
    ]
  }
];

export const getGoalById = (id: GoalCategory): GoalOption | undefined => {
  return goals.find(g => g.id === id);
};

export const getSubCategory = (goalId: GoalCategory, subId: string): SubCategory | undefined => {
  const goal = getGoalById(goalId);
  return goal?.subCategories.find(s => s.id === subId);
};