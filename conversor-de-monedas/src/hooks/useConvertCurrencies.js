import { useEffect, useState } from "react";

export const useConvertCurrencies = ({from, to}, amount) => {
    const [result, setResult] = useState(null);
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const convertCurrencies = async () => {
            try{
                const response = await fetch(`https://api.exchangerate.host/convert?access_key=${import.meta.env.VITE_API_KEY}&from=${from}&to=${to}&amount=${amount}`);
                const data = await response.json();
                console.log('renderizando en el try de converCurrencies')
                setResult(data.result);
                setQuote(data.info.quote);
            } catch(e){
                console.log('renderizando en el catch de converCurrencies')
                setError(true);
            }
            
        }

        convertCurrencies();
    }, [from, to, amount]);

    return {result, quote, error};
}