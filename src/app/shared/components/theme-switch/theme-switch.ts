import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';

@Component({
    selector: 'app-theme-switch',
    standalone: true,
    templateUrl: './theme-switch.html',
    styleUrl: './theme-switch.css',
})
export class ThemeSwitchComponent {
    readonly theme = inject(ThemeService);

    get isDark(): boolean {
        return this.theme.theme() === 'night';
    }
}
