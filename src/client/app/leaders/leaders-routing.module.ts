import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeadersComponent } from './leaders.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'leaders', component: LeadersComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LeadersRoutingModule { }
