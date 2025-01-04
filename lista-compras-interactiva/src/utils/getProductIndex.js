export const getProductIndex = (productos, id) => {
    let i;
    for(i = 0; i < productos.length; i++){
      if (productos[i].id == id){
        return i;
      }
    }
}