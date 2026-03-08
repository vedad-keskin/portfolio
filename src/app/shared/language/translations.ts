// ── Portfolio translation keys ──────────────────────────────────────────
export type TranslationKey =
    // Nav
    | 'nav_services' | 'nav_web' | 'nav_mobile' | 'nav_desktop' | 'nav_soon'
    // Hero
    | 'hero_greeting' | 'hero_tagline' | 'hero_cta' | 'hero_counter'
    // Project cards
    | 'visit_btn'
    // Section headers
    | 'section_services_title' | 'section_services_subtitle'
    | 'section_web_title' | 'section_web_subtitle'
    | 'section_mobile_title' | 'section_mobile_subtitle'
    // Backend wake
    | 'wake_btn_idle' | 'wake_btn_waking' | 'wake_btn_done'
    | 'status_sleeping' | 'status_waking' | 'status_awake' | 'status_error'
    | 'wake_reset'
    // Coming soon
    | 'cs_desktop' | 'cs_soon'
    // Project descriptions
    | 'nightfall_desc' | 'kino_zona_desc' | 'majstor_ba_desc'
    | 'festify_desc' | 'bookhana_desc' | 'gms_desc'
    // Mobile & Desktop app descriptions
    | 'nightfall_app_desc' | 'rummy_tracker_desc'
    | 'vital_sphere_mobile_desc' | 'vital_sphere_desktop_desc'
    | 'iron_vault_app_desc' | 'iron_vault_admin_desc'
    | 'erent_app_desc'
    | 'bella_app_desc' | 'bella_hairdresser_app_desc' | 'bella_admin_desc'
    | 'mo_smart_park_app_desc' | 'mo_smart_park_admin_desc'
    | 'cinevibe_app_desc' | 'cinevibe_admin_desc'
    | 'manifest_app_desc' | 'manifest_admin_desc'
    | 'calltaxi_app_desc' | 'calltaxi_driver_app_desc' | 'calltaxi_admin_desc'
    // Download
    | 'download_btn_apk' | 'download_btn_exe'
    // Footer
    | 'footer_text';

