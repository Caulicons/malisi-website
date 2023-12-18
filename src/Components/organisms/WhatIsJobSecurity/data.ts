import { IoPeopleCircleOutline } from 'react-icons/io5';

const whatIsJobSecurityData = {
  subtitle: 'segurança',
  title: 'O que é segurança do trabalho?',
  /* 
  
  cards: [
    {
      header: {
        title: 'Gerenciamento de Riscos Ocupacionais - GRO',
        icon: FaCirclePlus,
      },
      body: {
        description: '',
        list: [
          'Gerenciamento de Riscos Ocupacionais - GRO',
          'Programa de Gerenciamento de Risco - PGR',
        ],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title: 'SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE - NR-10',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: [
          'Laudo de Aterramento',
          'Laudo de Sistema de Proteção contra Descargas Atmosféricas - SPDA',
          'Projeto de Incorporação de Rede',
          'Projeto de Entrada de Energia Baixa Tensão',
          'Projeto Elétrico em CAD 2D',
          'Criação ou Atualização de Mapa de Risco',
        ],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title:
          'CALDEIRAS, VASOS DE PRESSÃO E TUBULAÇÕES E TANQUES METÁLICOS DE ARMAZENAMENTO - NR-13',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: [
          'Laudo com emissão de relatório de Inspeção',
          'Inspeção em Compressores',
          'Inspeção em Aquecedores',
          'Inspeção em Caldeiras',
          'Inspeção em Tubulação de Gás',
          'Inspeção em Autoclaves',
        ],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title: 'SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE - NR-14',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: ['Laudo de Insalubridade e Periculosidade – LIP'],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: { title: 'ERGONOMIA - NR-17', icon: FaCirclePlus },

      body: {
        description: '',
        list: [
          'Avaliação Ergonômica Preliminar – AEP',
          'Análise Ergonômica do Trabalho – AET',
        ],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: { title: 'ERGONOMIA - NR-17', icon: FaCirclePlus },

      body: {
        description: '',
        list: [
          'Combate ao Assédio no Ambiente de Trabalho',
          'Acessibilidade no Ambiente de Trabalho',
          'Etarismo no Ambiente de Trabalho',
          'Teatro SIPAT – Semana Interna de Prevenção de Acidentes',
        ],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title: 'Programa de Proteção Respiratória - PPR',
        icon: FaCirclePlus,
      },

      body: {
        description:
          'O Programa de Proteção Respiratória é um conjunto de medidas que busca apontar quais são os riscos respiratórios, como devem ser o procedimento de seleção do respirador e o treinamento dos atores envolvidos, informando sobre a adequada escolha do tamanho da peça facial que melhor veda o rosto do usuário e o seu uso correto contra a exposição aos riscos químicos e biológicos existentes no local de trabalho. O intuito do programa é controlar as doenças ocupacionais causadas pela inalação das impurezas do ar que são prejudiciais à saúde como poeiras, névoas, fumos, vapores e gases químicos.',
        list: [],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title:
          'LAUDO PREVIDENCIÁRIO/LEI 8.213/1991 E INSCRIção NORMATIVA PRES/INSS Nº 128, DE 28 DE MARÇO DE 2022',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: ['Laudo Técnico das Condições Ambientais do Trabalho – LTCAT'],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title: 'PROTEÇÃO RESPIRATÓRIA/ PORTARIA 672 de 08/11/2021',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: ['Programa de Proteção Respiratória – PPR'],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title: 'HIGIENE OCUPACIONAL/NORMAS DE HIGIENE OCUPACIONAL FUNDACENTRO',
        icon: FaCirclePlus,
      },

      body: {
        description: '',
        list: ['Avaliações de Higiene Ocupacional – HO'],
        forWhat: '',
        whatAreTheObjectives: '',
        beNotDo: '',
      },
    },
    {
      header: {
        title:
          'CONSULTOR TÉCNICO DE CAMPO, OBSERVADORES E FISCAIS DE SEGURANÇA PARA TRABALHO EM ALTURA, ESPAÇOS CONFINADOS E RESGATE',
        icon: FaCirclePlus,
      },

      body: {
        description:
          'Grupo de profissionais altamente qualificados para apoio de campo e administrativos para a supervisão e coordenação das atividades de risco caracterizadas como trabalhos não rotineiros. Estes profissionais poderão ser responsáveis pelas liberações das atividades, bem como o seu acompanhamento “in loco” para assegurar a aplicação dos requisitos legais e sistêmicos aplicáveis.',
        list: [
          'Laudo de Aterramento',
          'Laudo de SPDA',
          'Projeto de Incorporação de Rede',
          'Projetos de Entrada de Energia Baixão',
          'Projetos em CAD 2D',
          'Criação ou Atualização de Mapa de Risco',
        ],
        forWhat:
          'O PGR é para todos os empregadores que mantenham os trabalhadores como empregados (CLT).',
        whatAreTheObjectives:
          'O principal objetivo do PGR é prevenir que acidentes que possam vir prejudicar a saúde dos trabalhadores, a propriedade privada e ao meio ambiente.',
        beNotDo:
          'As empresas que não cumprirem essa exigência, estão infringindo ao nas Normas Regulamentadoras – NR de segurança e medicina do trabalho, expondo as empresas a multas e notificações por parte do Ministério do Trabalho.',
      },
    },
  ],
};f
  */
  cards: [
    {
      header: {
        title: 'O que é ?',
        icon: IoPeopleCircleOutline,
      },
      body: {
        description:
          'É um conjunto regras legais e normativas que busca eliminar ou minimizar os acidentes de trabalho, doenças ocupacionais, bem como proteger a integridade física e mental dos trabalhadores em seu ambiente laboral, garantindo a todos um ambiente de trabalho seguro e saudável, reduzindo os riscos que possam prejudicar a saúde dos colaboradores.',
      },
    },
    {
      header: {
        title: 'Para quem ?',
        icon: IoPeopleCircleOutline,
      },
      body: {
        description:
          'A Segurança do Trabalho é a garantia de saúde ao trabalhador, e segurança jurídica ao empregador',
      },
    },
    {
      header: {
        title: 'Para quê ?',
        icon: IoPeopleCircleOutline,
      },
      body: {
        description:
          'Porque previne e garante ao trabalhador qualidade de vida e integridade física no trabalho e previne e garante ao empregador segurança em fiscalização.',
      },
    },
    {
      header: {
        title: 'Como ?',
        icon: IoPeopleCircleOutline,
      },
      body: {
        description:
          'Através de gestão eficiente e Documentos elaborados com excelência.',
      },
    },
  ],
};

export default whatIsJobSecurityData;
