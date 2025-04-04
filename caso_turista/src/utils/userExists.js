export const userExists = (username) => {
    if (localStorage.getItem('users')){
        const users = JSON.parse(localStorage.getItem('users'));

        const userExist = users.filter((user) => user.username == username);

        return userExist.length > 0;
    } else {
        return false
    }
}