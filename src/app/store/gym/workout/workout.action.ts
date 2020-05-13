import { Exercice } from './workout.state';

export enum actions {
  listWorkouts = '[Workout] list workouts',
  listedWorkouts = '[Workout] listed workouts',
}

export class ListWorkouts {
  public readonly type = actions.listWorkouts;
  constructor(public userId: string) {}
}

export class ListWorkoutsEnd {
  public readonly type = actions.listedWorkouts;
  constructor(public exercices: Exercice[]) {}
}

export type WorkoutActions =
  | ListWorkouts
  | ListWorkoutsEnd;

