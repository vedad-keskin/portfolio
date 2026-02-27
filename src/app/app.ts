import { Component, inject } from '@angular/core';
import { NavComponent } from './shared/components/nav/nav';
import { StarfieldComponent } from './shared/components/starfield/starfield';
import { SectionHeaderComponent } from './shared/components/section-header/section-header';
import { WebProjectsComponent } from './features/web-projects/web-projects';
import { BackendWakeComponent } from './features/backend-wake/backend-wake';
import { LanguageService } from './shared/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    StarfieldComponent,
    SectionHeaderComponent,
    WebProjectsComponent,
    BackendWakeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly ls = inject(LanguageService);
}
