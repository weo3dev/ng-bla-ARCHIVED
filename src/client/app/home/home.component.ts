import { Component, OnInit } from '@angular/core';
import { StandingsListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'bla-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    errorMessage: string;
    standings: any[];
    mode = 'Observable';
    constructor (private standingsListService: StandingsListService) {}

    ngOnInit() {
        // this.getCurrentStandings();
    }

  getCurrentStandings() {
    this.standingsListService.getLeagueStandings()
    .subscribe(standings => this.standings = standings, error => this.errorMessage = <any>error);
  }

}

