// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { Curso, CursoService } from '../services/curso.service'; // GARANTA QUE ESTA LINHA EXISTE

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CursoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // A lista de cursos agora está vazia e será preenchida pelo serviço
  cursos: Curso[] = [];

  // Injetamos o serviço para poder usá-lo
  constructor(private cursoService: CursoService) {}

  // Quando o componente é iniciado, ele busca os cursos do serviço
  ngOnInit(): void {
    // Usamos .slice(0, 6) para pegar apenas os 6 primeiros cursos para exibir na home
    this.cursos = this.cursoService.getCursos().slice(0, 6);
  }
}