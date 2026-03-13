import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { WEB_PROJECTS } from '../data/projects.data';
import { MOBILE_APPS } from '../data/mobile-apps.data';
import { DESKTOP_APPS } from '../data/desktop-apps.data';

@Injectable({ providedIn: 'root' })
export class ProjectLookupService {
    private readonly all: Project[] = [...WEB_PROJECTS, ...MOBILE_APPS, ...DESKTOP_APPS];

    findById(id: string): Project | undefined {
        return this.all.find(p => p.id === id);
    }
}
