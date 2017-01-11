import { Component }                        from '@angular/core';
import { async, TestBed }                   from '@angular/core/testing';
import { Observable }                       from 'rxjs/Observable';
import { ActivatedRoute, Router, Params }   from '@angular/router';

import 'rxjs/add/observable/from';


import { TeamPageModule }  from './teampage.module';
import { Team } from '../shared/models/Team';
import { TeamListService } from '../shared/team-list/team-list.service';
import { HttpModule }      from '@angular/http';

export function main() {
  describe('Team Page component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ TeamPageModule, HttpModule ],
        providers: [
          { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': 1 }]) } },
          { provide: Router, useValue: { 'params': Observable.from([{ 'id': 1 }]) } },
          { provide: TeamListService, useValue: new MockNameListService() }
        ]
      });
    });


    it('team page should load and work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let teampageDOMEl = fixture.debugElement.children[0].nativeElement;

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
  template: '<bla-teampage></bla-teampage>'
})
class TestComponent {}

