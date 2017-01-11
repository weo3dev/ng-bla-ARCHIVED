import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from '../../models/Team';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * This class provides the TeamList service with methods to read team names.
 */
@Injectable()
export class TeamListService {

  private apiUrl: string = '/ng-bla/api/teams';

  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getTeams(): Observable<Team[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .map(teams => teams.map(this.toTeam))
    .catch(this.handleError);
  }

    /* grab a single team */
  getTeam(id: any): Observable<Team> {
    return this.http.get(`${this.apiUrl}/${id}`)
    .map(res => res.json())
    .map(team => team.map(this.toTeam))
    .catch(this.handleError);
  }

  // getTeamAlt(id: number): Promise<Team> {
  // return this.getTeams()
  //            .then(teams => teams.find(team => team.id === id));
  // }

  /* reformat the data to fit Team model */
  private toTeam(team:any): Team {
    return {
      id : team.tid,
      name : team.tname
    };
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

