import { GymRecord } from './gym-record.state';

export enum actions {
  listGymRecords = '[GymRecord] list gymRecords',
  listedGymRecords = '[GymRecord] listed gymRecords',
}

export class ListGymRecords {
  public readonly type = actions.listGymRecords;
  constructor(public userId: string) {}
}

export class ListGymRecordsEnd {
  public readonly type = actions.listedGymRecords;
  constructor(public gymRecords: GymRecord[]) {}
}

export type GymRecordActions =
  | ListGymRecords
  | ListGymRecordsEnd;

