import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { TeamListService } from './team-list.service';

export function main() {
  describe('TeamList Service', () => {
    let teamListService: TeamListService;
    let mockBackend: MockBackend;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [
          TeamListService,
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

    it('should return an Observable when "getTeams" is called', async(() => {
      expect(TestBed.get(TeamListService).getTeams()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of teams when "getTeams" is called', async(() => {
      let teamListService = TestBed.getTeams(TeamListService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra"]' })));
      });

      teamListService.get().subscribe((data: any) => {
        expect(data).toEqual(['Dijkstra']);
      });
    }));
  });
}
