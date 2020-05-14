export const key = 'exercices';

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

export interface ExerciceState {
  exercices: Exercice[];
}

export const exerciceInitialState: ExerciceState = {
  exercices: []
};
