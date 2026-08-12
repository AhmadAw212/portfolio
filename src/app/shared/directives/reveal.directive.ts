import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Directive, ElementRef, inject, input, OnDestroy, PLATFORM_ID } from '@angular/core';

export type RevealDirection = 'up' | 'none';

@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnDestroy {
  readonly revealDelay = input(0);
  readonly revealDirection = input<RevealDirection>('up');
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  constructor() { afterNextRender(() => this.prepare()); }

  private prepare(): void {
    if (!this.isBrowser || typeof window.matchMedia !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const node = this.element.nativeElement;
    node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
    node.dataset['revealDirection'] = this.revealDirection();
    node.classList.add('reveal-ready');
    this.observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      node.classList.add('reveal-visible');
      this.observer?.disconnect();
    }, { rootMargin: '0px 0px -7%', threshold: 0.08 });
    this.observer.observe(node);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
