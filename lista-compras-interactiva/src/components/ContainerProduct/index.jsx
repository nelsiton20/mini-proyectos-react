import Product from "./components/Product";
import styles from './ContainerProducts.module.css';

function ContainerProducts({productos, updateCheckedProduct, updateProduct, deleteProduct}){
    return (
        <main className={styles.container}>
            {productos.map((p) => (
                <Product key={p.id} id={p.id} producto={p.producto} 
                cantidad={p.cantidad} isBought={p.isBought} 
                onChange={updateCheckedProduct} onUpdate={updateProduct} onDelete={deleteProduct}/>
                ))}
        </main>
    );
}

export default ContainerProducts;