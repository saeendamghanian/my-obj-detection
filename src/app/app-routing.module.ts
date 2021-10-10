import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { ObjDetectionComponent } from './components/obj-detection/obj-detection.component';
import { TfFaceDetectionComponent } from './components/tf-face-detection/tf-face-detection.component';

const routes: Routes = [
  {path: '', component: ObjDetectionComponent, pathMatch: 'full'},
  {path: 'crop-image', component: CropImageComponent},
  {path: 'cropper-img', component: CropperImgComponent},
  {path: 'ts-face-detection', component: TfFaceDetectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
