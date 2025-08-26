// src/app/curso-card/curso-card.component.ts
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  @Input() courseId: number = 0; // Recebe o ID
  @Input() courseTitle: string = '';
  @Input() courseDescription: string = '';
  @Input() imageUrl: string = '';
}