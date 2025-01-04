import './App.css'
import Form from './components/Form';
import ContainerProducts from './components/ContainerProduct';
import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import { getProducts, getProductIndex, getShoppingProgress } from './utils';
 
function App() {
  const [productos, setProductos] = useState(getProducts());

  const addProduct = (producto) => {
    const newProductos = [...productos, producto];
    setProductos(newProductos);
    localStorage.setItem('productos', JSON.stringify(newProductos));
  }

  const updateCheckedProduct = (id) => {
    let newProductos = productos.map((producto) => {
      if(producto.id == id){
        return {...producto, isBought : !producto.isBought};
      }
      return producto
    })

    setProductos(newProductos);
    localStorage.setItem('productos', JSON.stringify(newProductos));
  }

  const updateProduct = (id, product, cantidad) => {
    let newProductos = productos.map((producto) => {
      if(producto.id == id){
        return {...producto, cantidad, producto: product};
      }
      return producto
    })

    setProductos(newProductos);
    localStorage.setItem('productos', JSON.stringify(newProductos));
  }

  const deleteProduct = (id) => {
    const index = getProductIndex(productos, id);

    let newProductos = [...productos];
    newProductos.splice(index, 1);

    setProductos(newProductos);
    localStorage.setItem('productos', JSON.stringify(newProductos));
  }

  return (
    <div className='main-container'>
      <header className="header">
        <h1 className="title">Lista de Compras</h1>
      </header>
      <Form updateList={addProduct} action="Agregar"/>
      <ContainerProducts productos={productos} updateCheckedProduct={updateCheckedProduct} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
      <ProgressBar progress={getShoppingProgress(productos)} />
    </div>
  )
}

export default App;