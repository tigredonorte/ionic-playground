import { Exercice } from './exercice.state';

export enum actions {
  listExercices = '[Exercice] list exercices',
  listedExercices = '[Exercice] listed exercices',
  updateExerciceSet = '[Exercice] update exercice set',
  updatedExercice = '[Exercice] update exercice',
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

export class UpdateExerciceSet {
  public readonly type = actions.updateExerciceSet;
  constructor(public setItem: {i: number, id: string, weight: number, series: number}) { }
}

export class UpdatedExercice {
  public readonly type = actions.updatedExercice;
  constructor(public exercice: Exercice) {}
}

export type ExerciceActions =
  | ListExercices
  | ListExercicesEnd
  | UpdatedExercice
  | UpdateExerciceSet;

