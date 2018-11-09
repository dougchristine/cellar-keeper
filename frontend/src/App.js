import React from 'react';
import Menu from 'components/Menu';
import Legal from 'components/Legal';
import TitleLayout from 'layouts/TitleLayout';
import Auxil from 'components/utilities/Auxil';
import './App.css';

export const app = () => {
  return (
    <Auxil>
      <header>
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