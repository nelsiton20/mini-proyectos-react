import styles from './Result.module.css';
import flecha from '../../assets/flecha-derecha.png';

function Result({ originCurrency, destinyCurrency, mount, result }) {
    return (
        <section className={styles.resultContainer}>
            <div>
                <p>{mount} {originCurrency}</p>
            </div>
            <div>
                <img src={flecha} style={{width: 40}}/>
            </div>
            <div>
                <p>{result} {destinyCurrency}</p>
            </div>
        </section>
    );
}

export default Result;