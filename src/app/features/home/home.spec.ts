import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BackendWakeService } from '../../core/services/backend-wake.service';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
    it('starts each backend in the background without changing wake status', async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        const wake = TestBed.inject(BackendWakeService);
        TestBed.createComponent(HomeComponent);
        const requests = TestBed.inject(HttpTestingController).match(() => true);

        expect(requests.map(({ request }) => request.url)).toEqual(wake.backends().map(({ url }) => url));
        requests.forEach(request => request.flush(''));
        expect(wake.backends().every(({ status }) => status === 'sleeping')).toBe(true);
    });
});
