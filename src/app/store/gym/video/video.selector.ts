import { createSelector } from '@ngrx/store';
import { path } from 'ramda';

import { key, VideoState } from './video.state';

const selectVideoState = state => path([key], state);
export const selectVideoList = createSelector(
  selectVideoState,
  (state: VideoState): any => state.videos
);
