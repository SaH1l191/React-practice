import { useEffect, useState } from "react"



function useCurrencyInfo(currency = "INR") {

    const [data, setData] = useState({});


    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c273009f9ae6d0c61457a9d1/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
                // console.log(res);  // log the response here
            });
    }, [currency]);
    console.log(data)
    return data
}
export default useCurrencyInfo