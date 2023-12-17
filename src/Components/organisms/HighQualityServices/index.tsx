import { highQualityServiceData } from './data';
import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import { FaWhatsapp } from 'react-icons/fa6';
import Redirect from '@/components/molecules/RedirectButton';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Container from '@/components/atoms/Container';

const HighQualityService = () => {
  return (
    <Section>
      <Container direction='row' size='small' gap='lg'>
        <Image
          src={highQualityServiceData.image.src}
          alt={highQualityServiceData.image.alt}
          width={300}
          height={300}
          className='self-center rounded-3xl'
        />
        <Container className='flex flex-col gap-5 tablet:gap-10'>
          <Container className='flex flex-col gap-3'>
            <Presentation
              subtitle={highQualityServiceData.subtitle}
              title={highQualityServiceData.title}
              titleColor='secondary'
              position='start'
              heading='h3'
            />
            <Text tag='p'>{highQualityServiceData.quote.description}</Text>
          </Container>
          <Container className='flex flex-col gap-3'>
            <Text tag='p' variant='citation'>
              {highQualityServiceData.quote.author}
            </Text>
            <Redirect
              href={highQualityServiceData.button.link}
              variant='tertiary'
              Icon={FaWhatsapp}
              aria-label={highQualityServiceData.button.ariaLabel}
              highlight={true}
            >
              {highQualityServiceData.button.name}
            </Redirect>
          </Container>
        </Container>
      </Container>
    </Section>
  );
};

export default HighQualityService;
