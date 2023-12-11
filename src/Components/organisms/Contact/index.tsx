import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/SectionPresentation';
import Section from '@/components/atoms/Section';
import { contactData } from './data';
import Redirect from '@/components/molecules/Redirect';
const Contact = () => {
  return (
    <Section className='h-screen'>
      <Container direction='row'>
        <Presentation
          subtitle={contactData.subtitle}
          title={contactData.title}
          position='start'
        />
        <Container className='flex w-full flex-col gap-4'>
          {contactData.links.map((link) => (
            <Redirect
              key={link.name}
              variant={'secondary'}
              href={link.url}
              Icon={link.Icon}
              iconSize={30}
              className='mx-auto w-full min-w-[240px] justify-between'
              highlight={true}
            >
              {link.name}
            </Redirect>
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default Contact;
