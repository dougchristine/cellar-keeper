const requiredMethod = () => {
    throw new Error('Method not implemented');
};

const authInterface = {
    isAuthenticated: requiredMethod,
    authenticate: requiredMethod,
    logIn: requiredMethod,
    logOut: requiredMethod,
    interface: 'authentication'
};

export default authInterface;
