import Section from '@/components/atoms/Section';
import Text from '@/components/atoms/Text';
import cn from '@utils/cn';
import { cva } from 'class-variance-authority';

type BannerProps = {
  subtitle: string;
  title: string;
  imageName?: string;
  className?: string;
  variant?: 'default' | 'small';
};

const variants = cva('', {
  variants: {
    variant: {
      default: 'tablet:min-h-[calc(100vh-102px)]',
      small: 'tablet:min-h-[calc(50vh-102px)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Banner = ({ subtitle, title, imageName, variant }: BannerProps) => {
  const banner = imageName ? imageName : 'home';

  return (
    <Section
      style={{
        backgroundImage: `url(assets/images/banners/${banner}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={cn(
        `min-h-[calc(100vh-102px)] p-0 tablet:p-0`,
        variants({ variant })
      )}
    >
      <span
        className={cn(
          'flex min-h-[calc(100vh-102px)] w-full items-center justify-center bg-gray-900/70  text-center',
          variants({ variant })
        )}
      >
        <div className='h-full max-w-sectionContainer p-2 tablet:p-10'>
          <Text className='mb-5' variant='subTitle'>
            {subtitle}
          </Text>
          <Text tag='h1' variant='h1' className='leading-[150%]'>
            {title}
          </Text>
        </div>
      </span>
    </Section>
  );
};

export default Banner;
