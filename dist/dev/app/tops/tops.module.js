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
var tops_component_1 = require("./tops.component");
var tops_routing_module_1 = require("./tops-routing.module");
var TopsModule = (function () {
    function TopsModule() {
    }
    return TopsModule;
}());
TopsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, tops_routing_module_1.TopsRoutingModule],
        declarations: [tops_component_1.TopsComponent],
        exports: [tops_component_1.TopsComponent]
    }),
    __metadata("design:paramtypes", [])
], TopsModule);
exports.TopsModule = TopsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b3BzL3RvcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFPMUQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxVQUFVO0lBTHRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsdUNBQWlCLENBQUM7UUFDMUMsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO0tBQ3pCLENBQUM7O0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJmaWxlIjoiYXBwL3RvcHMvdG9wcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvcHNDb21wb25lbnQgfSBmcm9tICcuL3RvcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90b3BzLXJvdXRpbmcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVG9wc1JvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb3BzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvcHNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvcHNNb2R1bGUgeyB9XG4iXX0=
