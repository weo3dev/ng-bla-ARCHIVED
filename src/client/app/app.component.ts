import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Config } from './shared/index';
import { MdSidenav, MdDialog, MdDialogConfig, MdCard, MdToolbar } from '@angular/material';


import './operators';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'bla-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  isDarkTheme: boolean = false;

  constructor(private location: Location) {
		//console.log('Environment config', Config);
		// unnecessary
  }

  login() {
    let self = this;
    console.log('login called');
  }

  logout() {
    console.log('logout called');
  }

  loggedIn() {
    return false;
  }

  isActive(path: any) {
    return this.location.path() === path;
  }

}

