import React from 'react';
import Landing from 'layouts/Landing';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Auxil from 'components/utilities/Auxil';

export const app = () => (
    <Auxil>
        <header>
            <Menu />
        </header>

        <main>
            <Landing />
        </main>

        <footer>
            <Footer />
        </footer>
    </Auxil>
);

export default app;
