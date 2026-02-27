import { Injectable, signal } from '@angular/core';
import { EN, BS, TranslationKey } from './translations';

export type Lang = 'en' | 'bs';

const STORAGE_KEY = 'portfolio_language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private _lang = signal<Lang>(
        (typeof localStorage !== 'undefined'
            ? localStorage.getItem(STORAGE_KEY) as Lang
            : null) ?? 'en'
    );

    readonly lang = this._lang.asReadonly();

    toggle(): void {
        const next: Lang = this._lang() === 'en' ? 'bs' : 'en';
        this._lang.set(next);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, next);
        }
    }

    t(key: TranslationKey): string {
        const map = this._lang() === 'bs' ? BS : EN;
        return (map as Record<string, string>)[key] ?? (EN as Record<string, string>)[key] ?? key;
    }
}
