import React from 'react'

const DummyModal = ({isOpen,closeModal}) => {

    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 '>

        <div className='h-[150px] bg-white p-6 rounded-lg w-96 max-w-[90%] shadow-lg'>
            <button onClick={closeModal}>x</button>
            This is modal
        </div>
        DummyModal
        </div>
  )
}

export default DummyModal