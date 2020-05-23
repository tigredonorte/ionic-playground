export const key = 'gymRecords';

export interface GymRecord {
  title: string;
  subtitle: string;
  userId: string;
  gymRecordId: string;
}

export interface GymRecordState {
  gymRecords: GymRecord[];
}

export const gymRecordInitialState: GymRecordState = {
  gymRecords: []
};
