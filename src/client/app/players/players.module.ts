import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerListService } from '../shared/player-list/index';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent
  ],
  providers: [
    PlayerListService
  ],
  exports: [PlayersComponent]
})
export class PlayersModule { }

