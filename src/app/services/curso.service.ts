// Cole este código em src/app/services/curso.service.ts

import { Injectable } from '@angular/core';

export interface Curso {
  id: number;
  nome: string;
  resumo: string;
  descricaoCompleta: string;
  imageUrl: string;
  categoria: string[];
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
      categoria: ['Tecnologia e Informática'],
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
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'A contabilidade é uma ciência que ajuda a empresa a registrar todas as movimentações, variações que houver no patrimônio de uma entidade. Utilizada por diversos setores direta ou indiretamente envolvidos com a empresa, para análise ou tomada de decisões em fatos futuros. Como a contabilidade é uma área ampla, com uma grande quantidade de informações, neste curso apresentamos as técnicas básicas que são essenciais para quem deseja iniciar os estudos e futuramente se especializar na área contábil. O curso deve ser considerado como o primeiro passo. Ao concluir o curso, o aluno terá formado sua base de conhecimento, que é essencial para quem está estudando Contabilidade.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
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
      nome: 'Auxiliar de Farmácia',
      resumo: 'Profissionalizantes / Área da Saúde',
      descricaoCompleta: 'O curso de <strong>auxiliar de farmácia</strong> foi desenvolvido baseando-se nas leis brasileiras, podendo possuir divergências em relação às leis de outros países. Pensando nas reais necessidades do aluno, o estudo proporcionará conhecimentos sobre as técnicas usadas no ambiente de trabalho e métodos de atendimento ao cliente. Aprenderá também conceitos importantes sobre a dispensação de medicamentos e os serviços farmacêuticos, visando sempre a máxima eficiência no atendimento, em prol da saúde da sociedade. Durante as atividades no simulador o aluno encontrará vários vídeos, bem como situações práticas do cotidiano na apostila com o objetivo de maximizar ainda mais seu aprendizado.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas.<br><strong>Pré-requisitos:</strong> Conhecimentos básicos em Windows.<br><strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila.<br><strong>A quem se destina:</strong> Este é um curso destinado a pessoas que trabalham na área farmacêutica ou que pretendem ingressar nesta área.',
      objetivos: 'Este curso tem por objetivo ensinar as atividades básicas que um auxiliar de farmácia deverá realizar no estabelecimento farmacêutico, bem como conhecimentos que são destinados exclusivamente aos farmacêuticos mas que são de grande valia para o seu aprendizado.',
      conteudo: [

        {
          titulo: 'Atividade 1 – Introdução ao curso de Auxiliar de Farmácia',
          descricao: 'Esta atividade apresenta ao aluno, o objetivo do curso e a história do surgimento da área farmacêutica. Passará informações sobre as funções exercidas pelo farmacêutico e pelo auxiliar de farmácia, e também um breve estudo sobre a dispensação de medicamentos.'
        },

        {
          titulo: 'Atividade 2 – Conceitos básicos de farmácia',
          descricao: 'Esta atividade, como o próprio nome diz, apresentará os conceitos básicos da farmácia, tais como: os tipos de estabelecimentos farmacêuticos, definição de remédio, medicamento, fármaco e excipientes, quais são as formas farmacêuticas que os medicamentos são apresentados, embalagem e bula dos medicamentos e, por fim, os tipos de medicamentos.'
        },
        {
          titulo: 'Atividade 3 – Farmacologia e Vias de Administração',
          descricao: 'Esta atividade apresenta a farmacologia com suas principais divisões: a farmacodinâmica e a farmacocinética. Analisa as diferenças entre medicamentos de uso tópico e de uso sistêmico e introduz as várias vias em que os medicamentos podem ser administrados.'
        },
        {
          titulo: 'Atividade 4 – Ética e Legislação Profissional',
          descricao: 'Esta atividade passará ao aluno as competências do auxiliar de farmácia e as mudanças que ocorreram nesses estabelecimentos desde sua criação, tais como: introdução de fármacos, implantação de novas tecnologias, entre outras. O aluno verá também, qual a conduta adequada para que o ambiente farmacêutico seja pautado pela ética profissional e pela cidadania.'
        },
        {
          titulo: 'Atividade 5 – Atendimento ao Cliente',
          descricao: 'Esta atividade traz para o aluno quais conhecimentos serão necessários para o trabalho no balcão, como será feita a recepção do cliente, o fechamento, a prática do pós-venda, qual o atendimento adequado para cada tipo de cliente, como será feita as vendas pela internet etc., ou seja, todas as informações necessárias para a melhor prestação de serviços ao paciente.'
        },
        {
          titulo: 'Atividade 6 – Dispensação de Medicamento',
          descricao: 'Esta atividade mostrará ao aluno a principal tarefa do auxiliar no ambiente farmacêutico: a dispensação de medicamentos. Apresenta as etapas desse processo focando, principalmente, na etapa de orientação ao paciente para os medicamentos isentos e não isentos de prescrição médica. Verá também como será feito o atendimento remoto e o transporte de medicamentos adquiridos por este serviço.'
        },
        {
          titulo: 'Atividade 7 – Aviando a Prescrição Médica',
          descricao: 'Nesta atividade o aluno aprenderá a variedade de receitas disponíveis para cada tipo de medicamento, sejam eles: isentos de prescrição, medicamentos controlados, medicamentos manipulados, dentre outros. Verá também sobre a importância da caligráfica adequada do médico, como é feita a venda de medicamentos controlados por telefone, quais tipos de medicamentos podem ser manipulados, o uso da segunda via da receita médica e o processo para o arquivamento de receitas.'
        },
        {
          titulo: 'Atividade 8 – Prestação de Serviços Farmacêuticos – Parte I',
          descricao: 'Nesta atividade o aluno aprenderá sobre os serviços que podem ser realizados na farmácia, bem como, a estrutura da sala de serviços, e métodos e equipamentos utilizados para a aferição da pressão arterial, aferição da glicemia capilar e a aferição da temperatura corporal. Aprenderá sobre os POPs (Procedimentos Operacionais Padrão), a importância da prevenção e tratamento da diabetes, da hipertensão arterial e da hipotensão arterial.'
        },
        {
          titulo: 'Atividade 9 – Prestação de Serviços Farmacêuticos – Parte II',
          descricao: 'Nesta segunda parte do estudo sobre a prestação de serviços farmacêuticos o aluno aprenderá quais são os métodos e equipamentos utilizadas para a administração de medicamentos via inalação e nebulização, para a perfuração do lóbulo auricular para a colocação de brincos e para a aplicação de medicamentos injetáveis.'
        },
        {
          titulo: 'Atividade 10 – Primeiros Socorros',
          descricao: 'Esta última atividade do curso apresenta os procedimentos mais importantes para casos de acidentes, e o auxiliar de farmácia como um profissional da saúde, deverá sabê-los. A atividade apresenta os conceitos básicos de anatomia e quais os procedimentos de primeiros socorros deverão ser realizados em casos de acidentes.'
        },

      ],

    },

    // FIM DO CURSO 3

    {
      id: 4,
      nome: 'Secretariado',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'O curso de <strong>Secretariado</strong>, é destinado às pessoas que querem trabalhar na área de secretariado, ou que já trabalham nesta área para assessorar executivos nas empresas.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas.<br><strong>Pré-requisitos:</strong> O aluno precisa conhecer Windows e Word Básico.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.</strong>',
      objetivos: 'Este curso tem como objetivo ensinar algumas das habilidades necessárias para assessorar executivos do mundo empresarial e dos negócios. Também iremos ensinar a como automatizar suas tarefas de um jeito mais simples, melhor e mais rapidamente utilizando um computador.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O Secretariado',
          descricao: 'Esta atividade mostrará o que as empresas esperam de um bom profissional de secretariado e os demais tópico abaixo:<li> O Papel do Profissional de Secretariado <li>Ética Profissional <li> O Dia da Secretária <li>Conhecendo a Empresa <li> Organograma de uma Empresa <li> Comportamentos no Primeiro Dia de Trabalho <li> Conhecendo seu Chefe <li> O Período de Adaptação <li> Sua Aprendizagem <li> Organização do Local de Trabalho <li> Os Intangíveis <li> Assédios '
        },

        {
          titulo: 'Atividade 2 – Técnicas Diárias',
          descricao: 'Esta atividade vai ensinar técnicas para os procedimentos rotineiros, conforme mostra os tópicos abaixo:<br><li> Procedimentos Rotineiros <li> O Secretariado e o Correio Eletrônico <li> Criando uma Conta de Correio Eletrônico <li> Configurando e Conhecendo O Outlook <li> Cadastrando os Contatos no Outlook <li> Elaborando um E-Mail <li> Inserindo o Logo e Assinatura em um E-Mail <li> Netiqueta (Etiqueta Online)'
        },
        {
          titulo: 'Atividade 3 – A Agenda',
          descricao: 'Esta atividade ensina o profissional de secretariado a organizar sua agenda e a do seu chefe utilizando o outlook conforme mostra os tópicos abaixo:<br> <li>Conhecendo a Agenda</li><li>Tipos de Agenda</li><li>A Agenda de Compromissos do Gerente</li><li>Agendando Compromissos</li>'
        },
        {
          titulo: 'Atividade 4 – Gerenciando Tarefas',
          descricao: 'Esta atividade vai ensinar o recurso mais valioso para um funcionário e também para a empresa, como “gerenciar o tempo”. Saber administrar bem o tempo no trabalho é um dos diferenciais que podem levar uma pessoa ao sucesso profissional, veja o que será ensinado nos tópicos abaixo:<br> <li>Gerenciando o Tempo</li><li>Delegando Tarefas</li><li>Liderança Secretarial</li><li>As Tarefas com o Microsoft Outlook</li>'
        },
        {
          titulo: 'Atividade 5 – Comunicação',
          descricao: 'Esta atividade vai ensinar como o profissional deverá se comportar no atendimento ao cliente externo e interno, conforme mostra os tópicos abaixo: <br> <li> A Importância da Comunicação</li><li> As Diversas Formas de Se Comunicar</li><li> Escutar, Escutar, Escutar</li><li> Falar, Falar, Falar</li><li> Atendimento ao Cliente</li><li> Recebendo Bem o Cliente</li><li> Recepcionando os Tipos de Clientes</li><li> Atendendo o Telefone</li><li> Ausência do Chefe</li><li> Conversação</li><li> As Queixas e Reclamações</li>'
        },
        {
          titulo: 'Atividade 6 – Gestão e Logística dos Documentos',
          descricao: 'Esta atividade mostra como o profissional irá gerenciar os documentos e correspondências da empresa:<br> <li> A Origem dos Documentos</li><li> A Correspondência Recebida</li><li> O Que é um Arquivo?</li><li> Locais, Mobiliários e Acessórios de Arquivamento</li><li> A Idade dos Arquivos</li><li> Classificação dos Documentos no Arquivo</li><li> Conservação, Restauração e Descarte de Documentos</li><li> Recebimento e Envio de Documentos</li>'
        },
        {
          titulo: 'Atividade 7 – Eventos',
          descricao: 'Esta atividade mostra ao profissional como organizar ou gerenciar eventos de vários tamanhos, conforme mostra os tópicos abaixo: <br> <li> O Evento</li><li> Tipos de Eventos</li><li> Planejamento do Evento</li><li> Organizando uma Reunião Interna</li><li> Detalhes sobre Evento</li><li> A Escolha dos Fornecedores</li><li> Finalizando o Evento</li><li> Cerimonialista e Mestre de Cerimônia</li><li> A Precedência</li><li> Ordem Geral de Precedência entre Bandeiras</li>'
        },
        {
          titulo: 'Atividade 8 – Organizando Viagens de Negócios',
          descricao: 'Esta atividade ensina o profissional de secretariado a organizar uma viagem nacional e internacional, conforme mostra os tópicos abaixo: <br> <li> A Documentação e Visto</li><li> Reserva de Voos e Fuso Horário</li><li> Reservas de Hotel e Traslado</li><li> Locação de Automóvel</li><li> Turismo, Costumes e Feriados Locais</li><li> Celular e Cartão de Crédito no Exterior</li><li> Material Necessário para Viagem</li><li> Providências Durante a Ausência do Executivo</li><li> Usar ou Não uma Agencia de Viagem?</li>'
        },
        {
          titulo: 'Atividade 9 – Gestão Comercial, de Compras e Financeira',
          descricao: 'Esta atividade introduz o profissional nas áreas de comercio exterior, gestão das compras e financeira, conforme mostra os tópicos abaixo: <br> <li> Introdução ao Comercio Exterior e Internacional</li><li> Gestão de Compras e Orçamentos</li><li> Técnicas de Negociação com Fornecedores</li><li> Receber e Avaliar o Serviço ou Produto</li><li> Controle de Estoques</li><li> O Pequeno Caixa</li><li> Introdução a Gestão Financeira</li><li> A Correção Monetária e os Juros</li>'
        },
        {
          titulo: 'Atividade 10 – A Busca pela Vaga de Emprego',
          descricao: 'Depois de todo o aprendizado, esta atividade ensina ao aluno técnicas para conseguir a vaga de secretariado: <br> <li> Onde Buscar a Vaga de Emprego</li><li> Os Tipos de Empresa que você Encontrará</li><li> Dicas de Entrevista</li><li> Como Criar um Currículo</li><li> Formatando o Currículo</li><li> A Carta de Apresentação</li>'
        },


      ],

    },

    // FIM DO CURSO 4

    {
      id: 5,
      nome: 'Gestão de Pessoas',
      resumo: 'Profissionalizantes / Setor Industrial',
      descricaoCompleta: 'O curso de Gestão de Pessoas fornece ao aluno uma visão ampla, abrangente, sobre todos os processos organizacionais que competem a quem gerencia pessoas dentro das organizações, sejam eles gestores funcionais como também colaboradores da área de Recursos Humanos. É um curso que mistura conceitos técnicos de autores de grande influência nesta área com o desenvolvimento de habilidades mais práticas, voltadas para o dia a dia do gestor de pessoas. Além disso, ele também possui uma abordagem que propicia ao aluno uma visão estratégica e tática no que diz respeito ao papel do gestor diante da estratégia da alta direção, do estabelecimento de objetivos e metas organizacionais, resolução de problemas e tomadas de decisão.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Setor Industrial'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br> <strong>Pré-requisitos:</strong> Conhecimentos básicos em Windows. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <strong>A quem se destina:</strong> Voltado tanto para gestores, que já atuam na área, para pessoas que trabalham no setor de Recursos Humanos, como também para pessoas que se interessam pelo assunto e desejam se especializar nesta área e buscar por uma primeira oportunidade no mercado de trabalho.',
      objetivos: 'Proporcionar condições de entendimento da real função da Gestão de Pessoas na organização. Orientar sobre a importância, os desafios e as modernas técnicas da Gestão de Pessoas, visando habilitar o aluno a atingir os objetivos com relação às pessoas que compõem a organização na qual o aluno atua ou irá atuar.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução à Administração',
          descricao: 'Esta atividade introdutória visa definir conceitos de Administração e cita as habilidades e funções do administrador. Termina ressaltando o líder motivador.'
        },

        {
          titulo: 'Atividade 2 - Administração de Recursos',
          descricao: 'Esta atividade fala sobre a empresa e seus recursos, o assunto gira em torno da pergunta: “Pessoas são recursos ou parceiras?”. Ainda explica os conceitos de Cultura Organizacional.'
        },
        {
          titulo: 'Atividade 3 - A Gestão de Pessoas',
          descricao: 'Esta atividade conta sobre a evolução da Gestão de Pessoas e descreve bem o que ela significa.'
        },
        {
          titulo: 'Atividade 4 - Processos de Agregar Pessoas',
          descricao: 'Esta atividade ensina como o processo de Gestão de Pessoas determina quem deve trabalhar na organização. É explicado os mecanismos utilizados pelas organizações para recrutar e selecionar colaboradores.'
        },
        {
          titulo: 'Atividade 5 - Processos de Aplicar Pessoas',
          descricao: 'Esta atividade visa posicionar o candidato contratado, integrando e orientando sobre sua real função na empresa. Trata de Desenho e Análise dos Cargos e ensina sobre a Avaliação de Desempenho.'
        },
        {
          titulo: 'Atividade 6 - Processos de Recompensar Pessoas',
          descricao: 'Esta atividade explica sobre o grupo de processos de recompensar pessoas. Ela irá tratar de definir e dar exemplos de conceitos como Remuneração, Benefícios e Incentivos.'
        },
        {
          titulo: 'Atividade 7 - Processos de Desenvolver Pessoas',
          descricao: 'Esta atividade mostra mecanismos da gestão que levam as pessoas ao crescimento profissional. O foco é estudar Treinamento e Desenvolvimento de colaboradores e a gestão de mudanças na organização.'
        },
        {
          titulo: 'Atividade 8 - Processos de Manter Pessoas',
          descricao: 'Esta atividade está relacionada a processos voltados para Disciplina, Higiene, Segurança, Qualidade de vida no trabalho e Relações com sindicato. Envolve ações ligadas ao esforço que as organizações fazem para reter os talentos, ou seja, para manter seus colaboradores.'
        },
        {
          titulo: 'Atividade 9 - Processos de Monitorar Pessoas',
          descricao: 'Os assuntos dessa atividade são: Banco de Dados, Sistemas de Informação Gerenciais e Auditoria em RH. São processos voltados para o monitoramento das pessoas.'
        },
        {
          titulo: 'Atividade 10 - Palavras Finais',
          descricao: 'Esta atividade conta com um resumo de tudo o que foi estudado durante o curso e busca fazer o aluno sedimentar os conhecimentos que obteve, de forma a fixar melhor o aprendizado. No final, são dadas dicas para que o aluno consiga atingir o objetivo de conquistar a tão sonhada vaga no mercado de trabalho.'
        },

      ],

    },

    // FIM DO CURSO 5
    {
      id: 6,
      nome: 'Digitação Adulta',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Digitação Adulta</strong> foi criado com o objetivo de suprir as necessidades do aluno que possui uma certa dificuldade em digitar de forma rápida e correta.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 60 horas.<br />\n<strong>Pré-requisitos:</strong> Nenhum.<br />\n<strong>A quem se destina:</strong> A qualquer pessoa que estiver interessada em desenvolver a habilidade de digitar rápido e de maneira correta.',
      objetivos: 'O objetivo deste curso é o desenvolvimento da habilidade em digitação. O que envolve digitar rápido e de maneira correta. Durante o curso o aluno desenvolve esta habilidade de maneira agradável usando um programa desenvolvido especialmente para o treino e o aperfeiçoamento da digitação: a Digitação Avançada.',
      conteudo: [

        {
          titulo: 'Dinâmica do curso:',
          descricao: 'O curso possui 266 lições para treinamento, sendo que estas se dividem em várias fases. Cada fase tem por objetivo treinar o aluno progressivamente no reconhecimento do teclado e na velocidade da digitação. Os exercícios incluem treinamento do teclado alfanumérico, numérico, digitação de palavras acentuadas, uso dos símbolos do teclado alfanumérico e digitação de frases.'
        },

      ],

    },
    // FIM DO CURSO 6
    {
      id: 7,
      nome: 'Ferramentas e Acessórios',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Descrição longa e detalhada sobre Marketing Digital...',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 8 horas. <br> <strong>Pré-requisitos:</strong> O aluno precisa conhecer o Windows. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'O curso de <strong>Ferramentas e Acessórios</strong> é destinado às pessoas que querem conhecer mais sobre o Sistema Operacional Windows, explorando os softwares que vêm instalados por padrão.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O aplicativo Paint',
          descricao: 'Esta atividade ensina a usar os recursos do Paint para a criação de desenhos:<br> <li> A edição de imagens <li> As ferramentas de desenho do Paint <li> Como salvar arquivo no Paint <li> A criação de uma imagem <li> Como inserir um texto na Imagem <li> Mais ferramentas'
        },

        {
          titulo: 'Atividade 2 – Baixando arquivos',
          descricao: 'Esta atividade ensina a fazer downloads de arquivos da internet: <br> <li> O que é um download? <li> Os benefícios e prejuízos de um download <li> Como fazer um download <li> Dicas para uma maior segurança <li> Como baixar arquivos com o navegador Google Chrome <li> A troca de arquivos com outros usuários'
        },
        {
          titulo: 'Atividade 3 – Reduzindo o tamanho dos arquivos',
          descricao: 'Esta atividade ensina a compactar e descompactar arquivos através do WinRAR: <br> <li> O que é compactação e descompactação <li> Como baixar e instalar o WinRAR <li> A janela do WinRAR <li> A compactação de arquivos utilizando a janela do WinRAR <li> A compactação de arquivos usando o menu rápido do Windows <li> Como compactar um grupo de arquivos através do menu rápido do Windows <li> A descompactação de arquivos com o WinRAR <li> A descompactação de arquivos utilizando o menu rápido <li> Como extrair apenas alguns arquivos da compactação <li> Compactar e descompactar arquivos ZIP no Windows 10'
        },
        {
          titulo: 'Atividade 4 – Criando um filme',
          descricao: 'Esta atividade ensina a criar um filme utilizando o aplicativo Fotos:<br><li> O que é o Editor de Fotos? <li> Como baixar e instalar o aplicativo Fotos <li> As primeiras impressões do Editor de Vídeos <li> Importando seus vídeos e fotos <li> Organizando seus arquivos digitais <li> O recurso automático <li> Introdução <li> Alterar o formato da tela <li> Girar, cortar e dividir vídeos <li> Como inserir sons no filme <li> Como aplicar movimentos <li> Os Filtros <li> Como inserir textos'
        },
        {
          titulo: 'Atividade 5 – Segurança na internet',
          descricao: 'Esta atividade ensina a utilizar o antivírus AVG e Windows Defender que já vem instalado por padrão no Sistema Operacional Windows:<br> <li> O antivírus <li> A escolha do antivírus <li> Como instalar o antivírus AVG <li> A janela principal do AVG e seus recursos <li>  Como atualizar o antivírus <li> Como testar a instalação <li> A verificação do computador <li> O Windows Defender'
        },

      ],

    },
    // FIM DO CURSO 7
    {
      id: 8,
      nome: 'Hotelaria',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'O curso livre de Hotelaria ensina de forma simples e direta sobre os setores de um hotel e suas funções, para que o futuro profissional de hotelaria saiba o que deve acontecer a um hóspede desde o momento em que ele realiza sua reserva até a hora em que deixa o hotel. Por que deve estudar hotelaria? Porque vivemos a era da prestação de serviços e da expansão do turismo. Poucos segmentos devem concentrar tantas ofertas de trabalho no novo século.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 14 horas.<br> <strong>Pré-requisitos:</strong> Não há pré-requisitos.<br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila.<br> <br> <strong> A quem se destina: </strong> A pessoas que desejam trabalhar na área de hotelaria, ou que já atuam nesta área e queiram se adaptar à realidade do mercado hoteleiro, que está exigindo cada vez mais mão-de-obra qualificada, capaz de atender e satisfazer uma demanda cada dia mais exigente.',
      objetivos: 'Preparar o aluno para trabalhar em um hotel, conhecendo brevemente cada um de seus principais setores.',
      conteudo: [

        {
          titulo: 'Lição 01 – Introdução a Hotelaria',
          descricao: 'A lição inicial mostra a importância do profissional bem qualificado de hotelaria, como surgiu a hotelaria no mundo e os vários tipos de hotéis que existem.'
        },

        {
          titulo: 'Lição 02 – A Entrada do Hotel',
          descricao: 'Conheça os setores que atuam na entrada do hotel: reservas, recepção, portaria social e telefonia; e como estes setores devem cuidar do hospede de sua entrada até sua saída do hotel.'
        },
        {
          titulo: 'Lição 03 – O Setor de Governança',
          descricao: 'Aprenda sobre e porque o setor de governança do hotel é tão importante e quais são os funcionários que trabalham nele: a governanta e as camareiras. Também aprendemos aqui como deve ser o apartamento de um hotel e como deve ser feito o trabalho da equipe de limpeza.'
        },
        {
          titulo: 'Lição 04 – Setor de Alimentos e Bebidas',
          descricao: 'Esta lição ensina sobre o restaurante do hotel: como deve ser atendimento no restaurante, quais são as pessoas que trabalham neste setor e como elaborar um cardápio de qualidade.'
        },
        {
          titulo: 'Lição 05 – A Cozinha do Hotel',
          descricao: 'Como deve ser uma cozinha de hotel, quem são os profissionais que trabalham ali, e os cuidados com a manipulação dos vários tipos de alimentos e a higiene que deve existir.'
        },
        {
          titulo: 'Lição 06 – Outros Setores do Hotel',
          descricao: 'Esta lição fala de cinco setores diferentes: copa, room-service, confeitaria, bar e stewarding.'
        },
        {
          titulo: 'Lição 07 – Lazer, Eventos e Marketing',
          descricao: 'Como menciona o próprio nome da lição, aprendemos aqui sobre esses três setores: lazer, eventos e marketing e qual a importância de cada um dentro do ambiente hoteleiro.'
        },

      ],

    },
    // FIM DO CURSO 8

    {
      id: 9,
      nome: 'Matemática Financeira',
      resumo: 'Tecnologia e Informática / Comércio e Serviços',
      descricaoCompleta: 'A matemática financeira é uma ferramenta que ajuda o indivíduo a tomar decisões corretas do ponto de vista financeiro. Tanto no aspecto pessoal quanto no aspecto profissional, esta ferramenta pode auxiliar na administração do dinheiro. A matemática financeira ajuda a empresa a realizar um gerenciamento adequado dos recursos financeiros. Por meio desta ferramenta, os dados financeiros são organizados e fornecem uma análise que facilita a tomada de decisões. Como a matemática financeira é uma área ampla, com uma grande quantidade de informações, fórmulas e conceitos, neste curso apresentamos as ferramentas básicas que são essenciais para quem deseja iniciar os estudos e futuramente se especializar na área financeira.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 16 horas. <br> <strong>Pré-requisitos:</strong> Conhecimentos do sistema operacional Windows e do <strong>Microsoft Excel</strong>. Conhecimentos das operações básicas da matemática: soma, subtração, multiplicação, divisão e potenciação. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Pessoas de qualquer profissão que desejam aprender a administrar melhor o dinheiro e ter conhecimentos da área financeira',
      objetivos: 'Demonstrar as ferramentas básicas essenciais da matemática financeira. Auxiliar pessoas e empresas a tomar decisões acertadas no que diz respeito à utilização do dinheiro.',
      conteudo: [

        {
          titulo: 'Atividade 1: Introdução à matemática financeira',
          descricao: 'Objetivo da aula: apresentar os conceitos iniciais e termos financeiros que serão utilizados durante todo o curso. Demonstrar a importância do conhecimento da matemática financeira como uma ferramenta que auxilia a administração do dinheiro.'
        },

        {
          titulo: 'Atividade 2: Porcentagem, HP12C e fluxo de caixas',
          descricao: 'Objetivo da aula: demonstrar o funcionamento da calculadora HP 12C e ensinar a trabalhar com porcentagem e fluxo de caixa. Todos esses recursos serão empregados durante o estudo das outras atividades.'
        },
        {
          titulo: 'Atividade 3: Regimes de capitalização/juros simples',
          descricao: 'Objetivo da aula: esta atividade conceitua o regime de capitalização simples e apresenta as fórmulas e os elementos envolvidos nas operações de juros simples.'
        },
        {
          titulo: 'Atividade 4: Juros compostos',
          descricao: 'Objetivo da aula: no Brasil, o regime de juros compostos é utilizado na maior parte das operações financeiras. Esta atividade apresenta os cálculos envolvidos neste regime. O aluno aprende a utilizar a calculadora HP12C e o Microsoft Excel para calcular valor futuro, valor presente, taxa, período e juros.'
        },
        {
          titulo: 'Atividade 5: Taxas',
          descricao: 'Objetivo da aula: muitas operações financeiras trabalham com diversas taxas. Esta atividade apresenta algumas das taxas mais utilizadas no sistema financeiro: taxas proporcionais, equivalentes, nominal, efetiva, over, acumulada, real e média.'
        },
        {
          titulo: 'Atividade 6: Desconto simples',
          descricao: 'Objetivo da aula: apresenta o conceito e exemplos de títulos de crédito e ainda uma operação muito utilizada pelas empresas para realizar a antecipação de recursos financeiros: o desconto simples. Este recurso é utilizado para descontar títulos com vencimentos em curto e médio prazo. São descritos os dois tipos de descontos simples: racional, ou por dentro, e bancário, comercial, ou por fora.'
        },
        {
          titulo: 'Atividade 7: Desconto composto',
          descricao: 'Objetivo da aula: também empregado com o intuito de antecipação de recursos financeiros, esta atividade apresenta o desconto composto. Este recurso é utilizado quando se deseja descontar títulos com vencimentos em longo prazo. São descritos os dois tipos de descontos composto: racional, ou por dentro, e bancário, comercial, ou por fora.'
        },

      ],

    },
    // FIM DO CURSO 9
    {
      id: 10,
      nome: 'Cuidador de Idosos',
      resumo: 'Profissionalizantes / Área da Saúde',
      descricaoCompleta: 'O curso de <strong>Cuidador de Idosos</strong>, é destinado às pessoas que querem trabalhar na área da saúde na profissão de cuidador de idosos ou que já trabalham nesta área para aprimorar e aprender novas técnicas.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes','Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 15 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Este curso tem como objetivo ensinar algumas habilidades e técnicas essenciais para o cuidado de idosos que possuem limitações motoras, mental e outras.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O processo do envelhecimento',
          descricao: 'Esta atividade mostrará o processo do envelhecimento, as mudanças físicas que fazem parte desse processo e os demais tópico abaixo: <li> Conceito de velhice <li> Mudanças físicas que sucedem ao envelhecimento'
        },
        {
          titulo: 'Atividade 2 – Mudanças psicológicas e emocionais',
          descricao: 'Esta atividade vai ensinar sobre as mudanças normais e patológicas do envelhecimento relacionadas ao conceito emocional e cognitivo. Mostrará possíveis doenças mentais que podem surgir nesse processo e as consequências que podem causar na vida do idoso, conforme mostra o tópico:<li> Cognitivo, emocional e comportamento'
        },
        {
          titulo: 'Atividade 3 – A dependência e suas manifestações',
          descricao: 'Esta atividade ensina o profissional cuidador de idosos não apenas as doenças que são comuns no processo de envelhecimento, mas as limitações que elas podem causar ao realizar atividades diárias, além dos tipos de dependência que vem como consequências dessas limitações, conforme mostra no tópico abaixo: <li> Desafios do envelhecimento'
        },
        {
          titulo: 'Atividade 4 – O perfil do cuidador',
          descricao: 'Esta atividade ensina as funções do cuidador de idosos e as habilidades e qualidades necessárias para ser um bom profissional nessa área. Conteúdo exposto no tópico:<li> O cuidador'
        },
        {
          titulo: 'Atividade 5 – Nutrição',
          descricao: 'Esta atividade ensina que com o envelhecimento, é necessário manter atenção ao peso da pessoa idosa para avaliação nutricional. A alimentação deve ser rica em nutrientes seguindo as recomendações da nutricionista de acordo com as necessidades do paciete. Ensina também dicas de higiene e preparo correto das refeições da pessoa idosa, além das recomendações de uma boa hidratação, conforme mostra os tópicos abaixo:<li> Envelhecimento e nutrição <li> Refeições'
        },
        {
          titulo: 'Atividade 6 – Alimentação incorreta',
          descricao: 'Esta atividade mostra possíveis problemas que podem ocorrer durante uma alimentação incorreta e como agir quando acontece situações de disfagia, diarreia, constipação, flatulência, diabetes, náuseas e vômitos. Veja no tópico: <li> Aliviando sintomas'
        },
        {
          titulo: 'Atividade 7 – Alimentos e utensílios técnicos',
          descricao: 'Esta atividade mostra ao profissional a importância de obserar todas as informações dos rótulos dos produtos de forma a seguir as orientações nutricionais recomendadas para a pessoa idosa, a forma correta de comprar, higienizar e armazenar os produtos e os utensílios técnicos recomendados para pessoas com limitações motoras, promovendo maior independência durante a alimentação, conforme mostra os tópicos abaixo: <li> Compra e armazenamento de alimentos <li> Utensílios técnicos para a alimentação'
        },
        {
          titulo: 'Atividade 8 – Dieta e alimentação',
          descricao: 'Esta atividade ensina sobre o uso da sonda e suas variações. Mostra também os tipos de alimentação que podem ser administradas por sonda enteral, como realizar essa administração, seu preparo correto e os cuidados com a higiene durante esse processo, conforme mostra os tópicos abaixo:<li> Dieta enteral <li> Fórmulas caseiras ou industrializadas <li> Cuidados e higienização no preparo da dieta enteral'
        },
        {
          titulo: 'Atividade 9 – Administração da dieta enteral',
          descricao: 'Esta atividade alerta ao profissional de cuidador de idosos, sobre as possíveis intercorrências que podem ocorrer durante a administração da dieta enteral e os cuidados extras que devem ser devidamente seguidos para minimizar o risco de infecção e outros problemas durante esse processo, conforme mostra os tópicos abaixo:<li> Administração <li> Intercorrências <li> Cuidados extras'
        },

      ],

    },
    
    // FIM DO CURSO 10
    {
      id: 11,
      nome: 'Marketing Digital',
      resumo: 'Profissionalizantes',
      descricaoCompleta: 'Aborda as vantagens do <strong>marketing tradicional</strong> e do <strong>digital</strong>, criação de estratégias digitais, criação de personas, inbound e marketing de conteúdo, estruturar seu site de vendas, trafego pago versus orgânico e SEO para trafego orgânico. Sobre marketing de busca, tráfego pago e o uso de palavras-chave para melhorar a visibilidade online',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes'],
      fichaTecnica: '<strong>Carga horária média:</strong> 12 horas. <br> <strong>Pré-requisitos:</strong> não há pré-requisitos. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br><br> <strong>A quem se destina:</strong> Para quem pretende aprender a atuar nesse ramo e aproveitar as estratégias digitais para divulgar algum produto, marca ou serviço.',
      objetivos: 'Alcançar, envolver e converter clientes. O principal objetivo do curso de marketing digital é alcançar, envolver e converter clientes por meio de canais online, aproveitando as oportunidades oferecidas pela internet e tecnologias digitais.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Marketing Digital',
          descricao: 'Esta atividade é uma introdução ao Marketing Digital, nela é possível conhecer vantagens das abordagens: tradicional e digital. Apesar de ensinar as duas abordagens, os conceitos são em cima do marketing digital com foco em estratégias, os 4 PS do marketing, recursos digitais, e o perfil do profissional que trabalha ou quer ingressar na área.'
        },

        {
          titulo: 'Atividade 2 – Planejamento estratégico',
          descricao: 'Esta atividade ensina fazer o planejamento estratégico usando a ferramenta SWOT. Além disso, ensina a elaborar um plano de ação de marketing digital focado em seguir as metas estabelecidas para o projeto/empresa.'
        },
        {
          titulo: 'Atividade 3 – Persona de marketing',
          descricao: 'Esta atividade ensina a diferença entre persona e público-alvo e a criar um tipo de persona específico para a venda de produtos.'
        },
        {
          titulo: 'Atividade 4 – O funil de marketing',
          descricao: 'Nesta atividade o aluno aprenderá sobre as etapas do funil de marketing e ainda para chamar atenção do público-alvo e conseguir mais e melhores clientes para sua empresa.'
        },
        {
          titulo: 'Atividade 5 – O inbound e o marketing de conteúdo',
          descricao: 'Esta atividade apresenta ao aluno sobre a diferença de Inbound Marketing e Marketing de conteúdo e como eles se complementam, apresenta dicas de qualificações de Leads no funil de vendas e ainda como criar conteúdo para alcançar mais clientes em potencial.'
        },
        {
          titulo: 'Atividade 6 – Adequação do site',
          descricao: 'Esta atividade ensina ao aluno a importância de criar um site bem estruturado, bem como as características que a página precisa ter para ser, além de fácil de manusear pelos visitantes, adequada ao tipo de loja e produto.'
        },
        {
          titulo: 'Atividade 7 – Marketing de busca',
          descricao: 'Esta atividade ensina o aluno sobre o que é o marketing de busca, o que é e como usar o tráfego pago para expandir sua página web. Também apresentará como utilizar palavras-chave para que seu site fique cada vez mais evidente durante a busca de produtos e serviços.'
        },

      ],

    },
    // FIM DO CURSO 11
    {
      id: 12,
      nome: 'Adobe Illustrator',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Illustrator</strong> apresenta os fundamentos e as ferramentas básicas oferecidas pelo aplicativo. É uma ferramenta profissional, mas muito prática que permite aos iniciantes desenvolverem trabalhos de qualidade sem maiores dificuldades. Este aplicativo possibilita a criação e a manipulação de vários produtos, como: desenhos artísticos, publicitários, logotipos, capas de revistas, livros, CDs, imagens de objetos para aplicação nas páginas de Internet (botões, ícones, animações gráficas, etc.) confecção de cartazes, etc.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 15 horas. <br> <strong>Pré-requisitos:</strong> Introdução à informática e conhecimento sobre o sistema operacional Windows. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br><br> <strong>A quem se destina:</strong> O curso de Illustrator destina-se a pessoas que trabalham principalmente com a arte de criar ilustrações, como: um ilustrador gráfico, ilustrador técnico, designer gráfico ou web designer. Destina-se, especialmente, para alunos que também trabalham ou trabalharão no ramo publicitário, etc.',
      objetivos: 'Seja um ilustrador iniciante, que utiliza os recursos do Illustrator para uso pessoal a fim de realizar trabalhos autônomos, ou um profissional da área criando trabalhos específicos para uma grande empresa, o Corel oferece ferramentas de fácil utilização e de grande eficiência. Sendo assim, o objetivo deste curso é apresentar para o aluno e treiná-lo a utilizar os principais recursos da arte gráfica.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Illustrator',
          descricao: 'Conhecerá o Illustrator e sua janela e o que pode ser criado com ele, a história do mesmo e as suas versões. Conhecerá também as ferramentas Mão e Zoom.'
        },

        {
          titulo: 'Atividade 02 – Trabalhando com Formas',
          descricao: 'Nesta aula o aluno aprenderá desenhar formas, tais como: retângulos, quadrados, elipses, círculos e polígonos.'
        },
        {
          titulo: 'Atividade 03 – Trabalhando com formas irregulares',
          descricao: 'Nesta atividade o aluno aprenderá a utilizar ferramentas para a criação de formas irregulares e também a copiar cores de uma forma para outra.'
        },
        {
          titulo: 'Atividade 04 – Criando um Cartão de visita',
          descricao: 'Nesta atividade o aluno aprenderá a utilizar algumas ferramentas para a criação de um cartão de visita.'
        },
        {
          titulo: 'Atividade 05 – Criando um Banner',
          descricao: 'Nesta atividade o aluno aprenderá a utilizar algumas ferramentas para a criação de um banner.'
        },
        {
          titulo: 'Atividade 06 – Criando um panfleto',
          descricao: 'Nesta atividade o aluno aprenderá a utilizar algumas ferramentas para a criação de um panfleto de propaganda.'
        },
        {
          titulo: 'Atividade 07 – Editando formas com pinceis e ferramentas',
          descricao: 'Nesta atividade o aluno vai aprender a trabalhar com camadas e conhecer os pinceis.'
        },
        {
          titulo: 'Atividade 08 – Trabalhando com gráficos 3D',
          descricao: 'Nesta atividade o aluno aprenderá a criar gráficos em três dimensões.'
        },
        {
          titulo: 'Atividade 09 – Vetorizando imagens',
          descricao: 'Finalizando o curso, esta última atividade vai ensinar o aluno a transformar uma imagem bitmap em um vetor.'
        },

      ],

    },
    // FIM DO CURSO 12

    {
      id: 13,
      nome: 'Banco de Dados SQL',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Conhecimentos em <strong>Bancos de Dados SQL</strong> é conhecido como uma parte essencial na área de TI, não somente na área de TI, mas como em qualquer outra área, afinal sem organização, sem um padrão ou uma lógica correta, não é possível resolver nenhum tipo de problema. Seu papel é muito abrangente, pois através da administração de bancos de dados, é possível resolver diversos problemas para facilitar no dia-a-dia do mercado de trabalho. É uma área que tem crescido muito, uma vez que as organizações estão buscando cada vez mais facilidade, manuseio e rapidez no gerenciamento de seus recursos através de sistemas específicos. O mercado nacional e internacional tem necessidade de profissionais qualificados na área e a procura por pessoas com esse perfil é grande.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 30 horas.<br> <strong>Pré-requisitos:</strong> Não há pré-requisitos para esse curso. Sugere-se ter ensino médio completo (não obrigatório).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.<br> <br><strong>A quem se destina:</strong> Destina-se especialmente para estudantes e profissionais da área de Tecnologia da Informação que queiram se especializar na área de administração de Bancos de dados.',
      objetivos: 'O objetivo do curso livre de Banco de Dados SQL é fornecer uma base de conhecimentos teóricos e práticos. Entretanto, o que fará de você um profissional excelente e realizado com a profissão escolhida, será sua determinação e interesse em manter-se atualizado com as novidades no mundo da tecnologia.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução a Banco de Dados',
          descricao: 'Nesta atividade será definido o objetivo principal do curso e uma breve introdução sobre o que é e como são utilizados bancos de dados'
        },
        {
          titulo: 'Atividade 02 – Normalização do Banco de Dados',
          descricao: 'O aluno estudará um assunto muito importante para quem trabalha com bancos de dados, que é a normalização dos dados, especificamente relacionamentos entre tabelas e chaves.'
        },
        {
          titulo: 'Atividade 03 – Criando um Banco de Dados',
          descricao: 'Nessa atividade o aluno aprenderá a criar o seu primeiro banco de dados e suas tabelas utilizando a linguagem SQL e o software MySQL Workbench.'
        },
        {
          titulo: 'Atividade 04 – Manipulando Dados',
          descricao: 'Nessa atividade o aluno aprenderá a organizar e manipular os dados em um banco de dados, especificamente a inserir, selecionar, alterar e excluir dados.'
        },
        {
          titulo: 'Atividade 05 – Relacionamentos e Visões',
          descricao: 'O aluno aprenderá a relacionar dados entre tabelas, para obter melhores resultados em uma consulta SQL.'
        },
        {
          titulo: 'Atividade 06 – Funções especiais e Subqueries',
          descricao: 'Nesta atividade o aluno aprenderá a respeito das funções especiais existentes na DQL, que é a linguagem de consulta de dados do SQL. Basicamente estaremos falando sobre algumas operações aritméticas e outras ações possíveis de serem realizadas com o comando SELECT, que retorna dados do banco de dados. Também conhecidas como funções de agregação.'
        },
        {
          titulo: 'Atividade 07 – Controle de Acesso',
          descricao: 'Nesta atividade iremos falar um pouco a respeito de controle de acesso ao banco de dados. Está funcionalidade faz parte da DCL que é a Linguagem de Controle de Dados, uma das linguagens que compõe o SQL. O controle de acesso serve para garantir que somente pessoas com autorização, possam realizar operações específicas no banco de dados.'
        },
        {
          titulo: 'Atividade 08 – Transações ACID',
          descricao: 'Nesta atividade o aluno aprenderá outro termo técnico bastante conhecido de quem trabalha com banco de dados, são as transações. Podendo as transações serem ou não ACID. Transações são conjunto de operações a serem realizadas no banco de dados.'
        },
        {
          titulo: 'Atividade 09– Stored Procedure e Triggers',
          descricao: 'Nessa atividade o aluno irá aprender o que são e como são utilizados em um banco de dados Stored Procedures (Procedimentos) e Triggers (Gatilhos), que são dois recursos muito importantes utilizados para administrar um banco de dados.'
        },

      ],

    },
    // FIM DO CURSO 13

    {
      id: 14,
      nome: 'Inteligência Artificial para Todos',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Inteligência Artificial para todos</strong> abordará os vários modelos de IAs e os exemplos de uso no nosso dia a dia.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 5 horas.<br> <strong>Pré-requisitos:</strong> Não há pré-requisitos.<br> <strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de IA para Todos é destinado às pessoas de diferentes áreas e níveis de conhecimento, que tenham interesse em aprender sobre Inteligência Artificial (IA), mas sem a necessidade de conhecimentos prévios em programação ou matemática avançada.',
      objetivos: 'O principal objetivo do curso de Inteligência Artificial é aplicar técnicas e ferramentas de IA para integrar soluções inteligentes em diferentes contextos e transformar processos, produtos e serviços, aproveitando as oportunidades oferecidas pelos avanços tecnológicos e pelos dados disponíveis.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução à Inteligência Artificial',
          descricao: 'Esta atividade é uma introdução à Inteligência Artificial, onde mostraremos o conceito básico do que é uma IA, os tipos de Inteligência Artificial, as principais tecnologias por trás das IAs Generativas e por fim, o primeiro contato com o ChatGPT e o seu uso prático com exemplos de interações, como fazer perguntas, obter respostas e criar conteúdo.'
        },
        {
          titulo: 'Atividade 2 – Introdução ao Gemini',
          descricao: 'Nesta atividade o aluno vai ser apresentado ao Gemini, a IA do Google, seu uso em situações práticas, como essa ferramenta de IA pode ser utilizada para resolver problemas reais ou tarefas típicas de inteligência artificial baseada em análise de dados.'
        },
        {
          titulo: 'Atividade 3 – Conhecendo o Google AI Studio',
          descricao: 'Nesta atividade o aluno conhecerá a plataforma Google AI Studio, suas funcionalidades e como navegar por ela, conhecerá também a galeria de prompts predefinidos ou customizados para treinar modelos de IA e por fim, como usar diferentes tipos de mídia (como texto, imagens, áudio e vídeo) no Google AI Studio.'
        },

      ],

    },
    // FIM DO CURSO 14

    {
      id: 15,
      nome: 'Windows 11',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O <strong>Windows</strong> está presente na maior parte dos computadores, seja para uso pessoal ou profissional. Quem vai começar a usar um computador precisa saber trabalhar bem com ele. O <strong>Windows</strong> é o <strong>Sistema Operacional da Microsoft</strong>. Para começar a trabalhar com textos, desenhos, aplicações técnicas e gráficos primeiro é preciso saber utilizá-lo. Ele suporta, e muito bem, o uso de aplicações como processadores de textos, planilhas, recursos multimídia, programas gráficos, utilitários etc. O <strong>Microsoft Windows 11</strong> é um ambiente de trabalho fácil de usar. Isso ajuda a administrar o trabalho diário realizado no computador. Ele facilita o aprendizado e a utilização de diferentes programas.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br> <strong>Pré-requisitos:</strong> Não há pré-requisitos. O aluno inicia o curso de Windows com uma introdução à informática.<br> <strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Pessoas de qualquer profissão e de qualquer idade podem fazer o curso. Qualquer pessoa que tenha um computador em casa, no trabalho ou na escola (no caso de estudantes) precisa do curso de Windows para começar a aprender informática.',
      objetivos: 'O <strong>Windows</strong> é o <strong>Sistema Operacional</strong> mais utilizado no mundo. Isso significa que a maior parte dos computadores tem o Windows instalado. O objetivo desse curso é ajudar a pessoa a começar a utilizar o seu próprio computador com o Windows, seja em casa, no escritório ou na escola',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Microsoft Windows 11',
          descricao: 'O aluno conhecerá a evolução do Windows e suas edições, aprenderá os conceitos de hardware e software, conhecerá o ambiente do Windows, aprenderá a abrir os programas do computador e, por fim, a ligar e desligar o computador.'
        },
        {
          titulo: 'Atividade 2 – Os aplicativos no Windows 11 e o Recurso Multitarefa',
          descricao: 'O aluno aprenderá a abrir os aplicativos Windows e janelas de programas no Desktop e a trabalhar com elas de forma simples. Conhecerá o recurso multitarefa e como alternar entre os programas abertos e gerenciar suas janelas.'
        },
        {
          titulo: 'Atividade 3 – Navegando na internet',
          descricao: 'Nesta atividade o aluno aprenderá os conceitos básicos sobre a Internet e a navegar com o Microsoft Edge. Aprenderá a navegar através de links, o que é homepage, sites favoritos, configuração de visualização e fará pesquisas na Internet.'
        },
        {
          titulo: 'Atividade 4 – Gerenciando Arquivos',
          descricao: 'Esta é uma atividade de extrema importância para o uso de um computador. Aqui o aluno aprenderá o que são os drives, como as informações ficam gravadas (arquivos e pastas), como visualizar o conteúdo de um disco pelo aplicativo Explorador de Arquivos, além de conhecer as subpastas. Também aprenderá como visualizar a capacidade de armazenamento de um disco e como criar e salvar um arquivo de texto.'
        },
        {
          titulo: 'Atividade 5 – Gerenciando Arquivos e Pastas',
          descricao: 'O aluno aprenderá a organizar os arquivos guardados em seu computador, realizando cópias, movendo, apagando e armazenando os arquivos em pastas separadas. Esta atividade também apresenta detalhes sobre a Lixeira do Windows e as várias maneiras de se apagar e recuperar arquivos. Por fim, são apresentados os métodos para se localizar arquivos em um computador, seja pela busca através do próprio Explorador de Arquivos ou através do Pesquisar.'
        },
        {
          titulo: 'Atividade 6 – A Loja do Windows e a Nuvem',
          descricao: 'Aqui o aluno aprenderá a instalar e remover (gratuitos ou não) os aplicativos da Microsoft Store (Loja do Windows) e também armazenar e gerenciar os arquivos nas nuvens (OneDrive).'
        },
        {
          titulo: 'Atividade 7 – Multimídia',
          descricao: 'Nesta atividade o aluno conhecerá os aplicativos modernos capazes de reproduzir conteúdo multimídia e que já vêm instalados no Windows 11. Aqui ele aprenderá a utilizar os aplicativos padrões do Windows para ver vídeos, ouvir músicas, assistir DVDs de vídeos e ouvir estações de rádio. Além disso, aprenderá a copiar músicas de um CD para o HD e a gravar um CD de áudio e de dados.'
        },
        {
          titulo: 'Atividade 8 – Configuração e manutenção do Windows',
          descricao: 'O aluno aprenderá a utilizar o Painel de Controle do Windows, onde poderá personalizar seu Windows e também fazer a manutenção do computador, como a busca por erros e defeitos. Além do Painel de Controle, apresentaremos também as defesas contra vírus (Windows Defender) a atualizar a sua versão do Windows junto a Microsoft (Windows UpDate).'
        },

      ],

    },
    // FIM DO CURSO 15

    {
      id: 16,
      nome: 'Auxiliar de Consultório Odontológico',
      resumo: 'Área da Saúde',
      descricaoCompleta: 'O curso de <strong>Auxiliar de Consultório Odontológico</strong>, habilita pessoas que desejam exercer a função de secretariar na gestão e auxiliar em consultórios e clínicas odontológicas sempre sob orientação do dentista. <strong>É importante salientar que este curso não tem o registro no CRO, ou seja, este curso não dá direito ao CRO, apenas ajuda a preparar o aluno para conseguir o CRO em entidades que o emitem.</strong>',
      imageUrl: 'assets/11.png',
      categoria: ['Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 36 horas. <br> <strong>Pré-requisitos:</strong> Qualquer pessoa que já finalizou o ensino fundamental.<br> <strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Os recursos utilizados <strong>(apostila, simuladores com vídeos e testes)</strong> têm por objetivo formar um profissional <strong>“auxiliar”</strong> deixando-o apto a trabalhar em hospitais, consultórios e clínicas odontológicas. Durante o curso será mostrado como organizar, limpar o ambiente e esterilização das ferramentas de trabalho do dentista, auxilio na instrumentação e gerenciamento da parte da frente do consultório com foco no atendimento aos pacientes.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O Profissional',
          descricao: 'Nesta primeira aula o aluno aprenderá os requisitos básicos exigidos para um bom auxiliar de consultório e as funções do cargo.'
        },
        {
          titulo: 'Atividade 2 – Rotina Diária',
          descricao: 'Esta atividade ensina toda a rotina diária básica ao abrir e fechar o consultório.'
        },
        {
          titulo: 'Atividade 3 – Atendimento ao Paciente e Atendimento Telefônico',
          descricao: 'Nesta atividade o aluno verá como receber atender o paciente na parte da frente do consultório e por telefone.'
        },

        {
          titulo: 'Atividade 4 – Agendamento de Pacientes',
          descricao: 'O aluno aprende nesta atividade as como fazer um bom agendamento do paciente.'
        },

        {
          titulo: 'Atividade 5 – Equipamentos do Consultório',
          descricao: 'Nesta aula o aluno conhece os equipamentos odontológicos e suas funções básicas.'
        },

        {
          titulo: 'Atividade 6 – Biossegurança e Técnicas de Desinfecção',
          descricao: 'Esta atividade mostra os cuidados com a biossegurança do paciente e dos profissionais e as técnicas de desinfecção.'
        },

        {
          titulo: 'Atividade 7 – Anatomia Dentária',
          descricao: 'Esta atividade mostra ao aluno toda a anatomia dentária.'
        },
        {
          titulo: 'Atividade 8 – Instrumentos Manuais',
          descricao: 'Esta atividade mostra ao aluno todos os equipamentos odontológicos manuais.'
        },
        {
          titulo: 'Atividade 9 – Instrumentos de Mão Rotatórios',
          descricao: 'Esta atividade mostra ao aluno todos os equipamentos odontológicos rotatórios.'
        },
        {
          titulo: 'Atividade 10 – Materiais Dentários',
          descricao: 'Esta atividade mostra ao aluno todos os materiais dentários utilizados nos preenchimentos das restaurações.'
        },
        {
          titulo: 'Atividade 11 – Os Processos de Esterilização dos Artigos e Instrumentos',
          descricao: 'Esta atividade mostra ao aluno todo o processo de limpeza, desinfecção e esterilização dos instrumentos odontológicos.'
        },
        {
          titulo: 'Atividade 12 – A Odontologia a Quatro Mãos',
          descricao: 'Esta atividade mostrará ao aluno como é o trabalho a 4 mãos, ou seja, como ele poderá auxiliar o dentista na sala de atendimento durante o procedimento no paciente.'
        },

      ],

    },
    // FIM DO CURSO 16

    {
      id: 17,
      nome: 'Internet',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Informática Essencial</strong> foi desenvolvido pensando nas reais necessidades de um aluno iniciante. Neste curso, o aluno aprende o essencial a respeito da navegação da <strong>internet</strong>. Preocupamo-nos em mostrá-lo como funciona o acesso à internet e os equipamentos necessários para estabelecer uma conexão, além de ensinar os recursos de webmail, buscas e comunicadores online, tudo isso de forma prática e bem diversificada.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 9 horas. <br><strong>Pré-requisitos:</strong> O aluno precisa ter feito o curso de Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Preparar o aluno para usufruir com facilidade dos navegadores de internet, serviços de webmail, comunicadores online e buscas além de ensinar como a conexão com a internet é estabelecida.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Navegando na Internet',
          descricao: 'Explica-se o que é Rede e Internet, como funciona a conexão com a internet e qual o equipamento necessário para navegar. Em seguida são apresentados os diferentes tipos de conexão. Inicia-se a navegação com o Google Chrome e descreve-se as mensagens de erro dos navegadores.'
        },
        {
          titulo: 'Atividade 2 - Pesquisa na Internet',
          descricao: 'É ensinado como pesquisar por informações com mais eficiência usando dos recursos de pesquisa do Google.'
        },
        {
          titulo: 'Atividade 3 - Os Aplicativos do Google',
          descricao: 'Nesta atividade é mostrado os principais aplicativos que o Google oferece gratuitamente.'
        },
        {
          titulo: 'Atividade 4 - O Webmail',
          descricao: 'Como criar uma conta de e-mail e como utilizá-la.'
        },
        {
          titulo: 'Atividade 5 - Comunicadores Instatâneos',
          descricao: 'São explanados os programas de mensagens instantâneas. É ensinada a instalação do Skype para o Windows Desktop, além de conhecer todos os seus recursos de chat, ligações e videoconferências.'
        },
        {
          titulo: 'Atividade 6 - Segurança',
          descricao: 'Conceitos sobre vírus, antivírus, navegação segura na web e segurança nos e-mails'
        },

      ],

    },
    // FIM DO CURSO 17

    {
      id: 18,
      nome: 'Auxiliar Veterinário - Mód 1',
      resumo: 'Área da Saúde',
      descricaoCompleta: 'O curso de auxiliar veterinário foi desenvolvido pensando na necessidade de conhecimento do aluno de uma estrutura veterinária e prepará-lo para atuar na frente desta, agendando e recebendo o tutor e seu pet com todos os cuidados necessários para o atendimento do médico veterinário.',
      imageUrl: 'assets/11.png',
      categoria: ['Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas. <br><strong>Pré-requisitos:</strong> Nenhum.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Neste primeiro módulo preparar o aluno para trabalhar na parte da frente de uma estrutura veterinária de pequenos animais.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O auxiliar veterinário',
          descricao: 'Nesta primeira atividade será explicado as funções do auxiliar veterinário, as especialidades desta área e os tipos físicos de estruturas que ele encontrará no mercado de trabalho.'
        },
        {
          titulo: 'Atividade 2 – Procedimentos diários',
          descricao: 'Nesta atividade o aluno conhecerá como organizar a estrutura antes do tutor chegar a ela e as rotinas diárias que ele terá que executar desde a abertura até o fechamento.'
        },
        {
          titulo: 'Atividade 3 – Atendimento ao cliente',
          descricao: 'Nesta atividade o aluno verá como atender e interagir com o cliente, seja por telefone ou pessoalmente.'
        },
        {
          titulo: 'Atividade 4 – Gerenciamento',
          descricao: 'Nesta atividade o aluno aprenderá como agendar corretamente um horário para o tutor e seu pet.'
        },
        {
          titulo: 'Atividade 5 – Segurança no trabalho',
          descricao: 'Nesta atividade será mostrado ao aluno os cuidados básicos de segurança e higiene dentro da estrutura veterinária.'
        },
        {
          titulo: 'Atividade 6 – Os equipamentos e a limpeza da estrutura',
          descricao: 'Nesta atividade o aluno aprenderá a higienizar os equipamentos (gaiolas, canis) e também a limpeza da estrutura veterinária.'
        },
        {
          titulo: 'Atividade 7 – Anatomia e fisiologia animal',
          descricao: 'Nesta atividade o aluno terá uma introdução a anatomia e fisiologia de pequenos animais.'
        },
        {
          titulo: 'Atividade 8 – Comportamento animal',
          descricao: 'E já preparando o aluno para o segundo módulo onde ele aprenderá a parte clínica, e já que ele vai manusear estes pequenos animais, ele vai começar a entender o comportamento deles e dar dicas ao tutor de como corrigir alguns comportamentos que podem incomodá-lo em casa.'
        },

      ],

    },

    // FIM DO CURSO 18
    {
      id: 19,
      nome: 'Auxiliar Veterinário - Mód 2',
      resumo: 'Área da Saúde',
      descricaoCompleta: 'O curso de auxiliar veterinário foi desenvolvido em dois módulos pensando na necessidade de conhecimento do aluno de uma estrutura veterinária e prepará-lo para atuar auxiliando tanto na parte da frente e na parte clinica desta.',
      imageUrl: 'assets/11.png',
      categoria: ['Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas. <br><strong>Pré-requisitos:</strong> Primeiro módulo.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Neste segundo módulo, preparar o aluno para trabalhar na parte clínica de uma estrutura veterinária de pequenos animais, auxiliando o médico veterinário no consultório e na sala cirúrgica.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Manuseio e contenção',
          descricao: 'Nesta primeira atividade será explicado os itens de contenção, manuseio de gaiolas e canis, transporte dos animais e a contenção do mesmo auxiliando o médico veterinário nos procedimentos.'
        },
        {
          titulo: 'Atividade 2 – Gestão de animais hospitalizados - parte 1',
          descricao: 'Nesta atividade o aluno conhecerá como deve ser o ambiente de enfermaria dos animais hospitalizados e como monitorar os sinais vitais do mesmo.'
        },
        {
          titulo: 'Atividade 3 – Gestão de animais hospitalizados - parte 2',
          descricao: 'Nesta atividade o aluno conhecerá como fazer os cuidados dos animais que estão hospitalizados na enfermaria, cuidando da higiene e identificando os ectoparasitas.'
        },
        {
          titulo: 'Atividade 4 – Procedimentos clínicos',
          descricao: 'Nesta atividade o aluno aprenderá os procedimentos clínicos básicos para auxiliar o médico veterinário dentro do consultório.'
        },
        {
          titulo: 'Atividade 5 – Habilidades laboratoriais básicas - parte 1',
          descricao: 'Nesta atividade o aluno conhecerá os equipamentos laboratoriais básicos e como é feita a análise do material biológico para a detecção de parasitas.'
        },
        {
          titulo: 'Atividade 6 – Habilidades laboratoriais básicas - parte 2',
          descricao: 'Nesta atividade o aluno aprenderá as técnicas de coleta de sangue, pelos e as técnicas de análise destes e por fim, como deverá ser preparado o transporte das amostras para um laboratório terceirizado e a coleta dos resultados.'
        },
        {
          titulo: 'Atividade 7 – Habilidades cirúrgicas - parte 1',
          descricao: 'Nesta atividade o aluno conhecerá a estrutura básica de um centro cirúrgico, sua limpeza, orientações de higiene pessoal e por fim, as técnicas de esterilização do instrumental.'
        },
        {
          titulo: 'Atividade 8 – Habilidades cirúrgicas - parte 2',
          descricao: 'Nesta atividade o aluno conhecerá os instrumentos e suas funções, técnicas básicas de instrumentação cirúrgica e por fim, como preparar os kits instrumentais e esterilização dos aventais, toalhas e campos cirúrgicos.'
        },
        {
          titulo: 'Atividade 9 – Habilidades cirúrgicas - parte 3',
          descricao: 'Nesta última atividade o aluno conhecerá toda a rotina e técnicas de um procedimento cirúrgico, desde a preparação da equipe cirúrgica e do animal até a alta do mesmo.'
        },


      ],

    },

    // FIM DO CURSO 19

    {
      id: 20,
      nome: 'Adobe Premiere',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de Premiere CC foi desenvolvido pensando nas reais necessidades de um aluno iniciante. Neste curso, o aluno aprende o essencial do programa Premiere (conhece sua estrutura, conceitos de vídeo, criação e edição de projetos utilizando imagens e vídeos) de uma forma prática e produtiva através de completos exemplos.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 30 horas. <br><strong>Pré-requisitos:</strong> Ter feito o curso de Windows e Webdesign..<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do Premiere CC.',
      conteudo: [

        {
          titulo: 'Atividade 1 - O que é Vídeo?',
          descricao: 'A apresentação do programa Premiere CC, quais são os tipos de projetos que podem ser realizados a partir das ferramentas oferecidas por ele e conceitos de vídeo.'
        },
        {
          titulo: 'Atividade 2 – Introdução a Edição de Vídeo',
          descricao: 'Conhecendo o programa Premiere CC e a diferença entre este e o After Effects, irá também conhecer as etapas gerais de trabalho na criação de um vídeo e os produtos oferecidos pela Adobe Creative Cloud.'
        },
        {
          titulo: 'Atividade 3 – Introdução ao Adobe Premiere',
          descricao: 'Criar uma conta Adobe, iniciar o programa Premiere CC e conhecer suas ferramentas básicas e painéis.'
        },
        {
          titulo: 'Atividade 4 – Edição de Vídeo',
          descricao: 'Utilizar ferramentas na edição de vídeo, importar arquivos diversos e aplicar efeitos básicos.'
        },
        {
          titulo: 'Atividade 5 – Animações e Efeitos',
          descricao: 'O aluno aprenderá criar projetos e edita-los utilizando efeitos mais apurados oferecidos pelo programa Premiere e animações.'
        },
        {
          titulo: 'Atividade 6 – Chroma Key',
          descricao: 'O aluno aprenderá o conceito de Chroma Key e como utiliza-lo e configura-lo em seus projetos.'
        },
        {
          titulo: 'Atividade 7 – Áudio',
          descricao: 'Aprende a editar o áudio utilizando as configurações próprias oferecidas pelo programa.'
        },
        {
          titulo: 'Atividade 8 – Trabalhando com textos',
          descricao: 'Aprende a criar textos com tipos diferentes de recursos e aplicar efeitos disponíveis pelo programa, a criar créditos finais no final de projetos e legendas utilizando templates.'
        },
        {
          titulo: 'Atividade 9 – Sequências e Subclipes',
          descricao: 'O aluno conhece formas de criar sequências e a importa-as em projetos novos e já prontos, também aprende como inserir efeitos nestas sequências, aprende também a criar subclipes e a trabalhar com um projeto utilizando o recurso multicâmera, além de aprender a utilizar também o modo de mesclagem.'
        },
        {
          titulo: 'Atividade 10 – Correção de cores e Efeitos de vídeo',
          descricao: 'Nesta atividade o aluno aprende a criar efeitos de iluminação em imagem, fazer correção de cores de forma automática, aprende a aplicar efeitos diversos tipos de efeitos além de trabalhar com o recurso de distorção.'
        },
        {
          titulo: 'Atividade 11 – Transições',
          descricao: 'O aluno aprende a fazer transições de textos e vídeos.'
        },
        {
          titulo: 'Atividade 12 – Publicação',
          descricao: 'Na ultima atividade do curso, o aluno aprende a exportar seus projetos para web, a exporta-lo em formato de vídeo e também a exportar áudio.'
        },

      ],

    },

    // FIM DO CURSO 20

    {
      id: 21,
      nome: 'AutoCAD 3D',
      resumo: 'Tecnologia e Informática / Setor Industrial',
      descricaoCompleta: 'O <strong>AutoCAD</strong> é um software de criação de projetos que oferece diversos recursos para profissionais das mais variadas áreas de desenho técnico.Todos os projetos criados em duas dimensões, num determinado momento se tornarão objetos reais. Esses objetos ocuparão um espaço tridimensional. O desenho em três dimensões fornece ao projetista uma visualização melhor do projeto, ajudando-o na tomada de decisões e na adequação de pequenos detalhes. Além do mais, com os recursos 3D é possível dar ao cliente uma visão mais clara e mais objetiva do produto final do projeto. Neste curso, são apresentadas as ferramentas e os recursos utilizados para desenvolver desenhos tridimensionais',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática', 'Setor Industrial'],
      fichaTecnica: '<strong>Carga horária média:</strong> 30 horas. <br><strong>Pré-requisitos:</strong> O aluno já deve ter feito o curso de AutoCAD 2D ou ter conhecimento do software. É indispensável que o aluno se interesse por desenhos técnicos ou já os conheça.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de AutoCAD 3D destina-se a qualquer pessoa que já trabalhe com o AutoCAD ou que já tenha feito o curso de 2D. É uma excelente oportunidade para que especialistas ou iniciantes aprimorem seus conhecimentos e ampliem sua área profissional abrangendo o desenvolvimento de projetos em três dimensões. A modelagem de projetos em 3D pode atrair mais clientes para o projetista, pois fornece mais detalhes e uma visão mais clara do projeto. Os profissionais que trabalham em qualquer área de desenho técnico podem se beneficiar com a modelagem 3D, sejam eles: arquitetos, engenheiros, projetistas industriais e mecânicos, etc.',
      objetivos: 'Apresentar as ferramentas utilizadas para o desenvolvimento de desenhos técnicos tridimensionais. O conhecimento dessas ferramentas é essencial pra que se possa desenvolver projetos 3D de qualquer área técnica e profissional.',
      conteudo: [

        {
          titulo: 'ATIVIDADE 1 – Introdução ao AutoCAD 3D',
          descricao: 'O aluno vai conhecer os benefícios de se trabalhar com desenhos em 3D, vai se familiarizar com o ambiente de trabalho em três dimensões e entender o sistema de coordenadas tridimensional.'
        },
        {
          titulo: 'ATIVIDADE 2 – Manipulação visual',
          descricao: 'Serão apresentadas as ferramentas necessárias para manipular a visualização do desenho e os estilos de apresentação disponíveis no AutoCAD.'
        },
        {
          titulo: 'ATIVIDADE 3 – O Plano de trabalho e o UCS',
          descricao: 'O aluno vai conhecer o funcionamento do plano de trabalho e os detalhes sobre a manipulação do UCS.'
        },
        {
          titulo: 'ATIVIDADE 4 – Criação de desenhos em 3D',
          descricao: 'Serão apresentados os tipos de desenhos 3D e a criação de desenhos utilizando a modelagem com estrutura de arame. Será iniciado o estudo sobre a utilização de superfícies e apresenta novos detalhes da ferramenta 3D Face, utilizada para criar superfícies. Também demonstra outros comandos de malhas 3D que permitem a criação de formas complexas.'
        },
        {
          titulo: 'ATIVIDADE 5 – Modelagem de sólidos',
          descricao: 'O aluno vai conhecer os comandos que criam sólidos com formas geométricas pré-definidas. Verá também como se faz para criar sólidos complexos a partir de perfis bidimensionais.'
        },
        {
          titulo: 'ATIVIDADE 6 – Manipulando sólidos',
          descricao: 'Esta atividade apresenta alguns comandos que permitem a combinação de formas sólidas através da união, subtração e intersecção dos objetos. A edição de modelos tridimensionais por meio dos grips também será estudada.'
        },
        {
          titulo: 'ATIVIDADE 7 – Comandos de edição 3D – Parte 1',
          descricao: 'O aluno vai conhecer as ferramentas utilizadas para mover, rotacionar, espelhar e alinhar objetos em ambiente 3D. Ferramentas específicas para a manipulação e edição de sólidos também serão apresentadas.'
        },
        {
          titulo: 'ATIVIDADE 8 – Comandos de edição 3D – Parte 2',
          descricao: 'Serão apresentadas as ferramentas que permitem ajustes em modelos sólidos através dos comandos Slice, Fillet e Chamfer. Será descrito como se faz a distribuição de elementos por meio da duplicação de objetos.'
        },
        {
          titulo: 'ATIVIDADE 9 – Trabalhando com cortes e vistas',
          descricao: 'Apresenta recursos que ajudam a obter uma melhor visualização do modelo tridimensional. Será descrito como se faz para criar uma vista utilizando a ferramenta Camera.'
        },
        {
          titulo: 'ATIVIDADE 10 – Renderizando o desenho',
          descricao: 'Nesta atividade o aluno conhece os recursos utilizados para gerar imagens de alta definição dos projetos criados no AutoCAD.'
        },
        {
          titulo: 'ATIVIDADE 11 – Materiais e mapeamento',
          descricao: 'Será apresentado a aplicação de materiais nos objetos, o que permite gerar um projeto com mais realismo. Também será descrito como se faz para ajustar os materiais nos elementos do projeto.'
        },
        {
          titulo: 'ATIVIDADE 12 – Imagens de fundo e luzes',
          descricao: 'O aluno verá com se faz para aplicar uma imagem ou uma combinação de cores ao fundo do projeto. Também conhecerá as ferramentas utilizadas para aplicar efeitos de iluminação no desenho.'
        },
        {
          titulo: 'ATIVIDADE 13 – Cotas, hachura e layout de impressão',
          descricao: 'Será apresentada a utilização das ferramentas de cotas e de hachura em modelos tridimensionais. Os recursos de impressão de desenhos tridimensionais também serão descritos.'
        },

      ],

    },

    // FIM DO CURSO 21

    {
      id: 22,
      nome: 'Word',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Word</strong> foi desenvolvido pensando nas reais necessidades de um aluno iniciante. Neste curso, o aluno aprende o essencial do programa Word (sua estrutura e a criação, formatação e edição de textos) de uma forma prática e produtiva através de completos exemplos de rotinas administrativas.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 12 horas. <br><strong>Pré-requisitos:</strong> Ter feito o curso de Windows.<br><strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do Word.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Word',
          descricao: 'É explorada a funcionalidade do Word, como iniciá-lo no ambiente do Windows e a estrutura da janela do programa. É mostrado como iniciar um documento, digitar um texto, alinhá-lo com um clique e, no final, como salvá-lo.'
        },
        {
          titulo: 'Atividade 2 – Abrindo, selecionando e editando textos',
          descricao: 'Formatando o texto, a ferramenta pincel, os marcadores e os numeradores.'
        },
        {
          titulo: 'Atividade 3 – Formatação de textos',
          descricao: 'Formatando o texto, a ferramenta pincel, os marcadores e os numeradores.'
        },
        {
          titulo: 'Atividade 4 – Os parágrafos e a página',
          descricao: 'A formatação dos parágrafos e a configuração da página.'
        },
        {
          titulo: 'Atividade 5 – Símbolos e edição',
          descricao: 'Os símbolos de texto e a área de transferência (copiando, movendo e colando informações).'
        },
        {
          titulo: 'Atividade 6 – Colunas, quebras e tabelas',
          descricao: 'Como criar texto em colunas, como inserir uma quebra de página ou uma quebra de coluna e Como criar uma tabela.'
        },
        {
          titulo: 'Atividade 7 – Adicionando elementos gráficos',
          descricao: 'A inserção de figuras e Cliparts e como editá-los.'
        },
        {
          titulo: 'Atividade 8 – Visualização e impressão',
          descricao: 'Visualizando a impressão de documentos e configurando corretamente a impressão.'
        },

      ],

    },

    // FIM DO CURSO 22

    {
      id: 23,
      nome: 'Excel',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Excel</strong> foi desenvolvido pensando nas reais necessidades de um aluno iniciante. Neste curso, o aluno aprende o essencial do programa <strong>Excel</strong> (conhece sua estrutura e os passos para a criação, formatação e edição de planilhas eletrônicas inteligentes) de uma forma prática e produtiva por meio de completos exemplos de rotinas administrativas.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 12 horas. <br><strong>Pré-requisitos:</strong>Ter feito o curso de Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do Excel.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Microsoft Excel',
          descricao: 'A apresentação do programa Excel 2019 e os primeiros passos na inserção de dados na planilha.'
        },
        {
          titulo: 'Atividade 2 – Manipulando Planilhas',
          descricao: 'Conhecendo as guias de planilhas e trabalhando com a edição das linhas e colunas.'
        },
        {
          titulo: 'Atividade 3 – Sequências e cálculos',
          descricao: 'Trabalhando com sequências, o recurso autopreenchimento e o autopreenchimento com cálculos.'
        },
        {
          titulo: 'Atividade 4 – Formatação',
          descricao: 'Aplicando formatações às células, incluindo a aplicação de bordas, sombreamento, estilos e a cópia de formatos com a ferramenta pincel de formatação.'
        },
        {
          titulo: 'Atividade 5 – Cópias de Dados',
          descricao: 'As cópias relativas e absolutas e o gerenciamento de uma lista de dados.'
        },
        {
          titulo: 'Atividade 6 – Funções',
          descricao: 'As funções básicas do Excel'
        },
        {
          titulo: 'Atividade 7 – Gráficos',
          descricao: 'Conhecendo, criando e formatando gráficos.'
        },
        {
          titulo: 'Atividade 8 – Modos de Exibição, Ajustes e Impressão',
          descricao: 'Visualizando e configurando a exibição das planilhas. Conhecendo todo o processo de configuração e realização da impressão da planilha.'
        },

      ],

    },
    // FIM DO CURSO 23

    {
      id: 24,
      nome: 'Adobe Indesign',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>InDesign</strong> foi desenvolvido pensando nas reais necessidades do aluno que tem como objetivo aprender a manipular os recursos do programa com a finalidade de criar documentos usando ferramentas de grande utilidade. Documentos estes que podem conter imagens, textos, tabelas e outros conteúdos em forma de revistas, jornais e até livros e que podem ser publicados. Ele estuda a estrutura do programa, as ferramentas que o <strong>InDesign</strong> fornece etc. Tudo isso é feito utilizando exemplos práticos que refletem perfeitamente as situações que o aluno encontrará em seu dia a dia, sendo esse o diferencial de nosso curso!',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong>Ter cursado o Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do InDesign e apresentar com excelência seus documentos como livros e revistas ao público.',
      conteudo: [

        {
          titulo: 'Atividade 01 - Introdução ao InDesign',
          descricao: 'Nesta primeira atividade introdutória o aluno conhecerá o ambiente de trabalho do programa, as funções de cada um dos menus que serão usados para facilitar o trabalho no decorrer do manuseio dos recursos e as várias maneiras de exibir o documento no programa.'
        },
        {
          titulo: 'Atividade 02 – Criando Documentos',
          descricao: 'Será ensinado como criar novos documentos e configurá-los, como por exemplo, tamanho do papel, número de colunas, quantidade de páginas, valores de margem, sangria e espaçador, dentre outros.'
        },
        {
          titulo: 'Atividade 03 – Guias e Grades',
          descricao: 'O aluno aprenderá a alinhar textos e objetos através das grades e guias disponíveis para facilitar a organização dos objetos no documento. Ele também aprenderá a criar objetos como formas, tais como: quadrado, retângulo, losango, elipse etc.'
        },
        {
          titulo: 'Atividade 04 – Páginas-mestre',
          descricao: 'O conteúdo dessa atividade será: criar rodapés e cabeçalhos através das páginas-mestre, além de numeração das páginas e marcadores de seção.'
        },
        {
          titulo: 'Atividade 05 – Quadro de Texto',
          descricao: 'Nesta atividade o aluno aprenderá a criar quadros de textos e formatar fontes como: estilo, tamanho, alinhamento, cor (traçado e preenchimento), espaçamento. Além disso, ele poderá manipular as camadas, criar amostras de cores e aplicar efeitos.'
        },
        {
          titulo: 'Atividade 06 – Importando Textos',
          descricao: 'Será ensinado como importar textos de outros tipos de documentos, organizá-los na página, inserção de linhas da capitular e encadeamento do texto.'
        },
        {
          titulo: 'Atividade 07 – Conhecendo Outros Recursos',
          descricao: 'O aluno aprenderá a localizar e substituir palavras através das ferramentas apropriadas, fazer a verificação ortográfica (automática) do texto, inserir e personalizar marcadores e numeração e também inserir notas de rodapé.'
        },
        {
          titulo: 'Atividade 08 – Tabulações e Estilos',
          descricao: 'O conteúdo dessa atividade é ensinar o aluno a criar tabulações para organizar o conteúdo em forma de tabelas assim como, removê-los e alterar sua posição para criar sumários. Aprenderá também a criar estilos de caractere e parágrafo para facilitar a aplicação da formatação dos textos.'
        },
        {
          titulo: 'Atividade 09 – Utilizando Imagens',
          descricao: 'Nesta atividade o aluno vai aprender a criar gráficos, alterar estilo, espessura dentre outras formatações do traçado e preenchimento. Ele aprenderá a inserir imagens e diferenciar suas extensões, desempenho de exibição e a organização das mesmas utilizando a paleta Texto em contorno.'
        },
        {
          titulo: 'Atividade 10 – Criando Tabela',
          descricao: 'O aluno aprenderá a criar tabelas e organizar textos e objetos dentro das mesmas. Ele aprenderá também a inserir e excluir linhas e colunas, mesclar e formatar células. Verá as funções das ferramentas Conta-gotas e Tema de cor.'
        },
        {
          titulo: 'Atividade 11 – Modelos de Documentos',
          descricao: 'Nesta atividade o aluno aprenderá como trabalhar com um modelo pronto e a modificá-lo, criar um arquivo para servir de modelo e salvá-lo neste formato. Ele vai utilizar a Ferramenta Gradiente para criação de efeitos degrade com cores diferentes e cores com tons diferentes.'
        },
        {
          titulo: 'Atividade 12 – Exportação e Impressão',
          descricao: 'Nesta atividade o aluno vai aprender a exportar o arquivo em PDF alterando suas configurações como compatibilidade, segurança, compactação, dentre outros. Também vai aprender a imprimir o arquivo do InDesign alterando configurações importantes para que o mesmo seja impresso de acordo com a necessidade de quem o utilizará.'
        },

      ],

    },
    // FIM DO CURSO 24

    {
      id: 25,
      nome: 'Powerpoint',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>PowerPoint Essencial</strong> foi desenvolvido pensando nas reais necessidades do aluno que tem como objetivo compreender a criação de apresentações de slides, e ainda, como apresentá-las ao público! Neste curso, o aluno aprende o essencial do programa <strong>PowerPoint</strong>. Ele estuda a estrutura do programa, os recursos que o <strong>PowerPoint</strong> fornece, a manipulação da apresentação e ainda são dadas inúmeras instruções de como realizar uma boa apresentação, seja no âmbito escolar, profissional, religioso etc. Tudo isso é feito utilizando exemplos práticos que refletem perfeitamente as situações que o aluno encontrará em seu dia a dia, sendo esse o diferencial de nosso curso!',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 11 horas. <br><strong>Pré-requisitos:</strong>Ter feito o curso de Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do PowerPoint e apresentar com excelência seus slides ao público.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Microsoft Office PowerPoint',
          descricao: 'Nesta primeira atividade introdutória o aluno conhecerá a evolução dos equipamentos utilizados nas apresentações e quais são os tipos de apresentação de slides. Verá também qual é a finalidade do programa PowerPoint e como abri-lo. Por fim, como abrir um arquivo de uma apresentação no PowerPoint e os seus modos de exibição.'
        },
        {
          titulo: 'Atividade 2 – Criando uma Apresentação',
          descricao: 'Será ensinado do que o slide é composto, como iniciar a criação de uma apresentação e como salvá-la. Serão ensinados o que são os layouts do slide, como funcionam as caixas de texto e como trabalhar com elas. Por fim, como excluir e adicionar slides.'
        },
        {
          titulo: 'Atividade 3 – Editando e Formatando o Slide',
          descricao: 'O aluno aprenderá sobre a edição do texto do slide e como copiar e recortar informações de outro aplicativo (programa). Será estudada a revisão de ortografia e como alterar a aparência do slide aplicando temas e cor no fundo o slide.'
        },
        {
          titulo: 'Atividade 4 – Formatando o Texto da Apresentação',
          descricao: 'O conteúdo dessa atividade será: a importância do texto, o alinhamento do texto, os estilos de texto, o tamanho da fonte e o espaçamento entre as linhas; como criar um WordArt, uma lista de Marcadores e Numeradores e formatá-la. E para finalizar: o que é um SmartArt e como usálo.'
        },
        {
          titulo: 'Atividade 5 – Ilustrando a Apresentação',
          descricao: 'Nesta atividade o aluno conhecerá a inserção de uma imagem online e uma imagem local. Depois, como redimensioná-las, mudar suas posições, ajustar e aplicar efeitos; conhecerá as formas e aprenderá como inseri-las e manuseá-las. Por fim, verá a respeito do organograma.'
        },
        {
          titulo: 'Atividade 6 – Trabalhando com Tabelas e Gráficos',
          descricao: 'Será ensinado como inserir os dados na tabela, inserir uma nova linha, formatar os dados das células, como inserir uma nova coluna na tabela, mesclar e dividir células; os ajustes da largura e altura das colunas e linhas e como inserir imagens na tabela. E para terminar: como copiar tabelas do Excel e o vínculo de dados.'
        },
        {
          titulo: 'Atividade 7 – Animando e Apresentando os Slides',
          descricao: 'O aluno aprenderá sobre a transição de slides, a transição automática e a inserção de sons durante a transição. Também será estudada a numeração de slides, a ordem de exibição e a preparação da exibição dos slides. Por fim, aprenderá a pausar a apresentação, como ocultar ou mostrar um slide e como acrescentar anotações neles.'
        },
        {
          titulo: 'Atividade 8 – Finalizando a Apresentação',
          descricao: 'O conteúdo dessa atividade será: como imprimir os slides e como imprimir anotações e folhetos. Também será mostrado como enviar a apresentação para um CD e, para finalizar, serão dadas dicas valiosíssimas para que o aluno obtenha sucesso em suas apresentações em público.'
        },

      ],

    },
    // FIM DO CURSO 25
    {
      id: 26,
      nome: 'Access',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Nesse curso, exploramos a definição de banco de dados e os seus fundamentos. Conhecemos o seu funcionamento e aplicações, a estrutura do programa <strong>Access</strong>, seus tipos de objetos, ferramentas básicas e como alimentá-lo com informações. Esse curso fornece uma bagagem de conhecimento que pode ser aplicada também quando o aluno se deparar com outros tipos de bancos de dados ou sistemas de gestão. E se a intenção do aluno for criar bancos de dados complexos e usar recursos mais avançados, inclusive recursos online, esse curso servirá como um forte aliado. Nos preocupamos em fazer tudo isso utilizando exemplos práticos, que refletem bem as situações cotidianas.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 12 horas. <br><strong>Pré-requisitos:</strong>Ter feito o curso de Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Dar ao aluno uma visão generalista e ensiná-lo a criar, alimentar, interpretar e analisar bancos de dados. No final, ele será capaz de planejar todo o sistema de cadastro de informações, e ainda, de criar bancos de dados inteligentes de maneira simples e prática.',
      conteudo: [

        {
          titulo: 'Atividade 01 - Introdução ao Microsoft Office Access',
          descricao: 'Nesta introdução será estudada a definição de banco de dados e o programa gerenciador de banco de dados. O aluno conhecerá o programa Access, aprenderá a abri-lo e a utilizar os modelos prontos. Por fim, são vistos os modos de exibição e as possíveis ações com os objetos de um banco de dados.'
        },
        {
          titulo: 'Atividade 02 - Trabalhando Com Uma Tabela - I',
          descricao: 'O aluno aprenderá como criar um novo banco de dados, todo o processo de criação de uma tabela, como definir o tipo de dados dos campos, suas propriedades e a máscara de entrada.'
        },
        {
          titulo: 'Atividade 03 - Trabalhando Com Uma Tabela - II',
          descricao: 'Essa atividade continuará a ensinar sobre as tabelas. Será visto como tratar os campos de dados e será apresentada a estrutura da tabela no Modo Folha de Dados. O aluno começará a inserir registros na tabela e aprenderá como manipulá-los por completo.'
        },
        {
          titulo: 'Atividade 04 - Manipulando a Aparência e os Registros da Tabela',
          descricao: 'Essa atividade finalizará o estudo sobre tabelas. O aluno aprenderá como ajustar a largura das colunas da tabela, ocultar e reexibir uma coluna, alterar a fonte e a classificação dos dados. Além do mais, verá como localizar registros e substituir informações e o muito utilizado filtro. Para finalizar, é ensinado a respeito da visualização, configuração e impressão de uma tabela de dados.'
        },
        {
          titulo: 'Atividade 05 - Trabalhando Com Consultas',
          descricao: 'O aluno verá como criar uma consulta usando o assistente, no Modo Design e com base em um critério.'
        },
        {
          titulo: 'Atividade 06 - Os Relacionamentos',
          descricao: 'Tudo sobre relacionamentos: Relacionamento um-para-um, relacionamento um-para-muitos, como editar um relacionamento e, para finalizar, a integridade referencial.'
        },
        {
          titulo: 'Atividade 07 - Os Formulários',
          descricao: 'O aluno aprenderá o conceito de formulário e verá como criar um formulário padrão, dividido, ou através do assistente.'
        },
        {
          titulo: 'Atividade 08 - Os Relatórios',
          descricao: 'O aluno aprenderá o conceito de relatório, a criação de um relatório básico e através do assistente. Para finalizar, será ensinado como criar uma etiqueta.'
        },

      ],

    },
    // FIM DO CURSO 26
    {
      id: 27,
      nome: 'AutoCAD 2D',
      resumo: 'Tecnologia e Informática / Setor Industrial',
      descricaoCompleta: 'No <strong>AutoCAD</strong> é uma ferramenta avançada de desenho técnico, que substitui a prancheta. Engenheiros, arquitetos e qualquer pessoa que trabalhe com desenhos técnicos encontrarão no <strong>AutoCAD</strong> a ferramenta ideal para desenvolver seus trabalhos. A precisão em termos de dimensionamento, a rapidez e agilidade com que os desenhos são executados, tornaram o <strong>AutoCAD</strong> um dos principais softwares para a criação de desenhos técnicos',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática', 'Setor Industrial'],
      fichaTecnica: '<strong>Carga horária média:</strong> 35 horas. <br><strong>Pré-requisitos:</strong>O aluno já deve ter conhecimento em informática. É indispensável que o aluno se interesse por desenhos técnicos ou já os conheça.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> o curso de AutoCAD 2013 – 2D, destina-se a todo aquele que deseja trabalhar com desenhos técnicos ou aqueles que já trabalham na área e ainda estão no método antigo de desenho (prancheta). Desenho técnico é todo tipo de desenho que necessita de técnicas, dimensionamentos e normas. Eles servem para a criação de projetos nas seguintes áreas:<li> Desenhos para plantas de edificações e construções civil;<li> Desenhos mecânicos de peças para equipamentos industriais;<li> Desenhos de esquemas e layout para eletrônica;<li> Desenhos para circuito elétrico, seja industrial ou residencial.',
      objetivos: 'Apresentar o funcionamento das ferramentas necessárias para criação e edição de desenhos técnicos. Conhecendo estas ferramentas e sabendo como trabalhar com elas, o aluno terá uma boa base para desenvolver os projetos de sua área profissional.',
      conteudo: [

        {
          titulo: 'Atividade 1 – Introdução ao AutoCAD',
          descricao: 'O aluno conhecerá o ambiente de trabalho do AutoCAD, além de ter os primeiros contatos com suas ferramentas. A abordagem de como manipular arquivos (abrir, criar, salvar, fechar) também é explicada nesta atividade.'
        },
        {
          titulo: 'Atividade 2 – Configurando o AutoCAD',
          descricao: 'O aluno conhece as principais configurações que personalizam o ambiente do AutoCAD.'
        },
        {
          titulo: 'Atividade 3 – Manipulação de arquivos',
          descricao: 'Antes de começar a desenvolver um projeto ou mesmo manipular projetos existentes, é muito importante conhecer os níveis de visualização fornecidos pelo programa. A manipulação de ferramentas de zoom é tratada com detalhes nesta atividade. Assim, o aluno terá facilidade em manipular os objetos de seu desenho.'
        },
        {
          titulo: 'Atividade 4 – As Entidades do AutoCAD',
          descricao: 'Nesta atividade o aluno já começa a ter os primeiros contatos com as ferramentas de criação do AutoCAD. Primeiro será apresentado o sistema de coordenadas utilizado no AutoCAD e logo depois algumas ferramentas de desenho. Assim, nesta atividade, o aluno já tem condições de desenvolver seu primeiro desenho.'
        },
        {
          titulo: 'Atividade 5 – Barra de status',
          descricao: 'Depois de ter conhecido algumas ferramentas de criação, é importante conhecer os pontos-chaves do desenho. Conhecendo as ferramentas de precisão e alguns métodos de seleção, o aluno sai dessa atividade com uma visão mais ampla da forma com que um desenho pode ser manipulado.'
        },
        {
          titulo: 'Atividade 6 – Painel Desenhar – Parte 1',
          descricao: 'Muitos projetos exigem o uso de diversas ferramentas de criação fornecidas pelo AutoCAD. Esta é a primeira parte de duas atividades em que o aluno passa a conhecer mais ferramentas de criação para ter condições de desenvolver projetos mais complexos.'
        },
        {
          titulo: 'Atividade 7 – OSNAP',
          descricao: 'Trata do conjunto de ferramentas que permitem capturar com precisão os pontos geométricos dos objetos.'
        },
        {
          titulo: 'Atividade 8 – Painel Modificar – Parte 1',
          descricao: 'Depois de criar o desenho, muitas vezes é necessário efetuar alguma modificação. Esta atividade apresenta as primeiras ferramentas que permitem alterações no desenho.'
        },
        {
          titulo: 'Atividade 9 – Painel Desenhar – Parte 2',
          descricao: 'Esta é uma continuação dos estudos sobre ferramentas de criação. Nesta atividade serão apresentadas as ferramentas: Arco, Polilinha, Multilinha, Spline e Hachura.'
        },
        {
          titulo: 'Atividade 10 – Painel Modificar – Parte 2',
          descricao: 'Esta atividade é uma continuação do estudo das ferramentas utilizadas para alteração do desenho disponibilizadas pelo AutoCAD.'
        },
        {
          titulo: 'Atividade 11 – Painel camadas',
          descricao: 'Organização. Essa é a palavra-chave para tudo que se pretende desenvolver com qualidade e rapidez. Nesta atividade você aprende a organizar seu desenho em camadas e com isso facilitar muito o desenvolvimento de seu projeto, além de permitir que as alterações sejam efetuadas com mais facilidade.'
        },
        {
          titulo: 'Atividade 12 – Criando Textos',
          descricao: 'A atividade ensina a utilizar as ferramentas de textos presentes no AutoCAD para fazer anotações e identificar as partes do desenho.'
        },
        {
          titulo: 'Atividade 13 – Blocos',
          descricao: 'Nesta atividade o aluno aprende a criar e a manipular uma biblioteca de blocos. Este é um recurso interessante do AutoCAD. Ele permite reutilizar partes de um desenho que já existe em outros projetos.'
        },
        {
          titulo: 'Atividade 14 – Sistema de cotagem',
          descricao: 'Sem dúvida nenhuma esta é uma atividade muito importante, pois o aluno aprende a utilizar as ferramentas que o AutoCAD disponibiliza para efetuar o dimensionamento do desenho.'
        },
        {
          titulo: 'Atividade 15 – Tabelas',
          descricao: 'O recurso de criação de tabelas foi inserido no AutoCAD a partir da versão 2005. Nesta atividade o aluno aprende a utilizar este recurso e com isso ganhar tempo na criação de tabelas e legendas.'
        },
        {
          titulo: 'Atividade 16 – Espaço Layout',
          descricao: 'Quando os trabalhos com o desenho são encerrados, chega a hora da impressão do mesmo. Antes de imprimir é possível configurar a página e determinar as vistas e as posições do desenho no papel. É disso que trata esta atividade'
        },
        {
          titulo: 'Atividade 17 – Guia Saída',
          descricao: 'E finalmente a última atividade apresenta como deve ser feita a impressão do desenho e como é possível disponibilizar o desenho para o cliente exportando ele para DWF ou PDF.'
        },

      ],

    },
    // FIM DO CURSO 27
    {
      id: 28,
      nome: 'Adobe Photoshop',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Photoshop</strong> foi desenvolvido pensando nas reais necessidades do aluno que tem como objetivo aprender a manipular os recursos do programa com a finalidade de aplicar efeitos em imagens, criar ações e executá-las de uma única vez em pasta com diversas imagens, além de melhorar e editar a qualidade de imagens. Ele estuda a estrutura do programa, as ferramentas que o Photoshop CC fornece etc. Tudo isso é feito utilizando exemplos práticos que refletem perfeitamente as situações que o aluno encontrará em seu dia a dia, sendo esse o diferencial de nosso curso!',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong>Ter cursado o Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do Photoshop e apresentar com excelência suas imagens editadas ao público.',
      conteudo: [

        {
          titulo: 'Atividade 01 - Introdução ao Photoshop',
          descricao: 'Nesta primeira atividade introdutória o aluno conhecerá a evolução das ferramentas utilizadas na manipulação das imagens, nas reais funções de cada um dos menus que serão usados para facilitar o trabalho no decorrer do manuseio dos recursos do programa.'
        },
        {
          titulo: 'Atividade 02 - Criando e Salvando Arquivos',
          descricao: 'Será ensinado como criar novos arquivos e configurar as opções de cada uma das caixas de diálogo que serão exibidas no decorrer destas criações. Também será ensinado como salvar corretamente estes arquivos e sobre as extensões que o programa oferece.'
        },
        {
          titulo: 'Atividade 03 – Camadas, Canais e Máscaras',
          descricao: 'O aluno aprenderá a manipular as camadas que contém em um arquivo como alterar seus nomes, mudar a ordem das mesmas, criar novas camadas e conhecer sua importância no decorrer da atividade. Também será ensinado como manipular as imagens através dos canais e máscaras.'
        },
        {
          titulo: 'Atividade 04 – Ferramentas de Desenho e Pintura',
          descricao: 'O conteúdo dessa atividade será: carregar pincéis salvos no computador, a redefini-los de forma que o programa fique apenas com seus pincéis padrão, testar alguns destes pincéis alterado por tamanhos, será ensinado também a usar as ferramentas de pintura como Lata de Tinta e o Degradê e como utilizá-los em imagens prontas.'
        },
        {
          titulo: 'Atividade 05 – Ferramenta de Seleção',
          descricao: 'Nesta atividade o aluno aprenderá a fazer seleção de imagens utilizando diversas ferramentas para esta finalidade e sua importância na hora de trabalha com ela e com os demais recursos que o programa oferece.'
        },
        {
          titulo: 'Atividade 06 – Criação de Textos e Estilos de Camadas',
          descricao: 'Será ensinado como inserir textos em imagens prontas e a fazer alterações neste texto como fonte, tamanho, etc. Também será ensinado a criar novos estilos neste texto mudando seu visual e deixando ele com uma aparência completamente nova.'
        },
        {
          titulo: 'Atividade 07 – Matiz e Saturação, Níveis e Curvas',
          descricao: 'O aluno aprenderá a alterar a cor, intensidade e a qualidade das cores de uma imagem usando os recursos de níveis, curvas, matiz e saturação e aprender a função de cada uma dessas ferramentas no decorrer da manipulação dessas imagens.'
        },
        {
          titulo: 'Atividade 08 – Ferramentas de Correção',
          descricao: 'O conteúdo dessa atividade é ensinar o aluno a como corrigir imperfeições em diversos casos, como restaurar uma foto, eliminar manchas e remover objetos de uma imagem.'
        },
        {
          titulo: 'Atividade 09 – Modificando Imagens',
          descricao: 'Nesta atividade o aluno aprenderá a modificar imagens utilizando recursos fáceis de edição como aumentar suas partes, distorcê-la, retirar fundo dentre outras.'
        },
        {
          titulo: 'Atividade 10 – Conhecendo Filtros e Ações',
          descricao: 'O aluno aprenderá a criar efeitos nas imagens usando o menu Filtros que pré-estabelece edições já prontas, além de criar ações com a imagem já modificada e as executá-las diretamente em uma pasta com diversas imagens que também deverão ter estes mesmo efeitos, para que não seja necessário abrir todas as imagens desta mesma pasta e adicionar o efeito em cada uma separadamente, criando assim uma automatização.'
        },

      ],

    },
    // FIM DO CURSO 28
    {
      id: 29,
      nome: 'Adobe Fireworks',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>Adobe Fireworks</strong> é a solução para produção e projetos gráficos profissionais na Web. Podemos usar o <strong>Fireworks</strong> para criar, editar e animar imagens gráficas na Web, adicionar interatividade avançada e otimizar imagens em um ambiente profissional.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas. <br><strong>Pré-requisitos: </strong>O aluno precisa conhecer o Windows e saber navegar na Internet. É também recomendável que tenha noções da linguagem de programação para a Web: HTML.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de Fireworks destina-se a pessoas que trabalham ou que pretendem trabalhar com designer para a Web, ou seja, montar sites para a Internet. Essa é uma das profissões que mais crescem hoje em dia, empregando muitos profissionais na área.',
      objetivos: 'O objetivo do curso é preparar o aluno para utilizar a maioria dos recursos disponíveis no Fireworks, habilitando-o a criar páginas e sites para a Internet, de forma fácil e eficiente, sem programação.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Fireworks',
          descricao: 'O aluno conhecerá o ambiente de trabalho do Fireworks com seus menus, ferramentas e modos de visualização.'
        },
        {
          titulo: 'Atividade 02 – Edição de Bitmap e Vetoriais',
          descricao: 'Nesta aula o aluno aprenderá a usar algumas ferramentas de tratamento de imagens bitmap, como fotografias e os objetos vetoriais que podem ser desmontados e movidos, modificados ou mesmo apagados facilmente.'
        },
        {
          titulo: 'Atividade 03 – Trabalhando com Camadas',
          descricao: 'As camadas são como folhas de papel vegetal separadas, umas sobre as outras, onde você pode criar e guardar objetos. As camadas podem ser muito úteis para organizar seu trabalho de criação no Fireworks ao trabalhar com layouts complexos.'
        },
        {
          titulo: 'Atividade 04 – Trabalhando com Textos',
          descricao: 'Nesta atividade o aluno aprende a digitar e alterar as propriedades de textos através do inspetor de propriedades do Fireworks. E para enriquecer a aula, também aprende a anexar textos em caminhos e até transformar os próprios textos em caminhos.'
        },
        {
          titulo: 'Atividade 05 – Técnicas Avançadas',
          descricao: 'As técnicas avançadas explicadas nesta atividades consistem em distorcer e inclinar objetos, alterar e combinar caminhos.'
        },
        {
          titulo: 'Atividade 06 – Criando Botões',
          descricao: 'No Adobe Fireworks, é possível criar uma série de botões de maneira bem simples. E ainda vamos usar muito os botões ao desenvolver páginas web, pois eles são itens fundamentais para deixar a página interativa.'
        },
        {
          titulo: 'Atividade 07 – Criando Máscaras',
          descricao: 'As máscaras ocultam ou mostram partes de um objeto ou imagem. As técnicas de mascaramento possibilitam a aplicação de vários tipos de efeitos criativos a objetos.'
        },
        {
          titulo: 'Atividade 08 – Criando Animações',
          descricao: 'Gráficos animados proporcionam um visual sofisticado e emocionante a um site da Web. No Fireworks é possível criar gráficos animados com faixas de propaganda, logotipos e desenhos animados.'
        },
        {
          titulo: 'Atividade 09 – Fatiando, exportando e otimizando imagens',
          descricao: 'Utilizando fatias e pontos ativos damos ainda mais interatividade às páginas Web. Também veremos a exportação de gráficos para uso na Web que é um processo com duas etapas: otimização e exportação. A otimização de gráficos assegura o balanço correto entre cor, compressão e qualidade. Depois de finalizar as configurações de otimização de um gráfico, ele está pronto para a exportação'
        },

      ],

    },
    // FIM DO CURSO 29
    {
      id: 30,
      nome: 'Adobe Dreamweaver',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O <strong>Adobe Dreamweaver</strong> é um editor de HTML profissional para desenhar, codificar e desenvolver sites, páginas e aplicativos para a Web. <br><br> Os recursos de edição visual no <strong>Dreamweaver</strong> permitem criar páginas, de modo rápido, sem escrever uma linha de código. Se você preferir inserir códigos manualmente, no entanto, o <strong>Dreamweaver</strong> também inclui diversas ferramentas e recursos relacionados à codificação.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 26 horas. <br><strong>Pré-requisitos: </strong>O aluno precisa conhecer o Windows e saber navegar na Internet. É também recomendável que tenha noções da linguagem de programação para a Web, HTML e já tenha feito o curso de Fireworks.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de Dreamweaver destina-se a pessoas que trabalham ou que pretendem trabalhar com designer para a Web, ou seja, montar sites para a Internet. Essa é uma das profissões que mais crescem hoje em dia, empregando muitos profissionais na área.',
      objetivos: 'O objetivo do curso é preparar o aluno para utilizar a maioria dos recursos disponíveis no Dreamweaver, habilitando-o a criar páginas e sites para a Internet, de forma fácil e eficiente, sem programação.',
      conteudo: [

        {
          titulo: 'Atividade 1: Introdução e Interface Básica do Dreamweaver',
          descricao: 'Familiarizar o aluno com o ambiente do Dreamweaver, os layouts de trabalho, e as barras de ferramentas e os painéis do Dreamweaver.'
        },
        {
          titulo: 'Atividade 2: Definindo o Site, seu Conteúdo e Conhecendo as Tags',
          descricao: 'O aluno deve entender o motivo de se definir um site antes de se começar a criar os arquivos html do site e saber como criar os arquivos para o site, também verá nesta atividade as principais tags da estrutura do documento e a inserção das tags de cabeçalho.'
        },
        {
          titulo: 'Atividade 3: Trabalhando com o Painel Arquivos',
          descricao: 'Preparar o aluno para manipular facilmente os arquivos usando o painel Site'
        },
        {
          titulo: 'Atividade 4: Trabalhando com Textos',
          descricao: 'Ensinar o aluno a inserir e a formatar textos no Dreamweaver.'
        },
        {
          titulo: 'Atividade 5: Criando Links',
          descricao: 'O aluno entenderá o que são links e será capaz de criar links para endereços absolutos, arquivos do site, e-mails, links para âncoras dentro do mesmo documento, links para âncoras em outro documento e aplicá-los também em imagens.'
        },
        {
          titulo: 'Atividade 6: Gráficos na WEB',
          descricao: 'O aluno será capaz de inserir imagens em seus documentos e alterar suas propriedades.'
        },
        {
          titulo: 'Atividade 7: Trabalhando com Tabelas',
          descricao: 'O aluno será capaz de inserir uma tabela na página e adicionar conteúdo nas células.'
        },
        {
          titulo: 'Atividade 8: Trabalhando com Molduras',
          descricao: 'O aluno será capaz de criar uma página de molduras e alterar as propriedades das mesmas.'
        },
        {
          titulo: 'Atividade 9: Trabalhando com Estilos',
          descricao: 'Ensinar o aluno a criar e utilizar estilos CSS.'
        },
        {
          titulo: 'Atividade 10: Trabalhando com Camadas',
          descricao: 'O aluno estará apto a utilizar camadas em documentos.'
        },
        {
          titulo: 'Atividade 11 e 12: Trabalhando com Formulários',
          descricao: 'Ensinar o aluno a criar formulários e inserir botões, caixas de seleção, listas, menus e campos de texto neles.'
        },
        {
          titulo: 'Atividade 13: Testando e Publicando o Site',
          descricao: 'O aluno estará apto para testar um site antes de enviá-lo para um servidor e também aprenderá a publicá-lo.'
        },

      ],

    },
    // FIM DO CURSO 30
    {
      id: 31,
      nome: 'CorelDraw',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O <strong>CorelDRAW</strong> é um programa de design gráfico pertencente à Corel. É uma ferramenta profissional, mas muito prática que permite aos iniciantes desenvolverem trabalhos de qualidade sem maiores dificuldades. Este aplicativo possibilita a criação e a manipulação de vários produtos, como: desenhos artísticos, publicitários, logotipos, capas de revistas, livros, CDs, imagens de objetos para aplicação nas páginas de Internet (botões, ícones, animações gráficas, etc.) confecção de cartazes, etc.',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '<strong>Carga horária média:</strong> 26 horas. <br><strong>Pré-requisitos: </strong> Introdução à informática e conhecimento sobre o sistema operacional Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila.',
      objetivos: 'Seja um ilustrador iniciante, que utiliza os recursos do CorelDRAW para uso pessoal a fim de realizar trabalhos autônomos, ou um profissional da área criando trabalhos específicos para uma grande empresa, o Corel oferece ferramentas de fácil utilização e de grande eficiência. Sendo assim, o objetivo deste curso é apresentar para o aluno e treiná-lo a utilizar os principais recursos da arte gráfica',
      conteudo: [

        {
          titulo: 'Atividade 1 – O CorelDRAW',
          descricao: 'O aluno conhecerá o que são as ilustrações e a profissão do ilustrador, os programas utilizados para a criação e edição de imagens, conhecerá o CorelDRAW e o que pode ser criado com ele, a história da Corel e as versões do software, como inicia-lo e a janela do CorelDRAW.'
        },
        {
          titulo: 'Atividade 2 – Conhecendo as Ferramentas - parte I',
          descricao: 'Nesta aula o aluno conhecerá as terminologias do CorelDRAW, a caixa de ferramentas, desenhará retângulos, quadrados, elipses, círculos e polígonos.'
        },
        {
          titulo: 'Atividade 3 – Conhecendo as Ferramentas - Parte II',
          descricao: 'Nesta atividade o aluno aprenderá a desenhar espirais, grades, formas predefinidas, apagar objetos, colorir contornos e preenchimentos, utilizar as ferramentas de linhas, mudar a ordem dos objetos.'
        },
        {
          titulo: 'Atividade 4 – Operações Básicas',
          descricao: 'O Aluno aprenderá a realizar operações básicas com arquivos, sobre as propriedades físicas da página de desenho, as propriedades de exibição da página de desenho, os Modos de Visualização e a barra de navegação.'
        },
        {
          titulo: 'Atividade 5 – Posicionando e Alinhando Objetos',
          descricao: 'Nesta atividade o aluno aprenderá a manipular as Réguas, as Grades, as Linhas-guia e alinhar os objetos.'
        },
        {
          titulo: 'Atividade 6 – Transformando os Objetos de Desenhos',
          descricao: 'Transformando os Objetos de Desenhos: Entender os objetos; transformar os objetos; conhecer a Ferramenta Transformação e a janela Transformações; alterar a ordem dos objetos; e agrupar e desagrupar os objetos serão conceitos estudados pelo aluno nesta atividade.'
        },
        {
          titulo: 'Atividade 7 – Colorindo os Objetos de Desenhos – Parte I',
          descricao: 'Colorindo os Objetos de Desenhos – Parte I: Nesta aula serão apresentadas as cores de preenchimento e contorno; os tipos de preenchimento, como o preenchimento uniforme; preenchimento gradiente padrão e preenchimento gradiente personalizado.'
        },
        {
          titulo: 'Atividade 8 – Colorindo os Objetos de Desenhos – Parte II',
          descricao: 'Colorindo os Objetos de Desenhos – Parte II: O aluno conhecerá os outros tipos de preenchimentos como: o preenchimento de padrão, preenchimento de textura, preenchimento PostScript e o preenchimento Malha de cores; conhecerá a Ferramenta Preenchimento Interativo e aprenderá como copiar cores e atributos de um objeto.'
        },
        {
          titulo: 'Atividade 9 – Os Contornos e a Mídia Artística',
          descricao: 'Os Contornos e a Mídia Artística: Nesta atividade o aluno aprenderá como aplicar contornos, sobre o efeito Contorno, a trabalhar com as ferramentas Contorno Interativo e Mídia Artística.'
        },
        {
          titulo: 'Atividade 10 – Os Nós: Os nós e seus controles',
          descricao: 'Os Nós: Os nós e seus controles; os tipos de nós; conversão de formas geométricas em curvas e edição dos seus nós; e a criação de uma ilustração com a ferramenta Mão Livre serão os assuntos abordados nesta atividade.'
        },
        {
          titulo: 'Atividade 11 – Criando Novas Formas',
          descricao: 'Criando Novas Formas: Nesta atividade o aluno aprenderá a moldar objetos, a utilizar os comandos Verso Menos Frente, Aparar e Interseção, aplicar os efeitos PowerClip, Distorcer e a trabalhar com as ferramentas Faca e Borracha.'
        },
        {
          titulo: 'Atividade 12 – As Imagens e as Fontes - Parte I',
          descricao: 'As Imagens e as Fontes - Parte I: Esta atividade mostrará a função das imagens e das fontes, o aluno aprenderá a importar arquivos, conhecer os tipos de textos, a criar um texto artístico, aplicar o efeito PowerClip em uma imagem, converter um gráfico vetorial em bitmap e um bitmap em vetor, e exportar uma imagem para outro formato.'
        },
        {
          titulo: 'Atividade 13 – As Imagens e as Fontes - Parte II',
          descricao: 'As Imagens e as Fontes - Parte II: Nesta aula o aluno criará um panfleto e um folheto.'
        },
        {
          titulo: 'Atividade 14 – Os Efeitos',
          descricao: 'Os Efeitos: O aluno aprenderá a aplicar efeitos interessantes como, Mistura, Extrusão, a chanfrar uma extrusão, o efeito Lente e por fim aplicar um efeito 3D em texto artístico.'
        },
        {
          titulo: 'Atividade 15 – O Sistema de Impressão',
          descricao: 'O Sistema de Impressão: Para finalizar, nesta última aula o aluno conhecerá o sistema de impressão, como imprimir um trabalho e gerar um PDF do original.'
        },

      ],

    },
    // FIM DO CURSO 31

    {
      id: 32,
      nome: 'Hardware - MMCR2',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>Manutenção e montagem de computadores e redes - Mód 02:</strong> <br><br>Neste curso o aluno aprende a trabalhar com a memória de um computador, conhecendo características como velocidade, tamanho e tempo de acesso. Numa segunda etapa são apresentados outros dispositivos de armazenamento, tais como o disco rígido, cds, dvds, etc. A compreensão de certas características de um determinado equipamento é de suma importância para se montar um micro que apresente um bom desempenho, por isso, neste curso são apresentados detalhes que muitas vezes são desconhecidos de profissionais da área de montagem e manutenção.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 10 horas. <br> <strong>Pré-requisitos:</strong> O aluno precisa ter conhecimentos básicos em Windows e ter os princípios apresentados no curso Descobrindo o computador. <br> <strong>Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br><strong>A quem se destina:</strong> Aos profissionais da área de montagem e manutenção de computadores que querem expandir seus conhecimentos ou aos que estão começando a ingressar nesta área.',
      objetivos: 'Apresentar detalhes e características de funcionamento da memória RAM, disco rígido, drives leitores e gravadores de cd, dvd e outros dispositivos de armazenamento. Ensinar o aluno a montar e desmontar os dispositivos citados de forma correta e que propicie um bom desempenho do computador.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Conhecendo a memória',
          descricao: 'Nesta atividade o aluno conhece diversos tipos de memórias, suas características e seu funcionamento.'
        },

        {
          titulo: 'Atividade 02 – Módulos de memórias',
          descricao: 'Com a evolução em ritmo acelerado proposto pela indústria de equipamentos eletrônicos, foram surgindo diferentes tipos de módulos de memória. Nesta atividade o aluno conhece estes módulos e como devem ser montados.'
        },
        {
          titulo: 'Atividade 03 – Tecnologia das MPs',
          descricao: 'Na atividade anterior o aluno estuda as diferenças físicas de uma memória principal, ou seja, quantidade de vias, tamanho do módulo, chip utilizado, etc. Nesta atividade são apresentados detalhes importantes que demonstram a diferença de desempenho entre uma memória e outra, tais como, velocidade, tempo de acesso, taxa de transferências, etc.'
        },

        {
          titulo: 'Atividade 04 – Prática - Memórias',
          descricao: 'O aluno pratica o que ele aprendeu nas atividades anteriores fazendo a montagem dos módulos de memória na placa-mãe.'
        },
        {
          titulo: 'Atividade 05 – Discos rígidos – Parte 1',
          descricao: 'Mostra os detalhes físicos de um disco rígido e seu funcionamento.'
        },

        {
          titulo: 'Atividade 06 – Discos rígidos – Parte 2',
          descricao: 'Apresenta as diferenças de desempenho que pode existir entre discos rígidos e mostra como uma configuração errada pode afetar o funcionamento do computador.'
        },
        {
          titulo: 'Atividade 07 – Prática – Discos rígidos',
          descricao: 'O aluno aprende os cuidados que deve ter ao manusear um disco rígido e a instalar e configurar corretamente o disco em um computador.'
        },

        {
          titulo: 'Atividade 08 – Outros dispositivos de armazenamento',
          descricao: 'Nesta atividade o aluno conhece as principais características de dispositivos como drives de cd, dvd e disquetes. Aprende a identificar qual a melhor solução para backups de dados e as diferenças técnicas entre os dispositivos.'
        },
        {
          titulo: 'Atividade 09 – Prática - Outros dispositivos de armazenamento',
          descricao: 'O aluno pratica a instalação dos drives de cd, dvd e disquete.'
        },

      ],

    },
    
    // FIM DO CURSO 32
    {
      id: 33,
      nome: 'Hardware - MMCR1',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>Manutenção e montagem de computadores e redes - Mód 01:</strong> <br><br>Como proceder quando um computador apresenta problemas de travamentos, desligamentos aleatórios, ou mesmo trabalha abaixo de sua capacidade normal? O que é a arquitetura de um computador? Como funcionam os processadores de nova geração da Intel e da AMD? O que são processadores de múltiplos núcleos? Como fazer para efetuar a montagem correta do processador e do sistema de refrigeração? Neste primeiro módulo do curso livre de Manutenção e Montagem pretende-se responder essas questões. Trata-se do primeiro curso de uma série de 4 módulos. O foco principal é apresentar conceitos relacionados à arquitetura de um sistema computacional e, principalmente, os processadores de nova geração com múltiplos cores.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 16 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa ter conhecimentos básicos em Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A pessoas que pretendem trabalhar com manutenção e montagem de computadores ou para aqueles que pretendem expandir seu conhecimento acerca do funcionamento de um computador.',
      objetivos: 'Apresentar ao aluno o funcionamento de um microcomputador e fornecer os conhecimentos necessários para dar os primeiros passos na montagem e manutenção de computadores.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Hardware',
          descricao: 'Apresenta a história do computador e do sistema operacional e explica a linguagem utilizada pelo computador: linguagem binária.'
        },
        {
          titulo: 'Atividade 02 – Arquitetura e equipamentos',
          descricao: 'O aluno passa a conhecer detalhes a respeito da arquitetura de um sistema computacional e tem o primeiro contato com os principais componentes que serão estudados durante todo o decorrer do curso.'
        },
        {
          titulo: 'Atividade 03 – Montagem',
          descricao: 'Os primeiros passos: nesta atividade o aluno dá os primeiros passos na montagem de um computador e passa a conhecer as precauções que devem ser tomadas ao dar manutenção em um equipamento.'
        },
        {
          titulo: 'Atividade 04 – A arquitetura do processador',
          descricao: 'Esta é a primeira atividade que trata de processadores. O aluno aprende o que é clock e conhece a importância da arquitetura de um processador. Ele aprende que não é apenas o clock o responsável pelo desempenho final do processador.'
        },
        {
          titulo: 'Atividade 05 – Processador e Chipset',
          descricao: 'Apresenta os principais componentes de uma placa-mãe. Demonstra as diferenças entre a arquitetura de processadores e chipsets antigos e os de nova geração. O aluno passa a conhecer o trajeto percorrido pela informação manipulada em um computador.'
        },
        {
          titulo: 'Atividade 06 – Processadores de nova geração',
          descricao: 'Trata-se de uma atividade essencial para a compreenção das funções dos novos processadores. Apresenta o conceito de memória cache e sua importância no desempenho final da CPU. O aluno também aprende o que são processadores de múltiplos núcleos.'
        },
        {
          titulo: 'Atividade 07 – Processadores e suas tecnologias',
          descricao: 'Os processadores de novas geração possuem muitas tecnologias que não existiam em processadores mais antigos. Esta atividade apresenta as tecnologias Hyper-threading, Turbo Boost e Turbo Core. Também trata do sistema de refrigeração.'
        },
        {
          titulo: 'Atividade 08 – Montagem: processadores',
          descricao: 'Trata-se de uma atividade prática onde o aluno é apresentado aos conceitos envolvidos na montagem do processador na placa-mãe. Também reconhece a importância de se utilizar um sistema de refrigeração adequado. O aluno aprende a conectar processadores com soquetes diferentes e a realizar a montagem de seus respectivos coolers. No final, são apresentados alguns programas que auxiliam o técnico que trabalha com montagem e manutenção a obter informações detalhadas a respeito do processador, inclusive de sua temperatura de trabalho.'
        },

      ],

    },
    // FIM DO CURSO 33
    {
      id: 34,
      nome: 'Hardware - MMCR3',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>Manutenção e montagem de computadores e redes - Mód 03:</strong> <br><br>Neste curso são apresentados detalhes da interface física que interliga todos os componentes dentro do gabinete: a placa-mãe. No mercado de informática existem diversos fabricantes oferecendo placas-mãe com diferentes características. O curso tem a intenção de apresentar ao aluno detalhes que devem ser observados em uma placa-mãe e que são essenciais para definir o desempenho final da máquina. A placa de vídeo também é detalhada e permite que o aluno tenha conhecimento técnico suficiente para avaliar e efetuar a correta configuração de uma placa de vídeo. Numa segunda etapa são mostrados como configurar o Setup da máquina e efetuar a instalação do sistema operacional.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 10 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa ter conhecimentos básicos em Windows e ter os princípios apresentados nos cursos Descobrindo o computador e Memória e armazenamento de dados.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Aos profissionais da área de montagem e manutenção de computadores que querem expandir seus conhecimentos ou aos que estão começando a ingressar nesta área.',
      objetivos: 'Colocar o aluno a par do funcionamento de uma placa-mãe e dos diversos circuitos que a compõe. Apresentar as características de uma placa de vídeo e mostrar ao aluno como efetuar a formatação e instalação do sistema operacional.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Placa-mãe',
          descricao: 'Apresenta a placa-mãe e os principais componentes que a formam, tais como: padrões AT, ATX e BTX, slots de expansão, tipos de conectores, etc.'
        },
        {
          titulo: 'Atividade 02 – Prática – Placa-mãe',
          descricao: 'O aluno efetua a montagem de uma placa mãe em um gabinete e verifica seu funcionamento.'
        },
        {
          titulo: 'Atividade 03 – Chipset',
          descricao: 'Este circuito é tão importante quanto o processador de uma máquina, portanto esta atividade é totalmente dedicada a apresentar as características de um dos componentes que formam a placa-mãe: o chipset.'
        },
        {
          titulo: 'Atividade 04 – Barramentos',
          descricao: 'Nesta atividade o aluno conhece os diversos barramentos presentes na placamãe e aprende as diferenças técnicas entre eles.'
        },
        {
          titulo: 'Atividade 05 – Placas de vídeo e Monitores',
          descricao: 'São mostrados os circuitos que uma placa de vídeo contém para que o aluno tenha condições de avaliar se ela é ou não adequada para um determinado uso do computador.'
        },
        {
          titulo: 'Atividade 06 – Setup',
          descricao: 'Muitas configurações importantes do computador que afetam diretamente o seu desempenho são feitas através do Setup. Nesta atividade o aluno aprende a alterar o Setup de forma adequada para extrair o máximo de desempenho do micro.'
        },
        {
          titulo: 'Atividade 07 – Particionamento e formatação',
          descricao: 'Dividir o espaço do disco rígido é importante para ter uma opção de backup das informações e para manter os arquivos mais organizados. É isto que é apresentado nesta atividade. O aluno aprende também a efetuar a formatação para preparar o disco para um novo Sistema Operacional.'
        },
        {
          titulo: 'Atividade 08 – Instalando e configurando o Windows',
          descricao: 'Para encerrar o curso o aluno aprende a instalar o Sistema Operacional e a efetuar todas as configurações para que ele funcione corretamente.'
        },

      ],

    },
    // FIM DO CURSO 34
    {
      id: 35,
      nome: 'Hardware - MMCR4',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>Manutenção e montagem de computadores e redes - Mód 04:</strong> <br><br>Neste curso serão abordados os conceitos e as técnicas necessárias para a montagem de uma rede local, também conhecida como <strong>LAN - Local Area Network.</strong>',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 10 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa ter conhecimentos básicos em Windows e ter os princípios apresentados nos cursos Descobrindo o computador, Memória e armazenamento de dados e Configuração de placas e instalação do SO.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Aos profissionais da área de montagem e manutenção de computadores e redes que querem expandir seus conhecimentos ou aos que estão começando a ingressar nesta área.',
      objetivos: 'Apresentar detalhes e características de funcionamento de uma rede de computadores. Ensinar o aluno a montar e a configurar uma rede local.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução a Redes',
          descricao: 'Essa atividade explica o motivo de implementar uma rede de computadores, seu funcionamento, quais os componentes de uma rede, o que é protocolo e apresenta os tipos de redes e suas características.'
        },
        {
          titulo: 'Atividade 02 – Tipos de redes locais e equipamentos',
          descricao: 'O aluno passa a conhecer os principais equipamentos e meio físico utilizados em uma rede local.'
        },
        {
          titulo: 'Atividade 03 – Prática – Instalando a placa de rede',
          descricao: 'Nesta atividade o aluno dá os primeiros passos na montagem de uma rede, aprende como escolher, instalar e configurar uma placa de rede.'
        },
        {
          titulo: 'Atividade 04 – Cabeamento e topologia',
          descricao: 'São apresentadas as principais características dos cabos e das topologias de rede.'
        },
        {
          titulo: 'Atividade 05 – Prática – Trabalhando com o cabeamento',
          descricao: 'Nesta atividade o aluno continua os passos para a montagem de uma rede, montando o cabo de par trançado UTP.'
        },
        {
          titulo: 'Atividade 06 – Prática – Configurando a rede ponto-a-ponto',
          descricao: 'Até esta atividade o aluno já aprendeu a instalar a placa de rede e a montar um cabo de par trançado para interligar os computadores da rede, agora vai aprender a configurar cada computador conectado a rede.'
        },
        {
          titulo: 'Atividade 07 – Prática – Compartilhamento de recursos',
          descricao: 'Nesta atividade o aluno aprenderá a compartilhar um recurso em um computador para que outras estações possam ter acesso a ele.'
        },
        {
          titulo: 'Atividade 08 – Prática – Compartilhando a Internet',
          descricao: 'Com a rede local funcionando corretamente e todos os micros com o protocolo TCP/IP instalado, agora o aluno aprenderá como efetuar o compartilhamento da Internet.'
        },

      ],

    },
    // FIM DO CURSO 35
    {
      id: 36,
      nome: 'Departamento Pessoal',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'Nas empresas de menor porte, normalmente inexiste o <strong>Departamento Pessoal</strong>, pois as atividades são normalmente supridas pelo <strong>"Contador"</strong> da empresa. Já nas empresas de maior porte, podemos quase sempre encontrá-lo, de estrutura meramente simples ou então até os mais sofisticados, em nível de Diretoria. Basicamente o Departamento Pessoal, é constituído por três setores: Admissão, Compensação e Desligamento. O curso de Departamento Pessoal da ADVANCE mostrará como executar as principais tarefas envolvidas na rotina de um departamento pessoal (DP) e trabalhar de acordo com as principais fontes do Direito do Trabalho.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Este é um curso destinado a pessoas que trabalham na área de recursos humanos ou que pretendem trabalhar nesta área. Também pessoas que de alguma forma precisam conhecer as técnicas relativas a recursos humanos, e que estão ligadas mesmo direta ou indiretamente ao departamento de recursos humanos da empresa em que trabalha.',
      objetivos: 'Este curso tem como objetivo ensinar os conceitos básicos sobre os departamentos de recursos humanos de uma empresa, como por exemplo, os tipos de contratos que são feitos com empregados, as diferenças entre jornadas de trabalho, remuneração, e dispensa dos empregados. Além dos cálculos salariais que podem envolver cada área.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Departamento Pessoal x Recursos Humanos',
          descricao: 'Durante esta atividades serão mostradas a organização de um setor de departamento pessoal e de recursos humanos e as principais diferenças entre estes dois setores dentro da organização. Também será visto as principais considerações a se tomar durante o recrutamento de um empregado e quais os meios mais usados para realizar um recrutamento. Depois de feito o recrutamento é feito a seleção de pessoal, nesta parte do curso o aluno observará os meios utilizados para se selecionar um bom candidato.'
        },
        {
          titulo: 'Atividade 2 - A Contratação',
          descricao: 'Esta atividade tem como objetivo mostrar como foi introduzida a legislação trabalhista e o seu objetivo. São mostrados também os principais tipos de contratação de empregados e suas principais características.'
        },
        {
          titulo: 'Atividade 3 - A Documentação para Admissão e outras Obrigações Legais',
          descricao: 'Esta atividade mostrará quais os procedimentos adotados para a admissão de um funcionário, quais os documentos necessários e como proceder ao registro do empregado.'
        },
        {
          titulo: 'Atividade 4 - A Jornada de Trabalho e a Folha de Pagamento',
          descricao: 'Esta atividade apresenta a definição da jornada de trabalho, como ela pode ser dividida, como a legislação a encara e os cuidados a serem tomados ao se definir a jornada de trabalho de um empregado. O aluno também conhecerá a folha de pagamento e os itens que a compõem.'
        },
        {
          titulo: 'Atividade 5 - A Hora Extra e a Hora Noturna',
          descricao: 'Nesta atividade o aluno irá conhecer as horas adicionais da jornada de trabalho, as extras e noturnas e como calculá-las.'
        },
        {
          titulo: 'Atividade 6 - Fundo de Garantia do Tempo de Serviço (FGTS)',
          descricao: 'Esta atividade mostra como foi introduzido o FGTS e como era antes de se tornar o regime obrigatório. É ensinado a realizar os cálculos do FGTS mensal e na rescisão.'
        },
        {
          titulo: 'Atividade 7 - Os Descontos na Folha de Pagamento',
          descricao: 'Esta atividade apresenta os descontos em folha permitidos por lei e como devem ser calculados.'
        },
        {
          titulo: 'Atividade 8 - As Férias',
          descricao: 'Esta atividade mostra como são encaradas as férias segundo a legislação, como efetuar o cálculo do período, bem como a remuneração das férias e os cuidados a se tomar no cálculo das férias e dos períodos.'
        },
        {
          titulo: 'Atividade 9 - O Décimo 13º Salário e outros Adicionais',
          descricao: 'Nesta atividade o aluno conhecerá o 13º salário, como deverá ser seu cálculo e datas de pagamentos, também conhecerá outros adicionais que fazem parte da remuneração.'
        },
        {
          titulo: 'Atividade 10 - A Rescisão do Contrato de Trabalho',
          descricao: 'Como o próprio título já diz, é apresentado como se proceder na rescisão contratual de um empregado, os cálculos a serem feitos e os procedimentos tomados na rescisão.'
        },

      ],

    },
    // FIM DO CURSO 36
    {
      id: 37,
      nome: 'Operador de Caixa',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'Toda empresa que vende diretamente produtos ou serviços ao cliente necessita de um <strong>Operador de Caixa</strong>. Esse profissional é o responsável por registrar o valor de todas as mercadorias ou serviços que são comercializados na empresa, além do atendimento ao público, pagamentos, recebimento de valores, fechamento de caixa e emissão de notas fiscais.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de Operador de Caixa destina-se às pessoas que desejam trabalhar operando um sistema PDV ou àquelas que já trabalham na área.',
      objetivos: 'Preparar o aluno com conhecimentos na profissão de Operador de Caixa, sistema PDV, atendimento ao público, abertura e fechamento de caixa, movimentações em máquinas de cartões de débito e crédito, consulta de cheques etc.',
      conteudo: [

        {
          titulo: 'Atividade 1: Introdução',
          descricao: 'Objetivo da aula: apresentar o que será estudado no curso, bem como a profissão de Operador de Caixa, a busca de emprego e a elaboração de um currículo.'
        },
        {
          titulo: 'Atividade 2: Primeiro Dia de Trabalho',
          descricao: 'Objetivo da aula: mostrar o ambiente de trabalho, falar sobre o período de adaptação do Operador de Caixa, hierarquia da empresa, produtos e serviços oferecidos. Além de ensinar os tipos de comércio: varejista e atacadista.'
        },
        {
          titulo: 'Atividade 3: A Frente de Caixa',
          descricao: 'Objetivo da aula: falar sobre a frente de caixa, com o foco nas funções do atendente de informações, fiscal de caixa, empacotador e claro, o operador de caixa.'
        },
        {
          titulo: 'Atividade 4: O Operador de Caixa',
          descricao: 'Objetivo da aula: ensinar como deve se desenvolver o trabalho do operador de caixa. E, mostrar um pacote de equipamentos gerenciados por um software de computador conhecido como PDV (ponto de venda).'
        },
        {
          titulo: 'Atividade 5: As Formas de Pagamento',
          descricao: 'Objetivo da aula: treinar o aluno com as várias opções em que o cliente pode efetuar o pagamento, sendo em dinheiro, cheque, cartões de crédito ou débito, ticket, entre outros.'
        },
        {
          titulo: 'Atividade 6: Ética, Segurança e Perdas',
          descricao: 'Objetivo da aula: mostrar que todo e qualquer operador deve ter como princípios básicos de sua atuação duas qualidades: profissionalismo e ética. Além de treinar o aluno em como evitar furtos na empresa.'
        },
        {
          titulo: 'Atividade 7: Atendimento ao Cliente',
          descricao: 'Objetivo da aula: treinar o aluno para dar um bom atendimento ao cliente, deixando-o satisfeito e fidelizado'
        },
        {
          titulo: 'Atividade 8: Treinamento Operacional',
          descricao: 'Objetivo da aula: ensinar o aluno a operar o software utilizado pelo sistema da empresa, PDV (ponto de venda), em sua rotina como operador de caixa.'
        },
        {
          titulo: 'Atividade 9: Cobrança, Juros e Porcentagem',
          descricao: 'Objetivo da aula: preparar o operador de caixa para lidar com situações de cobrança, cálculos de juros e porcentagem.'
        },
        {
          titulo: 'Atividade 10: Ergonomia',
          descricao: 'Objetivo da aula: conscientizar o aluno que é preciso manter uma boa postura corporal para prevenir lesões no trabalho.'
        },

      ],

    },
    // FIM DO CURSO 37
    {
      id: 38,
      nome: 'Atendente de Ótica',
      resumo: 'Profissionalizantes / Área da Saúde',
      descricaoCompleta: 'O curso de <strong>“Atendente de Ótica”</strong> foi desenvolvido pensando na qualificação de profissionais para atender no mercado de óticas, desenvolvendo competências e habilidades específicas para vendas em óticas baseado no conhecimento técnico e estratégia de mercado, encantando o cliente e mantendo a sua fidelização.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Área da Saúde'],
      fichaTecnica: '<strong>Carga horária média:</strong> 13 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso destina-se àqueles que desejam atuar no mercado de ótica como atendentes.',
      objetivos: 'Desenvolver competências e habilidades específicas, baseado no conhecimento técnico.',
      conteudo: [

        {
          titulo: 'Atividade 01 - Introdução e história',
          descricao: 'Nesta atividade você conhecerá o perfil do profissional de ótica, e terá algumas dicas de como aproveitar bem este curso; conhecerá também um pouco da história dos óculos.'
        },
        {
          titulo: 'Atividade 02 – O mercado de óticas',
          descricao: 'A expansão do mercado de óticas.'
        },
        {
          titulo: 'Atividade 03 – Ótica – uma atividade regulamentada',
          descricao: 'Quais são as atividades que uma ótica pode desenvolver diante a legislação.'
        },
        {
          titulo: 'Atividade 04 – Oftalmologia, optometria e oculista',
          descricao: 'As diferenças que existem entre o oftalmologista, o optometrista e o oculista.'
        },
        {
          titulo: 'Atividade 05 – O funcionamento do olho',
          descricao: 'Os princípios básicos do funcionamento do olho e da visão.'
        },
        {
          titulo: 'Atividade 06 – Disfunções da visão',
          descricao: 'Causas, definições e tratamentos de doenças e alterações oculares.'
        },
        {
          titulo: 'Atividade 07 – Lentes oftálmicas',
          descricao: 'O que são lentes oftálmicas, e a propriedade e especificidade de cada material que é usado para a sua fabricação.'
        },
        {
          titulo: 'Atividade 08 – Lentes de contato',
          descricao: 'Os três principais tipos de lentes de contato que existem no mercado.'
        },
        {
          titulo: 'Atividade 09 – Óculos de sol',
          descricao: 'Nem sempre o preço diferencia a qualidade dos óculos de sol; os tipos de lentes.'
        },
        {
          titulo: 'Atividade 10 – Tipos de armação',
          descricao: 'As partes que compõem os óculos e os tipos de armações; os materiais usados para sua fabricação.'
        },
        {
          titulo: 'Atividade 11 – Os processos de fabricação das lentes',
          descricao: 'Os 12 passos para a fabricação e montagem das lentes na armação.'
        },
        {
          titulo: 'Atividade 12 – Atendimento ao cliente',
          descricao: 'As três etapas do atendimento ao cliente e o tipo de armação mais indicado para cada rosto.'
        },
        {
          titulo: 'Atividade 13 – Técnicas de vendas e fidelização do cliente',
          descricao: 'Técnicas de vendas, e como tornar o seu cliente fiel à sua empresa.'
        },

      ],

    },
    // FIM DO CURSO 38
    {
      id: 39,
      nome: 'Criação de Empresas',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'O curso <strong>Criação de Empresas</strong> é um roteiro para facilitar a abertura da sua empresa, ajudando quem ainda não sabe por onde começar e aquele que já escolheu em que ramo atuar. Se você quer tornar seu sonho de empreendedorismo em realidade, será importante entender o mercado, o público que se deseja atingir e planejar bem o negócio. Além disso, a montagem do Plano de Negócios e o desenvolvimento de um perfil empreendedor, com suas habilidades e conhecimentos, será de máxima importância.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 14 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Pessoas de qualquer profissão e de qualquer idade que desejam ter seu próprio negócio podem fazer o curso.',
      objetivos: 'Desenvolver no aluno as habilidades necessárias para gerir uma empresa, construir um Plano de Negócios e mostrar tudo o que envolve a pesquisa de mercado e a abertura da empresa.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Ideias criativas, ótimos negócios',
          descricao: 'Objetivo da aula: esta é uma aula para reflexão, onde o aluno vai avaliar quais são os benefícios de ter seu próprio negócio, quanto tempo dedicar a ele e quais as habilidades necessárias para o bom empresário. Além disso, esta atividade ajudará aqueles que desejam ser empresários, mas ainda não tiveram uma boa ideia de negócios.'
        },
        {
          titulo: 'Atividade 2 - Plano de Negócios',
          descricao: 'Objetivo da aula: o aluno aprenderá a montar um Plano de Negócios, com suas particularidades principais.'
        },
        {
          titulo: 'Atividade 3 - O capital',
          descricao: 'Objetivo da aula: nesta aula o aluno aprende como conseguir capital para abrir sua empresa e quais são os tipos de empréstimos.'
        },
        {
          titulo: 'Atividade 4 - Formalizando o negócio',
          descricao: 'Objetivo da aula: nesta aula sobre a formalização do negócio, o aluno aprende sobre vários assuntos relacionados a isso: a escolha de um sócio, a empresa familiar, os tipos diferentes de empresas e os impostos.'
        },
        {
          titulo: 'Atividade 5 - Contabilidade e fluxo de caixa',
          descricao: 'Objetivo da aula: aqui o aluno aprende sobre a contabilidade da empresa, como escolher um bom contador e como montar um fluxo de caixa simples.'
        },
        {
          titulo: 'Atividade 6 - Localização e aluguel',
          descricao: 'Objetivo da aula: esta é uma aula de máxima importância, pois aqui o aluno aprende a escolher o local ideal para instalar sua empresa, aprende sobre contratos de aluguel e sobre montar a empresa em sua própria casa.'
        },
        {
          titulo: 'Atividade 7 - Comprando uma empresa ou franquia',
          descricao: 'Objetivo da aula: na última aula o aluno avalia as vantagens e desvantagens de comprar uma empresa já montada, e de comprar uma franquia.'
        },

      ],

    },
    // FIM DO CURSO 39
    {
      id: 40,
      nome: 'Logística Empresarial',
      resumo: 'Profissionalizantes / Setor Industrial',
      descricaoCompleta: 'Atualmente, a <strong>logística</strong> é conhecida como uma parte essencial nas empresas, é um departamento responsável pela administração dos recursos e materiais, sejam eles de qualquer tipo. Seu papel é muito abrangente, pois administra recursos financeiros e materiais, planeja a produção, o armazenamento, transporte e distribuição desses materiais. É uma área que tem crescido muito, uma vez que as organizações estão buscando cada vez mais a qualidade de seus serviços e produtos, e a logística é uma parte importante para que isso ocorra. O mercado nacional e internacional tem necessidade de profissionais qualificados na área e a procura por pessoas com esse perfil é grande.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Setor Industrial'],
      fichaTecnica: '<strong>Carga horária média:</strong> 14 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso. Sugere-se ter ensino médio completo (não obrigatório).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Destina-se especialmente para estudantes e profissionais de administração e demais interessados nesta área.',
      objetivos: 'O objetivo do curso livre de logística empresarial é fornecer uma base de conhecimentos teóricos e práticos. Entretanto, o que fará de você um profissional excelente e realizado com a profissão escolhida, será sua determinação e interesse em manter-se atualizado com as novidades do mercado global.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Logística, afinal o que é?',
          descricao: 'Nesta introdução será estudada a definição de logística, e como as atividades empresariais dependem da logística. Veremos também porque os processos logísticos devem ser integrados e por fim veremos algumas vertentes da logística.'
        },
        {
          titulo: 'Atividade 02 – O alcance da logística',
          descricao: 'O aluno ficará motivado por ver as vantagens de estudar logística. Ficará sabendo qual a definição de logística empresarial, e como ela pode ser aplicada no comércio e no ecommerce.'
        },
        {
          titulo: 'Atividade 03 – Atividades primárias e de apoio',
          descricao: 'Nessa atividade o aluno aprenderá por que algumas atividades logísticas são chamadas primárias e outras são chamadas de apoio. Falaremos um pouco também sobre os custos de aplicar processos logísticos nas atividades empresariais.'
        },
        {
          titulo: 'Atividade 04 – Logística de transporte',
          descricao: 'Será que logística é apenas transporte? Essa atividade deixará claro o papel do transporte na logística. Aprenderemos sobre os diferentes modais de transporte, bem como as funções e valores das embalagens na logística.'
        },
        {
          titulo: 'Atividade 05 – Logística de estoques',
          descricao: 'O aluno verá a diferença entre estoque e armazém. Também ficará sabendo quais são as funções de um armazém, e como gerenciar um estoque.'
        },
        {
          titulo: 'Atividade 06 – Logística do processamento de pedidos',
          descricao: 'Tudo sobre TI: O que significam essas siglas? Gastos com TI são despesas ou são investimentos? Quais as vantagens da aplicação da TI ao longo do ciclo do pedido? E Para finalizar, falaremos um pouco sobre o profissional de TI.'
        },
        {
          titulo: 'Atividade 07 – A logística e as áreas administrativas',
          descricao: 'O aluno aprenderá que sucesso empresarial é quando existe parceria entre todos os setores. Falaremos sobre o relacionamento da logística com o marketing, com o setor financeiro, com o setor de produção e com a gestão de recursos humanos.'
        },
        {
          titulo: 'Atividade 08 – Distribuição física e administração de materiais',
          descricao: 'O aluno aprenderá o conceito de distribuição física, administração de materiais, suprimentos, e qual o papel do profissional da administração de materiais.'
        },
        {
          titulo: 'Atividade 09 – Ramos e atuações da logística',
          descricao: 'Será que toda empresa ou organização de alguma formaq aplica processos ou conceitos de logística? O que é uma Supply Chain? O que são sistemas de informação? Como são usados os indicadores de desempenho. Falaremos sobre tudo isso nessa atividade.'
        },
        {
          titulo: 'Atividade 10 – Setor de compras e PCP',
          descricao: 'Nessa última atividade falaremos sobre como o setor de compras depende da aplicação de processos logísticos. E o que significa as siglas PCP? Finalizaremos essa atividade falando um pouco do que se exige de um bom profissional de logística.'
        },

      ],

    },
    // FIM DO CURSO 40
    {
      id: 41,
      nome: 'Redação Empresarial',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'Mesmo com a crescente utilização do telefone, do fax ou dos e-mails nas empresas e nos órgãos governamentais, a carta continua a ser uma das formas mais comuns e importantes de comunicação escrita. Por isso, uma redação correta é de extrema importância, pois é através dela que se projeta a imagem da empresa e a do próprio profissional. Através do curso de Redação Empresarial o aluno vai receber conhecimentos que o prepararão para o prazer de redigir corretamente, de forma competente, clara e adequada às diferentes situações.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer o Word e saber navegar na Internet usando o Internet Explorer.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A profissionais de todas as áreas que necessitam aprimorar sua comunicação escrita para transmitir idéias e mensagens importantes que podem ajudar no alcance de objetivos. É ideal para pessoas que trabalham diariamente redigindo textos empresariais, como secretárias, profissionais de atendimento ao cliente, entre outros.',
      objetivos: 'Capacitar o aluno a comunicar-se com eficiência e segurança, adotando um estilo de fácil entendimento e que desperta interesse, ao escrever com qualidade os mais diversos tipos de textos empresariais, como cartas de cobrança, convites, recibos, memorandos, declarações e etc.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Redação Empresarial no Dia-a-Dia',
          descricao: 'Nesta primeira atividade aprenderemos sobre os diferentes estilos de redação que existem e também sobre a estrutura da comunicação.'
        },
        {
          titulo: 'Atividade 02 – Técnicas Para uma Boa Redação',
          descricao: 'Aprenderemos agora as técnicas para uma boa redação e vamos aplicá-las posteriormente na criação de nossas correspondências comerciais e oficiais.'
        },
        {
          titulo: 'Atividade 03 – Estrutura da Carta Comercial',
          descricao: 'A estrutura de uma carta comercial e o modo moderno de criá-la.'
        },
        {
          titulo: 'Atividade 04 – O Layout da Carta Comercial',
          descricao: 'Criando cartas comerciais com uma aparência moderna.'
        },
        {
          titulo: 'Atividade 05 – Correspondências Comerciais – Parte 1',
          descricao: 'Como criar cartas de cobrança, recibos, convites e convocações.'
        },
        {
          titulo: 'Atividade 06 – Correspondências Comerciais – Parte 2',
          descricao: 'Como criar e-mails, ofícios e memorandos.'
        },
        {
          titulo: 'Atividade 07 – Currículo e Carta de Apresentação',
          descricao: 'Como elaborar um currículo e uma carta de apresentação eficazes.'
        },
        {
          titulo: 'Atividade 08 – Correspondência Oficial',
          descricao: 'Como elaborar uma correspondência oficial.'
        },
        {
          titulo: 'Atividade 09 – Mala Direta e Envelopes',
          descricao: 'Como criar mala direta e envelopes adequados.'
        },
        {
          titulo: 'Atividade 10 – Enviando a Correspondência',
          descricao: 'Como enviar correspondências de forma eficaz.'
        },

      ],

    },
    // FIM DO CURSO 41
    {
      id: 42,
      nome: 'Auxiliar de Produção de Açúcar e Álcool',
      resumo: 'Profissionalizantes / Setor Industrial',
      descricaoCompleta: 'Podemos dizer o setor <strong>sucroalcooleiro energético</strong> é um dos maiores setores da indústria brasileira, sendo responsável por gerar milhões de empregos diretos e indiretos. O Brasil é referência no que se diz respeito à exportação de <strong>açúcar e etanol</strong>, além de termos um mercado de consumo interno fortíssimo. Sendo assim, é imprescindível que qualquer pessoa com interesse pelo setor industrial conheça as operações da produção de <strong>açúcar e etanol</strong>. Esse setor tem crescido muito e carece de profissionais das mais variadas áreas do conhecimento. Especialistas em otimização de processos, administradores, técnicos em mecânica, química, elétrica, auxiliares e engenheiros em geral são apenas algumas das áreas requisitadas pelo setor.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Setor Industrial'],
      fichaTecnica: '<strong>Carga horária média:</strong> 16 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso. Sugere-se possuir ensino médio completo (não obrigatório).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Destina-se a estudantes que buscam ingressar no setor, independente da área do conhecimento, e a profissionais que já atuam na área e desejam aprimoramento.',
      objetivos: 'O objetivo do curso livre de auxiliar de produção de açúcar e álcool é fornecer uma base de conhecimentos teóricos e práticos. O aluno sairá com conhecimentos que irão desde o planejamento do plantio da cana-de-açúcar até a distribuição dos produtos acabados (açúcar e álcool), além de conhecimento sobre a cogeração de energia. Cada processo produtivo é descrito por meio de exemplos, imagens, fluxogramas etc.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução',
          descricao: 'Nesta atividade introdutória o aluno conhece um pouco da história da cultura da cana-de-açúcar no Brasil, sua importância para a economia, os produtos derivados e o nível de produção.'
        },
        {
          titulo: 'Atividade 02 – Cana-de-açúcar: Estudo da Planta',
          descricao: 'Nesta atividade, o aluno irá estudar a planta da cana-de-açúcar, suas características botânicas, ciclo de vida e as condições ideais para seu cultivo.'
        },
        {
          titulo: 'Atividade 03 – O Desenvolvimento da Cana-de-Açúcar',
          descricao: 'Essa atividade trata dos componentes ecológicos e dos objetivos do processo produtivo. Também é ensinado sobre a cana planta, a cana soca e as suas fases de crescimento.'
        },
        {
          titulo: 'Atividade 04 – A Preparação Para o Plantio',
          descricao: 'Nesta atividade, o aluno irá aprender sobre as etapas de preparação do solo, escolha da variedade de cana-de-açúcar e técnicas de plantio.'
        },
        {
          titulo: 'Atividade 05 – A Atividade de Plantio',
          descricao: 'O aluno conhecerá os tipos de plantio e de irrigação da cultura. Aborda-se também as técnicas voltadas para a nutrição da planta e o combate às pragas.'
        },
        {
          titulo: 'Atividade 06 – As Operações de Colheita e Transporte',
          descricao: 'Nesta atividade, o aluno irá aprender sobre as etapas de colheita da cana-de-açúcar, incluindo o corte, transporte e armazenamento da matéria-prima.'
        },
        {
          titulo: 'Atividade 07 – Fabricação do Açúcar – Parte 1',
          descricao: 'A partir dessa atividade o estudo ocorre dentro da usina. A cana já chegou a usina, então, quais são as operações realizadas? Nessa primeira parte são estudados os processos da etapa de recepção da cana até os filtros.'
        },
        {
          titulo: 'Atividade 08 – Fabricação do Açúcar – Parte 2',
          descricao: 'Nesta atividade, o aluno irá aprender sobre as etapas de extração do caldo, purificação e cristalização do açúcar.'
        },
        {
          titulo: 'Atividade 09 – A Indústria Açucareira – Informações Complementares',
          descricao: 'Essa atividade aborda a indústria açucareira como um todo, incluindo aspectos econômicos, sociais e ambientais.'
        },
        {
          titulo: 'Atividade 10 – A indústria alcooleira',
          descricao: 'Nesta atividade, o aluno irá aprender sobre a produção de etanol a partir da cana-de-açúcar, incluindo as etapas de fermentação e destilação.'
        },

      ],

    },
    // FIM DO CURSO 42
    {
      id: 43,
      nome: 'Meio Ambiente',
      resumo: 'Promocional',
      descricaoCompleta: 'O curso acontece num ambiente virtual de aprendizagem e aborda concepções de meio ambiente e sustentabilidade vinculadas às propostas de desenvolvimento e sociedade sustentáveis. Além de abordar o problema, traz a solução através de dicas para serem colocadas em prática no dia a dia de cada cidadão.',
      imageUrl: 'assets/11.png',
      categoria: ['Promocional'],
      fichaTecnica: '<strong>Carga horária média:</strong> 2 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso.<br><strong> Técnicas didáticas:</strong> 1 simulador. <br> <br> <strong>A quem se destina:</strong> A pessoas de todas as idades.',
      objetivos: 'Oferecer subsídios teórico-conceituais sobre Meio Ambiente e Desenvolvimento sustentável visando o desenvolvimento da consciência preservacionista.',
      conteudo: [

        {
          titulo: 'Atividade 1: O que é Educação Ambiental',
          descricao: 'Objetivo da aula: abordagem introdutória sobre a educação ambiental e sua importância em nossas vidas.'
        },
        {
          titulo: 'Atividade 2: Dicas para o nosso dia a dia',
          descricao: 'Objetivo da aula: mais de 50 dicas para o aluno aplicar em seu cotidiano. Essas dicas, se aplicadas de forma individual, ajudará na sustentabilidade do planeta.'
        },

      ],

    },
    // FIM DO CURSO 43
    {
      id: 44,
      nome: 'Orientação Profissional',
      resumo: 'Profissionalizantes / Promocional',
      descricaoCompleta: 'A <strong>Orientação Profissional</strong> auxilia as pessoas no momento da escolha ou redefinição da profissão. Ela não serve apenas aos alunos do Ensino Fundamental e Médio. Serve também para adultos que não estão satisfeitos com a profissão e pretendem investir numa nova carreira ou, mesmo satisfeitos, querem progredir na carreira. Existem reorientações até mesmo na aposentadoria.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Promocional'],
      fichaTecnica: '<strong>Carga horária média:</strong> 10 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A pessoas interessadas em acertar na escolha de sua carreira e saber conduzi-la da melhor maneira possível num mercado de trabalho tão competitivo como o que se apresenta hoje.',
      objetivos: 'O objetivo deste curso é ajudar o aluno a definir seu futuro profissional. Para isso a primeira coisa em que se deve investir é no autoconhecimento para que se possa escolher acertadamente a carreira. Ao realizar este curso, o aluno fará vários testes de autoconhecimento e aprenderá a criar seu currículo, preparar-se para uma entrevista de emprego, se dar bem com seus colegas de trabalho',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Orientação Profissional',
          descricao: 'Na primeira lição o aluno vai aprender sobre a importância de pensar bem ao escolher uma carreira. Ele fará um teste de orientação vocacional e será orientado a como conseguir um bom estágio ou um treinamento em uma empresa e se dar bem nesta fase da carreira.'
        },
        {
          titulo: 'Atividade 02 – Teste Vocacional',
          descricao: 'Nesta lição o aluno aprende a se conhecer melhor usando vários testes de autoconhecimento. Também aprende a reconhecer quais seus gostos mais apurados, para assim, escolher o curso certo de acordo com a sua vocação.'
        },
        {
          titulo: 'Atividade 03 – Estágios e Treinamentos',
          descricao: 'Nesta lição o aluno vai aprender sobre a importância de buscar estágios e treinamentos para sua formação profissional. Ele receberá dicas de como se destacar nesse processo e como aproveitar ao máximo essas experiências.'
        },
        {
          titulo: 'Atividade 04 – Autoconhecimento',
          descricao: 'O aluno vai aprender a como identificar seus gostos, a se conhecer melhor e assim escolher a carreira certa, fazendo o que realmente tem vocação.'
        },
        {
          titulo: 'Atividade 05 – Cursos Extracurriculares',
          descricao: 'Nesta atividade o aluno vai aprender sobre as necessidades que um bom profissional deve ter para se dar bem no mercado de trabalho. Aprenderá também sobre a importância de saber escolher os cursos certos além dos cursos de idiomas. E assim conseguir cultura cursando o que realmente gosta.'
        },
        {
          titulo: 'Atividade 06 – Procurando o emprego certo',
          descricao: 'Aqui o aluno vai aprender como e onde procurar emprego, as dificuldades que ele poderá ter em seu caminho, além de ver quais são os erros que muitas pessoas cometem, para assim não cometê-los na hora de fazer a escolha pelo emprego certo.'
        },
        {
          titulo: 'Atividade 07 – O que as empresas procuram',
          descricao: 'Nesta lição o aluno aprende qual o perfil correto que as empresas procuram em um candidatos, e quais são os requisitos mais comuns que elas avaliam nos profissionais.'
        },
        {
          titulo: 'Atividade 08 – Preparando o Currículo',
          descricao: 'O aluno aprende a montar corretamente seu currículo, colocando somente as informações que realmente importam na avaliação das empresas e aprende támbém algumas dicas muito úteis na hora da montagem.'
        },
        {
          titulo: 'Atividade 09 – Divulgando o Currículo',
          descricao: 'O aluno vai saber como montar uma carta de apresentação, um pouco sobre o Portfólio e quando ele deve ser enviado, e depois de tudo montado corretamente, qual a melhor forma de enviar o seu material.'
        },
        {
          titulo: 'Atividade 10 – Dinâmica de Grupo',
          descricao: 'O aluno vai aprender o que é uma dinâmica e como se preparar antes e durante a mesma, e também verá algumas dicas sobre o que os examinadores que fazem a dinâmica esperam do candidato durante as atividades pedidas.'
        },
        {
          titulo: 'Atividade 11 – A Entrevista',
          descricao: 'Nesta última atividade o aluno vai aprender o que é uma entrevista, sobre o que fazer e o que não fazer durante a mesma. Aprenderá sobre as roupas certas que deverá usar, e poderá saber as respostas para algumas perguntas difíceis de se responder durante a entrevista. Verá também detalhes sobre o Marketing pessoal e como ter um bom relacionamento no seu trabalho com o chefe e com os colegas de trabalho.'
        },

      ],

    },
    // FIM DO CURSO 44
    {
      id: 45,
      nome: 'Em busca do emprego',
      resumo: 'Promocional',
      descricaoCompleta: 'Neste curso é apresentado ao aluno a forma correta de se iniciar uma busca de emprego, utilizando exercícios e testes para demonstrar ao aluno em qual perfil ele se encaixa melhor no mercado de trabalho. Após toda a introdução e dicas importantes para o aluno iniciar a procura de um novo emprego, será explicado ao aluno como o mesmo pode criar o seu próprio currículo de forma correta e em seguida como se comportar em uma entrevista de trabalho.',
      imageUrl: 'assets/11.png',
      categoria: ['Promocional'],
      fichaTecnica: '<strong>Carga horária média:</strong> 4 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso.<br><strong> Técnicas didáticas:</strong> 1 simulador. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas que estão na busca por uma vaga de trabalho.',
      objetivos: 'O curso tem como objetivo destacar o perfil e as qualidades necessárias do aluno, mostrando também como e onde ele poderá buscar e conquistar vagas de emprego, ampliando assim as suas possibilidades diante do mercado de trabalho atual.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Tópico 1 – O Início da Busca pelo Emprego',
          descricao: 'Na primeira lição o aluno recebe ajuda de como iniciar a busca por um emprego, entendendo a importância de fazer contatos, para buscar uma boa indicação, ele aprende a importância de conhecer a empresa que almeja trabalhar e aprende a entender o que o anúncio de vaga de emprego necessita para conseguir atender aos requisitos do empregador.'
        },
        {
          titulo: 'Atividade 1 – Tópico 2 – A Criação do Currículo e a Entrevista',
          descricao: 'Nessa lição o aluno aprende como elaborar um currículo de qualidade e evitar os erros mais comuns na criação deste documento tão importante, aprende também a criar a carta de apresentação que deve ser enviada junto com o currículo.<br><br> Também é abordado nessa lição como se preparar para a entrevista de emprego, e como se comportar, recebendo dicas valiosas de perguntas frequentes nas entrevistas de emprego.'
        },

      ],

    },
    // FIM DO CURSO 45
    {
      id: 46,
      nome: 'Profissões do Supermercado',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'O curso <strong>Profissões do Supermercado</strong> tem como objetivo preparar o aluno para o trabalho em diversas áreas de um supermercado, desde os caixas até à gerência. Ao longo de seis atividades, o curso é dividido em três partes principais: área de atendimento, área de vendas e área administrativa.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 14 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Pessoas de qualquer profissão e de qualquer idade que desejam trabalhar em um supermercado, ou que já trabalham e gostariam de aprimorar suas funções.',
      objetivos: 'Através de um conhecimento básico sobre cada setor, o curso tem como objetivo desenvolver no aluno as habilidades necessárias para ingressar na área do autosserviço.',
      conteudo: [

        {
          titulo: 'Atividade 1 – O supermercado – passado e presente',
          descricao: 'Objetivo da aula: nesta primeira aula o aluno aprende a história do autosserviço no Brasil, ou seja, como tudo começou, quais foram os primeiros supermercados e o que mudou de lá pra cá. Também aprende como funciona de forma geral o trabalho nos supermercados.'
        },
        {
          titulo: 'Atividade 2 – Área de atendimento',
          descricao: 'Objetivo da aula: aqui são tratados assuntos referentes às profissões da área de atendimento: o operador de caixa, o empacotador, o fiscal de caixa, o segurança e o trabalho no balcão de informações.'
        },
        {
          titulo: 'Atividade 3 – Área de vendas – perecíveis – parte 1',
          descricao: 'Objetivo da aula: nesta atividade o aluno aprende a importância dos alimentos perecíveis para o supermercado e como eles exigem cuidados especializados. Os primeiros três setores estudados são: açougue, peixaria, frios e laticínios.'
        },
        {
          titulo: 'Atividade 4 - Área de vendas – perecíveis – parte 2',
          descricao: 'Objetivo da aula: esta aula é uma continuação da aula anterior, tratando ainda de outros setores de perecíveis: hortifrutigranjeiros, padaria e rotisseria.'
        },
        {
          titulo: 'Atividade 5 - Área de vendas – não perecíveis',
          descricao: 'Objetivo da aula: aqui o aluno aprende quais são os produtos que fazem parte da área de não perecíveis, quem são os profissionais que cuidam deste setor, e como as prateleiras são abastecidas. Também aprende sobre o promotor de vendas e como funciona o cross merchandising'
        },
        {
          titulo: 'Atividade 6 – Área administrativa',
          descricao: 'Objetivo da aula: na última atividade, o aluno aprende sobre os setores administrativos do supermercado: o departamento pessoal e financeiro, o departamento de compras, o estoque, e o setor de limpeza. E para finalizar, são revelados ao aluno os setores que mais carecem de profissionais atualmente, o motivo da falta de profissionais, e o que os supermercados estão fazendo para resolver este problema.'
        },

      ],

    },
    // FIM DO CURSO 46
    {
      id: 47,
      nome: 'Técnicas de Vendas',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'Um dos aspectos mais importantes para o sucesso de um negócio é ter um bom setor de vendas, e isso se vê na grande procura que existe por bons vendedores. Mas o processo de venda não é tão simples. Na realidade, trata-se de um conjunto estruturado de passos que um bom profissional deve aprender. Examinaremos junto com você cada passo que o vendedor deve dar para ter sucesso nesta atividade.',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong> Primeiro grau ou equivalente. Segundo grau é desejável.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Pessoas que desejam aprender a profissão do Profissional de Vendas que é muito solicitada pelo mercado de trabalho e que não apresenta desemprego.',
      objetivos: 'Neste curso, você receberá conselhos, dicas, aprenderá a identificar armadilhas, como: apresentar um produto, como descobrir as verdadeiras necessidades do cliente e principalmente lhe ensinarei a dificil arte de “fechar” uma venda, que é o que realmente conta para ser bem sucedido como vendedor.',
      conteudo: [

        {
          titulo: 'Atividade 1 - INTRODUÇÃO À TÉCNICA DE VENDAS',
          descricao: 'Nesta lição, você verá qual é o valor do profissional de vendas competente, qual é o seu perfil ideal e faremos uma breve retrospectiva das técnicas de vendas. Por fim, veremos como vender corretamente satisfazendo as necessidades dos clientes.'
        },
        {
          titulo: 'Atividade 2 - PREPARAÇÃO DA ATIVIDADE DE VENDAS',
          descricao: 'Vamos aprender a levantar e organizar informações, depois fixar objetivos e então definir uma estratégia de vendas.'
        },
        {
          titulo: 'Atividade 3 - A ABORDAGEM DO CLIENTE',
          descricao: 'Nesta lição, procurarei lhe dar algumas dicas de como se comportar quando chegar à hora do “cara-a-cara” com o cliente.'
        },
        {
          titulo: 'Atividade 4 - DETERMINAÇÃO DE NECESSIDADES',
          descricao: 'Nesta fase, tentaremos descobrir e analisar as necessidades do cliente através de algumas técnicas.'
        },
        {
          titulo: 'Atividade 5 - ARGUMENTAÇÃO',
          descricao: 'Aqui você aprenderá a arte de raciocinar com o cliente a fim de provar para ele que o produto irá lhe trazer benefícios.'
        },
        {
          titulo: 'Atividade 6 - TRATAMENTO DE OBJEÇÕES',
          descricao: 'Podemos definir a objeção como uma oposição momentânea à argumentação de venda. Nem sempre isto é negativo, pelo contrário, as objeções na maioria das ocasiões, ajudam o cliente a se decidir, mas depende muito do comportamento do vendedor e é isto o que veremos.'
        },
        {
          titulo: 'Atividade 7 - O FECHAMENTO',
          descricao: 'Você irá aprender que se ficar esperando o cliente fazer o pedido ou ele ligar de volta, pode perder a venda. Assim, lhe mostrarei como tomar a iniciativa prestando atenção aos sinais de fechamentos e aplicando as respectivas técnicas.'
        },
        {
          titulo: 'Atividade 8 - AUTO-REFLEXÃO',
          descricao: 'Antes, durante e depois da venda. Do que você fizer nestas três fases importantes da venda, dependerá se é eficiente ou não. Vamos então fazer uma reflexão?'
        },       

      ],

    },
    // FIM DO CURSO 47
    {
      id: 48,
      nome: 'Youtubers',
      resumo: 'Tecnologia e Informática / Promocional',
      descricaoCompleta: 'O curso de <strong>Youtubers</strong> é um curso que reúne alguns assuntos que avaliamos como importantes famosa da internet, o Youtube. Ele surge como um complemento e com a função de sanar as principais dúvidas que surgem ao aluno, que são: <br><br><li>Como faço para criar uma conta no Youtube? <li>Como público meus próprios vídeos no Youtube? <li>É possível ganhar dinheiro publicando vídeos na internet? <li>Como faço uma transmissão ao vivo no Youtube?',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática', 'Promocional'],
      fichaTecnica: '<strong>Carga horária média:</strong> 4 horas. <br><strong>Pré-requisitos: </strong> Ter feito o curso de Windows.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas independentemente da idade ou profissão.',
      objetivos: 'Ensinar o aluno como manusear o Movie Maker e posteriormente a utilizar todas as ferramentas de publicação e divulgação de vídeos do Youtube.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Criando um Filme',
          descricao: 'Nessa primeira atividade o aluno irá aprender a criar vídeos através do aplicativo Movie Maker. Aprenderá também a aplicar efeitos e transições nos vídeos, sons, animações, textos e muitos outros recursos.'
        },
        {
          titulo: 'Atividade 02 – Publicando um Vídeo',
          descricao: 'O assunto dessa atividade é Youtube! Nessa atividade o aluno irá aprender passo a passo como criar uma conta no Youtube e como publicar e configurar corretamente os seus vídeos, desde a edição e aplicação de filtros nos vídeos até a monetização e transmissões ao vivo pelo Youtube.'
        },

      ],

    },
    // FIM DO CURSO 48
    {
      id: 49,
      nome: 'Telemarketing',
      resumo: 'Profissionalizantes / Comércio e Serviços',
      descricaoCompleta: 'O curso ensina as técnicas essenciais utilizadas pelos <strong>operadores de telemarketing</strong>. O aluno aprenderá a lidar com objeções e como aprimorar a comunicação por telefone, além de aprender a elaborar seu próprio roteiro de trabalho e a desenvolver a postura profissional correta para a profissão?',
      imageUrl: 'assets/11.png',
      categoria: ['Profissionalizantes', 'Comércio e Serviços'],
      fichaTecnica: '<strong>Carga horária média:</strong> 16 horas. <br><strong>Pré-requisitos: </strong> Noções básicas de informática e nível de escolaridade básico (o curso tem certos termos de linguagem, que exige certo grau de escolaridade para que seja compreendido).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A qualquer pessoa que estiver interessada em desenvolver as competências básicas necessárias para exercer a profissão de operador de telemarketing e aprimorar as técnicas de telecomunicações.',
      objetivos: 'O objetivo deste curso é o desenvolvimento das competências básicas para o trabalho, sem terminalidade profissional específica. Ao realizar este curso, o aluno terá noções básicas e essenciais de telemarketing, passando a conhecer as técnicas utilizadas pelos operadores de telemarketing. Aprenderá a lidar com objeções e como aprimorar a comunicação por telefone, além de aprender a elaborar seu próprio roteiro de trabalho e a desenvolver a postura profissional correta para um operador de telemarketing.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Telemarketing',
          descricao: 'Esta é uma lição teórica, que mostra a história do telemarketing que introduz o aluno no ambiente desta profissão.'
        },
        {
          titulo: 'Atividade 02 – Perfil do Profissional de Telemarketing',
          descricao: 'Nesta lição o aluno aprenderá a desempenhar as qualidades necessárias que o ajudarão a obter o perfil de um profissional de telemarketing.'
        },
        {
          titulo: 'Atividade 03 – Tipos de Telemarketing',
          descricao: 'Esta lição apresenta os 2 tipos de telemarketing (ativo e receptivo) e apresenta exemplos de como trabalhar com estes dois setores da profissão.'
        },
        {
          titulo: 'Atividade 04 – O Processo de Comunicação',
          descricao: 'Nesta lição, o aluno aprenderá como a comunicação deve ser precedida, além de ter uma clara idéia da importância da voz, ser eficiente no uso do telefone e manter uma postura correta durante o trabalho.'
        },
        {
          titulo: 'Atividade 05 – O Processo de Vendas',
          descricao: 'Nesta lição, o aluno aprenderá as etapas do processo de vendas, desde a prospecção até o fechamento da venda, além de técnicas para contornar objeções e fechar negócios.'
        },
        {
          titulo: 'Atividade 06 – Elaboração do Script e Roteir',
          descricao: 'Esta lição informa, passo a passo, como elaborar um roteiro vendas, incluindo a apresentação, a sondagem (busca de informações), argumentos e benefícios e fechamento. E mostrará ao aluno como realizar cada um destes passos.'
        },
        {
          titulo: 'Atividade 07 – Eficiência na Utilização do Telefone',
          descricao: 'Nesta lição, o aluno aprenderá técnicas para otimizar o uso do telefone, incluindo dicas de postura, entonação e como manter a atenção do cliente durante a ligação.'
        },
        {
          titulo: 'Atividade 08 – Compreendendo as Preocupações do Cliente',
          descricao: 'Esta é uma lição do curso em que se trata mais da parte psicológica. É explicada a forma de pensar dos clientes e como o operador pode vencer estas barreiras para proceder as vendas no telemarketing.'
        },
        {
          titulo: 'Atividade 09 – Passos Para a Superação de Objeções',
          descricao: 'Esta lição mostrará diversas dicas que o aluno poderá utilizar em seu dia-a-dia no trabalho de tele operador para responder as objeções, ou seja, as desculpas, as dificuldades ou qualquer barreira que possa aparecer durante a conversa pelo telefone.'
        },
        {
          titulo: 'Atividade 10 – A Importância da Automotivação',
          descricao: 'Esta lição traz um enorme incentivo ao aluno que deseja ingressar nesta nova profissão e mostra diversas técnicas e conselhos que podem ser adotados pelo profissional para manter sempre uma autoestima e uma automotivação muito boa.'
        },
        {
          titulo: 'Atividade 11 – Call Center',
          descricao: 'Nesta lição o aluno aprenderá sobre o conceito de call center, o que é, o que é feito em um call center e conhecerá alguns dos equipamentos que são utilizados nestes centros.'
        },
        {
          titulo: 'Atividade 12 – Conduta Ética e o Papel do Profissional de Telemarketing',
          descricao: 'Na lição final do curso, o aluno terá algumas informações sobre a importância da conduta ética para o exercício da função de Operador de Telemarketing.'
        },

      ],

    },
    // FIM DO CURSO 49
    {
      id: 50,
      nome: 'Criação de Games',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'O curso de <strong>Criação de Games</strong> foi desenvolvido com o objetivo ensinar a criar jogos, e ainda, como publicá-lo. Neste curso, o aluno aprende o essencial do aplicativo <strong>Unity</strong>. Ele estuda a estrutura do programa, os recursos que ele fornece, como inserir personagens, objetos e ainda a inserir e configurar scripts em cada um dos elementos. Aprende também como criar cenas, além de termos usados por desenvolvedores de jogos, fazendo com que tudo isso se torne um jogo flexível e interessante para atingir o público-alvo.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 12 horas. <br><strong>Pré-requisitos: </strong> Ter feito o curso de Windows e Lógica de Programação.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> A todas as pessoas que queiram adquirir conhecimento de um desenvolvedor de jogos.',
      objetivos: 'Preparar o aluno para usufruir com facilidade das ferramentas e recursos do aplicativo Unity e torná-lo público.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Desenvolvimento de Games',
          descricao: 'Nesta primeira atividade introdutória o aluno conhecerá o processo para a criação de jogos, os recursos usados por desenvolvedores, quais os tipos de profissionais são necessários para criar jogos de última geração e ainda nomes técnicos usados no desenvolvimento dos games e quais suas funções.'
        },
        {
          titulo: 'Atividade 2 – Introdução ao Unity 3D',
          descricao: 'Será ensinado os recursos que o aplicativo Unity oferece como sobre sua interface, além ver como manusear os recursos dos painéis e de alguns componentes usados no aplicativo.'
        },
        {
          titulo: 'Atividade 3 – Trabalhando com Terrenos',
          descricao: 'O aluno aprenderá a inserir e configurar objetos na cena como gramas, lago, árvores e como fazer com que estes objetos tenham um formato mais realista usando recursos avançados e práticos'
        },
        {
          titulo: 'Atividade 4 – Animações e Elementos de Ambientação',
          descricao: 'O conteúdo dessa atividade será: a inserção de animações nos objetos inseridos nas cenas, luzes, sombras e até mesmo neblina de forma que o jogo seja ambientado com a realidade.'
        },
        {
          titulo: 'Atividade 5 – Usando Sistema de Partículas no Unity',
          descricao: 'Nesta atividade o aluno conhecerá alguns elementos, seus conceitos e como inseri-los no game. Elementos estes que são usados como fenômenos naturais usados em forma de partículas, citando como exemplo a chuva.'
        },
        {
          titulo: 'Atividade 6 – Trabalhando com Áudio',
          descricao: 'Será ensinado como inserir áudios em diferentes elementos dentro das cenas do game, como os passos do personagem quando ele se movimentar, som das árvores etc., além de sons em 3D. Tudo para que quando o jogo seja executado, o jogador tenha mais emoção como se estivesse dentro do jogo.'
        },
        {
          titulo: 'Atividade 7 – Câmeras, Minimaps, Scripts e Inimigos',
          descricao: 'O aluno aprenderá como importar scripts aos objetos do jogo incluindo áudios, como editar estes scripts e como inserir câmeras de forma que o jogador tenha acesso a todas as áreas da cena.'
        },
        {
          titulo: 'Atividade 8 – Sistemas de Câmeras',
          descricao: 'O conteúdo dessa atividade será: inserir câmeras em primeira e terceira pessoa e como alterná-las, ou seja, inserir câmeras de forma que o jogador tenha a impressão de que seu personagem esteja sendo filmado enquanto joga além de aprender sobre algumas teorias sobre este recurso para que sejam usadas de maneira correta.'
        },
        {
          titulo: 'Atividade 9: Configurando e Publicando o Game',
          descricao: 'Será ensinado como publicar o jogo depois de pronto, para que players possam ter acesso ao game. O aluno também aprenderá a fazer algumas configurações para que a publicação atinja o público certo e que não ocorra problemas ao executar o game.'
        },

      ],

    },
    // FIM DO CURSO 50
    {
      id: 51,
      nome: 'Delphi - Módulo 1',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Ao longo de suas versões, o <strong>Delphi</strong> sempre esteve entre os principais produtos da área de programação. Usando uma linguagem visual orientada a objetos, é indicado para o desenvolvimento de vários tipos de programas, desde uma simples agenda pessoal até um grande e complexo Banco de Dados para gerenciamento em rede.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 35 horas. <br><strong>Pré-requisitos: </strong> Ter feito o curso de Windows e Lógica de Programação.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Normalmente pessoas que já trabalham com informática ou que já fizeram os cursos básicos e agora pretendem iniciar um estudo mais aprofundado para ampliar seus conhecimentos na área de programação.',
      objetivos: 'Todo tipo de empresa utiliza um sistema feito em computador que auxilia na administração e organização de seus serviços. O curso de Delphi ensina como desenvolver programas deste tipo, permitindo assim a criação de sistemas que trabalham em um ambiente gráfico e que facilitam bastante o trabalho do usuário final.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Introdução ao Delphi',
          descricao: 'O aluno terá noções de programação, conhecerá as caixas de ferramentas e aprenderá a manipular alguns componentes.'
        },
        {
          titulo: 'Atividade 2 – A Linguagem',
          descricao: 'É nesta lição que o aluno começa a desenvolver um programa, tendo noções de propriedades dos componentes, métodos e eventos, itens que são de extrema importância no desenvolvimento de uma aplicação.'
        },
        {
          titulo: 'Atividade 3 – Projetos em geral',
          descricao: 'Aqui o aluno conhece os arquivos que compõem um projeto, estuda sobre compilação e depuração e aprende como adicionar ou remover arquivos de formulários ou códigos de um projeto em desenvolvimento.'
        },
        {
          titulo: 'Atividade 4 – Variáveis e Constantes',
          descricao: 'O estudo de variáveis na área da programação é de extrema importância, pois a maior parte dos sistemas desenvolvidos utilizam variáveis para que o sistema possa funcionar. Nesta lição o aluno conhece os tipos de variáveis existentes e aprende como aplicálas.'
        },
        {
          titulo: 'Atividade 5 – Formulários',
          descricao: 'Quando desenvolvemos uma aplicação os componentes são inseridos em formulários, portanto, quando um sistema exige mais de uma tela diferente o programador precisa Ficha Técnica do Delphi 6 – Módulo I utilizar mais de um formulário. O aluno aprende nesta lição como manipular um formulário, conhecendo suas propriedades e estilos.'
        },
        {
          titulo: 'Atividade 6 – Criação de Menus',
          descricao: 'Muitas aplicações utilizam muito o uso de menus, principalmente aquelas que trabalham com banco de dados. O aluno aprenderá técnicas de construção de menus tais como: a adição de teclas aceleradoras, menus estilo botão de rádio, uso de imagens e criação de menus PopUp.'
        },
        {
          titulo: 'Atividade 7 – Programando em Delphi',
          descricao: 'Aqui o aluno aprende a manipular um grupo de componentes muito utilizados na criação de novas aplicações, aprofundando assim seu conhecimento sobre: Edit, MaskEdit, ListBox, ComboBox, ScrollBar e ProgressBar.'
        },
        {
          titulo: 'Atividade 8 – Controles de Arquivos',
          descricao: 'O Delphi é um programa que permite o trabalho com arquivos externos, ou seja, permite a manipulação de arquivos como faz o Windows Explorer. Nesta lição o aluno aprende como fazer a leitura de imagens e textos e a criar um visualizador de arquivos.'
        },
        {
          titulo: 'Atividade 9 - Instruções de Entrada e Saída',
          descricao: 'Nesta lição o aluno aprende a lidar com os tipos de caixas de mensagens utilizadas pelo Delphi e pelo sistema operacional para receber ou enviar informações ao usuário.'
        },

      ],

    },
    // FIM DO CURSO 51
    {
      id: 52,
      nome: 'Delphi - Módulo 2',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Ao longo de suas versões, o <strong>Delphi</strong> sempre esteve entre os principais produtos da área de programação. Usando uma linguagem visual orientada a objetos, é indicado para o desenvolvimento de vários tipos de programas, desde uma simples agenda pessoal até um grande e complexo Banco de Dados para gerenciamento em rede',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 35 horas. <br><strong>Pré-requisitos: </strong> O aluno deve ter feito antes o primeiro módulo do curso de Delphi.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Destina-se aos alunos que terminaram o primeiro módulo do curso de Delphi, pois é uma continuação da matéria do primeiro módulo.',
      objetivos: 'Ao final do curso o aluno terá conhecimento suficiente para desenvolver um sistema de gerenciamento de banco de dados com impressão de relatórios e criação de um setup para seus programas. No decorrer do curso o aluno desenvolve dois sistemas: BioMedic - programa para controle geral de uma farmácia e Fine Informática -programa utilizado no gerenciamento de uma loja de informática.',
      conteudo: [

        {
          titulo: 'Atividade 1 - Funções',
          descricao: 'Esta lição ensina o aluno a trabalhar com as principais funções utilizadas no Delphi. O aluno conhecerá funções de: Conversão, String, Matemáticas, Data e Hora e formatação.'
        },
        {
          titulo: 'Atividade 2 – Estruturas condicionais',
          descricao: 'O uso dos comandos estudados nesta lição é presença quase certa na maioria dos programas desenvolvidos. O uso das estruturas if, case, for, while e repeat é de suma importância em um ambiente de programação.'
        },
        {
          titulo: 'Atividade 3 – Arrays',
          descricao: 'Esta é uma lição pequena mas que exige muito do programador, pois ensina a trabalhar com Vetores e Matrizes que são tipos de variáveis utilizadas para armazenar uma grande quantidade de dados.'
        },
        {
          titulo: 'Atividade 4 – Procedimentos e Funções',
          descricao: 'A criação de procedimentos e funções dão mais agilidade ao programador pois permite utilizar uma mesma seqüência de códigos várias vezes sem que haja a necessidade da repetição destes códigos.'
        },
        {
          titulo: 'Atividade 5 – Tratamento de erros',
          descricao: 'Aqui o aluno aprende como lidar com os erros gerados pela programação de um sistema.'
        },
        {
          titulo: 'Atividade 6, 7, 8, 9, 10 - Desenvolvimento dos sistemas BioMedic e Fine Informática',
          descricao: 'Para o desenvolvimento de uma aplicação grande e complexa que exige armazenamento e consulta de dados o Delphi tem uma estrutura que permite o desenvolvimento de um bom projeto envolvendo banco de dados. Nesta lição o aluno aprende a desenvolver dois sistemas com controle de clientes, funcionários, fornecedores, estoque, vendas e inclusive impressão de relatórios.'
        },
        {
          titulo: 'Atividade 11 - InstallShield Express',
          descricao: 'Ao desenvolver um sistema o programador precisa criar uma maneira de distribuir o programa para seus clientes. Aqui o aluno aprende a gerar um programa de instalação para distribuição de seus sistemas.'
        },

      ],

    },
    // FIM DO CURSO 52
    {
      id: 53,
      nome: 'Banco de Dados SQL',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Conhecimentos em Bancos de Dados eletrônicos é conhecido como uma parte essencial na área de TI, não somente na área de TI, mas como em qualquer outra área, afinal sem organização, sem um padrão ou uma lógica correta, não é possível resolver nenhum tipo de problema. Seu papel é muito abrangente, pois através da administração de bancos de dados, é possível resolver diversos problemas para facilitar no dia-a-dia do mercado de trabalho. É uma área que tem crescido muito, uma vez que as organizações estão buscando cada vez mais facilidade, manuseio e rapidez no gerenciamento de seus recursos através de sistemas específicos. O mercado nacional e internacional tem necessidade de profissionais qualificados na área e a procura por pessoas com esse perfil é grande.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 30 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso. Sugere-se ter ensino médio completo (não obrigatório).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Destina-se especialmente para estudantes e profissionais da área de Tecnologia da Informação que queiram se especializar na área de administração de Bancos de dados.',
      objetivos: 'O objetivo do curso livre de Banco de Dados SQL é fornecer uma base de conhecimentos teóricos e práticos. Entretanto, o que fará de você um profissional excelente e realizado com a profissão escolhida, será sua determinação e interesse em manter-se atualizado com as novidades no mundo da tecnologia.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução a Banco de Dados',
          descricao: 'Nesta atividade será definido o objetivo principal do curso e uma breve introdução sobre o que é e como são utilizados bancos de dados'
        },
        {
          titulo: 'Atividade 02 – Normalização do Banco de Dados',
          descricao: 'O aluno estudará um assunto muito importante para quem trabalha com bancos de dados, que é a normalização dos dados, especificamente relacionamentos entre tabelas e chaves.'
        },
        {
          titulo: 'Atividade 03 – Criando um Banco de Dados',
          descricao: 'Nessa atividade o aluno aprenderá a criar o seu primeiro banco de dados e suas tabelas utilizando a linguagem SQL e o software MySQL Workbench.'
        },
        {
          titulo: 'Atividade 04 – Manipulando Dados',
          descricao: 'Nessa atividade o aluno aprenderá a organizar e manipular os dados em um banco de dados, especificamente a inserir, selecionar, alterar e excluir dados.'
        },
        {
          titulo: 'Atividade 05 – Relacionamentos e Visões',
          descricao: 'O aluno aprenderá a relacionar dados entre tabelas, para obter melhores resultados em uma consulta SQL.'
        },
        {
          titulo: 'Atividade 06 – Funções especiais e Subqueries',
          descricao: 'Nesta atividade o aluno aprenderá a respeito das funções especiais existentes na DQL, que é a linguagem de consulta de dados do SQL. Basicamente estaremos falando sobre algumas operações aritméticas e outras ações possíveis de serem realizadas com o comando SELECT, que retorna dados do banco de dados. Também conhecidas como funções de agregação.'
        },
        {
          titulo: 'Atividade 07 – Controle de Acesso',
          descricao: 'Nesta atividade iremos falar um pouco a respeito de controle de acesso ao banco de dados. Está funcionalidade faz parte da DCL que é a Linguagem de Controle de Dados, uma das linguagens que compõe o SQL. O controle de acesso serve para garantir que somente pessoas com autorização, possam realizar operações específicas no banco de dados.'
        },
        {
          titulo: 'Atividade 08 – Transações ACID',
          descricao: 'Nesta atividade o aluno aprenderá outro termo técnico bastante conhecido de quem trabalha com banco de dados, são as transações. Podendo as transações serem ou não ACID. Transações são conjunto de operações a serem realizadas no banco de dados.'
        },
        {
          titulo: 'Atividade 09– Stored Procedure e Triggers',
          descricao: 'Nessa atividade o aluno irá aprender o que são e como são utilizados em um banco de dados Stored Procedures (Procedimentos) e Triggers (Gatilhos), que são dois recursos muito importantes utilizados para administrar um banco de dados.'
        },

      ],

    },
    // FIM DO CURSO 53
    {
      id: 54,
      nome: 'HTML',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: '<strong>HTML</strong> significa <strong>Hypertext Markup Language</strong>. É uma linguagem de computador usada para criar páginas Web. Os documentos visualizados na Web são documentos em HTML. Como os documentos em HTML contêm apenas texto, eles são transferidos rapidamente pela Web.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 24 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer o Windows e ter feito o curso de Internet.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O curso de HTML destina-se a pessoas que trabalham ou que pretendem trabalhar com Web Designer, ou seja, montar sites para a Internet. Essa é uma das profissões que mais crescem hoje em dia, empregando muitos profissionais na área. O HTML é uma linguagem de programação bem simples e fácil para montar páginas de Internet. Mesmo alguém que não conhece programação pode fazer o curso.',
      objetivos: 'O objetivo do curso é ensinar o aluno os comandos da programação HTML de um jeito bem fácil e interessante, aprendendo a linguagem enquanto monta três sites Web diferentes, aplicando os comandos que forem aprendidos.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Apresentando a Linguagem HTML',
          descricao: 'Nesta atividade o aluno aprenderá os conceitos básicos sobre a linguagem HTML e os primeiros tags (comandos de HTML são chamados tags) que são os tags iniciais para a criação de qualquer página em HTML.'
        },
        {
          titulo: 'Atividade 02 – Organização de parágrafos',
          descricao: 'Essa atividade apresenta os tags utilizados para organizar parágrafos de texto dentro de uma página e como inserir linhas horizontais nas páginas.'
        },
        {
          titulo: 'Atividade 03 – Formatação de Parágrafos e de Caracteres',
          descricao: 'Esta é a lição de formatação, onde o aluno aprende a mudar a aparência de parágrafos (alinhando-os, transformando-os em blocos) e a mudar a aparência do texto (tipo de letra, tamanho de letra, cor, etc) utilizando tags específicos.'
        },
        {
          titulo: 'Atividade 04 – Listas',
          descricao: 'Nesta lição o aluno aprende a criar listas numeradas, não numeradas e de definição, como num glossário.'
        },
        {
          titulo: 'Atividade 05 - Trabalho com Figuras',
          descricao: 'Depois de trabalhar apenas com textos, o aluno aprende a inserir e a formatar figuras que podem ser inseridas na página e como fundo para a página.'
        },
        {
          titulo: 'Atividade 06 – Criação de Vínculos',
          descricao: 'Essa é uma das lições mais importantes do curso, onde o aluno aprende a tornar a página interativa, ou seja, nesta lição o aluno aprende a transformar textos e Ficha Técnica HTML figuras simples em vínculos para outras páginas ou outras partes da página e até para endereços de email.'
        },
        {
          titulo: 'Atividade 07 – Tabelas',
          descricao: 'Esta é a lição sobre a criação de tabelas para páginas Web utilizando os tags específicos para tabelas em HTML.'
        },
        {
          titulo: 'Atividade 08 – Formulários',
          descricao: 'Um grande número de sites de Internet tem páginas com formulários, que o visitante pode preencher para dar sua opinião, fazer perguntas e até fazer compras (entre tantas outras utilidades). Assim, nesta lição, o aluno aprende a criar formulários utilizando os tags HTML.'
        },
        {
          titulo: 'Atividade 09– Frames',
          descricao: 'Os frames, ou quadros, podem dividir a tela de um site em várias partes. São muito utilizados em site Web, assim, o aluno aprenderá a criá-los e a mudar suas características.'
        },
        {
          titulo: 'Atividade 10 - Imagens Mapeadas e Recursos Avançados',
          descricao: 'As imagens mapeadas, também chamadas hotspots, fazem com que uma figura tenha vários pontos interativos, assim quando o usuário clicar sobre uma parte da figura ela acessará uma página ou outro item. Os recursos avançados incluem inserção de sons e filmes nas páginas Web.'
        },
        {
          titulo: 'Exercício Final - Publicando a Página',
          descricao: 'Esta lição ensina passo a passo a publicação de sites na Internet, usando um provedor gratuito para tornar o site visível na Internet para que pessoas do mundo todo possam acessá-lo.'
        },

      ],

    },
    // FIM DO CURSO 54
    {
      id: 55,
      nome: 'Lógica + Java Básico',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Atualmente, a lógica de programação é conhecida como uma parte essencial na área de TI, não somente na área de TI, mas como em qualquer outra área, afinal sem organização, sem um padrão ou uma lógica correta, não é possível resolver nenhum tipo de problema. Seu papel é muito abrangente, pois através da programação, tanto na linguagem Java ou como outra linguagem de programação, é possível resolver diversos problemas para facilitar no dia-a-dia do mercado de trabalho. É uma área que tem crescido muito, uma vez que as organizações estão buscando cada vez mais facilidade, manuseio e rapidez no gerenciamento de seus recursos através de sistemas específicos.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 20 horas. <br><strong>Pré-requisitos: </strong> Não há pré-requisitos para esse curso. Sugere-se ter ensino médio completo (não obrigatório).<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> Destina-se especialmente para estudantes e profissionais da área de Tecnologia da Informação e interessados nesta área.',
      objetivos: 'O objetivo do curso livre de Lógica + Java é fornecer uma base de conhecimentos teóricos e práticos. Entretanto,o que fará de você um profissional excelente e realizado com a profissão escolhida, será sua determinação e interesse em manter-se atualizado com as novidades no mundo da programação.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Funcionamento do Computador e Introdução',
          descricao: 'Nesta atividade será estudado o funcionamento do computador, definição de lógica e java, e como as atividades empresariais dependem da programação para atender aos diversos tipos de clientes.'
        },
        {
          titulo: 'Atividade 02 – Introdução a Lógica de Programação',
          descricao: 'O aluno ficará motivado por ver as vantagens de estudar a lógica. Ficará sabendo qual a definição de lógica de programação, e como ela pode ser aplicada em seu dia-a-dia.'
        },
        {
          titulo: 'Atividade 03 – Tipos de Dados',
          descricao: 'Nessa atividade o aluno aprenderá todos os tipos de dados possíveis que o computador suporta, e como esses dados são armazenados e utilizados em todo o sistema.'
        },
        {
          titulo: 'Atividade 04 – Operadores e Expressões Matemáticas',
          descricao: 'Essa atividade deixará claro que até mesmo na programação, no desenvolvimento de algum sistema utilizamos a matemática, seus operadores e expressões.'
        },
        {
          titulo: 'Atividade 05 – Entrada e Saída de Dados',
          descricao: 'O aluno verá a diferença entre Entrada e Saída de dados, e como são importantes utilizar esses recursos primitivos no desenvolvimento da lógica de programação e na linguagem Java.'
        },
        {
          titulo: 'Atividade 06 – Controle de Fluxo',
          descricao: 'Nesta atividade o aluno irá aprender todos os tipos de estruturas de controle de fluxo de execução de um algoritmo e como eles podem deixar nossos algoritmos menores.'
        },
        {
          titulo: 'Atividade 07 – O comando SWITCH em Java',
          descricao: 'Continuando o conteúdo da atividade anterior, sobre controle de fluxo de execução, nesta atividade o aluno irá aprender como utilizar o comando SWITCH, mais um tipo de estrutura de controle de fluxo de execução disponível na linguagem Java.'
        },
        {
          titulo: 'Atividade 08 – Vetores e Matrizes',
          descricao: 'O aluno irá estudar sobre Vetores e Matrizes, que assim como na matemática, os vetores e matrizes conhecidos como Array\'s nas linguagens de programação, são muito utilizados no desenvolvimento de um algoritmo.'
        },
        {
          titulo: 'Atividade 09 – Funções, Métodos e Procedimentos',
          descricao: 'Nessa atividade o aluno irá aprender o que são os subalgoritmos, como criá-los e como deixar um algoritmo mais organizado e com uma funcionalidade maior, através da criação de funções, métodos, procedimentos, subrotinas, todos esses termos que são ligados a palavra subalgoritmo na programação.'
        },

      ],

    },
    // FIM DO CURSO 55
    {
      id: 56,
      nome: 'Visual Basic - Módulo 1',
      resumo: 'Tecnologia e Informática',
      descricaoCompleta: 'Seja você um profissional experiente ou um novato em programação para <strong>Windows</strong>, o <strong>Visual Basic</strong> lhe oferece um conjunto completo de ferramentas para simplificar o desenvolvimento rápido de aplicativos. Em vez de escrever muitas linhas de código para descrever a aparência e a localização de elementos da interface, você simplesmente coloca objetos pré-montados em seus lugares na tela. Os iniciantes podem criar aplicativos úteis aprendendo apenas algumas das palavras-chave, ainda que a sofisticação da linguagem permita aos profissionais obter qualquer resultado que possa ser obtido usando qualquer linguagem de programação para <strong>Windows</strong>.',
      imageUrl: 'assets/11.png',
      categoria: ['Tecnologia e Informática'],
      fichaTecnica: '<strong>Carga horária média:</strong> 30 horas. <br><strong>Pré-requisitos: </strong> O aluno precisa conhecer o Windows e fazer o curso de Lógica de Programação.<br><strong> Técnicas didáticas:</strong> 1 simulador e 1 apostila. <br> <br> <strong>A quem se destina:</strong> O Módulo I destina-se às pessoas que trabalham com informática e que desejam aprofundar mais os seus conhecimentos em informática, e entrar na área de programação.',
      objetivos: 'Todo tipo de empresa utiliza um sistema feito em computador que auxilia na administração e organização de seus serviços. O módulo I do curso de Visual Basic oferece o entendimento mais básico, bem como o teórico para a elaboração de um sistema. Dá ênfase à linhagem de programação do Visual Basic 6, propriamente dita.',
      conteudo: [

        {
          titulo: 'Atividade 01 – Introdução ao Visual Basic',
          descricao: 'O aluno terá noções de programação, conhecerá as caixas de ferramentas e aprenderá a manipular alguns componentes.'
        },
        {
          titulo: 'Atividade 02 – A Linguagem',
          descricao: 'É nesta lição que o aluno começa a desenvolver um programa, tendo noções de propriedades dos componentes, métodos e eventos, itens que são de extrema importância no desenvolvimento de uma aplicação.'
        },
        {
          titulo: 'Atividade 03 – Projetos em geral',
          descricao: 'Aqui o aluno conhece os arquivos que compõem um projeto, estuda sobre compilação e depuração e aprende a adicionar ou remover arquivos de formulários ou de códigos de um projeto em desenvolvimento.'
        },
        {
          titulo: 'Atividade 04 – Variáveis e Constantes',
          descricao: 'O estudo de variáveis na área da programação é de extrema importância, pois a maior parte dos sistemas desenvolvidos utilizam variáveis para que possam funcionar. Nesta lição o aluno conhece os tipos de variáveis existentes e aprende a aplicá-las.'
        },
        {
          titulo: 'Atividade 05 – Formulários',
          descricao: 'Quando desenvolvemos uma aplicação os componentes são inseridos em formulários, portanto, quando um sistema exige mais de uma tela diferente, o programador precisa utilizar mais de um formulário. O aluno aprende nesta lição a manipular um ou mais formulários, conhecendo suas propriedades e estilos.'
        },
        {
          titulo: 'Atividade 06 – Criação de Menus',
          descricao: 'Muitas aplicações utilizam menus, principalmente aquelas que trabalham com bancos de dados. O aluno aprenderá técnicas de construção de menus tais como: a adição de teclas aceleradoras, menus estilo botão de rádio, uso de imagens e criação de menus PopUp.'
        },
        {
          titulo: 'Atividade 07 – Programando em Visual Basic',
          descricao: 'Aqui o aluno aprende a manipular um grupo de componentes muito utilizados na criação de novas aplicações, aprofundando assim seu conhecimento sobre: Edit, MaskEdit, ListBox, ComboBox, ScrollBar e ProgressBar.'
        },
        {
          titulo: 'Atividade 08 – Controles de Arquivos',
          descricao: 'O Visual Basic é um programa que permite o trabalho com arquivos externos, ou seja, permite a manipulação de arquivos como faz o Windows Explorer. Nesta lição o aluno aprende como fazer a leitura de imagens e textos e a criar um visualizador de arquivos.'
        },
        {
          titulo: 'Atividade 09 – Instruções de Entrada e Saída',
          descricao: 'Nesta lição o aluno aprende a lidar com os tipos de caixas de mensagens utilizadas pelo Visual Basic e pelo sistema operacional para receber ou enviar informações ao usuário.'
        },

      ],

    },
    // FIM DO CURSO 56
    {
      id: 57,
      nome: 'V',
      resumo: 'T',
      descricaoCompleta: '',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '',
      conteudo: [

        {
          titulo: '',
          descricao: ''
        },
        
      ],

    },
    // FIM DO CURSO 57
    {
      id: 58,
      nome: 'V',
      resumo: 'T',
      descricaoCompleta: '',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '',
      conteudo: [

        {
          titulo: '',
          descricao: ''
        },
        
      ],

    },
    // FIM DO CURSO 58
    {
      id: 59,
      nome: 'V',
      resumo: 'T',
      descricaoCompleta: '',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '',
      conteudo: [

        {
          titulo: '',
          descricao: ''
        },
        
      ],

    },
    // FIM DO CURSO 59
    {
      id: 60,
      nome: 'V',
      resumo: 'T',
      descricaoCompleta: '',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '',
      conteudo: [

        {
          titulo: '',
          descricao: ''
        },
        
      ],

    },
    // FIM DO CURSO 60
    {
      id: 61,
      nome: 'V',
      resumo: 'T',
      descricaoCompleta: '',
      imageUrl: 'assets/11.png',
      categoria: ['T'],
      fichaTecnica: '',
      conteudo: [

        {
          titulo: '',
          descricao: ''
        },
        
      ],

    },
    // FIM DO CURSO 61
  ];

  constructor() { }

  getCursos(): Curso[] {
    return this.cursos;
  }

  getCursoById(id: number): Curso | undefined {
    return this.cursos.find(curso => curso.id === id);
  }
}