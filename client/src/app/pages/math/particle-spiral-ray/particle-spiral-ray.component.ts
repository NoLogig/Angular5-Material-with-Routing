import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'nlg-particle-spiral-ray',
  templateUrl: './particle-spiral-ray.component.html',
  styleUrls: ['./particle-spiral-ray.component.scss']
})
export class ParticleSpiratRayComponent implements OnInit {

  items = [];

  metas = {
    title: 'CSS - Particle Ray',
    subTitle: 'Show up div\'s as ray particles:',
    subExtra: 'Math, SCSS',
    links: {
      down: 'https://github.com/NoLogig/Node-garden/master',
      git: 'https://github.com/NoLogig/Node-garden',
      live: 'https://heroku.apps.com/NoLogig/Node-garden',
    }
  };


  constructor() {
    this.items.length = 200;
  }

  ngOnInit() {
  }
  
}
