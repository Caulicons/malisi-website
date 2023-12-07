import { atom } from 'jotai';

const routesAtom = atom([
  {
    name: 'INÍCIO',
    href: '/',
    active: true,
  },
  {
    name: 'SOBRE',
    href: '/sobre',
    active: false,
  },
  {
    name: 'SERVIÇOS',
    href: '/servicos',
    active: false,
  },
  {
    name: 'CONTATO',
    href: '/contato',
    active: false,
  },
]);

const activateReactAtom = atom(null, (get, set, route: string) => {
  set(
    routesAtom,
    get(routesAtom).map((r) => {
      if (r.name === route) return { ...r, active: true };
      return { ...r, active: false };
    })
  );
});

export { routesAtom, activateReactAtom };
