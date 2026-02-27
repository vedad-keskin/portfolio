import { Component } from '@angular/core';
import { WEB_PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';

@Component({
    selector: 'app-web-projects',
    standalone: true,
    templateUrl: './web-projects.html',
    styleUrl: './web-projects.css',
})
export class WebProjectsComponent {
    readonly projects: Project[] = WEB_PROJECTS;
}
