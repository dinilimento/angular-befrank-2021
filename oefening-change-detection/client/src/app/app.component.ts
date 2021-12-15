import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	currentUrl?: string;

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events
			.pipe(
				filter(x => x instanceof NavigationEnd),
				map(x => x as NavigationEnd)
			)
			.subscribe(x => this.currentUrl = x.url);
	}
}
