import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';

type BannerProps = {
  subtitle: string;
  title: string;
  imageName?: string;
};

const Banner = ({ subtitle, title, imageName }: BannerProps) => {
  const banner = imageName ? imageName : 'home';
  return (
    <Section
      style={{
        backgroundImage: `url(assets/images/banners/${banner}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='tablet:min-h-[calc(100vh-102px)] tablet:p-0 h-[calc(100vh-80px)] p-0'
    >
      <div className='flex h-full w-full items-center justify-center bg-gray-900/70  text-center'>
        <div className='max-w-sectionContainer'>
          <Text className='mb-5' variant='subTitle'>
            {subtitle}
          </Text>
          <Text tag='h1' variant='h1' className='leading-[150%]'>
            {title}
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
