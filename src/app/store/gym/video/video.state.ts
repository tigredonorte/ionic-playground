export const key = 'videos';

export interface Video {
  title: string;
  video: string;
  group: {
    cod: number;
    title: string;
  };
}

export interface VideoState {
  exercices: Video[];
}

export const videoInitialState: VideoState = {
  exercices: []
};
