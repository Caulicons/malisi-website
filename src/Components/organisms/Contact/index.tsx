import { contactData } from './data';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import AnimationContact from './AnimationContact';

const Contact = () => {
  return (
    <Section className='h-screen'>
      <Container direction='row'>
        <Presentation
          subtitle={contactData.subtitle}
          title={contactData.title}
          position='start'
        />
        <AnimationContact />
      </Container>
    </Section>
  );
};

export default Contact;
