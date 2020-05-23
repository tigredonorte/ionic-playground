import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {

  constructor(private camera: Camera) {
    Browser.addListener('browserPageLoaded', () => {

    });
  }

  public img = '';
  private cameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  public takePicture = (data) => this.camera.getPicture(this.cameraOptions).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    const base64Image = 'data:image/jpeg;base64,' + imageData;
    this.img = base64Image;
    console.log(base64Image);
  }, (err) => {
  // Handle error
  })

}
