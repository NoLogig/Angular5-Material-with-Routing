import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IMediaFile } from '../gn8-player/gn8-player.component';

@Component({
  selector: 'nlg-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.scss']
})
export class FrequencyComponent implements OnInit {

  @ViewChild('base', { static: true }) baseCanvas: ElementRef;
  @ViewChild('player', { static: true }) playerRef: ElementRef;

  metas = {
    title: 'Audio - Decibel Meter',
    subTitle: 'Use Web-Audio-API To Display Current Decibel:',
    subExtra: 'Math, Audio, FileReader',
    links: {
      down: 'https://github.com/NoLogig/Node-garden/master',
      git: 'https://github.com/NoLogig/Node-garden',
      live: 'https://heroku.apps.com/NoLogig/Node-garden',
    }
  };


  mediaName: string;

  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  audioCtx: AudioContext;
  analyser: AnalyserNode;

  mediaPlayer: HTMLAudioElement | HTMLVideoElement;
  audio: HTMLAudioElement;
  bufferLength: number;
  dataArray: Uint8Array;
  url = './assets/Tessellate_Alt-J.mp3';

  file: FileList;
  fileReader: HTMLInputElement;
  selectList: IMediaFile[] = [];

  constructor(public ngZone: NgZone) {
    // this.file = document.getElementById("file-input") as HTMLInputElement;
    this.audio = new Audio(this.url);
  }

  /* ########################### */
  /* ####  Livecycle Hooks  #### */
  /* ########################### */

  ngOnInit() {

    this.initCanvasBase();
    this.initMultimedia();
    this.initAudioContext();
  }

  /* ########################### */
  /* ####   Audio Context   #### */
  /* ########################### */

  initAudioContext() {

    this.audioCtx = new AudioContext;
    this.analyser = this.audioCtx.createAnalyser();

    // this.audioSetup();

    this.analyser.fftSize = 2048;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

    // this.analyser.getByteTimeDomainData(this.dataArray);

  }

  audioSetup() {
    // source = this.audioCtx.createMediaStreamSource(stream);
    // source.connect(analyser);
    // this.analyser.connect(distortion);
    // distortion.connect(audioCtx.destination);
  }

