import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WEB_PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-web-projects',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './web-projects.html',
    styleUrl: './web-projects.css',
})
export class WebProjectsComponent {
    readonly ls = inject(LanguageService);
    readonly projects: Project[] = WEB_PROJECTS;
}
