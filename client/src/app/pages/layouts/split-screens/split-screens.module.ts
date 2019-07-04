import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatSliderModule } from '@angular/material';

import { SplitScreenSkewedComponent } from './skewed/split-screen-skewed.component';
import { RouterModule } from '@angular/router';
import { BusinessCardModule } from 'src/app/utils/business-card/business-card.module';

@NgModule({
  imports: [
    CommonModule, BusinessCardModule,
    FormsModule,
    MatCardModule, MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: SplitScreenSkewedComponent
      }
    ])
  ],
  exports: [ SplitScreenSkewedComponent ],
  declarations: [ SplitScreenSkewedComponent ]
})
export class SplitScreensModule {}
