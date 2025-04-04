export const isUserAuthenticated = () => {
    return (localStorage.getItem('login')) ? true : false
}