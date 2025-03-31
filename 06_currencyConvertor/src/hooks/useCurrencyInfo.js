import {useEffect,useState} from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
  
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))
            .catch((err) => console.error("API Fetch Error:", err));
    }, [currency]);
  
    return data;
  }

  export default useCurrencyInfo