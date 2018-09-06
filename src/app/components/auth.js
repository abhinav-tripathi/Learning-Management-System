/**
 * Common method to check that user is logged in or not
 */

const auth = {
    isAuthenticated : false,
    authenticate() {
        return localStorage.getItem('userAuthenticates') === 'true' ? this.isAuthenticated = true : this.isAuthenticated = false;
    }
}

export default auth;