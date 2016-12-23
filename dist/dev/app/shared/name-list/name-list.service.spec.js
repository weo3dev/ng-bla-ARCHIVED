"use strict";
var http_1 = require("@angular/http");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var Observable_1 = require("rxjs/Observable");
var name_list_service_1 = require("./name-list.service");
function main() {
    describe('NameList Service', function () {
        var nameListService;
        var mockBackend;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                providers: [
                    name_list_service_1.NameListService,
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    {
                        provide: http_1.Http,
                        useFactory: function (backend, options) { return new http_1.Http(backend, options); },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    }
                ]
            });
        });
        it('should return an Observable when get called', testing_1.async(function () {
            expect(testing_1.TestBed.get(name_list_service_1.NameListService).get()).toEqual(jasmine.any(Observable_1.Observable));
        }));
        it('should resolve to list of names when get called', testing_1.async(function () {
            var nameListService = testing_1.TestBed.get(name_list_service_1.NameListService);
            var mockBackend = testing_1.TestBed.get(testing_2.MockBackend);
            mockBackend.connections.subscribe(function (c) {
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
            });
            nameListService.get().subscribe(function (data) {
                expect(data).toEqual(['Dijkstra', 'Hopper']);
            });
        }));
    });
}
exports.main = main;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1RztBQUN2RyxpREFBdUQ7QUFDdkQsaURBQW9EO0FBRXBELDhDQUE2QztBQUU3Qyx5REFBc0Q7QUFFdEQ7SUFDRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDM0IsSUFBSSxlQUFnQyxDQUFDO1FBQ3JDLElBQUksV0FBd0IsQ0FBQztRQUU3QixVQUFVLENBQUM7WUFFVCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixTQUFTLEVBQUU7b0JBQ1QsbUNBQWU7b0JBQ2YscUJBQVc7b0JBQ1gseUJBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsV0FBSTt3QkFDYixVQUFVLEVBQUUsVUFBQyxPQUEwQixFQUFFLE9BQTJCLElBQUssT0FBQSxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQTFCLENBQTBCO3dCQUNuRyxJQUFJLEVBQUUsQ0FBQyxxQkFBVyxFQUFFLHlCQUFrQixDQUFDO3FCQUN4QztpQkFDRjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLGVBQUssQ0FBQztZQUN0RCxNQUFNLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyxpREFBaUQsRUFBRSxlQUFLLENBQUM7WUFDMUQsSUFBSSxlQUFlLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWUsQ0FBQyxDQUFDO1lBQ25ELElBQUksV0FBVyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUUzQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3ZDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFRLENBQUMsSUFBSSxzQkFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsQ0FBQyxDQUFDLENBQUM7WUFFSCxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztnQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXRDRCxvQkFzQ0MiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXF1ZXN0T3B0aW9ucywgQ29ubmVjdGlvbkJhY2tlbmQsIEh0dHAsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFRlc3RCZWQsIGFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1vY2tCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4vbmFtZS1saXN0LnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgZGVzY3JpYmUoJ05hbWVMaXN0IFNlcnZpY2UnLCAoKSA9PiB7XG4gICAgbGV0IG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlO1xuICAgIGxldCBtb2NrQmFja2VuZDogTW9ja0JhY2tlbmQ7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcblxuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgTmFtZUxpc3RTZXJ2aWNlLFxuICAgICAgICAgIE1vY2tCYWNrZW5kLFxuICAgICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKGJhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCBvcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMpID0+IG5ldyBIdHRwKGJhY2tlbmQsIG9wdGlvbnMpLFxuICAgICAgICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGFuIE9ic2VydmFibGUgd2hlbiBnZXQgY2FsbGVkJywgYXN5bmMoKCkgPT4ge1xuICAgICAgZXhwZWN0KFRlc3RCZWQuZ2V0KE5hbWVMaXN0U2VydmljZSkuZ2V0KCkpLnRvRXF1YWwoamFzbWluZS5hbnkoT2JzZXJ2YWJsZSkpO1xuICAgIH0pKTtcblxuICAgIGl0KCdzaG91bGQgcmVzb2x2ZSB0byBsaXN0IG9mIG5hbWVzIHdoZW4gZ2V0IGNhbGxlZCcsIGFzeW5jKCgpID0+IHtcbiAgICAgIGxldCBuYW1lTGlzdFNlcnZpY2UgPSBUZXN0QmVkLmdldChOYW1lTGlzdFNlcnZpY2UpO1xuICAgICAgbGV0IG1vY2tCYWNrZW5kID0gVGVzdEJlZC5nZXQoTW9ja0JhY2tlbmQpO1xuXG4gICAgICBtb2NrQmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGM6IGFueSkgPT4ge1xuICAgICAgICBjLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShuZXcgUmVzcG9uc2VPcHRpb25zKHsgYm9keTogJ1tcIkRpamtzdHJhXCIsIFwiSG9wcGVyXCJdJyB9KSkpO1xuICAgICAgfSk7XG5cbiAgICAgIG5hbWVMaXN0U2VydmljZS5nZXQoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBleHBlY3QoZGF0YSkudG9FcXVhbChbJ0RpamtzdHJhJywgJ0hvcHBlciddKTtcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfSk7XG59XG4iXX0=
