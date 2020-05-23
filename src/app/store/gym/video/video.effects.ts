import { Injectable } from '@angular/core';
import { ApiService } from '@app/store/utils/api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as actions from './video.action';
import { Video } from './video.state';

@Injectable()
export class VideoEffects {

  @Effect() public listVideos = this.actions$.pipe(
    ofType(actions.actions.listVideos),
    mergeMap(() => this.apiService.get(`video`)),
    map((videos: Video[]) => new actions.ListVideosEnd(videos))
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
