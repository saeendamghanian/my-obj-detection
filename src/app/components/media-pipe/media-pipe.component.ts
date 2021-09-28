import { Component, OnInit } from '@angular/core';

declare var faceTracking: any;
declare var name2: any;

@Component({
  selector: 'app-media-pipe',
  templateUrl: './media-pipe.component.html',
  styleUrls: ['./media-pipe.component.css']
})
export class MediaPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new faceTracking();
    // new name2();
  }
}
