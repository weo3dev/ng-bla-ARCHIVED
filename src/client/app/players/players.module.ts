import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';

import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [PlayersComponent],
  exports: [PlayersComponent]
})
export class PlayersModule { }
