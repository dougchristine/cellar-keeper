import { AUTH_START, AUTH_SUCCESSFUL, AUTH_ERROR } from '@actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    userId: null
};

const authStart = state => ({
    ...state,
    isAuthenticated: false,
    userId: null
});

const authSuccessful = (state, { userId }) => ({
    ...state,
    isAuthenticated: true,
    userId
});

const authError = state => ({
    ...state,
    isAuthenticated: false,
    userId: null
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return authStart(state);
        case AUTH_SUCCESSFUL:
            return authSuccessful(state, action);
        case AUTH_ERROR:
            return authError(state);
    }
};

export default reducer;
