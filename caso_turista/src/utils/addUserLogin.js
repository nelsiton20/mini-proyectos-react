export const addUserLogin = (username) => {
    localStorage.setItem('login', JSON.stringify({username}));
}