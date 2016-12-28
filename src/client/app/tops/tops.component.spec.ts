import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { TopsModule } from './tops.module';

export function main() {
   describe('Tops component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [TopsModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let topsDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(topsDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Top ten listings for');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-tops></sd-tops>'
})
class TestComponent {}
