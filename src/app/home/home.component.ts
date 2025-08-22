import { Component } from '@angular/core';
import { CursoCardComponent } from '../curso-card/curso-card.component'; // Importe o nome correto
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CursoCardComponent ,CommonModule, RouterLink], // Adicione aqui o nome correto
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    { title: 'Informática para Escritório', 
      description: 'Domine as ferramentas que todas as empresas usam. De planilhas a sistemas de gestão, este curso é o seu passaporte para as melhores vagas administrativas.', imageUrl: 'assets/ie.png' },
    { title: 'Eletricista Residencial e Predial', 
      description: 'Aprenda a realizar instalações e manutenções elétricas com total segurança. Um curso prático que prepara você para um mercado com alta demanda por profissionais qualificados.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Contabilidade', 
      description: 'Torne-se indispensável para as empresas, cuidando da saúde financeira e fiscal. Aprenda na prática as rotinas contábeis e abra portas para uma carreira sólida.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Recursos Humanos e Departamento Pessoal', 
      description: 'Aprenda a gerenciar o capital mais importante de uma empresa: as pessoas. Desenvolva habilidades de recrutamento, gestão de equipes e rotinas de departamento pessoal.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Auxiliar de Farmácia', 
      description: 'Prepare-se para trabalhar em um dos mercados que mais crescem no país. Um curso completo para você atuar com excelência no atendimento e organização de farmácias.', imageUrl: 'assets/operador-pc.png' },
    { title: 'Cabeleireiro e Designer de Sobrancelha', 
      description: 'Transforme sua paixão em profissão com as técnicas mais atuais de corte, coloração e design. Conquiste sua independência financeira no aquecido mercado da estética.', imageUrl: 'assets/operador-pc.png' }
  ];

}
