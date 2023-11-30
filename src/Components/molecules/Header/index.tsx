import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

export default function Header() {
  return (
    <header className='bg-secondary fixed left-0 top-0 z-10 flex w-full items-center justify-center'>
      <div className='  min-h-[70px] w-full max-w-[1440px] px-5 py-3 '>
        <HeaderMobile />
        <HeaderDesktop />
      </div>
    </header>
  );
}
