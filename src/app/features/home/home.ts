import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({ selector: 'app-home', imports: [ProjectCard, RevealDirective], templateUrl: './home.html' })
export class Home {
  readonly data = PORTFOLIO_DATA;
}
