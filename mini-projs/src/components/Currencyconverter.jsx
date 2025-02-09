
import { useState } from 'react';
import InputBox from './InputBox';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
function CurrencyConverter() {

    const data = useCurrencyInfo()
    
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };
    return (
        <div style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }} className="flex items-center justify-center w-full h-screen bg-cover"  >
            <div className="w-full max-w-md p-5 mx-auto border rounded-lg bg-white/30">
                <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
                    <InputBox label="From" amount={amount} currencyOptions={options} onAmountChange={setAmount} selectCurrency={from} />
                    <button type="button" onClick={swap}>Swap</button>
                    <InputBox label="To" amount={convertedAmount} currencyOptions={options} selectCurrency={to} amountDisable={true} />
                    <button type="submit">Convert</button>
                </form>
            </div>
        </div>
    );
}

export default CurrencyConverter;
