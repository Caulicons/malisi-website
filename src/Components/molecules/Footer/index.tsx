import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='bg-secondary flex w-full flex-col items-center justify-center gap-8 p-8 pb-10 text-center md:flex-row md:items-start'>
      <Image
        src={'/assets/images/Logo/logoIcon.png'}
        alt='logo'
        width={60}
        height={60}
      />
      <div className='flex flex-col gap-2 text-white'>
        <Text variant='p'>Contact:</Text>
        <ul className='flex flex-col items-center gap-1'>
          <li>
            <Text className='text-white' icon='📞'>
              (11) 97800-6719
            </Text>
          </li>
          <li>
            <Text className='text-white' icon='📧'>
              Caulicons.jobs@gmail.com
            </Text>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <Text variant='p'>Social Medias:</Text>
        <ul className='flex justify-center gap-4 [&_li]:h-9 [&_li]:w-9 [&_li]:text-white'>
          <li>
            <FaSquareTwitter className='h-9 w-9' />
          </li>
          <li>
            <FaWhatsappSquare className='h-9 w-9' />
          </li>
          <li>
            <FaFacebookSquare className='h-9 w-9' />
          </li>
        </ul>
      </div>
      <div className='w-3/5 justify-center md:w-2/5'>
        <Text>Local:</Text>
        <Text className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
          consectetur adipiscing elit.
        </Text>
      </div>
    </footer>
  );
}
