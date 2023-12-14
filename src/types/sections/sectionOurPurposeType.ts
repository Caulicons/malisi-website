import { IconType } from 'react-icons';

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

export type { sectionOurPurposeType };
