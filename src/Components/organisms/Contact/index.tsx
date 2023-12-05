import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Presentation';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import ContactForm from '@/components/molecules/ContactForm';
import { sectionContact } from '@data/infos';
const Contact = () => {
  return (
    <Section className='h-screen'>
      <Container direction='row'>
        <Presentation
          subtitle={sectionContact.subtitle}
          title={sectionContact.title}
          position='start'
        />
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;
