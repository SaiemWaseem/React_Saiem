import { useEffect, useState } from "react";

const API_KEY = 'fca_live_9dWuAzZS2j53SbAAjANNQveAS62o4uGWPyp8qJUI';

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
