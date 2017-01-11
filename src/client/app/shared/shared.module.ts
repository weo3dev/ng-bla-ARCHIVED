import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/index';
import { NavigationComponent } from './navigation/index';
import { TeamListService } from './team-list/index';
import { PlayerListService } from './player-list/index';
import { StandingsListService } from './standings-list/index';

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
      providers: [TeamListService,PlayerListService,StandingsListService]
    };
  }
}

