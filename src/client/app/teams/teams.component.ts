import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../shared/index';
import { Team } from '../shared/models/team';

/**
 * This class represents the lazy loaded TeamsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'bla-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css']
})
export class TeamsComponent implements OnInit {

    errorMessage: string;
    teams: Team[];
    mode = 'Observable';
    constructor (private teamListService: TeamListService) {}

    ngOnInit() {
        this.getTeamList();
    }

  getTeamList() {
    this.teamListService.getTeams()
    .subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
  }
}

