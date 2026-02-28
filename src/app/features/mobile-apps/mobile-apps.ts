import { Component, inject } from '@angular/core';
import { MOBILE_APPS } from '../../core/data/mobile-apps.data';
import { Project } from '../../core/models/project.model';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-mobile-apps',
    standalone: true,
    templateUrl: './mobile-apps.html',
    styleUrl: './mobile-apps.css',
})
export class MobileAppsComponent {
    readonly ls = inject(LanguageService);
    readonly apps: Project[] = MOBILE_APPS;
}
