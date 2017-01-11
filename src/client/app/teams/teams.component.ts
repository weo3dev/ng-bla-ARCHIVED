import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamListService } from '../shared/index';
import { Team } from '../shared/models/Team';

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

    constructor (private teamListService: TeamListService, private router:Router) {}

    ngOnInit() {
        this.getTeamList();
    }

    getTeamList() {
        this.teamListService.getTeams()
        .subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
    }

    viewTeamPage(id: number): void {
      this.router.navigate(['/teams'], id);
    }

}

