import { socialMediaIconVariants } from '..';

type memberCard = {
  id: number;
  name: string;
  role: string;
  formations: string[];
  quote: string;
  socialMedias: socialMediaIconVariants[];
};

export type { memberCard };
