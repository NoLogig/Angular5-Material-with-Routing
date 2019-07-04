import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nlg-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})

export class BusinessCardComponent implements OnInit {

  @Input('metas') public metas;
  @Input('nlg-extra') public extra;
  @Input('nlg-subtitle') public subtitle;
  @Input('nlg-title') public title;
  @Input('nlg-links') public links;

  defaultMetas = {
    title: 'Project X',
    subTitle: 'Experimental behaviors:',
    subExtra: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    links: {
      down: 'https://github.com/NoLogig/Node-garden/master',
      git: 'https://github.com/NoLogig/Node-garden',
      live: 'https://heroku.apps.com/NoLogig/Node-garden',
    }
  };

  constructor() { }

  ngOnInit() {
    if (this.metas) {
      this.title = this.metas.title;
      this.subtitle = this.metas.subTitle;
      this.extra = this.metas.subExtra;
      this.links = this.metas.links;
    } else {
      this.title = this.defaultMetas.title;
      this.subtitle = this.defaultMetas.subTitle;
      this.extra = this.defaultMetas.subExtra;
      this.links = this.defaultMetas.links;
    }
  }

}