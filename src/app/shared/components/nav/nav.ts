import { Component, signal, inject, HostListener } from '@angular/core';
import { LangSwitchComponent } from '../lang-switch/lang-switch';
import { LanguageService } from '../../language/language.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [LangSwitchComponent],
    templateUrl: './nav.html',
    styleUrl: './nav.css',
})
export class NavComponent {
    readonly ls = inject(LanguageService);
    menuOpen = signal(false);
    scrolled = signal(false);

    @HostListener('window:scroll')
    onScroll(): void {
        this.scrolled.set(window.scrollY > 20);
    }

    toggleMenu(): void {
        this.menuOpen.update(v => !v);
    }

    closeMenu(): void {
        this.menuOpen.set(false);
    }

    scrollTo(id: string): void {
        this.closeMenu();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
