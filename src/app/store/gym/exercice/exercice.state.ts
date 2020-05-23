export const key = 'exercices';

export interface ExerciceFromService {
  title: string;
  sets: string;
  technique: string;
  interval: string;
}

export interface Exercice {
  id: string;
  title: string;
  sets: string;
  setExecution: {series: number, weight: number}[];
  technique: string;
  interval: string;
  group: any;
  video: any;
  workoutId: string;
}

export interface ExerciceState {
  exercices: Exercice[];
}

export const exerciceInitialState: ExerciceState = {
  exercices: []
};
