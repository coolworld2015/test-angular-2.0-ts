import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
		
		  <li *ngFor="#man of hack(people)">
            <span class="badge">{{man.id}}</span> {{man.name}}
          </li>
		  
        <ul class="heroes">
          <li *ngFor="#hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
		<!--
        <hr>
        {{heroes | json}}
		<hr>
        {{people | json}}
		-->
      `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    directives: [HeroDetailComponent],
    providers: [HeroService, HTTP_PROVIDERS]
})
export class AppComponent {
    public title = 'Tour of Heroes';
    heroes = [];
    people = {};
    selectedHero: Hero;

    constructor(private _heroService: HeroService, http: Http) {
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
}