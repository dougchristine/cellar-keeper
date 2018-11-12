import React from 'react';
import Logo from 'components/ui/Logo';
import SideNavButton from 'components/ui/SideNavButton';
import AddWineButton from 'components/ui/AddWineButton'
import UserIcon from 'components/ui/UserIcon';
import Legal from 'components/Legal';
import TitleLayout from 'layouts/TitleLayout';
import Auxil from 'components/utilities/Auxil';

export const app = () => {
  return (
    <Auxil>
      <header className="Header">
        <Logo />
        <div className="Header__controls">
          <AddWineButton />
          <UserIcon />
          <SideNavButton />
        </div>
      </header>

      <main>
        <TitleLayout />
      </main>

      <footer>
        <Legal />
      </footer>
    </Auxil>
  );
}

export default app;