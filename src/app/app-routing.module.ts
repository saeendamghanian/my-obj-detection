import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { MediaPipeComponent } from './components/media-pipe/media-pipe.component';
import { ObjDetectionComponent } from './components/obj-detection/obj-detection.component';

const routes: Routes = [
  {path: '', component: ObjDetectionComponent, pathMatch: 'full'},
  {path: 'crop-image', component: CropImageComponent},
  {path: 'cropper-img', component: CropperImgComponent},
  {path: 'media-pipe', component: MediaPipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
