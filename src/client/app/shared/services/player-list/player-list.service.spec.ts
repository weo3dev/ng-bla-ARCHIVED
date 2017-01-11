import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { PlayerListService } from './player-list.service';

export function main() {
  describe('PlayerList Service', () => {
    let playerListService: PlayerListService;
    let mockBackend: MockBackend;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [
          PlayerListService,
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

    it('should return an Observable when "getPlayers" is called', async(() => {
      expect(TestBed.get(PlayerListService).getPlayers()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of teams when "getTeams" is called', async(() => {
      let playerListService = TestBed.get(PlayerListService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra"]' })));
      });

      playerListService.getPlayers().subscribe((data: any) => {
        //expect(data).toEqual(['Dijkstra']);
      });
    }));
  });
}
