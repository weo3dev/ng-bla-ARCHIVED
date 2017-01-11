import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { LeadersModule } from './leaders.module';

export function main() {
   describe('Tops component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [LeadersModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let topsDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(topsDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Need to make components for:');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-leaders></sd-leaders>'
})
class TestComponent {}
