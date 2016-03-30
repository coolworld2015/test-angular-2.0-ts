import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Router} from 'angular2/router';
import 'rxjs/Rx';

import {HeroService} from './hero.service';
import {Hero} from './hero';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { ClientsComponent } from './clients.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Clients']">Clients</a>
            <a [routerLink]="['Heroes']">Heroes</a>

            <!-- <div (click)="goClients()">Clients</div> -->
        </nav>
        <router-outlet></router-outlet>
<!--
        <h1>{{title}}</h1>
        <h2>Clients</h2>

		<ul class="heroes">
		  <li *ngFor="#man of hack(people)">
            <span class="badge">{{man.id}}</span> {{man.name}}
          </li>
		</ul>
-->
<!--
        <ul class="heroes">
          <li *ngFor="#hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
-->
<!--
        <hr>
        {{heroes | json}}
		<hr>
        {{people | json}}
-->
      `,

    styleUrls: ['app/app.component.css'],
    directives: [HeroDetailComponent, ROUTER_DIRECTIVES],
    providers: [HeroService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        //useAsDefault: true
    },
    {
        path: '/clients',
        name: 'Clients',
        component: ClientsComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    public title = 'Angular 2 - Warehouse';
    heroes = [];
    people = {};
    selectedHero:Hero;

    constructor(private _heroService:HeroService, http:Http, private _router: Router) {
        //http.get('app/people.json')
        http.get('http://ui-warehouse.herokuapp.com/api/clients/get')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(people => this.people = people);

        this.heroes = this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    hack(val) {
        return Array.from(val);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    goClients() {
        this._router.navigate(['Clients']);
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}