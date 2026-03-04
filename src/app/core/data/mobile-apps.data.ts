import { Project } from '../models/project.model';

export const MOBILE_APPS: Project[] = [
    {
        id: 'nightfall-app',
        name: 'Nightfall Project',
        descriptionKey: 'nightfall_app_desc',
        logoPath: 'assets/nightfall.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/nightfall-v3.9.6/nightfall.v3.9.6.apk',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/nightfall-v3.9.6/nightfall.v3.9.6.apk',
        tags: ['Android', 'Flutter', 'Game'],
        category: 'mobile',
    },
    {
        id: 'rummy-tracker',
        name: 'Rummy Tracker',
        descriptionKey: 'rummy_tracker_desc',
        logoPath: 'assets/rummy tracker.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/rummy-tracker.v3.1.2/rummy-tracker.v3.1.2.apk',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/rummy-tracker.v3.1.2/rummy-tracker.v3.1.2.apk',
        tags: ['Android', 'Flutter', 'Game'],
        category: 'mobile',
    },
    {
        id: 'vital-sphere',
        name: 'Vital Sphere',
        descriptionKey: 'vital_sphere_mobile_desc',
        logoPath: 'assets/vital-sphere.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/vital-sphere.v2.2.2/vital-sphere.v2.2.2.apk',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/vital-sphere.v2.2.2/vital-sphere.v2.2.2.apk',
        tags: ['Android', 'Flutter', 'RabbitMQ', 'Stripe', 'Supabase', 'Render', '.NET', 'Docker'],
        category: 'mobile',
        backendUrl: 'https://vitalsphere.onrender.com',
    },
];
