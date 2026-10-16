import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { ProjectDetailComponent } from './project-detail';

describe('Project detail alternate links', () => {
    it('shows the alternate destination only for web projects that have one', () => {
        vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
        const route = { snapshot: { paramMap: convertToParamMap({ id: '' }) } };
        TestBed.configureTestingModule({
            imports: [ProjectDetailComponent],
            providers: [provideHttpClient(), provideRouter([]), { provide: ActivatedRoute, useValue: route }],
        });

        for (const [id, primary, alternate] of [
            ['nightfall', 'https://nightfallwerewolves.com', 'https://nightfall-project.vercel.app/'],
            ['quivro', 'https://quivro.org/', 'https://quivro.vercel.app/'],
            ['vaktija', 'https://vaktija.life/', 'https://vaktija-bh.vercel.app/'],
            ['viking', 'https://vo-viking.vercel.app/', ''],
        ]) {
            route.snapshot.paramMap = convertToParamMap({ id });
            const fixture = TestBed.createComponent(ProjectDetailComponent);
            fixture.detectChanges();
            const links = [...fixture.nativeElement.querySelectorAll('.detail__actions a')] as HTMLAnchorElement[];
            expect(links.map(link => link.getAttribute('href'))).toEqual(alternate ? [primary, alternate] : [primary]);
            fixture.destroy();
        }
    });
});
