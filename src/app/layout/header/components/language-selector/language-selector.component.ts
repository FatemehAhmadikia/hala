import { Component } from '@angular/core';

@Component({
    selector: 'language-selector',
    templateUrl: './language-selector.component.html',
    styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
    selectedLanguage!: string;
    languages: string[] = ['English', 'Arabic', 'French'];

    onSelectLanguage() {}
}
