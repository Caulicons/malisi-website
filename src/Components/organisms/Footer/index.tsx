import { footerData } from './data';
import Text from '@components/atoms/Text';
import Container from '@/components/atoms/Container';
import SocialMediaIcon from '@/components/atoms/SocialMediaIcon';
export default function Footer() {
  return (
    /* TODO : (footer) see a way to automatically re-render the content */
    <footer className='flex w-full justify-center bg-secondary'>
      <Container
        gap='xl'
        className='grid justify-center gap-8 px-5 py-10 text-center tablet:flex-row laptop:grid-cols-2'
      >
        <div className='flex w-full flex-col gap-3 text-white'>
          <Text
            tag='h4'
            variant='footerHeader'
            className='text-white underline'
          >
            Contato
          </Text>
          {/* TODO : (footer) add links to contanct, when click switch to matches contact*/}
          <ul className='flex flex-col items-center gap-1'>
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
        <div className='flex w-full flex-col gap-3'>
          <Text
            tag='h4'
            variant='footerHeader'
            className='text-white underline'
          >
            Social Medias
          </Text>
          <div className='flex justify-center gap-4'>
            {footerData.socialMedias.map((socialMedia) => (
              <SocialMediaIcon key={socialMedia.name} {...socialMedia} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
