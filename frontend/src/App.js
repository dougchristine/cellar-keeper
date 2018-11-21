import React from 'react';
import Landing from 'layouts/Landing';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Auxil from 'components/utilities/Auxil';
import { Route, Switch } from 'react-router-dom';
import SignUp from 'layouts/SignUp';

export const app = () => (
    <Auxil>
        <header>
            <Menu />
        </header>

        <main>
            <Switch>
                <Route path='/sign-up' component={SignUp} />
                <Route path='/' exact component={Landing} />
            </Switch>
        </main>

        <footer>
            <Footer />
        </footer>
    </Auxil>
);

export default app;
