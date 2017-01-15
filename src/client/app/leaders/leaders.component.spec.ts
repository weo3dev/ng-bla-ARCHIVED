import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { LeadersModule } from './leaders.module';
import { MensGameScratchService } from '../shared/services/mens-game-scratch/index';
import { WomensGameScratchService } from '../shared/services/womens-game-scratch/index';
import { MensSeriesScratchService } from '../shared/services/mens-series-scratch/index';
import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch/index';


export function main() {
   describe('Leaders component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [LeadersModule],
        providers: [
          MensGameScratchService,
          WomensGameScratchService,
          MensSeriesScratchService,
          WomensSeriesScratchService
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            //let fixture = TestBed.createComponent(TestComponent);
            //let leadersDOMEl = fixture.debugElement.children[0].nativeElement;

              //expect(leadersDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Need to make services for:');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<bla-leaders></bla-leaders>'
})
class TestComponent {}
