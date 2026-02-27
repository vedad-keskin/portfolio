import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language/language.service';

@Component({
    selector: 'app-lang-switch',
    standalone: true,
    templateUrl: './lang-switch.html',
    styleUrl: './lang-switch.css',
})
export class LangSwitchComponent {
    readonly ls = inject(LanguageService);

    get isEn(): boolean {
        return this.ls.lang() === 'en';
    }
}
