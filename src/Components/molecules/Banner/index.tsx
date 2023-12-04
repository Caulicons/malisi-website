import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import cn from '@utils/cn';

type BannerProps = {
  subtitle: string;
  title: string;
  imageName?: string;
  className?: string;
  height?: number;
};

const Banner = ({ subtitle, title, imageName, height = 100 }: BannerProps) => {
  const banner = imageName ? imageName : 'home';
  const maxHight =
    height === 100 ? '' : `tablet:max-h-[calc(${height}vh-102px)] `;
  return (
    <Section
      style={{
        backgroundImage: `url(assets/images/banners/${banner}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={cn(
        `h-[calc(100vh-80px)] p-0  tablet:min-h-full  tablet:p-0 `,
        maxHight
      )}
    >
      <div className='flex h-full w-full items-center  justify-center bg-gray-900/70  text-center'>
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
