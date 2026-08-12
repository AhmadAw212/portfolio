import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
@Component({
  selector: 'app-footer',
  template: `<footer class="border-t border-slate-200 py-8 dark:border-slate-800">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <p>© {{ year }} Ahmad Awada. Built with Angular.</p>
      <a href="#home" class="font-medium hover:text-cyan-600">Back to top ↑</a>
    </div>
  </footer>`,
})
export class Footer {
  readonly year = new Date().getFullYear();
  readonly data = PORTFOLIO_DATA;
}