// ── English ─────────────────────────────────────────────────────────────
export const EN: Record<TranslationKey, string> = {
    nav_services: '⚡ SERVICES',
    nav_web: '🌐 WEB APPS',
    nav_mobile: '📱 MOBILE',
    nav_desktop: '🖥️ DESKTOP',
    nav_soon: 'SOON',

    hero_greeting: "Hi, I'm",
    hero_tagline: 'Full-Stack Developer building web, mobile & desktop experiences.',
    hero_cta: 'VIEW PROJECTS',
    hero_counter: 'PROJECTS',

    visit_btn: 'VISIT',

    section_services_title: 'BACKEND SERVICES',
    section_services_subtitle: 'Wake up the free-tier Render backends before exploring the projects.',
    section_web_title: 'WEB APPS',
    section_web_subtitle: 'Full-stack web applications built with Angular & .NET',

    section_mobile_title: 'MOBILE APPS',
    section_mobile_subtitle: 'Cross-platform mobile games and applications',

    wake_btn_idle: 'WAKE ALL SERVICES',
    wake_btn_waking: 'WAKING UP...',
    wake_btn_done: 'ALL SYSTEMS ONLINE',
    status_sleeping: 'SLEEPING',
    status_waking: 'WAKING UP...',
    status_awake: 'ONLINE',
    status_error: 'ERROR',
    wake_reset: '↺ RESET',

    cs_desktop: 'DESKTOP APPS',
    cs_soon: 'COMING SOON',

    nightfall_desc: 'A companion web rulebook for the Nightfall mobile game — explaining roles, rules, and gameplay mechanics.',
    kino_zona_desc: 'A cinema management platform for browsing movies, reserving tickets, and managing screenings.',
    majstor_ba_desc: 'A platform connecting local craftsmen and service providers with customers across Bosnia.',
    festify_desc: 'A music festival discovery and ticket booking app — find events, explore lineups, and grab tickets.',
    bookhana_desc: 'An online bookstore for browsing, reviewing, and purchasing books with user accounts and wishlists.',
    gms_desc: 'Platform for managing gym memberships, trainers, nutrition plans, and supplement purchases in one place.',

    nightfall_app_desc: 'A werewolf + impostor party game — two classic social deduction games in one app.',
    rummy_tracker_desc: 'Track scores in Rummy card games — add players, keep round scores, and rank session winners.',
    vital_sphere_mobile_desc: 'A wellness center management app for browsing products, booking services, and purchasing wellness boxes.',
    vital_sphere_desktop_desc: 'Admin dashboard for managing the VitalSphere wellness center operations, products, and services.',
    iron_vault_app_desc: 'A gym management app for memberships, trainers, workout tracking, and nutritionists.',
    iron_vault_admin_desc: 'Desktop admin panel for managing memberships, trainers, workout plans, and nutrition services in Iron Vault.',
    erent_app_desc: 'Comprehensive real estate platform for renting apartments, scheduling viewings, and secure payments with Stripe integration.',
    bella_app_desc: 'A salon application for clients to book haircuts, purchase hair products, and manage their appointments.',
    bella_hairdresser_app_desc: 'A dedicated application for hairdressers to efficiently keep track of their daily appointments and schedules.',
    bella_admin_desc: 'An administrative desktop application to manage the entire salon business, track operations, and oversee business flows.',
    mo_smart_park_app_desc: 'A smart parking mobile app for finding, navigating to, and reserving parking spots with secure payments.',
    mo_smart_park_admin_desc: 'An administrative dashboard for managing parking zones, spots, and monitoring active reservations.',
    cinevibe_app_desc: 'A cinema app for users to browse movies, reserve tickets, and order snacks.',
    cinevibe_admin_desc: 'A desktop administrative application to manage cinema operations, ticket sales, and snacks.',
    manifest_app_desc: 'A festival application for exploring lineups, purchasing tickets, and managing event passes.',
    manifest_admin_desc: 'An administrative desktop application for managing festival operations, ticket sales, and event scanning.',
    calltaxi_app_desc: 'A taxi reservation app for users to book rides, track routes, and estimate arrival times.',
    calltaxi_driver_app_desc: 'A dedicated app for taxi drivers to receive ride requests, manage their status, and navigate to customers.',
    calltaxi_admin_desc: 'A desktop administrative application to manage taxi operations, oversee drivers, and monitor rides.',
    download_btn_apk: 'DOWNLOAD APK',
    download_btn_exe: 'DOWNLOAD EXE',

    footer_text: '© 2025 Vedad Keskin — Built with Angular & pixel dust ✨',
};

