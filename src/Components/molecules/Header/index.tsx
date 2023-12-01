import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

export default function Header() {
  return (
    <header className='flex w-full justify-center bg-white'>
      <div className=' w-full max-w-7xl  p-4'>
        <HeaderMobile />
        <HeaderDesktop />
      </div>
    </header>
  );
}
