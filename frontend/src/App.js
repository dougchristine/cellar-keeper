import React, { useEffect } from 'react';
import Landing from 'layouts/Landing';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Auxil from 'components/utilities/Auxil';
import { Route, Switch } from 'react-router-dom';
import SignUp from 'layouts/SignUp';
import { connect } from 'react-redux';
import * as actions from '@actions/index';

export const app = props => {
    useEffect(() => {
        props.authenticate();
    });

    return (
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
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    authenticate: () => dispatch(actions.auth())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(app);
