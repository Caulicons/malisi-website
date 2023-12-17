import Image from '@/components/atoms/Image';
import HamburgerMenu from './HamburgerMenu';
import Anchor from '@/components/atoms/Anchor';

export default function HeaderMobile() {
  return (
    <div className='flex w-full items-center justify-between tablet:invisible tablet:hidden'>
      <Anchor href='/#'>
        <Image
          src='/assets/images/logos/Logo.webp'
          alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
          width={121}
          height={48}
        />
      </Anchor>
      <HamburgerMenu />
    </div>
  );
}
