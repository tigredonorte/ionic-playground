import { Video } from './video.state';

export enum actions {
  listVideos = '[Video] list videos',
  listedVideos = '[Video] listed videos',
}

export class ListVideos {
  public readonly type = actions.listVideos;
  constructor() {}
}

export class ListVideosEnd {
  public readonly type = actions.listedVideos;
  constructor(public videos: Video[]) {}
}

export type VideoActions =
  | ListVideos
  | ListVideosEnd;

