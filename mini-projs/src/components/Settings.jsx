import React from 'react'

const Settings = ({ data, setData }) => {

  const { theme } = data

  const handleChange = (e) => { 
    // console.log(e.target)
    setData((prev) => ({
      ...prev,
      theme: e.target.name
    }
    ))
  }
  return (
    <div>
      <div  >
        <input
          type="radio"
          name="dark"
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <label>Dark</label>
      </div>
      <div  >
        <input
          type="radio"
          name="light"
          checked={theme === 'light'}
          onChange={handleChange}
        />
        <label>light</label>
      </div>
    </div>
  )
}

export default Settings