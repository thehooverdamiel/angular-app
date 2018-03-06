import { Component } from '@angular/core';

@Component({
    selector: 'bs-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    title = "It's ya title";
    tagLine = "tagline like you got no tagline";
}