import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
      	path: 'teams',
      	component: TeamsComponent,
      	children: [
      		{
      			path: '',
      			component: TeamsListComponent
      		}
      	]
      }
    ])
  ],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
