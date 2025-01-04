export const getProducts = () => {
    if (!localStorage.getItem('productos')){
        return [];
    }

    return JSON.parse(localStorage.getItem('productos'));
}