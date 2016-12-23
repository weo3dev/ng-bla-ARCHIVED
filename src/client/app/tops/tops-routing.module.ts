import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopsComponent } from './tops.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'tops', component: TopsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TopsRoutingModule { }
