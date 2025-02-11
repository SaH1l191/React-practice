import React, { useEffect, useState } from 'react'

const Interests = ({ data ,setData}) => {

    const {interest} = data 
     

    const handleChange =(e)=>{
      
      setData((prev)=>({
          ...prev , interest : e.target.checked ?
          [...prev.interest , e.target.name ]  : 
          prev.interest.filter((i) => i!==e.target.name)  
      }))
        
    }


    // useEffect(() => {
    //   console.log(data);  
    // }, [data]);

  return (
    <div className='flex flex-col'>
      
      <label className='text-center text-2xl'>Interests</label>
     <div className="name m-2 flex flex-col">
        <div  >
          <input
            type="checkbox"
            name="Coding" 
            checked={interest.includes('Coding')}   
            onChange={handleChange}   
          />
          <label>Coding</label>
        </div> 
      </div>
      <div className="name m-2 flex flex-col"> 
        <div  >
          <input
            type="checkbox"
            name="Gym" 
            checked={interest.includes('Gym')}   
            onChange={handleChange}   
          />
          <label>Gym</label>
        </div>
    
      </div>
      <div className="name m-2 flex flex-col"> 
        <div  >
          <input
            type="checkbox"
            name="Learning" 
            checked={interest.includes('Learning')}   
            onChange={handleChange}   
          />
          <label>Learning</label>
        </div>
    
      </div>
  </div>
  )
}

export default Interests