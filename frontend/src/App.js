import React from 'react';
import Legal from 'components/Legal';
import TitleLayout from 'layouts/TitleLayout';
import Menu from 'components/Menu';
import Auxil from 'components/utilities/Auxil';

export const app = () => {
  return (
    <Auxil>
      <header className="Header">
        <Menu />
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