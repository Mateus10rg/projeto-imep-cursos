import { Component } from '@angular/core';
import { CursoCardComponent } from '../curso-card/curso-card.component'; // Importe o nome correto
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CursoCardComponent ,CommonModule], // Adicione aqui o nome correto
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    { title: 'Desenvolvimento Web', description: 'Aprenda a criar sites modernos com HTML, CSS e JavaScript.', imageUrl: 'assets/ie.png' },
    { title: 'Marketing Digital', description: 'Domine as estratégias para crescer seu negócio online.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Gestão de Projetos', description: 'Gerencie projetos de forma ágil e eficiente.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Design Gráfico', description: 'Crie artes visuais incríveis com as principais ferramentas.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Análise de Dados', description: 'Transforme dados em insights valiosos para a tomada de decisões.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Cibersegurança', description: 'Proteja sistemas e redes contra ameaças cibernéticas.', imageUrl: 'assets/operador-pc.png' }
  ];

}
