import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [CommonModule, TeamsRoutingModule],
  declarations: [TeamsComponent],
  exports: [TeamsComponent]
})
export class TeamsModule { }
