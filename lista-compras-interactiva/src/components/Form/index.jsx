import { useState } from "react";
import { getLastId} from "../../utils/getLastId";
import styles from './Form.module.css';

function Form({updateList, action, id="", product= "", cant="", handleEditProduct=""}){
    const [producto, setProducto] = useState(product);
    const [cantidad, setCantidad] = useState(cant);
    const [alert, setAlert] = useState(false);

    const handleChangeProducto = (e) => {
        setProducto(e.target.value);
    }

    const handleChangeCantidad = (e) => {
        setCantidad(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (producto){
            if (action=="Agregar"){
                const id = getLastId();
                const product = {id, producto, cantidad, isBought: false};
                updateList(product)
                setProducto("");
                setCantidad("");
            }else{
                updateList(id, producto, cantidad);
                setProducto("");
                setCantidad("");
                handleEditProduct();
            }
            if (alert) setAlert(false);
        }else{
            setAlert(true);
        }
    }

    return(
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <input type="text" onChange={handleChangeProducto} placeholder="Azúcar" className={`${styles.input} ${styles.firstInput}`} value={producto}/>
            <input type="text" onChange={handleChangeCantidad} placeholder="1Kg" className={`${styles.input} ${styles.secondInput}`} value={cantidad}/>
            {alert && <p className={styles.alert}>El primer campo es obligatorio.</p>}
            <button type="submit" className={styles.button}>{action}</button>
        </form>
    );
}

export default Form;