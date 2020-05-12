export const key = 'workouts';

export interface WorkoutItem {
  title: string;
  sets: string;
  technique: string;
  interval: string;
}

export interface WorkoutState {
  workouts: WorkoutItem[];
}

export const workoutInitialState: WorkoutState = {
  workouts: []
};
