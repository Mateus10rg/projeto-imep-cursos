import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CursoCardComponent } from '../curso-card/curso-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CursoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    { title: 'Desenvolvimento Web', description: 'Aprenda a criar sites modernos com HTML, CSS e JavaScript.', imageUrl: 'assets/web-dev.jpg' },
    { title: 'Marketing Digital', description: 'Domine as estratégias para crescer seu negócio online.', imageUrl: 'assets/marketing-digital.jpg' },
    { title: 'Gestão de Projetos', description: 'Gerencie projetos de forma ágil e eficiente.', imageUrl: 'assets/gestao-projetos.jpg' },
    { title: 'Design Gráfico', description: 'Crie artes visuais incríveis com as principais ferramentas.', imageUrl: 'assets/design-grafico.jpg' },
    { title: 'Análise de Dados', description: 'Transforme dados em insights valiosos para a tomada de decisões.', imageUrl: 'assets/analise-dados.jpg' },
    { title: 'Cibersegurança', description: 'Proteja sistemas e redes contra ameaças cibernéticas.', imageUrl: 'assets/ciberseguranca.jpg' }
  ];
}