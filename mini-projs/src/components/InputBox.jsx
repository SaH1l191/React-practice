import React from 'react';

function InputBox({ label, amount, onAmountChange, currencyOptions, selectCurrency, amountDisable, currencyDisable }) {
    return (
        <div className="flex p-3 bg-white rounded-lg">
            <div className="w-1/2">
                <label>{label}</label>
                <input
                    type="number"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2">
                <label>Currency Type</label>
                <select
                    value={selectCurrency}
                    onChange={(e) => onAmountChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
