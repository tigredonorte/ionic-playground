import { Injectable } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player';

@Injectable()
export class WatchYoutubeService {

  public openVideo = (id, videoId) => Capacitor.platform === 'web'
      ? this.initializeYoutubePlayerPluginWeb(id, videoId)
      : this.initializeYoutubePlayerPluginNative(videoId)

  private async initializeYoutubePlayerPluginWeb(id, videoId) {
    console.log( `method called with playerId=${id}`);
    const options = {
      playerId: id,
      playerSize: { width: 640, height: 360 },
      videoId,
    };
    const result = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', result);

    (result as any).player.addEventListener(
      'onPlaybackQualityChange',
      (event) => {
        console.log('playback quality is', event);
      }
    );

    (result as any).player.addEventListener('onStateChange', (event) => {
      console.log('state is', event);
    });
  }

  public async destroyYoutubePlayerPluginWeb(id) {
    const result = await YoutubePlayerWeb.destroy(id);
    console.log('destroyYoutubePlayer', result);
  }

  private async initializeYoutubePlayerPluginNative(videoId) {
    const { YoutubePlayer } = Plugins;
    const options = { width: 640, height: 360, videoId };
    const playerReady = await YoutubePlayer.initialize(options);
  }
}
