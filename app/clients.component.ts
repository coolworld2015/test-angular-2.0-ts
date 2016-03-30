import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { HeroService } from './hero.service';

@Component({
  selector: 'clients',
  template: `
	<h1>{{title}}</h1>
	<h2>Clients</h2>

	<ul class="heroes">
	  <li *ngFor="#client of hack(clients)">
		<span class="badge">{{client.id}}</span> {{client.name}}
	  </li>
	</ul>

  `,

styleUrls: ['app/app.component.css'],
directives: [ROUTER_DIRECTIVES],
providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

export class ClientsComponent {
    public title = 'Angular 2 - Warehouse';
	clients = {};

    constructor(private _http: Http) {
        _http.get('http://ui-warehouse.herokuapp.com/api/clients/get')
            .map(res => res.json())
            .subscribe(clients => this.clients = clients.slice(0,6));
    }

    public hack(val) {
	  return Array.from(val);
	}
}