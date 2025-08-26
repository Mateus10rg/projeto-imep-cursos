// src/app/cursos/cursos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { RouterLink } from '@angular/router';
import { Curso, CursoService } from '../services/curso.service'; // Importe

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursoCardComponent, RouterLink],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {} // Injete o serviço

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos(); // Busque os cursos
  }
}