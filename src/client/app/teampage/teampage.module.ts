import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './teampage.component';
import { TeamPageRoutingModule } from './teampage-routing.module';
import { TeamListService } from '../shared/services/team-list/index';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TeamPageRoutingModule,
    SharedModule
  ],
  declarations: [TeamPageComponent],
  exports: [TeamPageComponent]
})
export class TeamPageModule { }
