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
var forms_1 = require("@angular/forms");
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var testing_2 = require("@angular/core/testing");
var testing_3 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var teams_component_1 = require("./teams/teams.component");
var tops_component_1 = require("./tops/tops.component");
var toolbar_component_1 = require("./shared/toolbar/toolbar.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
function main() {
    describe('App component', function () {
        var config = [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: 'teams', component: teams_component_1.TeamsComponent },
            { path: 'tops', component: tops_component_1.TopsComponent }
        ];
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [forms_1.FormsModule, testing_3.RouterTestingModule.withRoutes(config)],
                declarations: [
                    TestComponent,
                    toolbar_component_1.ToolbarComponent,
                    navbar_component_1.NavbarComponent,
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent,
                    about_component_1.AboutComponent,
                    teams_component_1.TeamsComponent,
                    tops_component_1.TopsComponent
                ],
                providers: [
                    { provide: common_1.APP_BASE_HREF, useValue: '/' }
                ]
            });
        });
        it('should build without a problem', testing_2.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                var compiled = fixture.nativeElement;
                expect(compiled).toBeTruthy();
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
        template: '<sd-app></sd-app>'
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBNkM7QUFDN0MsaURBQWdEO0FBQ2hELDBDQUFnRDtBQUVoRCxpREFFK0I7QUFJL0IsbURBRWlDO0FBQ2pDLGlEQUErQztBQUMvQyx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFFdEQsd0VBQXNFO0FBQ3RFLHFFQUFtRTtBQUVuRTtJQUVFLFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFFeEIsSUFBSSxNQUFNLEdBQVk7WUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1NBQzNDLENBQUM7UUFDRixVQUFVLENBQUM7WUFDVCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLDZCQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUQsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2Isb0NBQWdCO29CQUNoQixrQ0FBZTtvQkFDZiw0QkFBWTtvQkFDWiw4QkFBYTtvQkFDYixnQ0FBYztvQkFDZCxnQ0FBYztvQkFDZCw4QkFBYTtpQkFDWjtnQkFDSCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsc0JBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO2lCQUMxQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUNqQyxlQUFLLENBQUM7WUFDSixpQkFBTztpQkFDSixpQkFBaUIsRUFBRTtpQkFDbkIsSUFBSSxDQUFDO2dCQUNKLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUVyQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBekNELG9CQXlDQztBQU9ELElBQU0sYUFBYTtJQUFuQjtJQUNBLENBQUM7SUFBRCxvQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBREssYUFBYTtJQUxsQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtLQUM5QixDQUFDOztHQUVJLGFBQWEsQ0FDbEIiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBhc3luY1xufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgUm91dGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIFJvdXRlclRlc3RpbmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFtc0NvbXBvbmVudCB9IGZyb20gJy4vdGVhbXMvdGVhbXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcHNDb21wb25lbnQgfSBmcm9tICcuL3RvcHMvdG9wcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuXG4gIGRlc2NyaWJlKCdBcHAgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgbGV0IGNvbmZpZzogUm91dGVbXSA9IFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZWFtcycsIGNvbXBvbmVudDogVGVhbXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RvcHMnLCBjb21wb25lbnQ6IFRvcHNDb21wb25lbnQgfVxuICAgIF07XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJvdXRlclRlc3RpbmdNb2R1bGUud2l0aFJvdXRlcyhjb25maWcpXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgVGVzdENvbXBvbmVudCxcbiAgICAgICAgICBUb29sYmFyQ29tcG9uZW50LFxuICAgICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgICBUZWFtc0NvbXBvbmVudCxcbiAgICAgICAgICBUb3BzQ29tcG9uZW50XG4gICAgICAgICAgXSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJy8nIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGJ1aWxkIHdpdGhvdXQgYSBwcm9ibGVtJyxcbiAgICAgIGFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZFxuICAgICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbiAgICAgICAgICAgIGxldCBjb21waWxlZCA9IGZpeHR1cmUubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgICAgZXhwZWN0KGNvbXBpbGVkKS50b0JlVHJ1dGh5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLWFwcD48L3NkLWFwcD4nXG59KVxuXG5jbGFzcyBUZXN0Q29tcG9uZW50IHtcbn1cblxuXG5cbiJdfQ==
