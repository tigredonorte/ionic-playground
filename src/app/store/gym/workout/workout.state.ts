export const key = 'workouts';

export interface ExerciceFromService {
  title: string;
  sets: string;
  technique: string;
  interval: string;
}

export interface Exercice {
  title: string;
  sets: string;
  technique: string;
  interval: string;
  group: any;
  video: any;
}

export interface WorkoutState {
  exercices: Exercice[];
}

export const workoutInitialState: WorkoutState = {
  exercices: []
};
