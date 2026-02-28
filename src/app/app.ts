import { Component, inject } from '@angular/core';
import { NavComponent } from './shared/components/nav/nav';
import { StarfieldComponent } from './shared/components/starfield/starfield';
import { SectionHeaderComponent } from './shared/components/section-header/section-header';
import { WebProjectsComponent } from './features/web-projects/web-projects';
import { MobileAppsComponent } from './features/mobile-apps/mobile-apps';
import { BackendWakeComponent } from './features/backend-wake/backend-wake';
import { DesktopAppsComponent } from './features/desktop-apps/desktop-apps';
import { LanguageService } from './shared/language/language.service';
import { WEB_PROJECTS } from './core/data/projects.data';
import { MOBILE_APPS } from './core/data/mobile-apps.data';
import { DESKTOP_APPS } from './core/data/desktop-apps.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    StarfieldComponent,
    SectionHeaderComponent,
    WebProjectsComponent,
    MobileAppsComponent,
    DesktopAppsComponent,
    BackendWakeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly ls = inject(LanguageService);
  readonly techStack = [...new Set([...WEB_PROJECTS, ...MOBILE_APPS, ...DESKTOP_APPS].flatMap(p => p.tags))];
  readonly projectCount = WEB_PROJECTS.length + MOBILE_APPS.length + DESKTOP_APPS.length;
}
