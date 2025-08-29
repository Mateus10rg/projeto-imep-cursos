// src/app/cursos/cursos.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { RouterLink } from '@angular/router';
import { Curso, CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursoCardComponent, RouterLink],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  todosOsCursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  categorias: string[] = [];
  categoriaSelecionada: string = 'Todos';

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.todosOsCursos = this.cursoService.getCursos().sort((a, b) => a.nome.localeCompare(b.nome)); // <-- AGORA É ASSIM
    this.cursosFiltrados = this.todosOsCursos;

    // MUDANÇA 1: Usando 'flatMap' para extrair categorias de dentro dos arrays.
    // O flatMap "achata" todos os arrays de categorias em um só.
    const categoriasUnicas = new Set(this.todosOsCursos.flatMap(curso => curso.categoria));
    this.categorias = [...categoriasUnicas];
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;

    if (categoria === 'Todos') {
      this.cursosFiltrados = this.todosOsCursos;
    } else {
      // MUDANÇA 2: Usando 'includes' para verificar se a categoria do curso CONTÉM a categoria clicada.
      this.cursosFiltrados = this.todosOsCursos.filter(curso => curso.categoria.includes(categoria));
    }
  }
}