export const getShoppingProgress = (productos) => {
    const cantProductos = productos.length;
    const productosOk = productos.filter((p) => p.isBought == true).length;
    return parseInt(productosOk * 100 / cantProductos);
}