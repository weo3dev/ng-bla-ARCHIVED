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
var common_1 = require("@angular/common");
var about_component_1 = require("./about.component");
var about_routing_module_1 = require("./about-routing.module");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, about_routing_module_1.AboutRoutingModule],
        declarations: [about_component_1.AboutComponent],
        exports: [about_component_1.AboutComponent]
    }),
    __metadata("design:paramtypes", [])
], AboutModule);
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MscURBQW1EO0FBQ25ELCtEQUE0RDtBQU81RCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLFdBQVc7SUFMdkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx5Q0FBa0IsQ0FBQztRQUMzQyxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDMUIsQ0FBQzs7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYWJvdXQtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBYm91dFJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBYm91dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBYm91dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9XG4iXX0=
