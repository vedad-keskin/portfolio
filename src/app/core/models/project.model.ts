import { TranslationKey } from '../../shared/language/translations';

export interface Project {
    id: string;
    name: string;
    descriptionKey: TranslationKey;
    logoPath: string;
    url: string;
    tags: string[];
    category: 'web' | 'mobile' | 'desktop';
    backendUrl?: string;
}
