import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import { FaWhatsapp } from 'react-icons/fa6';
import { sectionHighQualityService } from '@data/infos';

const HighQualityService = () => {
  return (
    <Section className='min-h-[60vh]'>
      <div className='tablet:flex-row tablet:items-start max-w-sectionContainerSmall flex flex-col items-center gap-10'>
        <Image
          src='/assets/images/quotes/quote01.png'
          alt='Fundador da Malisi palestrado o que é segurança do trabalho'
          width={300}
          height={300}
          className='rounded-3xl'
        />
        <div className='tablet:gap-10 flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <Text tag='p' variant='subTitle' className='tablet:text-start'>
              {sectionHighQualityService.subTitle}
            </Text>
            <Text tag='h3' variant='h3' className='tablet:text-start'>
              {sectionHighQualityService.title}
            </Text>
            <Text tag='p' className='mt-6'>
              {sectionHighQualityService.infos.citation}
            </Text>
          </div>
          <div className='flex flex-col gap-3'>
            <Text tag='p' variant='citation'>
              {sectionHighQualityService.infos.citationAuthor}
            </Text>
            <Button style={{ fontSize: '30px' }}>
              <FaWhatsapp />
              <Text tag='p' variant='button'>
                {sectionHighQualityService.infos.buttonName}
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HighQualityService;
