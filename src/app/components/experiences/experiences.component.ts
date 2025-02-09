import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience, ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  standalone: true,
  selector: 'app-experiences',
  templateUrl: 'experiences.component.html',
  imports: [ExperienceItemComponent],
  providers: [],
})
export class ExperiencesComponent {
  private http = inject(HttpClient);

  public experiences = toSignal(this.http.get<Experience[]>('assets/data/experiences.json'), { initialValue: [] });
}
