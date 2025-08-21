import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../curso-card/curso-card.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursoCardComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  courses = [
    { title: 'Desenvolvimento Web', description: 'Aprenda a criar sites modernos com HTML, CSS e JavaScript.', 
      imageUrl: 'assets/web-dev.jpg' },
    // ... os outros cursos ...
    { title: 'Cloud Computing', description: 'Aprenda a usar serviços de nuvem como AWS, Azure e Google Cloud.',
      imageUrl: 'assets/cloud.jpg' },
  ];


}
