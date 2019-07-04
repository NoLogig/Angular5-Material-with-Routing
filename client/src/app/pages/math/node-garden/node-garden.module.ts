import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NodeGardenComponent } from './node-garden.component';
import { BusinessCardModule } from 'src/app/utils/business-card/business-card.module';

@NgModule({
  imports: [
    CommonModule, BusinessCardModule,
    RouterModule.forRoot([
      {
        path: 'node-garden',
        component: NodeGardenComponent
      }
    ])
  ],
  exports: [ NodeGardenComponent ],
  declarations: [ NodeGardenComponent ]
})
export class NodeGardenModule {}
