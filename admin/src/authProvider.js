import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

   export const authProvider = (type, params) => {
    if (type === AUTH_LOGIN) {
     const { username, password } = params;
     if (username === process.env.REACT_APP_ADMIN_USERNAME &&
         password === process.env.REACT_APP_ADMIN_PASSWORD
      ) {
         localStorage.setItem('username', username)
         return Promise.resolve()
      } else {
         return Promise.reject()
      }
    }
    // when a user tries to logout
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
     return Promise.resolve();
    }
    // when the API throws an error
    if (type === AUTH_ERROR) {
     const { status } = params;
     if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject()
     }
     return Promise.resolve()
    }
    // when a user navigates to a new location
    if (type === AUTH_CHECK) {
     return localStorage.getItem('username') ?
      Promise.resolve() :
      Promise.reject();
    }
    return Promise.reject('Unknown Method');
};