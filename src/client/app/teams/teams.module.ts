import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamListService } from '../shared/services/team-list/index';

import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule
  ],
  declarations: [TeamsComponent],
  providers: [TeamListService],
  exports: [TeamsComponent]
})
export class TeamsModule { }

