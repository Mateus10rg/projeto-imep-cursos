import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-card', // Nome do seletor é 'app-curso-card'
  standalone: true,
  imports: [],
  templateUrl: './curso-card.component.html',
  styleUrl: './curso-card.component.scss'
})
export class CursoCardComponent {
  @Input() courseTitle: string = '';
  @Input() courseDescription: string = '';
  @Input() imageUrl: string = '';
}