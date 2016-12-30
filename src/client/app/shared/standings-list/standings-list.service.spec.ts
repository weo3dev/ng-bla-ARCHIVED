import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { StandingsListService } from './standings-list.service';

export function main() {
  describe('StandingsList Service', () => {
    let teamListService: StandingsListService;
    let mockBackend: MockBackend;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [
          StandingsListService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });
    });

    it('should return an Observable when "getStandings" is called', async(() => {
      expect(TestBed.get(StandingsListService).getStandings()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of teams when "getStandings" is called', async(() => {
      let standingsListService = TestBed.get(StandingsListService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        //c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra"]' })));
      });


    }));
  });
}
