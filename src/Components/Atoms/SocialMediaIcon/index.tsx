import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsSnapchat,
  BsTelegram,
  BsTiktok,
  BsTwitch,
  BsWhatsapp,
  BsYoutube,
} from 'react-icons/bs';
import Anchor from '../Anchor';
import { socialMediaIconVariants } from '@/types';

type SocialMediaIconProps = {
  color?: string;
  size?: number;
  ariaLabel?: string;
} & socialMediaIconVariants;

const socialMedias = {
  WhatsApp: BsWhatsapp,
  Instagram: BsInstagram,
  Facebook: BsFacebook,
  Linkedin: BsLinkedin,
  Twitter: BsTwitch,
  Youtube: BsYoutube,
  Github: BsGithub,
  Telegram: BsTelegram,
  Discord: BsDiscord,
  Snapchat: BsSnapchat,
  TikTok: BsTiktok,
  Twitch: BsTwitch,
};

const SocialMediaIcon = ({
  url,
  name = 'WhatsApp',
  color = 'white',
  size = 42,
  ariaLabel,
}: SocialMediaIconProps) => {
  const Icon = socialMedias[name];

  return (
    <Anchor href={url} aria-label={ariaLabel}>
      <Icon size={size} color={color} />
    </Anchor>
  );
};

export default SocialMediaIcon;
