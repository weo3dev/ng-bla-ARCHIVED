import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../shared/index';

/**
 * This class represents the lazy loaded TeamsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-teams',
  templateUrl: 'teams.component.html',
  styleUrls: ['teams.component.css']
})
export class TeamsComponent implements OnInit {

	errorMessage: string;
	teams: any[] = [];

	constructor(public teamListService: TeamListService) {}


	ngOnInit() {
		this.getTeamList();
	}

	getTeamList() {
		this.teamListService.getTeams()
		.subscribe(
			teams => this.teams = teams,
			error => this.errorMessage = <any>error
		);
	}


}

