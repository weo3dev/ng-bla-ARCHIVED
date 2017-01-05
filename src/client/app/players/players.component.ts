import { Component, OnInit } from '@angular/core';
import { PlayerListService } from '../shared/index';
import { Player } from '../shared/models/Player';

@Component({
  moduleId: module.id,
  selector: 'bla-players',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css']
})
export class PlayersComponent implements OnInit {

    errorMessage: string;
    players: Player[];
    mode = 'Observable';
    constructor (private playerListService: PlayerListService) {}

    ngOnInit() {
        this.getPlayerList();
    }

  getPlayerList() {
    this.playerListService.getPlayers()
    .subscribe(players => this.players = players, error => this.errorMessage = <any>error);
  }

  showPlayer() {
    console.log('player clicked');
  }
}

