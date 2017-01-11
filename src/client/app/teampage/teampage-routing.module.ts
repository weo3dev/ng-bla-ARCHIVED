import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamPageComponent } from './teampage.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'teams/:id', component: TeamPageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TeamPageRoutingModule { }
