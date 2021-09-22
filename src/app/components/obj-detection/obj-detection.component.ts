import { Component, ElementRef, OnInit } from '@angular/core';
import * as cocossd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

@Component({
  selector: 'app-obj-detection',
  templateUrl: './obj-detection.component.html',
  styleUrls: ['./obj-detection.component.css']
})
export class ObjDetectionComponent implements OnInit {
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
      const net = await cocossd.load();
      //  Loop and detect objects
      setInterval(() => {
        this.detect(net);
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };

  detect = async (net) => {
    const obj = await net.detect(this.player);
    // if (obj[0].class === 'person' || obj[0].class === 'book') {
      console.log(obj);

    // Draw mesh
    const ctx = this.element.nativeElement
      .querySelector("#player-canvas")
      .getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.drawRect(obj, ctx);
    // }
  };

  drawRect = (detections, ctx) => {
    detections.forEach((prediction) => {
      // Get prediction results
      const text = prediction["class"];
      
      if (text === 'book' || text === "person") {
        const [x, y, width, height] = prediction["bbox"];
  
        // Set styling
        const color = "yellow";
        ctx.strokeStyle = color;
        ctx.font = "18px Arial";
        ctx.fillStyle = color;
  
        // Draw rectangles and text
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(6*x, y-y/2, width / 7, height / 7);
        ctx.stroke();  
      }
    });
  };
}
