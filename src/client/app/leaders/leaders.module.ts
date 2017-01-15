import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders.component';
import { LeadersRoutingModule } from './leaders-routing.module';

import { MensGameScratchService } from '../shared/services/mens-game-scratch/index';
import { MensSeriesScratchService } from '../shared/services/mens-series-scratch/index';
import { WomensGameScratchService } from '../shared/services/womens-game-scratch/index';
import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch/index';

@NgModule({
  imports: [CommonModule, LeadersRoutingModule],
  declarations: [LeadersComponent],
  providers: [
    MensGameScratchService,
    MensSeriesScratchService,
    WomensGameScratchService,
    WomensSeriesScratchService
  ],
  exports: [LeadersComponent]
})
export class LeadersModule { }
