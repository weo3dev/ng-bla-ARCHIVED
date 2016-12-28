import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { HomeComponent } from './home.component';

export function main() {
  describe('Home component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [],
        declarations: [HomeComponent]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(HomeComponent);
            let homeInstance = fixture.debugElement.componentInstance;
            let homeDOMEl = fixture.debugElement.nativeElement;
            expect(homeDOMEl.querySelectorAll('h3')[0].textContent).toEqual('Landing Page');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<bla-home></bla-home>'
})
class TestComponent {}

