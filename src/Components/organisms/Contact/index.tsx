import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import ContactForm from '@/components/molecules/ContactForm';
import { sectionContact } from '@data/infos';
const Contact = () => {
  return (
    <Section>
      <div className='flex max-w-sectionContainer flex-col tablet:flex-row'>
        <div className='flex  flex-col tablet:max-w-[55%]'>
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
