import React, { ReactNode } from 'react';
import Home from '../Containers/Home';
import Staff from '../Containers/Staff';

export interface ItemRoute {
  component?: (arg?: any) => ReactNode;
  path: string;
}

export const ROUTES: ItemRoute[] = [
  {
    path: '/manage/merchant',
    component: () => <Home />,
  },
  {
    path: '/manage/wallet-merchant',
    component: () => <Staff />,
  },
];
