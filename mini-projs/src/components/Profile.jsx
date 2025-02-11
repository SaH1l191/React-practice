import React from 'react'

const Profile = ({ data,setData,error ,setError }) => {


  const { name, age, email } = data
   

    const handleChange = (e)=>{
      const {name,value}  = e.target
      setData((prev ) =>({
        ...prev ,   [name]: value,
      }))
      // console.log(data)
      
    }
   
  return (
    <div>
      <div className='name m-2 flex flex-col'>
        <label>  Name  </label>
        <input type='text' className='border-2'  name='name'  value={name} onChange={handleChange}/>
      {/* {error.name && <span>{error.name}</span>} */}
      </div>
      <div className='age m-2 flex flex-col '>
        <label>  Age </label>
        <input type='number' className='border-2'  name='age' value={age} onChange={handleChange}/>
      </div>
      <div className='email m-2 flex flex-col'>
        <label> Email </label>
        <input type='text' className='border-2' name='email' value={email}  onChange={handleChange}/>
      </div>
    </div>
  )
}

export default Profile