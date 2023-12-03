import routes from '@data/routes';
import NavLinks from '../NavLinks';

const NavDesktop = () => {
  return (
    <ul className='tablet:visible tablet:flex invisible hidden'>
      {routes.map((route) => (
        <li className='mr-3 last:mr-0' key={route.name}>
          <NavLinks route={route} />
        </li>
      ))}
    </ul>
  );
};

export default NavDesktop;
