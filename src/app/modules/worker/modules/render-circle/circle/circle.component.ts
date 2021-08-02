import { ViewChild, Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements AfterViewInit {
  title = 'NgWebWorker';

  static IntervalHandle = null;

  static ctx: CanvasRenderingContext2D;
  GRID_LINES : number = 20;
  lineInterval : number = 0;
  gridColor : string = "lightgreen";
  static CANVAS_SIZE : number = 400;

  @ViewChild('mainCanvas', {static: false})
  mainCanvas: ElementRef;
  
  constructor() { 
    console.log("ctor complete");
   }

   ngAfterViewInit(): void {
    CircleComponent.ctx =   (<HTMLCanvasElement> this.mainCanvas.nativeElement).getContext('2d');
    this.initApp();
    this.initBoard();
    this.drawGrid();
    this.toggleTimer();
  }

  initApp()
  {
    CircleComponent.ctx.canvas.height  = CircleComponent.CANVAS_SIZE;
    CircleComponent.ctx.canvas.width = CircleComponent.ctx.canvas.height;
  }
 
  initBoard(){
    console.log("initBoard...");
    this.lineInterval = 
      Math.floor(CircleComponent.ctx.canvas.width / this.GRID_LINES);
    console.log(this.lineInterval);
  }
  
  drawGrid(){
    console.log("drawGrid...");
    CircleComponent.ctx.globalAlpha = 1;
    // fill the canvas background with white
    CircleComponent.ctx.fillStyle="white";
    CircleComponent.ctx.fillRect(0,0,CircleComponent.ctx.canvas.height,CircleComponent.ctx.canvas.width);

    for (var lineCount=0;lineCount<this.GRID_LINES;lineCount++)
    {
      CircleComponent.ctx.fillStyle=this.gridColor;
      CircleComponent.ctx.fillRect(0,this.lineInterval*(lineCount+1),CircleComponent.ctx.canvas.width,2);
      CircleComponent.ctx.fillRect(this.lineInterval*(lineCount+1),0,2,CircleComponent.ctx.canvas.width);
    }
  }
  
  toggleTimer(){
    if (CircleComponent.IntervalHandle === null){
      CircleComponent.IntervalHandle = setInterval(this.drawRandomCircles,100);
    }
    else{
      clearInterval(CircleComponent.IntervalHandle);
      CircleComponent.IntervalHandle = null;
      this.drawGrid();
    }
  }

  static generateRandomPoints(){
    var X = Math.floor(Math.random() * CircleComponent.CANVAS_SIZE); // gen number 0 to 649
    var Y = Math.floor(Math.random() * CircleComponent.CANVAS_SIZE); // gen number 0 to 649
     return {x:X,y:Y};
  }

  drawRandomCircles(){
    var p = CircleComponent.generateRandomPoints();
    CircleComponent.drawPoint(p);
  }

  static drawPoint(currentPoint){
    var RADIUS : number = 10;
    
    var r : number = Math.floor(Math.random() * 256);
	  var g : number = Math.floor(Math.random() * 256);
    var b : number = Math.floor(Math.random() * 256);
    var rgbComposite : string = 'rgb(' + r + ',' + g + ',' + b + ')';
    CircleComponent.ctx.strokeStyle = rgbComposite;
    CircleComponent.ctx.fillStyle = rgbComposite;
    CircleComponent.ctx.beginPath();
    CircleComponent.ctx.arc(currentPoint.x, currentPoint.y,RADIUS,0,2*Math.PI);
    // allPoints.push(currentPoint);
    CircleComponent.ctx.stroke();
    CircleComponent.ctx.fill();
  }
}
