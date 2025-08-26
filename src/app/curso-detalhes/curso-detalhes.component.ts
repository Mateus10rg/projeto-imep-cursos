// src/app/curso-detalhes/curso-detalhes.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Curso, CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.scss']
})
export class CursoDetalhesComponent implements OnInit {
  curso: Curso | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Pega o 'id' da URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Busca o curso correspondente usando o serviço
      this.curso = this.cursoService.getCursoById(+id); // O '+' converte a string para número
    }
  }

  goBack(): void {
    this.location.back();
  }
}