import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';

type BannerProps = {
  subtitle: string;
  title: string;
  customImage?: string;
};

const Banner = ({ subtitle, title, customImage }: BannerProps) => {
  const banner = customImage ? customImage : 'home';
  return (
    <Section
      style={{
        backgroundImage: `url(assets/images/banners/${banner}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className=' h-[calc(100vh-80px)]  md:h-[calc(100vh-102px)]'
      childrenProps={{
        className:
          'text-center h-full w-full bg-gray-900/70 justify-center flex flex-col md:px-10 px-4 gap-6',
      }}
    >
      <Text variant='subTitle'>{subtitle}</Text>
      <Text tag='h1' variant='h1'>
        {title}
      </Text>
    </Section>
  );
};

export default Banner;
