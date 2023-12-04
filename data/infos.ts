import { IoRibbonOutline } from 'react-icons/io5';
import { TbTools, TbUsersGroup } from 'react-icons/tb';
import { BsBuildingAdd, BsGraphUp } from 'react-icons/bs';
import {
  sectionMeetOurTeamType,
  sectionOurPurposeType,
} from '../types/sections';

const sectionWhatIsJobSecurity = {
  subTitle: 'segurança',
  title: 'O que é segurança do trabalho?',
  cards: [
    {
      id: 1,
      title: 'O que é ?',
      description:
        'É um conjunto regras legais e normativas que busca eliminar ou minimizar os acidentes de trabalho, doenças ocupacionais, bem como proteger a integridade física e mental dos trabalhadores em seu ambiente laboral, garantindo a todos um ambiente de trabalho seguro e saudável, reduzindo os riscos que possam prejudicar a saúde dos colaboradores. ',
    },
    {
      id: 2,
      title: 'Para quem ?',
      description:
        'A Segurança do Trabalho é a garantia de saúde ao trabalhador, e segurança jurídica ao empregador',
    },
    {
      id: 3,
      title: 'Para quê ?',
      description:
        'Porque previne e garante ao trabalhador qualidade de vida e integridade física no trabalho e previne e garante ao empregador segurança em fiscalização',
    },
    {
      id: 4,
      title: 'Como ?',
      description:
        ' Através de gestão eficiente e Documentos elaborados com excelência.',
    },
  ],
};

const sectionHighQualityService = {
  subTitle: 'serviços de alta qualidade',
  title:
    'A importÂncia de uma boa assessoria em segurança do trabalho e meio ambiente',
  quote: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    author: '- MALISI ENGENHARIA',
    buttonName: 'fale conosco',
  },
};

const sectionTheBetterChoiceInWorkSafety = {
  subTitle: 'serviços',
  title: 'A MELHOR ESCOLHA EM SEGURANÇA DO TRABALHO.',
  cards: [
    {
      id: 1,
      title: 'treinamentos',
      description: 'Treinamentos de Segurança do Trabalho com certificados.',
      icon: TbTools,
    },
    {
      id: 2,
      title: 'serviços',
      description:
        'Assessoria e Consultoria em Engenharia de Segurança do Trabalho para empresas de diferentes tamanhos e segmentos.',
      icon: IoRibbonOutline,
    },
    {
      id: 3,
      title: 'consultoria',
      description:
        'Assessoria e Consultoria em Engenharia de Segurança do Trabalho para empresas de diferentes tamanhos e segmentos. ',
      icon: BsBuildingAdd,
    },
  ],
};

const sectionOurClients = {
  subTitle: 'Avaliações',
  title: 'Nossos Clientes',
  reviews: [
    {
      id: 1,
      start: '⭐⭐⭐⭐⭐',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      author: 'Malisi Engenharia',
    },
    {
      id: 2,
      start: '⭐⭐⭐⭐⭐',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      author: 'Malisi Engenharia',
    },
  ],
};

const sectionMeetOurTeam: sectionMeetOurTeamType = {
  subTitle: 'Nossa equipe',
  title: 'Conhecão nossa equipe',
  team: [
    {
      id: 1,
      name: 'Marcelo Lima',
      role: 'Cargo',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      image: '/assets/images/our-team/malisi.png',
      socialMedias: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com',
        },
      ],
    },
    {
      id: 2,
      name: 'Marcelo Lima',
      role: 'Cargo',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      image: '/assets/images/our-team/malisi.png',
      socialMedias: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com',
        },
      ],
    },
  ],
};

const sectionContact = {
  subTitle: 'Contato',
  title: 'entre em contato com a gente para mais informações',
};

const sectionOurPurpose: sectionOurPurposeType = {
  subTitle: 'Quem somos',
  title: 'Nosso Proposito',
  description:
    'Oferecer aos clientes, qualidade em termos de documentações, treinamentos e requisitos legais. Promover às empresas gestão eficiente de saúde e segurança do trabalho e meio ambienteh, através de um relacionamento ético, íntegro e transparente.',
  cards: [
    {
      icon: BsGraphUp,
      title: 'missão',
      description:
        'Proteger a integridade física das pessoas e equilíbrio do meio ambiente, através de soluções inovadoras em segurança do trabalho, higiene ocupacional e sustentabilidade ambiental. Proporcionando um ambiente de trabalho saudável e seguro para nossos clientes, garantindo o cumprimento das normas regulamentadoras e promovendo a preservação do planeta para as futuras gerações.',
      variant: 'primary',
    },
    {
      icon: TbUsersGroup,
      title: 'visão',
      description:
        'Ser líder na promoção da segurança do trabalho e no cuidado com o meio ambiente, sendo reconhecidos pela excelência de nossos serviços e pelo compromisso com a saúde, segurança e sustentabilidade. Buscamos constantemente inovar e expandir nossos conhecimentos, impactando positivamente os clientes em que atuamos.',
      variant: 'secondary',
    },
  ],
};

/* HiOutlineUsers icon*/
const sectionValues = {
  subTitle: 'Valores',
  title: 'Prezar por relações duradouras,  tendo como pilares: ',
  cards: [
    {
      title: 'Integridade',
      description: 'Toda a base de conhecimento e experiência do cliente',
    },
    {
      title: 'Compromisso',
      description: 'Toda a base de conhecimento e experiência do cliente',
    },
    {
      title: 'Inovação',
      description: 'Toda a base de conhecimento e experiência do cliente',
    },
    {
      title: 'sustentabilidade',
      description:
        'Agir de maneira responsável e sustentável, considerando o impacto ambiental de nossas operações e promovendo práticas ecologicamente corretas.',
    },
    {
      title: 'valorização das pessoas',
      description:
        'Investir no desenvolvimento de nossos colaboradores, reconhecendo que são a chave para o nosso sucesso e a fonte de nossa força.',
    },
    {
      title: 'responsabilidade social',
      description:
        'Agir de maneira responsável e sustentável, considerando o impacto ambiental de nossas operações e promovendo práticas ecologicamente corretas.',
    },
  ],
};

/* const sectionOurHistory = {
  subTitle: 'História',
  title: 'Nossa História',
  description: 
}; */

export {
  sectionWhatIsJobSecurity,
  sectionHighQualityService,
  sectionTheBetterChoiceInWorkSafety,
  sectionOurClients,
  sectionMeetOurTeam,
  sectionContact,
  sectionOurPurpose,
  sectionValues,
};
