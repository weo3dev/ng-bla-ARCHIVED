"use strict";
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var home_component_1 = require("./home.component");
function main() {
    describe('Home component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [forms_1.FormsModule],
                declarations: [home_component_1.HomeComponent]
            });
        });
        it('should work', testing_1.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
                var homeInstance = fixture.debugElement.componentInstance;
                var homeDOMEl = fixture.debugElement.nativeElement;
                expect(homeDOMEl.querySelectorAll('h3')[0].textContent).toEqual('Landing Page');
            });
        }));
    });
}
exports.main = main;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUE2QztBQUM3QyxpREFHZ0M7QUFJaEMsbURBQWlEO0FBRWpEO0lBQ0UsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBRXpCLFVBQVUsQ0FBQztZQUVULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLG1CQUFXLENBQUM7Z0JBQ3RCLFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsYUFBYSxFQUNkLGVBQUssQ0FBQztZQUNKLGlCQUFPO2lCQUNKLGlCQUFpQixFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsOEJBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO2dCQUMxRCxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEYsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBekJELG9CQXlCQyIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBhc3luYyxcbiAgVGVzdEJlZFxuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdIb21lIGNvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuXG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XVxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWRcbiAgICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoSG9tZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBsZXQgaG9tZUluc3RhbmNlID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgICAgICBsZXQgaG9tZURPTUVsID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGV4cGVjdChob21lRE9NRWwucXVlcnlTZWxlY3RvckFsbCgnaDMnKVswXS50ZXh0Q29udGVudCkudG9FcXVhbCgnTGFuZGluZyBQYWdlJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pKTtcbiAgfSk7XG59XG4iXX0=
