import { sectionMeetOurTeamType } from '@/types';

const meetOurTeamData: sectionMeetOurTeamType = {
  subtitle: 'Nossa equipe',
  title: 'Conheça nossa equipe',
  team: [
    {
      id: 1,
      name: 'Marcelo Lima',
      role: 'Diretor técnico',
      formations: [
        'Graduado em Engenharia Ambiental pela Universidade de Guarulhos – UNG',
        'Pós Graduado em Engenharia de Segurança do Trabalho pela Universidade Santo Amaro – UNISA',
        'Diretor Técnico da Malisi Engenharia de Segurança do Trabalho e Meio Ambiente',
      ],
      quote: '',
      socialMedias: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/eng.marcelolima/',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/engenheiromarcelolima/',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/5511930153155',
        },
      ],
    },
  ],
};

export { meetOurTeamData };
