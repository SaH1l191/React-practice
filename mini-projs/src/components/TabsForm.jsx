import React, { act, useState } from 'react'
import Profile from './Profile'
import Settings from './Settings'
import Interests from './Interest'


const tabsMap = [
    {
        name: "Profile",
        component: Profile
    },
    {
        name: "Interests",
        component: Interests
    },
    {
        name: "Settings",
        component: Settings
    }
]


const TabsForm = () => {


    const [activeTab, setActiveTab] = useState(0)
    const ActiveTabComponent = tabsMap[activeTab].component

    const [data, setData] = useState({
        name: "Akshay",
        age: 123,
        email: "asphakt@gmail.cm",
        interest: ["Coding", "Learning"],
        theme: "dark"
    })

    const [error, setError] = useState({
        name: "Please enter a Valid Name",
        age: "please enter  a vlid age ",
    })
    
    const handleSubmit=()=>{ 
        const {
            name,
            age,
            email,
            interest,
            theme,
        } = data 
        console.log(name,
            age,
            email,
            interest,
            theme,)
    }


    return (
        <div className=''>
            <h2 className='text-2xl'>TabsForm</h2>
            <ul className=' flex justify-between'>
                {
                    tabsMap.map((item, i) => (
                        <li key={i} className={`
                            ${activeTab === i ? `bg-blue-300` : ``}
                            'px-2  border-1 hover:cursor-pointer`}
                            onClick={() => setActiveTab(i)}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
            <div className="mt-4 border-1 h-[400px] w-[250px]">
                <ActiveTabComponent data={data} setData={setData}
                    error={error} setError={setError} />

                {activeTab > 0 && activeTab < tabsMap.length-1 && 
                <button onClick={()=>{setActiveTab(activeTab-1)}} className='px-2 py-1 bg-blue rounded-sm'>Previous</button>}
                {activeTab < tabsMap.length-1  && 
                <button onClick={()=>{setActiveTab(activeTab+1)}} className='px-2 py-1 bg-blue rounded-sm'>Next</button>}
                {activeTab === tabsMap.length-1 && 
                <button onClick={handleSubmit} className='px-2 py-1 bg-blue rounded-sm'>Submit</button>}

            </div>


        </div>
    )
}

export default TabsForm