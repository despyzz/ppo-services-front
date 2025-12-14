'use client';

import React, { useState } from 'react';
import { NAVIGATION_CONFIG } from '@/constants';
import Link from 'next/link';
import { Box, Drawer } from '@mui/material';
import { isMobile, isTablet } from 'react-device-detect';
import { Logo } from './components/Logo';
import { JoinButton } from './components/JoinButton';
import { BurgerMenu } from './components/BurgerMenu';
import { NavigationItems } from './components/NavigationItems';
import { CrossIcon } from './components/CrossIcon';
import { Divider } from './components/Divider';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const headerClassName = 'flex w-full items-center px-5 h-[42px] lg:h-[108px]';
  return (
    <div className="relative w-full max-w-screen-xl">
      <div className={`${headerClassName} justify-between`}>
        <Logo />
        <Divider />
        <NavigationItems />
        <JoinButton />
        <BurgerMenu onClick={toggleMenu} />
      </div>

      {(isMobile || isTablet) && (
      <Drawer
        open={isMenuOpen}
        onClose={toggleMenu}
        anchor="top"
      >
        <div className="flex flex-col gap-[10px]">
          <div className={`${headerClassName} justify-end`}>
            <CrossIcon onClick={toggleMenu} />
          </div>

          {/* Menu items */}
          <ul className="flex flex-col gap-[25px] py-[15px]">
            {Object.entries(NAVIGATION_CONFIG).map(([route, label]) => (
              <li key={route}>
                <Link href={route} onClick={toggleMenu}>
                  <Box className="flex w-full flex-row justify-between px-5 text-xl font-extrabold">
                    <p>{label}</p>
                    <p>{'>'}</p>
                  </Box>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
      )}
    </div>
  );
}
