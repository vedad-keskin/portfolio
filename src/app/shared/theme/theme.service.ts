import { Injectable, signal } from '@angular/core';

export type Theme = 'night' | 'day';

const STORAGE_KEY = 'portfolio_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private _theme = signal<Theme>(
        (typeof localStorage !== 'undefined'
            ? localStorage.getItem(STORAGE_KEY) as Theme
            : null) ?? 'night'
    );

    readonly theme = this._theme.asReadonly();

    constructor() {
        if (typeof document !== 'undefined') {
            this.applyTheme(this._theme());
        }
    }

    toggle(): void {
        const next: Theme = this._theme() === 'night' ? 'day' : 'night';
        this._theme.set(next);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, next);
        }
        this.applyTheme(next);
    }

    private applyTheme(theme: Theme): void {
        if (typeof document !== 'undefined') {
            document.body.classList.toggle('day', theme === 'day');
        }
    }
}
