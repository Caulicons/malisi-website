import Container from '@/components/atoms/Container';
import Presentation from '@/components/atoms/Section/SectionPresentation';
import Section from '@/components/atoms/Section';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

type BannerProps = {
  subtitle: string;
  title: string;
  imageURL?: string;
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
        backgroundImage: `url(../../assets/images/banners/${banner}.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={cn(
        `min-h-[calc(100vh-80px)] select-none p-0 tablet:min-h-[calc(100vh-102px)] tablet:p-0`,
        variants({ variant })
      )}
    >
      <div
        className={cn(
          'flex min-h-[calc(100vh-80px)]  w-full items-center justify-center bg-gray-900/70 text-center tablet:min-h-[calc(100vh-80px)]',
          variants({ variant })
        )}
      >
        <Container>
          <Presentation
            title={title}
            subtitle={subtitle}
            heading='h1'
            titleColor='white'
            position='center'
          />
        </Container>
      </div>
    </Section>
  );
};

export default Banner;
