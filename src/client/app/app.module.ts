import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { TeamsModule } from './teams/teams.module';
import { TopsModule } from './tops/tops.module';
import { PlayersModule } from './players/players.module';
import { SharedModule } from './shared/shared.module';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
  BrowserModule,
  HttpModule,
  AppRoutingModule,
  AboutModule,
  HomeModule,
  TeamsModule,
  TopsModule,
  PlayersModule,
  SharedModule.forRoot(),
  MaterialModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
