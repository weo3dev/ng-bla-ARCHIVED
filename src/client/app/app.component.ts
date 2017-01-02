import { Component } from '@angular/core';
import { Config } from './shared/index';
import { MDLDirective } from './mdl.directive';

import './operators';

declare var componentHandler: any;

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'bla-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    //console.log('Environment config', Config);
    // unnecessary
  }

}
