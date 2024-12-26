import { useEffect } from "react";
import { useConvertCurrencies } from "./useConvertCurrencies";

export function useConditionalHook(condition, currencyPair, mount){
    console.log('renderizando useConditionalHook')
    const { result, quote, error } = useConvertCurrencies(currencyPair, mount);

    useEffect(() => {
        if (condition && currencyPair.from && currencyPair.to && mount) {
            console.log('guardando el localstorage');
            const conversion = {
                fromCurrency: currencyPair.from,
                toCurrency: currencyPair.to,
                mount: mount,
                result: result
            };
            const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
            localStorage.setItem('conversions', JSON.stringify([...conversions, conversion]));
        }
    }, [condition, currencyPair, mount, result]);

    if (!condition) {
        return { result: null, quote: null, error: null };
    }

    /*console.log('guardando el localstorage')

    const conversion = {'fromCurrency': currencyPair.from, 'toCurrency': currencyPair.to, 'mount' : mount, 'result': result};
    const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    localStorage.setItem('conversions', JSON.stringify([...conversions, conversion]));*/

    return { result, quote, error };
}