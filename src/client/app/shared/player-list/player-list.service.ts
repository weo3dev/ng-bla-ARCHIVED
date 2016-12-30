import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Player } from '../models/player';
//import 'rxjs/add/operator/do';

/**
 * This class provides the PlayerList service with methods to read player names.
 */
@Injectable()
export class PlayerListService {

  private apiUrl: string = '/ng-bla/api/players';

  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getPlayers(): Observable<Player[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .catch(this.handleError);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get(`${this.apiUrl})/${id}`)
    .map(res => res.json())
    .map(this.toPlayer)
    .catch(this.handleError);
  }

  private toPlayer(player: any): Player {
    return {
      id: player.pid,
      name: player.pname,
      totalpins: player.tpins,
      games: player.gms,
      averages: player.avgs,
      handicap: player.hnd
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

