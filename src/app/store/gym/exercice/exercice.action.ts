import { Exercice } from './exercice.state';

export enum actions {
  listExercices = '[Exercice] list exercices',
  listedExercices = '[Exercice] listed exercices',
}

export interface ListExercicesOptions {
  workoutId?: string;
}

export class ListExercices {
  public readonly type = actions.listExercices;
  constructor(public userId: string, public options?: ListExercicesOptions) {}
}

export class ListExercicesEnd {
  public readonly type = actions.listedExercices;
  constructor(public exercices: Exercice[]) {}
}

export type ExerciceActions =
  | ListExercices
  | ListExercicesEnd;

