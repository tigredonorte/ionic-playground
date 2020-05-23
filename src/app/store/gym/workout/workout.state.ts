export const key = 'workouts';

export interface Workout {
  title: string;
  subtitle: string;
  userId: string;
  gymRecordId: string;
}

export interface WorkoutState {
  workouts: Workout[];
}

export const workoutInitialState: WorkoutState = {
  workouts: []
};
