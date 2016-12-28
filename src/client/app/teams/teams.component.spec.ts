import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { TeamsModule } from './teams.module';
import { TeamListService } from '../shared/index';

export function main() {
   describe('Teams component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ TeamsModule],
        providers: [
          { provide: TeamListService }
        ]
      });
    });  

    it('teams should load and work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<bla-teams></bla-teams>'
})
class TestComponent {}
