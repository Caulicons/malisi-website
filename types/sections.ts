import { IconType } from 'react-icons';

type sectionMeetOurTeamType = {
  subtitle: string;
  title: string;
  team: {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
    socialMedias: {
      name:
        | 'WhatsApp'
        | 'Instagram'
        | 'Facebook'
        | 'Linkedin'
        | 'Twitter'
        | 'Youtube'
        | 'Github'
        | 'Telegram'
        | 'Discord'
        | 'Snapchat'
        | 'TikTok'
        | 'Twitch';
      url: string;
    }[];
  }[];
};

type sectionOurPurposeType = {
  subtitle: string;
  title: string;
  description: string;
  cards: {
    icon: IconType;
    title: string;
    description: string;
    variant: 'primary' | 'secondary';
  }[];
};

export type { sectionMeetOurTeamType, sectionOurPurposeType };
