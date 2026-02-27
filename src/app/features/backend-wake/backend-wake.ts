import { Component, inject } from '@angular/core';
import { BackendWakeService } from '../../core/services/backend-wake.service';
import { LanguageService } from '../../shared/language/language.service';

@Component({
    selector: 'app-backend-wake',
    standalone: true,
    templateUrl: './backend-wake.html',
    styleUrl: './backend-wake.css',
})
export class BackendWakeComponent {
    readonly wake = inject(BackendWakeService);
    readonly ls = inject(LanguageService);
}
