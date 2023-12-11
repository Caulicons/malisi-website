import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { TbBrandGmail } from 'react-icons/tb';
/*   <Redirect
            variant={'secondary'}
            href={'#'}
            Icon={BsWhatsapp}
            iconSize={30}
            className='mx-auto w-full min-w-[240px] justify-between'
            highlight={true}
          >
            WhatsApp
          </Redirect>
          <Redirect
            variant={'secondary'}
            href={'#'}
            Icon={TbBrandGmail}
            iconSize={30}
            className='mx-auto w-full min-w-[240px] justify-between'
            highlight={true}
          >
            Email
          </Redirect>
          <Redirect
            variant={'secondary'}
            href={'#'}
            Icon={BsLinkedin}
            iconSize={30}
            className='mx-auto w-full min-w-[240px] justify-between'
            highlight={true}
          >
            Linkedin
          </Redirect>
          <Redirect
            variant={'secondary'}
            href={'#'}
            Icon={BsInstagram}
            iconSize={30}
            className='mx-auto w-full min-w-[240px] justify-between'
            highlight={true}
          >
            Instagram
          </Redirect>
          <Redirect
            variant={'secondary'}
            href={'#'}
            Icon={BsYoutube}
            iconSize={30}
            className='mx-auto w-full min-w-[240px] justify-between'
            highlight={true}
          >
            Youtube
          </Redirect> */

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
      name: 'Email',
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
      url: 'https://www.instagram.com/eng.marcelolima/',
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
