import { Component, Input } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  website: string;
  startYear: number | string;
  endYear: number | string;
  description: string;
  technologies: string[];
}

@Component({
  standalone: true,
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
})
export class ExperienceItemComponent {
  @Input() experience!: Experience;
}
