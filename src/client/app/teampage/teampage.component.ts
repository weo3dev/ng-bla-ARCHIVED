import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TeamListService } from '../shared/index';
import { Team } from '../shared/models/Team';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'bla-teampage',
  templateUrl: 'teampage.component.html',
  styleUrls: ['teampage.component.css']
})
export class TeamPageComponent implements OnInit {

  errorMessage: string;
  team: Team;

  single: any[] = [
    { 'name': 'Germany','value': 8940000 },
    { 'name': 'USA','value': 5000000 },
    { 'name': 'France','value': 7200000 }
  ];

  multi: any[] = [
    { 'name': 'Germany',
      'series': [
        { 'name': '2010', 'value': 7300000 },
        { 'name': '2011', 'value': 8940000 }
      ]
    },

    {
      'name': 'USA',
      'series': [
        { 'name': '2010', 'value': 7870000 },
        { 'name': '2011', 'value': 8270000 }
      ]
    },

    {
      'name': 'France',
      'series': [
        { 'name': '2010', 'value': 5000002 },
        { 'name': '2011', 'value': 5800000 }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor( private route: ActivatedRoute, private router: Router, private service: TeamListService) {

    Object.assign(this, {single:this.single, multi:this.multi});

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getTeam(+params['id']))
      .subscribe((team: Team) => this.team = team);
  }

  onSelect(event:any) {
    console.log(event);
  }

}

