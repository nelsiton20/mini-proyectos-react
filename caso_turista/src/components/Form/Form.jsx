import { useEffect, useState } from "react";
import { useGetTips } from "../../hooks/useGetTips";
import styles from './Form.module.css'
import Item from './components/Item'

function Form({handleSetDestination}){
    const [direction, setDirection] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isIncompleted, setIsIncompleted] = useState(false);
    const [isView, setIsView] = useState(true)
    const directions = useGetTips(direction);

    const handleChangeDirection = (e) => {
        setIsView(true);
        setDirection(e.target.value)
        setIsIncompleted(false);
    }

    const handleClickAñadir = (e) => {
        e.preventDefault()
        if (name && phone && direction){
            handleSetDestination(direction)
        } else {
            setIsIncompleted(true)
        }
    }

    const handleClickView = (e) => {
        e.preventDefault()
        setIsView(false)
    }

    return(
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label>Nombre</label>
                <input type="text" placeholder="Ingresa tu nombre" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={`${styles.formGroup} ${styles.directionContainer}`}>
                <label>Dirección</label>
                <input type="text" placeholder="Ingresa una dirección" value={direction} onChange={handleChangeDirection}/>
                {directions && (
                    <div className={(isView) ? styles.tipsDirection : styles.notView}>
                        <button onClick={handleClickView}>X</button>
                        <ul>
                            {directions.hits.map((suggestion, i) => (
                                <Item key={i} direction={suggestion.name} city={suggestion.city} country={suggestion.country} setDirection={setDirection}/>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.formGroup}>
                <label>Teléfono</label>
                <input type="text" placeholder="Ingresa tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" onClick={handleClickAñadir}>Añadir</button>
            </div>

            {(isIncompleted) && <p className={styles.isIncompleted}>Es obligatorio llenar todos los campos</p>}
        </form>
    )
}

export default Form;