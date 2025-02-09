import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GradientBackgroundDirective } from './directives/gradient-background.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    GradientBackgroundDirective,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'facundo-portfolio';
}
