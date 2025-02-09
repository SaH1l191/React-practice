import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [char, setChar] = useState(true)
    const [number, setNumber] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordLimit, setPasswordLimit] = useState(10)
    const [count, setCount] = useState(0)

    const passwordSelect = useRef(null)

    // use Callback advantaege the function is re called (recreated) only when the number,char parameter cahnges 
    // unlike the traditional useEffect when onclick results in recreating the function everytime 
    //that is we have memoized the function 

    const generatePasswordFunction = useCallback(() => {
        let characters = '';
        if (char) characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (number) characters += '0123456789';

        if (characters.length === 0) {
            alert('Please select at least one option to generate a password.');
            return;
        }

        const passwordLength = passwordLimit;
        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }
        setPassword(generatedPassword);
    }, [length, setPassword, passwordLimit, number, char, setNumber, setChar])

    useEffect(() => {
        console.log("got called")
        generatePasswordFunction()
    }, [char, number, passwordLimit, generatePasswordFunction])


    const handlePasswordLength = (e) => {
        console.log(e.target.value)
        setPasswordLimit(e.target.value);
    }

    const handleCopy = () => {
        if (password) {
            passwordSelect.current.select()
            navigator.clipboard.writeText(password).then(
                () => alert('Password copied to clipboard!'),
                () => alert('Failed to copy password.'))
        }
    }


    return (
        <div className='flex flex-col'>
            <p className='mx-auto mt-10 text-4xl text-center'>Password Generator</p>
            <div className='w-[500px] h-[500px] bg-slate-500 rounded-xl flex flex-col items-center '>
                <div className='flex flex-col items-center gap-6 mt-8'>
                    <div className='flex gap-4'>
                        <input ref={passwordSelect} value={password} readOnly className='w-full p-2 text-black rounded-lg bg-slate-300' />
                        <button onClick={handleCopy} className='p-2 bg-blue-300 rounded-lg'>Copy</button>
                    </div>
                    <div className='flex gap-5'>
                        {/* scrollbar */}
                        <label><input type='checkbox' className='mr-1' checked={number} onChange={(e) => setNumber(e.target.checked)} />Numbers</label>
                        <label><input type='checkbox' className='mr-1' checked={char} onChange={(e) => setChar(e.target.checked)} />Characters</label>
                    </div>
                </div>

                <p>Password-length =<span>{passwordLimit}</span> </p>
                <label>
                    <input min="4" type='range' value={passwordLimit}
                        max="20"

                        onChange={handlePasswordLength} />
                </label>
                <button
                    onClick={generatePasswordFunction}
                    className="p-2 mt-4 bg-green-300 rounded-lg"
                >
                    Generate Password
                </button>


                <div className='mt-10'>
                    <button onClick={() => setCount(count + 1)} className='p-2 mr-3 bg-white rounded-full' > Increase Count</button>
                    <span className='p-3 bg-white rounded-xl'> {count}</span>
                </div>

            </div>

        </div>
    )
}

export default PasswordGenerator