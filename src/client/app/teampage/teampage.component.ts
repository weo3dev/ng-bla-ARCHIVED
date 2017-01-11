import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TeamListService } from '../shared/index';
import { Team } from '../shared/models/Team';

import 'rxjs/add/operator/switchMap';


/* need to import for HighCharts */

@Component({
  moduleId: module.id,
  selector: 'bla-teampage',
  templateUrl: 'teampage.component.html',
  styleUrls: ['teampage.component.css'],
})
export class TeamPageComponent implements OnInit {

    errorMessage: string;
    team: Team;
    //mode = 'Observable';

    constructor( private route: ActivatedRoute, private router: Router, private service: TeamListService) {}

    ngOnInit() {
      this.route.params
        .switchMap((params: Params) => this.service.getTeam(+params['id']))
        .subscribe((team: Team) => this.team = team);
        console.log("check team: "+this.team);
    }

//     ngOnInit() {
//   // (+) converts string 'id' to a number
//   let id = +this.route.snapshot.params['id'];
//   this.service.getHero(id)
//     .then((hero: Hero) => this.hero = hero);
// }


}

