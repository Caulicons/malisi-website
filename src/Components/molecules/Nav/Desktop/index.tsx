import routes from '@data/routes';
import NavLinks from '../NavLinks';

const NavDesktop = () => {
  return (
    <ul className='invisible hidden tablet:visible tablet:flex'>
      {routes.map((route) => (
        <li className='mr-3 last:mr-0' key={route.name}>
          <NavLinks route={route} />
        </li>
      ))}
    </ul>
  );
};

export default NavDesktop;
