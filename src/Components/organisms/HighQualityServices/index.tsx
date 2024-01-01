import { highQualityServiceData } from './data';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import Redirect from '@/components/molecules/RedirectButton';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Container from '@/components/atoms/Container';

import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Image = dynamic(() => import('@/components/atoms/Image'), {
  ssr: false,
  loading: () => (
    <div className='self-center rounded-3xl'>
      <Skeleton height={523} width={300} />
    </div>
  ),
});

const HighQualityService = () => {
  return (
    <Section>
      <Container direction='row' size='small' gap='lg'>
        <Image
          src={highQualityServiceData.image.src}
          alt={highQualityServiceData.image.alt}
          width={300}
          height={525}
          className='self-center rounded-3xl'
          loading='lazy'
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
            <Text tag='p' className='text-justify'>
              {highQualityServiceData.quote.description}
            </Text>
          </Container>
          <Container className='flex flex-col gap-3'>
            <Text tag='p' variant='citation'>
              {highQualityServiceData.quote.author}
            </Text>
            <Redirect
              href={highQualityServiceData.button.link}
              variant='tertiary'
              icon={highQualityServiceData.button.icon}
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
