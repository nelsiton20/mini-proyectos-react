import { useEffect, useState } from "react";

export function useGetCurrencies(){
    const [currencies, setCurrencies] = useState({})
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useEffect de useGetCurrencies')
        const getCurrencies = async () => {
            try{
                const response = await fetch(`https://api.exchangerate.host/list?access_key=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                if (data.currencies){
                    setCurrencies(data.currencies);
                }else{
                    setError(data.error.info);
                }
                
            } catch (e){
                console.log('hubo un error');
            }
        }

        getCurrencies();
    }, []);

    return {currencies, error};
}