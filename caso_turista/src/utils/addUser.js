export const addUser = (name, username, password) => {
    if (localStorage.getItem('users')){
        const users = JSON.parse(localStorage.getItem('users'));
        localStorage.setItem('users', JSON.stringify(
            [...users, {
                name, 
                username, 
                password
            }]
        ))
    } else {
        localStorage.setItem('users', JSON.stringify(
            [{
                name, 
                username,
                password
            }]
        ))
    }
}