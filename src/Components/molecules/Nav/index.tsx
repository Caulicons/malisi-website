import NavDesktop from './Desktop';
import NavMobile from './Mobile';

const Nav = () => {
  return (
    <nav>
      <NavMobile />
      <NavDesktop />
    </nav>
  );
};

export default Nav;
