import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav';
import { StarfieldComponent } from './shared/components/starfield/starfield';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent, StarfieldComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
