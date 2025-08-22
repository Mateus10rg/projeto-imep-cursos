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
    { title: 'Teste', description: 'Teste', 
      imageUrl: 'assets/operador-pc.png' },
    // ... os outros cursos ...
    { title: 'Teste', description: 'Teste',
      imageUrl: 'assets/operador-pc.png' },
  ];


}
