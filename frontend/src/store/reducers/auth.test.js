import reducer from './auth';
import { expect } from 'chai';
import { AUTH_START, AUTH_SUCCESSFUL, AUTH_ERROR } from '@actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    userId: null
};

describe('auth reducer', () => {
    it('returns initial state', () => {
        expect(reducer(undefined, {})).to.deep.equal(initialState);
    });
});
