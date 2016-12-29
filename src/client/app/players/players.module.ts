import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule
  ],
  declarations: [
    PlayersComponent
  ],
  exports: [PlayersComponent]
})
export class PlayersModule { }
