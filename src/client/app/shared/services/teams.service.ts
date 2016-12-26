import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from '../models/team';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TeamsService {

	private teamsUrl: string = 'http://www.weo3.com/ng-bla/php/api.php/bnp_teams?transform=true';
	
	constructor(private http: Http) {}

	/* get teams */
	getUsers(): Observable<Teams[]> {
		return this.http.get(this.teamsUrl)
		.map(res => res.json().data)
		.catch(this.handleError);
	}

	/* handle all errors */
	private handleError(err=<any>) {
      	let errMessage: string;
      	if(err instanceof Response) {
      		let body = err.json() || '';
      		let error = body.error || JSON.stringify(body);
      		errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
      	} else {
      		errMessage = err.message ? err.message : err.toString();
      	}
      	
      	return Observable.throw(errMessage);		
	}


}