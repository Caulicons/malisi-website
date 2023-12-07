import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import ContactForm from '@/components/molecules/ContactForm';
import { contactData } from './data';
import Redirect from '@/components/molecules/Redirect';
import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { TbBrandGmail } from 'react-icons/tb';
const Contact = () => {
  return (
    <Section className='h-screen'>
      <Container direction='row'>
        <Presentation
          subtitle={contactData.subtitle}
          title={contactData.title}
          position='start'
        />
        <div className='flex w-full flex-col gap-4'>
          <Redirect
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
            LinkedIn
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
          </Redirect>
        </div>
        {/* <ContactForm /> */}
      </Container>
    </Section>
  );
};

export default Contact;
