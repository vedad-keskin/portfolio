export interface Project {
    id: string;
    name: string;
    description: string;
    logoPath: string;
    url: string;
    tags: string[];
    category: 'web' | 'mobile' | 'desktop';
    backendUrl?: string;
}
