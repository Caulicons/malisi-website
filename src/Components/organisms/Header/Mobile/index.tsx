import Image from '@components/atoms/Image';
import HamburgerMenu from './HamburgerMenu';

export default function HeaderMobile() {
  return (
    <div className='flex w-full items-center justify-between md:hidden'>
      <Image
        src='/assets/images/logo/Logo.png'
        alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
        width={121}
        height={48}
      />
      <HamburgerMenu />
    </div>
  );
}