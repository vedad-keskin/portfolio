import { Project } from '../models/project.model';

export const MOBILE_APPS: Project[] = [
    {
        id: 'nightfall-app',
        name: 'Nightfall Project',
        descriptionKey: 'nightfall_app_desc',
        logoPath: 'assets/nightfall.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/nightfall-v3.9.4/nightfall.v3.9.4.apk',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/nightfall-v3.9.4/nightfall.v3.9.4.apk',
        tags: ['Android', 'Flutter', 'Game'],
        category: 'mobile',
    },
    {
        id: 'rummy-tracker',
        name: 'Rummy Tracker',
        descriptionKey: 'rummy_tracker_desc',
        logoPath: 'assets/rummy tracker.png',
        url: 'https://github.com/vedad-keskin/app-releases/releases/download/rummy-tracker.v2.2.2/rummy-tracker.v2.2.2.apk',
        downloadUrl: 'https://github.com/vedad-keskin/app-releases/releases/download/rummy-tracker.v2.2.2/rummy-tracker.v2.2.2.apk',
        tags: ['Android', 'Flutter', 'Game'],
        category: 'mobile',
    },
];
