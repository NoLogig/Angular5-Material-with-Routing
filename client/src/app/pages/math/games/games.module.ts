import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { CubeCssComponent } from '../../layouts/css/cube-css/cube-css.component';
import { CheckboardComponent } from './color-board/checkboard.component';
import { NumberShazamComponent } from './number-shazam/number-shazam.component';

import {
  MatCardModule, MatSliderModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule
} from '@angular/material';
import { BusinessCardModule } from 'src/app/utils/business-card/business-card.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, BusinessCardModule,
    MatCardModule, MatSliderModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule, MatSlideToggleModule,
    RouterModule.forRoot([
      {
        path: 'numberzam',
        component: NumberShazamComponent
      },
      {
        path: 'checkboard',
        component: CheckboardComponent
      },
      {
        path: 'cube',
        component: CubeCssComponent
      },
    ])
  ],
  exports: [ CheckboardComponent, NumberShazamComponent, CubeCssComponent ],
  declarations: [ CheckboardComponent, NumberShazamComponent, CubeCssComponent ]
})
export class GamesModule {}
