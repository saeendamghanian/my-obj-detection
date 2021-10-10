import { Component, ElementRef, OnInit } from '@angular/core';
// import * as cocossd from "@tensorflow-models/coco-ssd";
import * as blazeface from "@tensorflow-models/blazeface";

import "@tensorflow/tfjs";
import { serialization } from '@tensorflow/tfjs';

@Component({
  selector: 'app-tf-face-detection',
  templateUrl: './tf-face-detection.component.html',
  styleUrls: ['./tf-face-detection.component.css']
})
export class TfFaceDetectionComponent implements OnInit {
  constraints = {
    video: {
      facingMode: "user",
    },
    audio: true,
  };
  player: any;
  canvas: HTMLCanvasElement;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.initCapture();
    // this.startCamera();
    // this.runCoco();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia(this.constraints).then((stream) => {
      console.log(stream);
      this.element.nativeElement.querySelector("#player").srcObject = stream;
      this.player = this.element.nativeElement.querySelector("#player");
      console.log(this.player);
    });
    this.runCoco();
  }

  initCapture(): void {
    console.log('Init Capture!');
    const constraints = {
      video: {
        facingMode: "environment",
        // width: { min: 1024, ideal: 1280, max: 1920 },
        // height: { min: 576, ideal: 720, max: 1080 },
        width: 640,
        height: 480,
        // focusMode: "auto",
        // focusDistance: { min: 10, ideal: 50, max: 200 }
      },
    };
    // this.isVisibleCapture = true;
    this.player = document.getElementById("player") as HTMLVideoElement;
    // this.canvas = document.getElementById("player-canvas") as HTMLCanvasElement;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.player.srcObject = stream;
        this.player.play();
        this.runCoco();
      })
      .catch((e) => {
        // this.cameraText = 'دوربین یافت نشد';
        console.log("دوربین یافت نشد");
      });
  }

  runCoco = async () => {
    try {
      const model = await blazeface.load();
      console.log(model);
      //  Loop and detect objects
      setInterval(() => {
        this.detect(model);
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };

  detect = async (model) => {
    const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
    const predictions = await model.estimateFaces(this.player, returnTensors);
    // if (obj[0].class === 'person' || obj[0].class === 'book') {
      console.log(predictions);

    // Draw mesh
    const ctx = this.element.nativeElement
      .querySelector("#player-canvas")
      .getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.drawRect(predictions, ctx);
    // }
  };

  drawRect = (predictions, ctx) => {
    predictions.forEach((prediction) => {
      console.log('topLeft ', prediction.topLeft);
      console.log('bottomRight ', prediction.bottomRight);
      const start = prediction.topLeft;
      const end = prediction.bottomRight;
      console.log('start ', start);
      console.log('end ', end);
      const size = [end[0] - start[0], end[1] - start[1]];
      console.log('size ', size);

      // Render a rectangle over each detected face.
      // ctx.fillRect(start[0], start[1], size[0], size[1]);
      
      // Get prediction results
      // const text = prediction["class"];
      
      // if (text === 'book' || text === "person") {
      //   const [x, y, width, height] = prediction["bbox"];
  
        // Set styling
        const color = "yellow";
        ctx.strokeStyle = color;
        ctx.font = "18px Arial";
        ctx.fillStyle = color;
  
        // Draw rectangles and text
        ctx.beginPath();
      //   ctx.fillText(text, x, y);
        ctx.rect(start[0] - start[0], start[1] - start[1], size[0], size[1]);
        ctx.stroke();  
      // }
    });
  };
}
