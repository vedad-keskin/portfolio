import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { WebProjectsComponent } from '../web-projects/web-projects';
import { MobileAppsComponent } from '../mobile-apps/mobile-apps';
import { DesktopAppsComponent } from '../desktop-apps/desktop-apps';
import { BackendWakeComponent } from '../backend-wake/backend-wake';
import { LanguageService } from '../../shared/language/language.service';
import { WEB_PROJECTS } from '../../core/data/projects.data';
import { MOBILE_APPS } from '../../core/data/mobile-apps.data';
import { DESKTOP_APPS } from '../../core/data/desktop-apps.data';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SectionHeaderComponent,
        WebProjectsComponent,
        MobileAppsComponent,
        DesktopAppsComponent,
        BackendWakeComponent,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class HomeComponent {
    readonly ls = inject(LanguageService);
    readonly techStack = [...new Set([...WEB_PROJECTS, ...MOBILE_APPS, ...DESKTOP_APPS].flatMap(p => p.tags))];
    readonly projectCount = WEB_PROJECTS.length + MOBILE_APPS.length + DESKTOP_APPS.length;

    scrollTo(id: string): void {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
