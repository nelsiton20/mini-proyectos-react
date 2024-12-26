import Result from "./Result";
import styles from './ResultsContainer.module.css';

function ResultsContainer(){
    const results = JSON.parse(localStorage.getItem('conversions'));

    return(
        <section className={styles.resultContainer}>
            <h3>Historial de conversiones</h3>
            {results ? results.map((e, i) => (
                <Result key={`${e.fromCurrency}-${i}`} originCurrency={e.fromCurrency} destinyCurrency={e.toCurrency} result={e.result} mount={e.mount}/>
            )) : <div>No hay conversiones previas...</div>}
        </section>
    )
}

export default ResultsContainer;