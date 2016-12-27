import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';  // for debugging

import { Team } from '../models/team';

/**
 * This class provides the TeamList service with methods to read team names.
 */
@Injectable()
export class TeamListService {

  private teamsUrl: string = 'http://www.weo3.com/ng-bla/php/api.php/bnp_teams?transform=true';
  private team: any;

  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getTeams(): Observable<Team[]> {
    return this.http.get(this.teamsUrl)
    .map((res: Response) => res.json().data)
    .map(teams => teams.map(this.toTeam))
    .catch(this.handleError);
  }

  // reformat team data 
  private toTeam(team): Team {
    return {
      id: team.tid,
      name: team.tname,  
    }
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

