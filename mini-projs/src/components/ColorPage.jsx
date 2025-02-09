import React, { useState } from 'react'

const ColorPage = () => {

    const [color, setColor] = useState('blue');

    return (
        <div style={{ backgroundColor: color }} className='w-full h-screen duration-300'>
            <p className='mx-auto text-4xl text-center text-white'>Color Page example </p>
            <div className='absolute w-full bottom-5'>

                <div className='flex flex-col   mx-auto w-100%'>
                    <p  className='p-2 mx-auto mb-4 text-4xl text-white bg-black '>Set Color</p>
                    <div className='flex items-center justify-center w-4/6 gap-5 p-4 mx-auto bg-white rounded-lg'> 
                        <button onClick={()=>{setColor(`green`)}} className='p-2 text-4xl text-white bg-black rounded-full '>green</button>
                        <button onClick={()=>{setColor(`brown`)}} className='p-2 text-4xl text-white bg-black rounded-full '>brown</button>
                        <button onClick={()=>{setColor(`red`)}} className='p-2 text-4xl text-white bg-black rounded-full '>red</button>
                        <button onClick={()=>{setColor(`pink`)}} className='p-2 text-4xl text-white bg-black rounded-full '>pink</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ColorPage