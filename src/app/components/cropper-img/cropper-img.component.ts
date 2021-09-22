import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.css']
})
export class CropperImgComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    console.log(event);
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  console.log(event);
    this.croppedImage = event.base64;
}
imageLoaded(image?: LoadedImage) {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
}
