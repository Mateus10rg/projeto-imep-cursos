// Cole este código em src/app/services/curso.service.ts

import { Injectable } from '@angular/core';

export interface Curso {
  id: number;
  nome: string;
  resumo: string;
  descricaoCompleta: string;
  imageUrl: string;
  categoria: string;
  fichaTecnica?: string;
  objetivos?: string;
  conteudo?: { titulo: string; descricao: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: Curso[] = [
    {
      id: 1,
      nome: 'Adobe Flash',
      resumo: 'Tecnologia e Informática',
      // Exemplo com negrito na descrição
      descricaoCompleta: 'Hoje em dia, a <strong>animação gráfica</strong> é, sem dúvida, um dos segmentos mais fascinantes quando aplicada principalmente na Internet. O Flash começou timidamente a entrar neste cenário e a cada dia vem ganhando o seu espaço. Apesar de muitas pessoas acharem que o Flash é um programa voltado exclusivamente para Web, todos os seus recursos podem ser utilizados para a criação de um vídeo e posteriormente ser transferido para o CD-Rom. O Flash é um programa <strong>fácil de ser utilizado</strong> e de alto impacto na produção de animações gráficas e interativas. Ele utiliza vetores e bitmaps e, por causa disso, consegue produzir arquivos de tamanho reduzido, mas visualmente fantásticos.',
      imageUrl: 'assets/11.png',
      // Exemplo com negrito e cor na ficha técnica (usando a cor azul do seu site)
      categoria: 'Tecnologia e Informática',
      fichaTecnica: '<strong>Carga horária:</strong> 24 horas. <br> <strong>Pré-requisitos:</strong> O aluno precisa conhecer o Windows para utilizar um programa <strong>"para Windows"</strong> e precisa ter conhecimento de Internet. <br> <strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <strong>A quem se destina:</strong> O curso de Flash destina-se a pessoas que trabalham ou que pretendem trabalhar com web designer e animações em geral, ou seja, montar sites para a Internet e construir animações para filmes interativos (televisão, CD-Rom, apresentações, banners etc.). Essa é uma das profissões que mais crescem hoje em dia, empregando muitos profissionais na área.',
      objetivos: 'O objetivo do curso é preparar o aluno para utilizar a maioria dos recursos disponíveis no Adobe Flash, habilitando-o a montar animações interativas para páginas e sites de Internet e filmes em geral. Durante o curso, o aluno montará diversos exemplos para utilizar os recursos de animação do programa.',
      conteudo: [
        {
          titulo: 'Lição 01 – Introdução ao Flash',
          descricao: 'O aluno conhecerá o ambiente de trabalho do Flash e aprenderá conceitos fundamentais como: o que é um filme, quais os arquivos gerados pelo Flash, o que são quadros e a Linha de Tempo.'
        },
        {
          titulo: 'Lição 02 – Desenhando no Flash',
          descricao: 'Nesta aula o aluno aprenderá a usar as ferramentas disponíveis no Flash para desenhar.'
        },
        {
          titulo: 'Lição 03 – Animações e Camadas',
          descricao: 'Essa é uma das atividades mais importantes do curso. O aluno aprenderá a trabalhar com os diversos recursos de animação do programa, além de aprender a trabalhar com a Linha de Tempo e conhecer os princípios básicos para se criar uma animação. O aluno aprenderá também a manipular as camadas do programa.'
        },
        {
          titulo: 'Lição 04 – Interpolação e Símbolos',
          descricao: 'O aluno aprenderá a criar símbolos gráficos e clipes de filme. E também a inserir animações interpolada do tipo movimento clássica e forma.'
        },
        {
          titulo: 'Lição 05 – Guias e Máscaras',
          descricao: 'O aluno aprenderá a trabalhar com camada guia e máscara de camada, dois recursos que trazem uma série de efeitos interessantes. Além disso, aprenderá a usar o painel Alinhar.'
        },
        {
          titulo: 'Lição 06 – Mais Símbolos e Cores',
          descricao: 'Nesta atividade o aluno aprenderá a manipular a biblioteca de símbolos do Flash e a inserir diversos efeitos de cores, interagindo com diversas técnicas e efeitos.',
        },
        {
          titulo: 'Lição 07 – Botões Animados',
          descricao: 'O aluno terá uma atividade sobre a criação de símbolos do tipo Botão.',
        },
        {
          titulo: 'Lição 08 – Explorador de filmes e Ações',
          descricao: 'Nesta atividade o aluno aprenderá a trabalhar com a janela Explorador de filmes e a inserir ações interativas básicas para iniciar a reprodução do filme, parar a reprodução do filme, ir para determinado ponto do filme, etc.',
        },
        {
          titulo: 'Lição 09 – Cenas e Menus',
          descricao: 'Além de aprender sobre o trabalho com cenas, o aluno aprenderá também a criar um menu de opções.',
        },
        {
          titulo: 'Lição 10 – Trabalhando com Sons',
          descricao: 'Esta atividade é inteiramente dedicada à aplicação de sons no filmeinterativo. O aluno aprenderá desde a inserir sons em botões até o controle total de uma trilha sonora em um filme.',
        },
        {
          titulo: 'Lição 11 – Pré-carregar e Publicar',
          descricao: 'Nesta atividade o aluno aprende a criar uma cena de précarregamento do filme e a publicar o seu trabalho final realizado no Flash.',
        },
        {
          titulo: 'Lição 12 – Criando um Banner',
          descricao: 'Para fechar o curso, o aluno cria um banner desde o início até o fim para relembrar todos os conceitos mais importantes aprendidos durante o curso, como a configuração da página, a importação de imagens, a criação das animações e a utilização de ações. Por fim, o aluno publica seu arquivo para ver o resultado de todo o seu trabalho.',
        },
        

      ]

    },


    // FIM DO CURSO 1

    {
      id: 2,
      nome: 'Contabilidade',
      resumo: 'Profissionalizantes',
      descricaoCompleta: 'A contabilidade é uma ciência que ajuda a empresa a registrar todas as movimentações, variações que houver no patrimônio de uma entidade. Utilizada por diversos setores direta ou indiretamente envolvidos com a empresa, para análise ou tomada de decisões em fatos futuros. Como a contabilidade é uma área ampla, com uma grande quantidade de informações, neste curso apresentamos as técnicas básicas que são essenciais para quem deseja iniciar os estudos e futuramente se especializar na área contábil. O curso deve ser considerado como o primeiro passo. Ao concluir o curso, o aluno terá formado sua base de conhecimento, que é essencial para quem está estudando Contabilidade.',
      imageUrl: 'assets/11.png',
      categoria: 'Profissionalizantes',
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas.<br><strong>Pré-requisitos:</strong> Sugere-se ter Ensino Fundamental completo, e o aluno ter noções básicas de Windows.<br><strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila.<br><strong>A quem se destina:</strong> Este curso tem como objetivo automatizar a contabilidade. O aluno aprenderá a registrar as transações de uma empresa que podem ser expressas em termos monetários. Serão ensinados os conceitos de demonstrações financeiras, de resultado do exercício, balanço patrimonial e fluxo de caixa (todos os termos específicos da área contábil).',
      objetivos: 'O aluno aprenderá os principais conceitos de contabilidade, escrituração contábil, livros contábeis, patrimônio, contas, convenções contábeis, regimes de contabilização, custos e despesas, demonstrações financeiras, balanço patrimonial.',
      conteudo: [
        {
          titulo: 'Atividade 1 – Introdução a Contabilidade',
          descricao: 'Terá uma introdução nos seguintes temas: conceitos e funções da contabilidade, pra quem é feita a contabilidade, aplicações, o profissional contábil, pilares da contabilidade, técnicas contábeis, utilidade formal da escrituração contábil e sobre os tipos de empresa.'
        },
        {
          titulo: 'Atividade 2 – Definição de Patrimônio',
          descricao: 'Apresentar ao aluno definições sobre: as primeiras funções da contabilidade, conceito de patrimônio, conceito de bens, conceito de direitos, conceito de obrigações, conceito de patrimônio líquido, conceito de demonstração financeira e período de apresentação das demonstrações financeiras.'
        },
        {
          titulo: 'Atividade 3: Introdução ao Balanço Patrimonial',
          descricao: 'Nesta atividade o aluno terá conhecimento sobre as Primeiras Noções de Balanço Patrimonial, Conceito de Ativo, Conceito de Passivo, O grupo Patrimônio Liquido.'
        }, 
        {
          titulo: 'Atividade 4: Operações de Contas do Balanço Patrimonial',
          descricao: 'Passar para o aluno a influência norte americana sobre a contabilidade brasileira, equações básicas, conceitos de despesas, receitas, resultado e demonstrar a influencia dos resultados entre as despesas e receitas.'
        },
        {
          titulo: 'Atividade 5: Contabilização das Contas de Balanço',
          descricao: 'Vamos apresentar nesta atividade sobre: registro das contas, lançamentos, livros contábeis, como documentar transações, razonetes ou contas T e razão auxiliar ou razonete.'
        },
        {
          titulo: 'Atividade 6: O débito e o credito, livro diário x livro razão',
          descricao: 'Apresenta ao aluno, conceitos de debito e credito, saldo das contas, métodos das partida dobradas, sequencia dos lançamentos contábeis, livro razão e diário, e formulas de lançamentos diários.'
        },
        {
          titulo: 'Atividade 7: Balanço Patrimonial – Grupo de Contas e Plano de Contas',
          descricao: 'O aluno estudará nesta atividade sobre balanço patrimonial onde abrange vários sobre o assunto, eles são: as três divisões do ativo e passivo, conceito de longo e curto prazo na contabilidade, grupos do ativo e do passivo, deduções do ativo e do patrimônio líquido, plano de contas, composição e simplificado do plano de contas, adequar plano de contas a outras atividades, conta sintética e conta analíticas.'
        },
        {
          titulo: 'Atividade 8: CVM e Conciliando as Contas',
          descricao: 'Será exposto ao aluno o que é CVM e Conciliando contas, passando por vario temas como compra e vendas de mercadorias devolução de mercadorias ICMS sobre compras e vendas e balancete de verificação.'
        },
        {
          titulo: 'Atividade 9: Transformando Balancetes em Demonstrações Financeiras e Contabilizando as Despesas',
          descricao: 'Se colocara em vista do aluno de como transformar balancetes em demonstrações financeiras ajudando a empresa saber de sua situação. Será falado nesta atividade assuntos como apurações de resultados e despesas.'
        },
        {
          titulo: 'Atividade 10: A DRE',
          descricao: 'Nesta atividade iremos falar a fundo sobre DRE começando por conceitos básicos, detalhes de informações da DRE até como apurar lucro antes e depois do Imposto de Renda.'
        },
      ]
    }, 


    // FIM DO CURSO 2 

    {
      id: 3,
      nome: 'Marketing Digital',
      resumo: 'Domine as estratégias para crescer seu negócio online.',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ' ',
      fichaTecnica: '',
      objetivos: '',
      conteudo: [

        {
          titulo: '',
          descricao: '.'
        },

        {
          titulo: '',
          descricao: '.'
        },

      ],

    },

    {
      id: 4,
      nome: 'Marketing Digital',
      resumo: 'Domine as estratégias para crescer seu negócio online.',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ' ',
      fichaTecnica: '',
      objetivos: '',
      conteudo: [

        {
          titulo: '',
          descricao: '.'
        },

        {
          titulo: '',
          descricao: '.'
        },

      ],

    },
    {
      id: 5,
      nome: 'Marketing Digital',
      resumo: 'Domine as estratégias para crescer seu negócio online.',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ' ',
      fichaTecnica: '',
      objetivos: '',
      conteudo: [

        {
          titulo: '',
          descricao: '.'
        },

        {
          titulo: '',
          descricao: '.'
        },

      ],

    },
    {
      id: 6,
      nome: 'Marketing Digital',
      resumo: 'Domine as estratégias para crescer seu negócio online.',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ' ',
      fichaTecnica: '',
      objetivos: '',
      conteudo: [

        {
          titulo: '',
          descricao: '.'
        },

        {
          titulo: '',
          descricao: '.'
        },

      ],

    },
    {
      id: 7,
      nome: 'Marketing Digital',
      resumo: 'Domine as estratégias para crescer seu negócio online.',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ' ',
      fichaTecnica: '',
      objetivos: '',
      conteudo: [

        {
          titulo: '',
          descricao: '.'
        },

        {
          titulo: '',
          descricao: '.'
        },

      ],

    },
  ];

  constructor() { }

  getCursos(): Curso[] {
    return this.cursos;
  }

  getCursoById(id: number): Curso | undefined {
    return this.cursos.find(curso => curso.id === id);
  }
}