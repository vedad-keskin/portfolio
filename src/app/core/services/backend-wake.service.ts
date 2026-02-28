import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEB_PROJECTS } from '../data/projects.data';
import { MOBILE_APPS } from '../data/mobile-apps.data';
import { DESKTOP_APPS } from '../data/desktop-apps.data';

export type WakeStatus = 'sleeping' | 'waking' | 'awake' | 'error';

export interface BackendState {
    name: string;
    url: string;
    status: WakeStatus;
}

@Injectable({ providedIn: 'root' })
export class BackendWakeService {
    private http = inject(HttpClient);

    readonly backends = signal<BackendState[]>(
        this.initializeBackends()
    );

    private initializeBackends(): BackendState[] {
        const allProjects = [...WEB_PROJECTS, ...MOBILE_APPS, ...DESKTOP_APPS];
        const uniqueBackends = new Map<string, string>();

        allProjects.forEach(p => {
            if (p.backendUrl) {
                if (!uniqueBackends.has(p.backendUrl)) {
                    uniqueBackends.set(p.backendUrl, p.name);
                }
            }
        });

        return Array.from(uniqueBackends.entries()).map(([url, name]) => ({
            name,
            url,
            status: 'sleeping' as WakeStatus
        }));
    }

    readonly allAwake = computed(() => this.backends().every(b => b.status === 'awake'));
    readonly anyWaking = computed(() => this.backends().some(b => b.status === 'waking'));
    readonly progress = computed(() => {
        const all = this.backends();
        if (all.length === 0) return 100;
        const awake = all.filter(b => b.status === 'awake').length;
        return Math.round((awake / all.length) * 100);
    });

    wakeAll(): void {
        this.backends().forEach((_, i) => this.wakeOne(i));
    }

    wakeOne(index: number): void {
        const current = this.backends();
        if (current[index].status === 'awake' || current[index].status === 'waking') return;

        this.updateStatus(index, 'waking');

        this.http.get(current[index].url, { responseType: 'text' }).subscribe({
            next: () => this.updateStatus(index, 'awake'),
            error: () => {
                // Render free tier may return CORS errors or various status codes while waking.
                // Any response at all means the server is spinning up / alive.
                this.updateStatus(index, 'awake');
            },
        });
    }

    resetAll(): void {
        this.backends.update(list =>
            list.map(b => ({ ...b, status: 'sleeping' as WakeStatus }))
        );
    }

    private updateStatus(index: number, status: WakeStatus): void {
        this.backends.update(list =>
            list.map((b, i) => i === index ? { ...b, status } : b)
        );
    }
}
