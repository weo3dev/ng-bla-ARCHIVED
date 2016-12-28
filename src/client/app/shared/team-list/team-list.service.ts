import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team';
import 'rxjs/add/operator/do';  // for debugging


/**
 * This class provides the TeamList service with methods to read team names.
 */
@Injectable()
export class TeamListService {

  private teamsUrl: string = 'http://www.weo3.com/ng-bla/php/api.php/bnp_teams?transform=true';

  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getTeams(): Observable<Team[]> {
    return this.http.get(this.teamsUrl)
    .map(res => res.json().bnp_teams)
    //.do(data => console.log('server data:', data))  // debug    
    .catch(this.handleError);
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

