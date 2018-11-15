import React from 'react';
import TitleLayout from 'layouts/TitleLayout';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Auxil from 'components/utilities/Auxil';

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
        <Footer />
      </footer>
    </Auxil>
  );
}

export default app;