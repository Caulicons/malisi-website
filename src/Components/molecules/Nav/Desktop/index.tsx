'use client';
import NavLinks from '../NavLinks';
import { useAtomValue } from 'jotai';
import { routesAtom } from '@/provider/atoms/routes';

const NavDesktop = () => {
  const routes = useAtomValue(routesAtom);

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
