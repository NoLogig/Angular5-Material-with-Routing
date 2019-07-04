import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanvasInitComponent } from './initializer.component';
import { BusinessCardModule } from '../../business-card/business-card.module';


@NgModule({

  declarations: [
    CanvasInitComponent
  ],
  exports: [
  ],
  imports: [
    BusinessCardModule,
    RouterModule.forRoot([
      {
        path: 'canvas-init',
        component: CanvasInitComponent
      }
    ])
  ]
})
export class CanvasModule { }
