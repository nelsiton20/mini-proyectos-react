import { useGetCurrencies } from "./useGetCurrencies";

export function useSearchCurrencies(search){
    const { currencies, error } = useGetCurrencies();

    const currenciesString = Object.entries(currencies).map(([clave, valor]) => `${clave} ${valor}`);

    const result = currenciesString.filter((currencie) => currencie.toLowerCase().includes(search.toLowerCase()));

    return {result, error};
}
