import Image from '@components/atoms/Image';
import Nav from '@/components/molecules/Nav';
import Anchor from '@/components/atoms/Anchor';

export default function HeaderDesktop() {
  return (
    <div className='invisible hidden max-h-[70px] w-full items-center justify-between tablet:visible tablet:flex '>
      <Anchor href='/'>
        <Image
          src='/assets/images/logos/LogoWithCaption.png'
          alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
          width={180}
          height={90}
        />
      </Anchor>
      <Nav />
    </div>
  );
}
