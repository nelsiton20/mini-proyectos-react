import { useRef, useState } from "react";
import SearchContainer from "./components/SearchContainer";
import { useConditionalHook } from '../../hooks/useConditionalHook';
import styles from './ConverterContainer.module.css';

function ConverterContainer({condition, setCondition}){
    console.log('renderizando el primer componente')
    const [currencyPair, setCurrencyPair] = useState({from: '', to: ''});
    const [mount, setMount] = useState('');
    const {result, quote, error} = useConditionalHook(condition, currencyPair, mount);
    
    const handleChangeMount = (evt) => {
        setMount(parseFloat(evt.target.value));
        setCondition(false);
    }

    const handleClickResult = () => {
        if(currencyPair.from && currencyPair.to && mount){
            setCondition(true);
        }
    }

    return(
        <main>
            <section className={styles.converterContainer}>
                <div className={styles.inputContainer}>
                    <SearchContainer currencyPair={currencyPair} setToCurrency={false} setCurrencyPair={setCurrencyPair} setCondition={setCondition}/>
                    <SearchContainer currencyPair={currencyPair} setToCurrency={true} setCurrencyPair={setCurrencyPair} setCondition={setCondition}/>
                    <input type="number" placeholder="ingresa el monto" onChange={handleChangeMount} value={mount} className={styles.mountInput}/>
                </div>
                <button onClick={handleClickResult} className={styles.button}>Convertir</button>
                <div className={styles.containerResult}>
                    {(result && quote) && <p>Resultado: {result} - Cuota: {quote}</p>}
                </div>
            </section>
        </main>
    )
}

export default ConverterContainer;