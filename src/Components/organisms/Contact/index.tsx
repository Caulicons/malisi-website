import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import ContactForm from '@/components/molecules/ContactForm';
import { contactData } from './data';
const Contact = () => {
  return (
    <Section className='h-screen'>
      <Container direction='row'>
        <Presentation
          subtitle={contactData.subtitle}
          title={contactData.title}
          position='start'
        />
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;
