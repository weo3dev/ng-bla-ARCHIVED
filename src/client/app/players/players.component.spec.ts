import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { PlayersModule } from './players.module';
import { PlayerListService } from '../shared/index';

export function main() {
   describe('Players component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ PlayersModule],
        providers: [
          { provide: PlayerListService }
        ]
      });
    });

    it('players should load and work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let playersDOMEl = fixture.debugElement.children[0].nativeElement;

              //expect(playersDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Players');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<bla-players></bla-players>'
})
class TestComponent {}
