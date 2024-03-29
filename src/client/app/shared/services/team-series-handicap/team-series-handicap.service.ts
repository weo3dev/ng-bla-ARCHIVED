import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamSeriesHandicapService {

  private apiUrl: string = '/ng-bla/api/leaders/t/s/y';

  constructor(private http: Http) {}

  getLeaders(): Observable<any[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


