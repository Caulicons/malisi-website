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
      className=' relative  h-[calc(100vh-80px)] md:h-[calc(100vh-102px)]'
      childrenProps={{
        className:
          ' h-full bg-gray-900/70 items-center flex justify-center text-center absolute top-0 left-0 w-full',
      }}
    >
      <div className='w-4/5'>
        <Text className='mb-5' variant='subTitle'>
          {subtitle}
        </Text>
        <Text tag='h1' variant='h1' className=''>
          {title}
        </Text>
      </div>
    </Section>
  );
};

export default Banner;
