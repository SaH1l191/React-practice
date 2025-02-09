import React, { useState } from 'react'
import Modal from './Modal';

const Todo = ({ updateTodo, removeTodo, todo }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = () => {
        updateTodo({ ...todo, done: !todo.done });
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleUpdateClick = () => {
        setIsModalOpen(true);
    };


    if (todo.done) {
        return (
            <div className='h-[250px] w-[250px] items-center justify-center flex '>
                <div className='h-full align-middle justify-items-center'>
                    <div className='mb-3 line-through'>
                        <h3 className='text-xl font-semibold text-center'>{todo.heading}</h3>
                        <p className='text-'>{todo.text}</p>
                    </div>
                    <div className='bottom-0 flex items-center justify-center gap-2 '>
                        <div >
                            <button className='p-1 text-white bg-black rounded-lg' >Update</button>
                        </div>

                        <button className='p-1 text-white bg-black rounded-lg' onClick={() => removeTodo(todo.id)}>Remove</button>
                    </div>

                </div>
                <div>
                    <input checked={todo.done} type="checkbox" onChange={handleCheckboxChange} />
                </div>

            </div>
        )
    }


    return (
        <div className='h-[250px] w-[250px] items-center justify-center flex '>
            <div className='h-full align-middle justify-items-center'>
                <div className='mb-3 '>
                    <h3 className='text-xl font-semibold text-center'>{todo.heading}</h3>
                    <p>{todo.text}</p>
                </div>
                <div className='bottom-0 flex flex-col'>
                    <div>

                        <button onClick={handleUpdateClick}>Update</button>
                    </div>

                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </div>

            </div>
            <div>
                <input checked={todo.done} type="checkbox" onChange={handleCheckboxChange} />
            </div>
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                updateTodo={updateTodo}
                todo={todo}
            />
            


        </div>
    )
}

export default Todo