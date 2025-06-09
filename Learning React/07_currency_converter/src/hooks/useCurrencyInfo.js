import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Failed to fetch currency data", err));
  }, [currency]);

  return data; // Example: {inr: 83.15, eur: 0.91, ...}
}

export default useCurrencyInfo;
