/* eslint-disable import/prefer-default-export */
import firebase from '@services/firebase';
import { AUTH_START, AUTH_SUCCESSFUL, AUTH_ERROR } from './actionTypes';

// eslint-disable-next-line prettier/prettier
export const auth = (service = firebase) => async dispatch => {
    dispatch(authStart());

    try {
        const result = await service.prototype.authenticate.call(this);
        // TODO -- Need to parse result object and return a user ID
    } catch (error) {
        console.log(error);
    }
};

export const authStart = () => ({
    type: AUTH_START
});

// TODO -- Need auth successful and auth error actions
