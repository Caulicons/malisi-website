import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { TbBrandGmail } from 'react-icons/tb';

const contactData = {
  subtitle: 'Contato',
  title: 'entre em contato com a gente e nos siga nas redes sociais',
  links: [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511930153155',
      Icon: BsWhatsapp,
    },
    {
      name: 'E-mail',
      url: 'mailto:marcelo.lima@malisiengenharia.com.br',
      Icon: TbBrandGmail,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/malisi-engenharia-de-seguran%C3%A7a-do-trabalho-e-meio-ambiente/',
      Icon: BsLinkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/malisiengenharia?utm_source=qr',
      Icon: BsInstagram,
    },
    /* {
      name: 'Youtube',
      url: 'https://www.youtube.com',
      Icon: BsYoutube,
    }, */
  ],
};

export { contactData };
