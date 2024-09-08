import React, { memo } from 'react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';

import s from './dropdown.module.css';

interface dropdownItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key: string;
  label: React.ReactNode;
  description?: string;
  icon?: React.ReactElement;
}

export default memo(function Dropdown({
  children,
  items,
  description,
}: {
  children: React.ReactNode;
  items: dropdownItem[];
  description?: string;
}) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            aria-label={description}
            className={clsx(s.button, { [s.buttonActive]: open })}
          >
            {children}
          </MenuButton>
          <MenuItems anchor="bottom end" className={s.menu}>
            {items.map((item) => (
              <MenuItem key={item.key}>
                <button
                  aria-label={item?.description}
                  className={s.menuItem}
                  onClick={item?.onClick}
                >
                  {item.icon}
                  {item.label}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
});
