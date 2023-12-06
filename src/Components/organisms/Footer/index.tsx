import Text from '@components/atoms/Text';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import Anchor from '@/components/atoms/Anchor';
import Container from '@/components/atoms/Container';
import { footerData } from './data';
import SocialMediaIcon from '@/components/atoms/SocialMediaIcon';
export default function Footer() {
  return (
    /* TODO : (footer) see a way to automatically re-render the content */
    <footer className='flex w-full justify-center bg-secondary'>
      <Container
        gap='xl'
        className='grid justify-center px-5 py-10 text-center tablet:flex-row laptop:grid-cols-3'
      >
        <div className='flex w-full flex-col gap-1 text-white'>
          <Text tag='h4' variant='footerHeader'>
            Contato
          </Text>
          {/* TODO : (footer) add links to contanct, when click switch to matches contact*/}
          <ul className='flex flex-col items-center gap-2'>
            <li>
              <Text className='text-white' icon='📞'>
                {footerData.phone}
              </Text>
            </li>
            <li>
              <Text className='break-all text-white' icon='📧'>
                {footerData.email}
              </Text>
            </li>
          </ul>
        </div>
        <div className='flex w-full flex-col gap-1'>
          {/* TODO : (footer) Add social correct social medias */}
          <Text tag='h4' variant='footerHeader'>
            Social Medias
          </Text>
          <div className='flex justify-center gap-4'>
            {footerData.socialMedias.map((socialMedia) => (
              <SocialMediaIcon key={socialMedia.name} {...socialMedia} />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center tablet:w-2/6'>
          {/* TODO : (footer) Add local, maps component may be a good option*/}
          <Text tag='h4' variant='footerHeader'>
            LOCAL
          </Text>
          <Text className='text-white'>Site em construção.</Text>
        </div>
      </Container>
    </footer>
  );
}
