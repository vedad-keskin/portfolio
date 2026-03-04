import { Project } from '../models/project.model';

export const DESKTOP_APPS: Project[] = [
    {
        id: 'vital-sphere-admin',
        name: 'Vital Sphere Admin',
        descriptionKey: 'vital_sphere_desktop_desc',
        logoPath: 'assets/vital-sphere.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/vital-sphere-admin.v2.2.2/vital-sphere.v2.2.2.rar',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/vital-sphere-admin.v2.2.2/vital-sphere.v2.2.2.rar',
        tags: ['Windows', 'Flutter', 'RabbitMQ', 'PostgreSQL', 'Render', '.NET', 'Docker'],
        backendUrl: 'https://vitalsphere.onrender.com',
        category: 'desktop',
    },
    {
        id: 'erent-admin',
        name: 'eRent Admin',
        descriptionKey: 'erent_app_desc',
        logoPath: 'assets/erent.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/e-rent.v1.2.3/erent.v1.2.3.rar',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/e-rent.v1.2.3/erent.v1.2.3.rar',
        tags: ['Windows', 'Flutter', 'RabbitMQ', '.NET', 'PostgreSQL', 'Render', 'Docker', 'Maps'],
        backendUrl: 'https://erent-a3tr.onrender.com',
        category: 'desktop',
    },
    {
        id: 'erent-landlord',
        name: 'eRent Landlord',
        descriptionKey: 'erent_app_desc',
        logoPath: 'assets/erent.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/erent.v1.2.3/erent-landlord.v1.2.3.rar',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/erent.v1.2.3/erent-landlord.v1.2.3.rar',
        tags: ['Windows', 'Flutter', 'RabbitMQ', '.NET', 'PostgreSQL', 'Render', 'Docker', 'Maps'],
        backendUrl: 'https://erent-a3tr.onrender.com',
        category: 'desktop',
    },
];
