import { Component, input } from '@angular/core';
import { Project } from '../../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-project-card',
  imports: [RevealDirective],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();
}
