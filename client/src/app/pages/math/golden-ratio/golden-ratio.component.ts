import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nlg-golden-ratio',
  templateUrl: './golden-ratio.component.html',
  styleUrls: ['./golden-ratio.component.scss'],
  providers: [ ]
})
export class GoldenRatioComponent implements OnInit {

  public scaleView = 1;

  metas = {
    title: 'CSS - Golden Ratio Sequence',
    subTitle: 'Golden Rectangles & Spirals:',
    subExtra: 'Show up div\'s in golden ratio scalar, Math, SCSS, Design',
    links: {
      down: 'https://github.com/NoLogig/Node-garden/master',
      git: 'https://github.com/NoLogig/Node-garden',
      live: 'https://heroku.apps.com/NoLogig/Node-garden',
    }
  };

  constructor() { }

  ngOnInit() { }

}
