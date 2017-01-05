import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home.component';
import { StandingsListService } from '../shared/index';

export function main() {
  describe('Home component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        providers: [
          { provide: StandingsListService, useValue: new MockNameListService() }
        ]
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
            let mockNameListService = <MockNameListService>fixture.debugElement.injector.get(StandingsListService);
            // let standingsListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            // mockNameListService.returnValue = ['1', '2', '3'];

            // fixture.detectChanges();

            // expect(homeInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            // expect(standingsListServiceSpy.calls.count()).toBe(1);

            // homeInstance.newName = 'Minko';
            // homeInstance.addName();

            // fixture.detectChanges();


              // expect(homeDOMEl.querySelectorAll('h4')[0].textContent).toEqual('Landing page features');
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

