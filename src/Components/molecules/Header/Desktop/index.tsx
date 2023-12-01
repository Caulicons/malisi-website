import Image from '@components/atoms/Image';
import routes from '@data/routes';
import NavLinks from '@/components/atoms/NavLinks';

export default function HeaderDesktop() {
  return (
    <div className=' hidden max-h-[70px] w-full items-center justify-between md:flex '>
      <a href='/'>
        <Image
          src='/assets/images/logo/LogoWithCaption.png'
          alt='Malisi Engenharia de segurança do trabalho e meio ambiente logo'
          width={180}
          height={90}
        />
      </a>
      <nav>
        <ul className='flex'>
          {routes.map((route) => (
            <li className='mr-3 last:mr-0' key={route.name}>
              <NavLinks route={route} variant='desktop' />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
