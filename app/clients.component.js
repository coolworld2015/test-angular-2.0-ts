System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var ClientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ClientsComponent = (function () {
                function ClientsComponent(_http) {
                    var _this = this;
                    this._http = _http;
                    this.title = 'Angular 2 - Warehouse';
                    this.clients = {};
                    _http.get('http://ui-warehouse.herokuapp.com/api/clients/get')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (clients) { return _this.clients = clients.slice(0, 6); });
                }
                ClientsComponent.prototype.hack = function (val) {
                    return Array.from(val);
                };
                ClientsComponent = __decorate([
                    core_1.Component({
                        selector: 'clients',
                        template: "\n\t<h1>{{title}}</h1>\n\t<h2>Clients</h2>\n\n\t<ul class=\"heroes\">\n\t  <li *ngFor=\"#client of hack(clients)\">\n\t\t<span class=\"badge\">{{client.id}}</span> {{client.name}}\n\t  </li>\n\t</ul>\n\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientsComponent);
                return ClientsComponent;
            }());
            exports_1("ClientsComponent", ClientsComponent);
        }
    }
});
//# sourceMappingURL=clients.component.js.map