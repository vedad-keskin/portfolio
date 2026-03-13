import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOBILE_APPS } from '../../core/data/mobile-apps.data';
import { Project } from '../../core/models/project.model';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-mobile-apps',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './mobile-apps.html',
    styleUrl: './mobile-apps.css',
})
export class MobileAppsComponent {
    readonly ls = inject(LanguageService);
    readonly apps: Project[] = MOBILE_APPS;
}
