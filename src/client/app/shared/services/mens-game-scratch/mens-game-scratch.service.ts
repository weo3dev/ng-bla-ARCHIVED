import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Player } from '../../models/Player';

@Injectable()
export class MensGameScratchService {

  private apiUrl: string = '/ng-bla/api/leaders/m/g/n';

  constructor(private http: Http) {}

  getLeaders(): Observable<any[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .map(players => players.map(this.toPlayer))
    .catch(this.handleError);
  }

  private toPlayer(player:any): Player {
    return {
      id: player.pid,
      name: player.pname,
      teamname: player.tname,
      totalpins: player.tpins,
      games: player.gms,
      average: player.avg,
      handicap: player.hnd
    };
  }  

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

