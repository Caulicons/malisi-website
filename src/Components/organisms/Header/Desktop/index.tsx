import Image from '@components/atoms/Image';
import Nav from '@/components/molecules/Nav';
import Link from 'next/link';

export default function HeaderDesktop() {
  return (
    <div className='invisible hidden max-h-[70px] w-full items-center justify-between md:visible md:flex'>
      <Link href='/'>
        <Image
          src='/assets/images/logo/LogoWithCaption.png'
          alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
          width={180}
          height={90}
        />
      </Link>
      <Nav />
    </div>
  );
}
