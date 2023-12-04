import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import ContactForm from '@/components/molecules/ContactForm';
import { sectionContact } from '@data/infos';
const Contact = () => {
  return (
    <Section>
      <div className='max-w-sectionContainer tablet:flex-row flex flex-col'>
        <div className='tablet:max-w-[55%]  flex flex-col'>
          <Text variant='subTitle' className='tablet:text-start'>
            {sectionContact.subTitle}
          </Text>
          <Text tag='h2' variant='h2' className='tablet:text-start'>
            {sectionContact.title}
          </Text>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
