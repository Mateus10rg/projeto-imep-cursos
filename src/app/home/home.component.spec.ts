// src/app/home/home.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 1. Importar o SCHEMA
import { HomeComponent } from './home.component';
import { CursoService } from '../services/curso.service';

// Cria um "serviço dublê" para o teste não depender do serviço real
const mockCursoService = {
  getCursos: () => [
    { id: 1, nome: 'Curso Teste 1', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 2, nome: 'Curso Teste 2', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 3, nome: 'Curso Teste 3', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 4, nome: 'Curso Teste 4', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 5, nome: 'Curso Teste 5', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 6, nome: 'Curso Teste 6', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
    { id: 7, nome: 'Curso Teste 7', resumo: 'resumo', descricaoCompleta: '', imageUrl: '', categoria: ['Teste'] },
  ]
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      // 2. Adicionar o SCHEMA aqui para o ambiente de teste
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        // 3. Fornecer o serviço "dublê" para o teste
        { provide: CursoService, useValue: mockCursoService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});