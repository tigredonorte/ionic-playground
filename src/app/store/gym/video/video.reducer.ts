import * as Actions from './video.action';
import { videoInitialState, VideoState } from './video.state';

export function reducer(state = videoInitialState, action: Actions.VideoActions): VideoState {
  try {
    switch (action.type) {
      case Actions.actions.listedVideos: {
        return { ...state, videos: action.videos };
      }

      default:
        return state;
    }
  } catch (e) {
    console.warn(e);
    return state;
  }
}
