"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var tops_module_1 = require("./tops.module");
function main() {
    describe('Tops component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [tops_module_1.TopsModule]
            });
        });
        it('should work', testing_1.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                var aboutDOMEl = fixture.debugElement.children[0].nativeElement;
                expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Top ten listings for');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-cmp',
        template: '<sd-tops></sd-tops>'
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b3BzL3RvcHMuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxpREFHK0I7QUFFL0IsNkNBQTJDO0FBRTNDO0lBQ0csUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBSTFCLFVBQVUsQ0FBQztZQUNULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsd0JBQVUsQ0FBQzthQUN0QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxhQUFhLEVBQ2QsZUFBSyxDQUFDO1lBQ0osaUJBQU87aUJBQ0osaUJBQWlCLEVBQUU7aUJBQ25CLElBQUksQ0FBQztnQkFDSixJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUU5RCxNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzdGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXhCRCxvQkF3QkM7QUFNRCxJQUFNLGFBQWE7SUFBbkI7SUFBcUIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBckIsQUFBc0IsSUFBQTtBQUFoQixhQUFhO0lBSmxCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUscUJBQXFCO0tBQ2hDLENBQUM7O0dBQ0ksYUFBYSxDQUFHIiwiZmlsZSI6ImFwcC90b3BzL3RvcHMuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGFzeW5jLFxuICBUZXN0QmVkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IFRvcHNNb2R1bGUgfSBmcm9tICcuL3RvcHMubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICBkZXNjcmliZSgnVG9wcyBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgLy8gU2V0dGluZyBtb2R1bGUgZm9yIHRlc3RpbmdcbiAgICAvLyBEaXNhYmxlIG9sZCBmb3Jtc1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBkZWNsYXJhdGlvbnM6IFtUZXN0Q29tcG9uZW50XSxcbiAgICAgICAgaW1wb3J0czogW1RvcHNNb2R1bGVdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWRcbiAgICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBsZXQgYWJvdXRET01FbCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgZXhwZWN0KGFib3V0RE9NRWwucXVlcnlTZWxlY3RvckFsbCgnaDInKVswXS50ZXh0Q29udGVudCkudG9FcXVhbCgnVG9wIHRlbiBsaXN0aW5ncyBmb3InKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLXRvcHM+PC9zZC10b3BzPidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHt9XG4iXX0=
