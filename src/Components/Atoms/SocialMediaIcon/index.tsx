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

type SocialMediaIconProps = {
  url: string;
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
  color?: string;
  size?: number;
};

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
}: SocialMediaIconProps) => {
  const Icon = socialMedias[name];

  return (
    <Anchor href={url}>
      <Icon size={size} color={color} />
    </Anchor>
  );
};

export default SocialMediaIcon;
