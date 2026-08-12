import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, PLATFORM_ID, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import { ThemeService } from '../../core/theme.service';

@Component({ selector: 'app-navbar', templateUrl: './navbar.html', host: { '(document:keydown.escape)': 'closeMenu()' } })
export class Navbar {
  readonly data = PORTFOLIO_DATA;
  readonly theme = inject(ThemeService);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('home');
  readonly scrolled = signal(false);
  readonly scrollProgress = signal(0);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.theme.initialize();
      if (!this.isBrowser) return;
      const updateScroll = (): void => {
        this.scrolled.set(window.scrollY > 24);
        const available = this.document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress.set(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
      };
      window.addEventListener('scroll', updateScroll, { passive: true });
      const closeOnDesktop = (): void => { if (window.innerWidth >= 1024) this.closeMenu(); };
      window.addEventListener('resize', closeOnDesktop, { passive: true });
      updateScroll();
      this.destroyRef.onDestroy(() => { window.removeEventListener('scroll', updateScroll); window.removeEventListener('resize', closeOnDesktop); });
      if (!('IntersectionObserver' in window)) return;
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.activeSection.set(visible.target.id);
      }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.25, 0.5] });
      this.data.navigation.forEach(item => { const section = this.document.getElementById(item.sectionId); if (section) observer.observe(section); });
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
  toggleMenu(): void { this.menuOpen.update(open => !open); }
  closeMenu(): void { this.menuOpen.set(false); }
}
