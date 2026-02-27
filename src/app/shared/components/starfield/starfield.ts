import { Component, ElementRef, OnInit, OnDestroy, afterNextRender } from '@angular/core';

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    twinkleSpeed: number;
    twinklePhase: number;
}

@Component({
    selector: 'app-starfield',
    standalone: true,
    template: `<canvas></canvas>`,
    styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `],
})
export class StarfieldComponent implements OnDestroy {
    private canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private stars: Star[] = [];
    private animId = 0;
    private resizeObserver?: ResizeObserver;

    constructor(private el: ElementRef) {
        afterNextRender(() => this.init());
    }

    private init(): void {
        this.canvas = this.el.nativeElement.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d')!;
        this.resize();
        this.generateStars();
        this.animate();

        this.resizeObserver = new ResizeObserver(() => {
            this.resize();
            this.generateStars();
        });
        this.resizeObserver.observe(this.el.nativeElement);
    }

    private resize(): void {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.ctx.scale(dpr, dpr);
    }

    private generateStars(): void {
        const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 3000), 200);
        this.stars = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            speed: Math.random() * 0.3 + 0.05,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinklePhase: Math.random() * Math.PI * 2,
        }));
    }

    private animate = (): void => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        this.ctx.clearRect(0, 0, w, h);

        for (const star of this.stars) {
            star.twinklePhase += star.twinkleSpeed;
            const flicker = Math.sin(star.twinklePhase) * 0.3 + 0.7;
            const alpha = star.opacity * flicker;

            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(224, 225, 221, ${alpha})`;
            this.ctx.fill();

            // subtle glow on brighter stars
            if (star.size > 1.2) {
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.08})`;
                this.ctx.fill();
            }

            star.y -= star.speed;
            if (star.y < -5) {
                star.y = h + 5;
                star.x = Math.random() * w;
            }
        }

        this.animId = requestAnimationFrame(this.animate);
    };

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animId);
        this.resizeObserver?.disconnect();
    }
}
