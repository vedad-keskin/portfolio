import { Component, inject, signal, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../core/models/project.model';
import { ProjectLookupService } from '../../core/services/project-lookup.service';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './project-detail.html',
    styleUrl: './project-detail.css',
})
export class ProjectDetailComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly lookup = inject(ProjectLookupService);
    private readonly http = inject(HttpClient);
    readonly ls = inject(LanguageService);

    project = signal<Project | undefined>(undefined);
    wakeStatus = signal<'idle' | 'waking' | 'done' | 'error'>('idle');

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id') ?? '';
        this.project.set(this.lookup.findById(id));
    }

    get categoryLabel(): string {
        const cat = this.project()?.category;
        if (cat === 'web') return 'WEB';
        if (cat === 'mobile') return 'MOBILE';
        if (cat === 'desktop') return 'DESKTOP';
        return '';
    }

    get categoryClass(): string {
        return `detail__category--${this.project()?.category ?? 'web'}`;
    }

    get actionUrl(): string {
        const p = this.project();
        return p?.downloadUrl ?? p?.url ?? '';
    }

    get actionLabel(): string {
        const p = this.project();
        if (!p?.downloadUrl) return this.ls.t('visit_btn');
        if (p.category === 'desktop') return this.ls.t('download_btn_exe');
        return this.ls.t('download_btn_apk');
    }

    wakeBackend(): void {
        const url = this.project()?.backendUrl;
        if (!url || this.wakeStatus() === 'waking') return;
        this.wakeStatus.set('waking');
        this.http.get(url, { responseType: 'text' }).subscribe({
            next: () => this.wakeStatus.set('done'),
            error: () => this.wakeStatus.set('done'),
        });
    }
}
