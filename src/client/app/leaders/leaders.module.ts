import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders.component';
import { LeadersRoutingModule } from './leaders-routing.module';

import { MensGameScratchService } from '../shared/services/mens-game-scratch/index';
import { MensGameHandicapService } from '../shared/services/mens-game-handicap/index';

import { MensSeriesScratchService } from '../shared/services/mens-series-scratch/index';
import { MensSeriesHandicapService } from '../shared/services/mens-series-handicap/index';

import { WomensGameScratchService } from '../shared/services/womens-game-scratch/index';
import { WomensGameHandicapService } from '../shared/services/womens-game-handicap/index';

import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch/index';
import { WomensSeriesHandicapService } from '../shared/services/womens-series-handicap/index';



@NgModule({
  imports: [CommonModule, LeadersRoutingModule],
  declarations: [LeadersComponent],
  providers: [
    MensGameScratchService,
    MensSeriesScratchService,
    WomensGameScratchService,
    WomensSeriesScratchService,
    MensGameHandicapService,
    MensSeriesHandicapService,
    WomensGameHandicapService,
    WomensSeriesHandicapService
  ],
  exports: [LeadersComponent]
})
export class LeadersModule { }
