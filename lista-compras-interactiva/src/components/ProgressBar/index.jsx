import styles from './ProgressBar.module.css';

function ProgressBar({progress}){
    const objProgress = {
        width: `${progress}%`
    }

    return(
        <div className={styles.barra}>
            <div className={styles.result}>
                <span>Lista de compras</span>
                <span>{progress}%</span>
            </div>
                <div className={styles.barraProgreso} style={objProgress}>
            </div>
        </div>
    );
}

export default ProgressBar;