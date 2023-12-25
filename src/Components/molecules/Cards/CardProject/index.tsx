import Anchor from '@/components/atoms/Anchor';
import Container from '@/components/atoms/Container';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';
import { projectCard } from '@/types';

const CardProject = (slide: projectCard) => {
  return (
    <Container className='mx-auto grid h-full w-full max-w-[400px] select-none gap-0 overflow-hidden tablet:gap-0'>
      <Image
        src={slide.href}
        alt={slide.alt}
        key={slide.id}
        width={400}
        height={400}
        style={{
          objectFit: 'cover',
          maxWidth: '100%',
          maxHeight: '255px',
          objectPosition: 'center',
        }}
        className='w-full'
      />

      <Anchor
        href={slide.moreInfo}
        className=' flex h-full w-full  justify-center rounded-b-3xl bg-secondary p-2 '
      >
        <Text variant='cardBody' className='font-semibold text-white'>
          {slide.description}
        </Text>
      </Anchor>
    </Container>
  );
};

export default CardProject;
