import Link from 'next/link';
import Text from '@components/atoms/Text';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
export default function Footer() {
  return (
    /* TODO : (footer) see a way to automatically re-render the content */
    <footer className='flex  justify-center bg-secondary'>
      <div className='flex w-full max-w-7xl flex-col justify-center gap-7 px-5 py-8 text-center md:flex-row'>
        <div className='flex flex-col gap-2 text-white'>
          <Text tag='h4' variant='footerHeader'>
            Contato
          </Text>
          {/* TODO : (footer) add links to contanct, when click switch to matches contact*/}
          <ul className='flex flex-col items-center gap-2'>
            <li>
              <Text className='text-white' icon='📞'>
                (11) 93015-3155
              </Text>
            </li>
            <li>
              <Text className='break-all text-white' icon='📧'>
                Marcelo.lima@malisiengenharia.com.br
              </Text>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          {/* TODO : (footer) Add social correct social medias */}
          <Text tag='h4' variant='footerHeader'>
            Social Medias
          </Text>
          <ul className='flex justify-center gap-4 [&_li]:h-9 [&_li]:w-9 [&_li]:cursor-pointer [&_li]:text-white'>
            <li>
              <Link href='/'>
                <FaSquareTwitter className='h-12 w-12' />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <FaWhatsappSquare className='h-12 w-12' />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <FaFacebookSquare className='h-12 w-12' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center gap-2 md:w-2/6'>
          {/* TODO : (footer) Add local, maps component may be a good option*/}
          <Text tag='h4' variant='footerHeader'>
            LOCAL
          </Text>
          <Text className='text-white'>Site em construção.</Text>
        </div>
      </div>
    </footer>
  );
}
