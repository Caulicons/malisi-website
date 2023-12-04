import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import { FaWhatsapp } from 'react-icons/fa6';
import { sectionHighQualityService } from '@data/infos';
import Redirect from '@/components/molecules/Redirect';

const HighQualityService = () => {
  return (
    <Section className='min-h-[60vh]'>
      <div className='flex max-w-sectionContainerSmall flex-col items-center gap-10 tablet:flex-row tablet:items-start'>
        <Image
          src='/assets/images/quotes/quote01.png'
          alt='Fundador da Malisi palestrado o que é segurança do trabalho'
          width={300}
          height={300}
          className='rounded-3xl'
        />
        <div className='flex flex-col gap-5 tablet:gap-10'>
          <div className='flex flex-col gap-3'>
            <Text tag='p' variant='subTitle' className='tablet:text-start'>
              {sectionHighQualityService.subTitle}
            </Text>
            <Text tag='h3' variant='h3' className='tablet:text-start'>
              {sectionHighQualityService.title}
            </Text>
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
      </div>
    </Section>
  );
};

export default HighQualityService;
