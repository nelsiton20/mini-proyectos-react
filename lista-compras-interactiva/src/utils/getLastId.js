export const getLastId = () => {
    if (!localStorage.getItem('productos')){
        return 1;
    }

    const productos = JSON.parse(localStorage.getItem('productos'));
    const id = productos[productos.length - 1].id + 1;

    return id;
}