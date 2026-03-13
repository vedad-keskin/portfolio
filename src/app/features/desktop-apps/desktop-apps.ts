import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DESKTOP_APPS } from '../../core/data/desktop-apps.data';
import { Project } from '../../core/models/project.model';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-desktop-apps',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './desktop-apps.html',
    styleUrl: './desktop-apps.css',
})
export class DesktopAppsComponent {
    readonly ls = inject(LanguageService);
    readonly apps: Project[] = DESKTOP_APPS;
}
