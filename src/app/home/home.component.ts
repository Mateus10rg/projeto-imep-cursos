// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CursoCardComponent } from '../curso-card/curso-card.component';
import { Curso, CursoService } from '../services/curso.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CursoCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  cursos: Curso[] = [];

  // Garanta que você tenha os 4 depoimentos que quer exibir aqui
  depoimentos = [
    {
      texto: 'Atendimento diferenciado, professor muito qualificado, local de fácil acesso próximo a parada de ônibus e bem iluminado. Super recomendo.',
      autor: 'Gislene Marques',
      titulo: 'Ex aluna do IMEP Cursos',
      imagemUrl: 'assets/gislene-marques.png',
      estrelas: 5
    },
    {
      texto: 'Instituição confiável, super recomendo. Professores atenciosos e local bem-estruturado',
      autor: 'Fatima Sousa',
      titulo: 'Ex aluna do IMEP Cursos',
      imagemUrl: 'assets/fatima-sousa.png',
      estrelas: 5
    },
    {
      texto: 'Bem sobre o Curso que estou fazendo na escola, estou conseguindo aprender a cada dia mais, os professores são bem atentos as nossas dúvidas e sabem ensinar muito bem, a qualquer momento estão la disponíveis. Além dos professores o atendimento na escola também e excelente, é nos dando sempre apoio para um aprendizado melhor.',
      autor: 'Bruna Beatriz',
      titulo: 'Aluna do IMEP Cursos',
      imagemUrl: 'assets/bruna-beatriz.png',
      estrelas: 4
    },
    {
      texto: 'É um lugar muito bom, com ótimos profissionais',
      autor: 'Enzo Ramos de Oliveira',
      titulo: 'Ex aluno do IMEP Cursos',
      imagemUrl: 'assets/enzo-ramos.png',
      estrelas: 5
    }
  ];

  private idsDosCursosDestaque: number[] = [2, 4, 5, 6, 3, 7];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    const todosOsCursos = this.cursoService.getCursos();
    const cursosFiltrados = todosOsCursos.filter(curso =>
      this.idsDosCursosDestaque.includes(curso.id)
    );
    this.cursos = cursosFiltrados.sort((a, b) =>
      this.idsDosCursosDestaque.indexOf(a.id) - this.idsDosCursosDestaque.indexOf(b.id)
    );
  }
}