  draw() {

    // let drawVisual = requestAnimationFrame(this.draw);
    this.analyser.getByteTimeDomainData(this.dataArray);

    this.ctx.fillStyle = 'rgb(200, 200, 200)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'rgb(0, 0, 0)';
    this.ctx.beginPath();

    let sliceWidth = this.width * 1.0 / this.bufferLength;
    let x = 0;

    for (let i = 0; i < this.bufferLength; i++) {

      var v = this.dataArray[i] / 128.0;
      var y = v * this.height / 2;

      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.ctx.lineTo(this.c.width, this.c.height / 2);
    this.ctx.stroke();

  }

  decibelMeter() {

    let ctx = new AudioContext(),

        url = './assets/Tessellate_Alt-J.mp3',
        audio = new Audio(url),

        // 2048 sample buffer, 1 channel in, 1 channel out  
        processor = ctx.createScriptProcessor(2048, 1, 1),
        
        meter = document.querySelector('.decibelMeter') as HTMLDivElement,
        source;

    audio.crossOrigin = 'anonymous'

    audio.addEventListener('canplaythrough', function () {
      source = ctx.createMediaElementSource(audio)
      source.connect(processor)
      source.connect(ctx.destination)
      processor.connect(ctx.destination)
      audio.play()
    }, false);

    // loop through PCM data and calculate average
    // volume for a given 2048 sample buffer
    processor.onaudioprocess = function (evt) {
      let input = evt.inputBuffer.getChannelData(0),
        len = input.length,
        total = 0,
        i = 0,
        rms;
      while (i < len) total += Math.abs(input[i++])
      rms = Math.sqrt(total / len)
      // if (rms > 0.30) audio.volume -= 0.3;
      meter.innerText = rms;
      meter.style.width = (rms * 100) + '%'
    }

  }

  synthesizer(inputFile: HTMLInputElement) {

    this.fileReader = inputFile;
    let files = this.fileReader.files; // FileList containing File objects selected by the user (DOM File API)
    console.log('FILES[0]: ', files[0])
    this.audio.src = URL.createObjectURL(files[0]); // Creates a DOMString containing the specified File object

    ///////// <CANVAS> INITIALIZATION //////////
    // this.c.width = window.innerWidth;
    // this.c.height = window.innerHeight;
    // const ctx = this.c.getContext("2d");
    ///////////////////////////////////////////


    const context = new AudioContext(); // (Interface) Audio-processing graph
    let src = context.createMediaElementSource(this.audio); // Give the audio context an audio source,
    // to which can then be played and manipulated
    const analyser = context.createAnalyser(); // Create an analyser for the audio context

    src.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context
    // Sends sound to the speakers or headphones


    /////////////// ANALYSER FFTSIZE ////////////////////////
    // analyser.fftSize = 32;
    // analyser.fftSize = 64;
    // analyser.fftSize = 128;
    // analyser.fftSize = 256;
    // analyser.fftSize = 512;
    // analyser.fftSize = 1024;
    // analyser.fftSize = 2048;
    // analyser.fftSize = 4096;
    // analyser.fftSize = 8192;
    analyser.fftSize = 16384;
    // analyser.fftSize = 32768;

    // (FFT) is an algorithm that samples a signal over a period of time
    // and divides it into its frequency components (single sinusoidal oscillations).
    // It separates the mixed signals and shows what frequency is a violent vibration.

    // (FFTSize) represents the window size in samples that is used when performing a FFT

    // Lower the size, the less bars (but wider in size)
    ///////////////////////////////////////////////////////////


    const bufferLength = analyser.frequencyBinCount; // (read-only property)
    // Unsigned integer, half of fftSize (so in this case, bufferLength = 8192)
    // Equates to number of data values you have to play with for the visualization

    // The FFT size defines the number of bins used for dividing the window into equal strips, or bins.
    // Hence, a bin is a spectrum sample, and defines the frequency resolution of the window.

    const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
    // At this point dataArray is an array with length of bufferLength but no values
    console.log('DATA-ARRAY: ', dataArray) // Check out this array of frequency values!

    const WIDTH = this.c.width;
    const HEIGHT = this.c.height;
    console.log('WIDTH: ', this.width, 'HEIGHT: ', this.height)

    const barWidth = (this.width / bufferLength) * 13;
    console.log('BARWIDTH: ', barWidth)

    console.log('TOTAL WIDTH: ', (117 * 10) + (118 * barWidth)) // (total space between bars)+(total width of all bars)

    let barHeight;
    let x = 0;

     let renderFrame = ( ) => {
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      x = 0;

      analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray
      // Results in a normalized array of values between 0 and 255
      // Before this step, dataArray's values are all zeros (but with length of 8192)

      this.ctx.fillStyle = "rgba(0,0,0,0.2)"; // Clears canvas before rendering bars (black with opacity 0.2)
      this.ctx.fillRect(0, 0, WIDTH, this.height); // Fade effect, set opacity to 1 for sharper rendering of bars

      let r, g, b;
      let bars = 118 // Set total number of bars you want per frame

      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2.5);

        if (dataArray[i] > 210) { // pink
          r = 250
          g = 0
          b = 255
        } else if (dataArray[i] > 200) { // yellow
          r = 250
          g = 255
          b = 0
        } else if (dataArray[i] > 190) { // yellow/green
          r = 204
          g = 255
          b = 0
        } else if (dataArray[i] > 180) { // blue/green
          r = 0
          g = 219
          b = 131
        } else { // light blue
          r = 0
          g = 199
          b = 255
        }

        // if (i === 0){
        //   console.log(dataArray[i])
        // }

        this.ctx.fillStyle = `rgb(${r},${g},${b})`;
        this.ctx.fillRect(x, (this.height - barHeight), barWidth, barHeight);
        // (x, y, i, j)
        // (x, y) Represents start point
        // (i, j) Represents end point

        x += barWidth + 10 // Gives 10px space between each bar
      }
    }

    this.audio.play();
    renderFrame();
  };

  /* ########################### */
  /* ####       Media       #### */
  /* ########################### */

  initMultimedia() {

    this.mediaPlayer = this.playerRef.nativeElement;
  }

  setMediaURL(player: HTMLVideoElement | HTMLAudioElement, url: string): void {

    player.src = url;
  }

  /* ########################### */
  /* ####    File Reader    #### */
  /* ########################### */

  selectLocalMedias(fileList: FileList): IMediaFile[] {

    let tmpList: IMediaFile[] = [];
    let URL = window.URL;

    if (fileList[0]) {

      for (let i = 0, limit = fileList.length; i < limit; i++) {

        let media = fileList[i] as IMediaFile;
        media.url = URL.createObjectURL(fileList[i]);
        // media.saveUrl = this.domSanitizer.bypassSecurityTrustUrl(media.url);

        tmpList.push(media);
      }
      return tmpList;
    }
  }

  /* ########################### */
  /* ####       Canvas      #### */
  /* ########################### */

  initCanvasBase = (): void => {

    this.c = this.baseCanvas.nativeElement;
    this.ctx = this.c.getContext('2d');

    this.width = this.c.width = window.innerWidth;
    this.height = this.c.height = window.innerHeight;

    this.ctx.strokeStyle = 'rgba(0, 255, 255, .9)';
    this.ctx.fillStyle = 'rgba(0, 0, 0, .8)';

  }

  canvasAnimate = (): void => {
    // Prevent memory leak
    this.ngZone.runOutsideAngular(this.render);
  }

  render = (): void => {

    // this.ctx.clearRect(0, 0, this.width, this.height);

    // updates
    // this.draw();

    requestAnimationFrame(this.render);

  }

}
