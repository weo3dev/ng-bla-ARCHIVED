import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/index';
import { NavigationComponent } from './navigation/index';


import { TeamListService } from './services/team-list/index';
import { PlayerListService } from './services/player-list/index';
import { StandingsListService } from './services/standings-list/index';

import { MensGameHandicapService } from './services/mens-game-handicap/index';
import { MensGameScratchService } from './services/mens-game-scratch/index';
import { MensSeriesHandicapService } from './services/mens-series-handicap/index';
import { MensSeriesScratchService } from './services/mens-series-scratch/index';

import { WomensGameHandicapService } from './services/womens-game-handicap/index';
import { WomensGameScratchService } from './services/womens-game-scratch/index';
import { WomensSeriesHandicapService } from './services/womens-series-handicap/index';
import { WomensSeriesScratchService } from './services/womens-series-scratch/index';

import { TeamSeriesHandicapService } from './services/team-series-handicap/index';
import { TeamSeriesScratchService } from './services/team-series-scratch/index';


import { MaterialModule } from '@angular/material';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule,RouterModule,MaterialModule],
  declarations: [HeaderComponent,NavigationComponent],
  exports: [HeaderComponent,NavigationComponent,CommonModule,FormsModule,RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [StandingsListService,MensGameScratchService]
    };
  }
}

