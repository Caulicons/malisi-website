import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import { FaWhatsapp } from 'react-icons/fa6';
import { sectionHighQualityService } from '@data/infos';
import Redirect from '@/components/molecules/Redirect';
import Presentation from '@/components/atoms/Presentation';
import Container from '@/components/atoms/Container';

const HighQualityService = () => {
  return (
    <Section>
      <Container direction='row' size='small' gap='lg'>
        <Image
          src='/assets/images/quotes/quote01.png'
          alt='Fundador da Malisi palestrado o que é segurança do trabalho'
          width={300}
          height={300}
          className='self-center rounded-3xl'
        />
        <div className='flex flex-col gap-5 tablet:gap-10'>
          <div className='flex flex-col gap-3'>
            <Presentation
              subtitle={sectionHighQualityService.subtitle}
              title={sectionHighQualityService.title}
              titleColor='secondary'
              position='start'
              heading='h3'
            />
            <Text tag='p' className='mt-6'>
              {sectionHighQualityService.quote.description}
            </Text>
          </div>
          <div className='flex flex-col gap-3'>
            <Text tag='p' variant='citation'>
              {sectionHighQualityService.quote.author}
            </Text>
            <Redirect
              href={'#'}
              variant='tertiary'
              Icon={FaWhatsapp}
              highlight={true}
            >
              Fale conosco
            </Redirect>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HighQualityService;
