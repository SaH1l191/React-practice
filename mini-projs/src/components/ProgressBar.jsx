import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
      const progess = setInterval(()=>{
          setProgress((prevProgress)=>prevProgress+10)
      },1000)
      // progress()

      return (()=>clearInterval(progress))
    },[])

    
    return (
        <>
        {/* //tialwind cannt load dyanimc css  so style property used  */}

        <p className='text-2xl font-bold'>Progress Bar</p>
        <div className='w-full h-2 overflow-hidden rounded-full'>
            
            <div className='h-2 duration-300 bg-green-500 '
                style={{ width: `${progress}%` }} >
            </div>
        </div>
        </>
    )
}

export default ProgressBar