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
var teams_module_1 = require("./teams.module");
function main() {
    describe('Teams component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [teams_module_1.TeamsModule]
            });
        });
        it('should work', testing_1.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                var aboutDOMEl = fixture.debugElement.children[0].nativeElement;
                expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
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
        template: '<sd-teams></sd-teams>'
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtcy90ZWFtcy5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUcrQjtBQUUvQiwrQ0FBNkM7QUFFN0M7SUFDRyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFJM0IsVUFBVSxDQUFDO1lBQ1QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQywwQkFBVyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGFBQWEsRUFDZCxlQUFLLENBQUM7WUFDSixpQkFBTztpQkFDSixpQkFBaUIsRUFBRTtpQkFDbkIsSUFBSSxDQUFDO2dCQUNKLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBRTlELE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXhCRCxvQkF3QkM7QUFNRCxJQUFNLGFBQWE7SUFBbkI7SUFBcUIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBckIsQUFBc0IsSUFBQTtBQUFoQixhQUFhO0lBSmxCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDLENBQUM7O0dBQ0ksYUFBYSxDQUFHIiwiZmlsZSI6ImFwcC90ZWFtcy90ZWFtcy5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgYXN5bmMsXG4gIFRlc3RCZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgVGVhbXNNb2R1bGUgfSBmcm9tICcuL3RlYW1zLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgZGVzY3JpYmUoJ1RlYW1zIGNvbXBvbmVudCcsICgpID0+IHtcbiAgICAvLyBTZXR0aW5nIG1vZHVsZSBmb3IgdGVzdGluZ1xuICAgIC8vIERpc2FibGUgb2xkIGZvcm1zXG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Rlc3RDb21wb25lbnRdLFxuICAgICAgICBpbXBvcnRzOiBbVGVhbXNNb2R1bGVdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWRcbiAgICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBsZXQgYWJvdXRET01FbCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgZXhwZWN0KGFib3V0RE9NRWwucXVlcnlTZWxlY3RvckFsbCgnaDInKVswXS50ZXh0Q29udGVudCkudG9FcXVhbCgnRmVhdHVyZXMnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLXRlYW1zPjwvc2QtdGVhbXM+J1xufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge31cbiJdfQ==
