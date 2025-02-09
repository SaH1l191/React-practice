import React, { useEffect, useState } from 'react'

const SearchBar = () => {


    const [input, setInput] = useState('');
    const [results, setResults] = useState();
    const [showResults, setShowResults] = useState(false)
    const [cache, setCache] = useState({})

    useEffect(() => {


        // Debouncing to reduce the API CALL requests 
        const t = setTimeout(() => {
            fetchData();
        }, 400);

        return () => clearTimeout(t)
    }, [input])

    const fetchData = async () => {


        //cached the results 
        if (cache[input]) {
            return;
        }


        console.log('api called')
        const data = await fetch('https://dummyjson.com/recipes/search?q=' + input)

        const res = await data.json()
        console.log("data", res)
        setResults(res?.recipes)
        setCache((prev) => ({ ...prev, [input]: res?.recipes }))
    }

    return (
        <div className='h-auto'>
            {/* <h1 className="text-3xl font-bold mb-20">
        AutoComplete Search Bar
      </h1> */}
            <p className='mt-2'>(Debouncing concept + caching ) </p>
            <input
                type='text'
                className='bg-white'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onFocus={() => setShowResults(true)}
                onBlur={() => setShowResults(false)}
            />
            <div className='h-[300px] w-[190px] overflow-y-auto'>
                {showResults &&
                    (<ul className='bg-stone-200 w-full  overflow-y-auto '>
                        {
                            results?.map((item) => (
                                <li key={item.id} className=' bg-white px-2'>
                                    {item?.name}
                                </li>
                            ))
                        }

                    </ul>)
                }
            </div>



        </div>
    )
}

export default SearchBar