// ── Bosnian ──────────────────────────────────────────────────────────────
export const BS: Record<TranslationKey, string> = {
    nav_services: '⚡ SERVISI',
    nav_web: '🌐 WEB APPS',
    nav_mobile: '📱 MOBILNE',
    nav_desktop: '🖥️ DESKTOP',
    nav_soon: 'USKORO',

    hero_greeting: 'Hej, ja sam',
    hero_tagline: 'Full-Stack Developer koji gradi web, mobilna i desktop iskustva.',
    hero_cta: 'POGLEDAJ PROJEKTE',
    hero_counter: 'PROJEKATA',

    visit_btn: 'POSJETI',

    section_services_title: 'BACKEND SERVISI',
    section_services_subtitle: 'Probudite besplatne Render backend servise prije istraživanja projekata.',
    section_web_title: 'WEB APLIKACIJE',
    section_web_subtitle: 'Full-stack web aplikacije izgrađene sa Angular & .NET',

    section_mobile_title: 'MOBILNE APLIKACIJE',
    section_mobile_subtitle: 'Cross-platform mobilne igre i aplikacije',

    wake_btn_idle: 'PROBUDI SVE SERVISE',
    wake_btn_waking: 'BUĐENJE...',
    wake_btn_done: 'SVI SISTEMI ONLINE',
    status_sleeping: 'SPAVA',
    status_waking: 'BUĐENJE...',
    status_awake: 'AKTIVAN',
    status_error: 'GREŠKA',
    wake_reset: '↺ RESETUJ',

    cs_desktop: 'DESKTOP APLIKACIJE',
    cs_soon: 'USKORO',

    nightfall_desc: 'Web priručnik za Nightfall mobilnu igru — objašnjava uloge, pravila i mehanike igre.',
    kino_zona_desc: 'Platforma za upravljanje kinom — pretraživanje filmova, rezervacija karata i upravljanje projekcijama.',
    majstor_ba_desc: 'Platforma koja povezuje lokalne majstore i pružaoce usluga sa korisnicima širom Bosne.',
    festify_desc: 'Aplikacija za otkrivanje muzičkih festivala i kupovinu karata — pronađite događaje, istražite lineup i nabavite karte.',
    bookhana_desc: 'Online knjižara za pretraživanje, recenziranje i kupovinu knjiga sa korisničkim računima i listama želja.',
    gms_desc: 'Platforma za upravljanje članarinama u teretani, trenerima, planovima ishrane i kupovinom suplemenata na jednom mjestu.',

    nightfall_app_desc: 'Vukodlak + impostor društvene igre — dvije klasične igre dedukcije u jednoj aplikaciji.',
    rummy_tracker_desc: 'Pratite rezultate u kartaškoj igri Rummy — dodajte igrače, bilježite bodove po rundama i rangirajte pobjednike.',
    vital_sphere_mobile_desc: 'Aplikacija wellness centra za pregled proizvoda, rezervaciju usluga i kupovinu wellness kutija.',
    vital_sphere_desktop_desc: 'Administrativni panel za upravljanje operacijama, proizvodima i uslugama VitalSphere wellness centra.',
    iron_vault_app_desc: 'Aplikacija za teretanu za clanarine, trenere, pracenje treninga i nutricioniste.',
    iron_vault_admin_desc: 'Desktop administrativni panel za upravljanje clanstvima, trenerima, planovima treninga i uslugama nutricionista u Iron Vault-u.',
    erent_app_desc: 'Sveobuhvatna platforma za nekretnine za iznajmljivanje stanova, zakazivanje pregleda i sigurno plaćanje uz Stripe integraciju.',
    bella_app_desc: 'Aplikacija za klijente za rezervaciju frizura, kupovinu proizvoda za kosu i upravljanje terminima.',
    bella_hairdresser_app_desc: 'Namjenska aplikacija za frizere za efikasno praćenje dnevnih termina i rasporeda.',
    bella_admin_desc: 'Administrativna desktop aplikacija za upravljanje cjelokupnim poslovanjem sa uvidom u sve operacije.',
    mo_smart_park_app_desc: 'Mobilna aplikacija za pametno parkiranje - pronalaženje, navigacija i rezervacija parking mjesta sa sigurnim plaćanjem.',
    mo_smart_park_admin_desc: 'Administrativna desktop aplikacija za upravljanje parking zonama, mjestima i praćenje aktivnih rezervacija.',
    cinevibe_app_desc: 'Kino aplikacija za korisnike za pregled filmova, rezervaciju karata i naručivanje grickalica.',
    cinevibe_admin_desc: 'Desktop administrativna aplikacija za upravljanje kino operacijama, prodaje karata i grickalica.',
    manifest_app_desc: 'Festivalska aplikacija za istraživanje izvođača, kupovinu karata i upravljanje propusnicama za događaje.',
    manifest_admin_desc: 'Administrativna desktop aplikacija za upravljanje festivalskim operacijama, prodajom karata i skeniranjem na ulazu.',
    calltaxi_app_desc: 'Aplikacija za rezervaciju taksija za korisnike za naručivanje vožnji, praćenje ruta i procjenu vremena dolaska.',
    calltaxi_driver_app_desc: 'Namjenska aplikacija za taksiste za primanje zahtjeva za vožnju, upravljanje statusom i navigaciju do klijenata.',
    calltaxi_admin_desc: 'Desktop administrativna aplikacija za upravljanje taksi operacijama, nadzor vozača i praćenje vožnji.',
    download_btn_apk: 'PREUZMI APK',
    download_btn_exe: 'PREUZMI EXE',

    footer_text: '© 2025 Vedad Keskin — Izgrađeno sa Angular i pixel prahom ✨',
};
