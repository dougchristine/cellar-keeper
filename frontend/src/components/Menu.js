import React from 'react';
import Logo from 'components/ui/Logo';
import MenuButton from 'components/ui/MenuButton';

export const menu = () => (
    <div className='menu'>
        <Logo />
        <div className='menu__controls'>
            <MenuButton
                render={menuButton => <span className='menu-button__add-wine'>&nbsp;</span>}
            />

            <MenuButton
                render={menuButton => <span className='menu-button__side-nav'>&nbsp;</span>}
            />
        </div>
    </div>
);

export default menu;
