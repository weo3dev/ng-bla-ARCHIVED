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
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var about_module_1 = require("./about/about.module");
var home_module_1 = require("./home/home.module");
var teams_module_1 = require("./teams/teams.module");
var tops_module_1 = require("./tops/tops.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            about_module_1.AboutModule,
            home_module_1.HomeModule,
            teams_module_1.TeamsModule,
            tops_module_1.TopsModule,
            shared_module_1.SharedModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELDBDQUFnRDtBQUNoRCxzQ0FBMkM7QUFDM0MsaURBQStDO0FBQy9DLDJEQUF3RDtBQUV4RCxxREFBbUQ7QUFDbkQsa0RBQWdEO0FBQ2hELHFEQUFtRDtBQUNuRCxrREFBZ0Q7QUFDaEQsd0RBQXNEO0FBcUJ0RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFuQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNSLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixxQ0FBZ0I7WUFDaEIsMEJBQVc7WUFDWCx3QkFBVTtZQUNWLDBCQUFXO1lBQ1gsd0JBQVU7WUFDViw0QkFBWSxDQUFDLE9BQU8sRUFBRTtTQUN0QjtRQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLHNCQUFhO2dCQUN0QixRQUFRLEVBQUUsaUJBQWlCO2FBQzVCLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBRTFCLENBQUM7O0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tICcuL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFRlYW1zTW9kdWxlIH0gZnJvbSAnLi90ZWFtcy90ZWFtcy5tb2R1bGUnO1xuaW1wb3J0IHsgVG9wc01vZHVsZSB9IGZyb20gJy4vdG9wcy90b3BzLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBcdEJyb3dzZXJNb2R1bGUsXG4gIFx0SHR0cE1vZHVsZSxcbiAgXHRBcHBSb3V0aW5nTW9kdWxlLFxuICBcdEFib3V0TW9kdWxlLFxuICBcdEhvbWVNb2R1bGUsXG4gIFx0VGVhbXNNb2R1bGUsXG4gIFx0VG9wc01vZHVsZSxcbiAgXHRTaGFyZWRNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
