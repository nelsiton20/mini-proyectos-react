import { useState } from "react";
import { useSearchCurrencies } from "../../../../hooks/useSearchCurrencies";
import ListItem from "./ListItem";
import styles from './SearchContainer.module.css';
import searchIcon from '../../../../assets/buscar.png';

function SearchContainer({ currencyPair, setToCurrency, setCurrencyPair, setCondition}){
    const [search, setSearch] = useState('');
    const {result, error} = useSearchCurrencies(search);
    const [isShowResults, setIsShowResults] = useState(true)

    const updateCurrencyPair = (isToCurrency, newValue) => isToCurrency ? setCurrencyPair({...currencyPair, to: newValue}) : setCurrencyPair({...currencyPair, from: newValue});

    const handleSearch = (evt) => {
        setSearch(evt.target.value);
        updateCurrencyPair(setToCurrency, '');
        setIsShowResults(true);
        setCondition(false);
    }

    const handleSearchInput = (valor) => {
        setSearch(valor);
        updateCurrencyPair(setToCurrency, valor.substring(0,3));
        setIsShowResults(false);
    }

    const listItems = result.map((value) => <ListItem key={value.substring(0,4)} value={value} handleSearchInput={handleSearchInput}/>)
    
    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.searchContainer}>
                <span><img src={searchIcon} style={{width: 20}}/></span>
                <input type="text" value={search} onChange={handleSearch} className={styles.inputSearch}/>
            </div>
            {(search && isShowResults) && (
                <div className={styles.result}>
                    {error ? <p>{error}</p> : <ul>{listItems}</ul>}
                </div>)}
        </div>
    );
}

export default SearchContainer;