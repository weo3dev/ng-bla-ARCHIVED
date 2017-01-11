import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders.component';
import { LeadersRoutingModule } from './leaders-routing.module';

@NgModule({
  imports: [CommonModule, LeadersRoutingModule],
  declarations: [LeadersComponent],
  exports: [LeadersComponent]
})
export class LeadersModule { }
