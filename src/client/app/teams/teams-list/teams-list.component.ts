import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../shared/services/teams.service';
import { Team } from '../../shared/models/team';

@Component({
	templateUrl: './app/teams/teams-list/teams-list.component.html'
})
export class TeamsListComponent implements OnInit {
	teams: Team[];
	
	constructor(private service:TeamsService) {}

	ngOnInit() {
		this.service.getTeams()
		.subscribe(teams => this.teams = teams);
	}
}