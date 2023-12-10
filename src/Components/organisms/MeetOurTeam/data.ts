import { sectionMeetOurTeamType } from '../../../types/sections';

const meetOurTeamData: sectionMeetOurTeamType = {
  subtitle: 'Nossa equipe',
  title: 'Conheça nossa equipe',
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
          name: 'Instagram',
          url: 'https://www.instagram.com',
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com',
        },
        {
          name: 'WhatsApp',
          url: 'https://www.whatsapp.com',
        },
      ],
    },
  ],
};

export { meetOurTeamData };
