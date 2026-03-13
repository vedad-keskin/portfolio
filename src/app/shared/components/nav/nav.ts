import { Component, signal, inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly router = inject(Router);
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

        if (this.router.url !== '/') {
            this.router.navigate(['/']).then(() => {
                setTimeout(() => this.doScroll(id), 100);
            });
        } else {
            this.doScroll(id);
        }
    }

    goHome(): void {
        this.closeMenu();
        if (this.router.url !== '/') {
            this.router.navigate(['/']);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    private doScroll(id: string): void {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
