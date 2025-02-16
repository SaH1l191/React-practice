import React, { useState } from 'react'
import data from '../data/data.json'





const FolderStructure = () => {

    const [dataa, setDataa] = useState(data)
    const addFolder = (parentId) => {
        // console.log(parentId)
        const name = prompt('Enter name for folder')

        const updateTree = (list) => {
            return list.map((node) => {

                //base case (where it matches )
                if (node.id === parentId) {
                    return {
                        ...node, children: [
                            ...node.children, {
                                id: Math.random(),
                                name: name,
                                isFolder: true,
                                children: []
                            }
                        ]
                    };
                }
                //recursive case
                if (node.children) {
                    return { ...node, children: updateTree(node.children) }
                }
                return node;
            }
            )
        }

        setDataa((prev) => updateTree(prev))

    }
    const deleteFolder = (itemId) => {

        const updateTree = (list) => {
            return list.filter((item) => {
                //base case
                if (item.id == itemId) {
                    return false
                }

                //recursive case 
                if (item.children) {
                    item.children = updateTree(item.children)
                }
                return true;
            })
        }

        setDataa(prev => updateTree(prev))

    }

    return (
        <div className='bg-black mt-3 h-auto text-teal-200'>
            <List list={dataa} addFolder={addFolder} setDataa={setDataa} deleteFolder={deleteFolder} />
        </div>
    )
}


const List = ({ list, addFolder, setDataa, deleteFolder }) => {

    const [expand, setExpand] = useState({})
    const toggleExpand = (item) => {
        setExpand({ ...expand, [item]: !expand?.[item] })
    }
    //appraoch -  
    // map  <parent , bool >  is stored to manage the individual expanded state 




    return (
        <div className='ml-0 '>
            {list.map((item) => (
                <div className='flex  flex-col mb-2 w-auto h-auto p-3 rounded-md bg-gray-900 items-center justify-between' key={item.id}>
                    <div className='flex gap-2'>
                        <span className='hover:cursor-pointer'>
                            {

                                item.isFolder &&
                                <span className='cursor-pointer'
                                    onClick={() => toggleExpand(item.name)}>
                                    {expand?.[item.name] ? '-' : '+'}
                                </span>


                            }
                        </span>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>{item.name}</p>
                            <img className='w-6 hover:cursor-pointer' onClick={() => deleteFolder(item.id)}
                                src={`https://imgs.search.brave.com/NCdVACqNPWCghce9Lb0TLaKswnkHh1tFhrHI8HnIRLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzY2LzE1Lzcz/LzM2MF9GXzk2NjE1/NzMwOV9ZSVdYd216/NU8wbVFMZ3ZVWUxM/SXpwdkJ6V3Q0ckpu/OS5qcGc`} />
                            {item.isFolder &&
                                <span className='flex'>
                                    <img className='w-6 hover:cursor-pointer' onClick={() => addFolder(item.id)}
                                        src={`https://imgs.search.brave.com/IyLC04MlQDLnjj-VRZwuKWPveg_wXryRrqAx_IH4HVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzIwLzQ3Lzk4/LzM2MF9GXzMyMDQ3/OTg5N19lSml0VmQ5/eFNFa1JOV3VvY1Bj/cnAyMVBKYTRVYzgz/Ny5qcGc`} />

                                </span>
                            }
                        </div>

                    </div>

                    <div className='flex flex-col ml-6'>
                        {expand?.[item.name] && item.children && <List list={item.children} addFolder={addFolder} setDataa={setDataa} deleteFolder={deleteFolder} />}
                    </div>


                </div>
            ))}
        </div>
    )
}


export default FolderStructure


