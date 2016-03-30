System.register(['angular2/core', 'angular2/http', 'angular2/router', './hero-detail.component', './hero.service', 'rxjs/Rx', './dashboard.component', './clients.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, router_2, hero_detail_component_1, hero_service_1, dashboard_component_1, clients_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (_1) {},
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (clients_component_1_1) {
                clients_component_1 = clients_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService, http, _router) {
                    var _this = this;
                    this._heroService = _heroService;
                    this._router = _router;
                    this.title = 'Angular 2 - Warehouse';
                    this.heroes = [];
                    this.people = {};
                    //http.get('app/people.json')
                    http.get('http://ui-warehouse.herokuapp.com/api/clients/get')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (people) { return _this.people = people; });
                    this.heroes = this._heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; });
                }
                AppComponent.prototype.hack = function (val) {
                    return Array.from(val);
                };
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent.prototype.goClients = function () {
                    this._router.navigate(['Clients']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Clients']\">Clients</a>\n            <div (click)=\"goClients()\">Clients</div>\n        </nav>\n        <router-outlet></router-outlet>\n<!--\n        <h1>{{title}}</h1>\n        <h2>Clients</h2>\n\n\t\t<ul class=\"heroes\">\n\t\t  <li *ngFor=\"#man of hack(people)\">\n            <span class=\"badge\">{{man.id}}</span> {{man.name}}\n          </li>\n\t\t</ul>\n-->\n<!--\n        <ul class=\"heroes\">\n          <li *ngFor=\"#hero of heroes\"\n            [class.selected]=\"hero === selectedHero\"\n            (click)=\"onSelect(hero)\">\n            <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n          </li>\n        </ul>\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n-->\n<!--\n        <hr>\n        {{heroes | json}}\n\t\t<hr>\n        {{people | json}}\n-->\n      ",
                        styleUrls: ['app/app.component.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/clients',
                            name: 'Clients',
                            component: clients_component_1.ClientsComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, http_1.Http, router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map