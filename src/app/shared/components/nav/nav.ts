import { Component, signal, HostListener } from '@angular/core';

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.html',
    styleUrl: './nav.css',
})
export class NavComponent {
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
