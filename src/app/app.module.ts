import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { ObjDetectionComponent } from './components/obj-detection/obj-detection.component';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { TfFaceDetectionComponent } from './components/tf-face-detection/tf-face-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    CropImageComponent,
    ObjDetectionComponent,
    CropperImgComponent,
    TfFaceDetectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
