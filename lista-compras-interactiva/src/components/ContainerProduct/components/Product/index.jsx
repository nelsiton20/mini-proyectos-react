import styles from './Product.module.css';
import editIcon from '../../../../assets/editar.png';
import deleteIcon from '../../../../assets/eliminar.png';
import { useState } from 'react';
import Form from '../../../Form';
import exitIcon from '../../../../assets/boton-eliminar.png';

function Product({id, producto, cantidad, isBought, onChange, onUpdate, onDelete}){
    const [edit, setEdit] = useState(false);

    const handleEditProduct = () => {
        setEdit(!edit);
    }

    return(
        <>
            <div className={styles.containerProduct}>
                <input type="checkbox" onChange={() => onChange(id)} checked={isBought}/>
                <p>{producto} - {cantidad}</p>
                <div>
                    <span><img src={editIcon} className={styles.iconUpdate} onClick={handleEditProduct}/></span>
                    <span><img src={deleteIcon} className={`${styles.iconUpdate} ${styles.secondIconUpdate}`} onClick={() => onDelete(id)}/></span>
                </div>
            </div>
            {edit && (
                <div className={styles.form}>
                    <div className={styles.containerButton}>
                        <span><img src={exitIcon} onClick={() => setEdit(false)} className={styles.icon}/></span>
                    </div>
                    <Form updateList={onUpdate} action="Guardar" id={id} product={producto} cant={cantidad} handleEditProduct={handleEditProduct}/>
                </div>
                )}
        </>
    );
}

export default Product;