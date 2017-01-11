import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { async,TestBed }    from '@angular/core/testing';
import { Observable }       from 'rxjs/Observable';

import { TeamsModule }      from './teams.module';
import { TeamListService }  from '../shared/index';
import { HttpModule }       from '@angular/http';

export function main() {
   describe('Teams component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ TeamsModule, HttpModule ],
        providers: [
          { provide: TeamListService, useValue: new MockNameListService() },
          { provide: Router, useValue: { 'params': Observable.from([{ 'id': 1 }]) } }
        ]
      });
    });

    it('teams should load and work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let teamsDOMEl = fixture.debugElement.children[0].nativeElement;

              //expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}


@Component({
  selector: 'test-cmp',
  template: '<bla-teams></bla-teams>'
})
class TestComponent {}


