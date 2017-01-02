import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { HomeModule } from './home.module';

export function main() {
  describe('Home component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [HomeModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let homeDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(homeDOMEl.querySelectorAll('h4')[0].textContent).toEqual('Landing page features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<bla-home></bla-home>'
})
class TestComponent {}
