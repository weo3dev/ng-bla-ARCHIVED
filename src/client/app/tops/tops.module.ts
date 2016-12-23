import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopsComponent } from './tops.component';
import { TopsRoutingModule } from './tops-routing.module';

@NgModule({
  imports: [CommonModule, TopsRoutingModule],
  declarations: [TopsComponent],
  exports: [TopsComponent]
})
export class TopsModule { }
