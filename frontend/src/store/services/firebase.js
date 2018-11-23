import authInterface from 'interfaces/authentication';

const apiKey = 'AIzaSyBiU2501onZ6-dDT4WAAWXPbf0NLxgJL7w';
const firebaseRestUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${apiKey}`;

// eslint-disable-next-line prettier/prettier
const authenticate = async(url = firebaseRestUrl) => {
    try {
        const result = await fetch(url, {
            method: 'POST'
        });

        return result;
    } catch (error) {
        return error;
    }
};

const AuthService = {};
AuthService.prototype = Object.create(authInterface);
AuthService.prototype.authenticate = authenticate;

export default AuthService;
