import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal, updateTodo, todo }) => {
    if (!isOpen) return null;

    const [updatedTodo, setUpdatedTodo] = useState({
        heading: todo.heading,
        text: todo.text,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTodo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo({ ...todo, ...updatedTodo });
        closeModal();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closeModal}
        >
            <div
                className="bg-white p-6 rounded-lg w-96 max-w-[90%] shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="mb-4 text-2xl font-semibold text-center">Update Todo</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Heading</label>
                        <input
                            type="text"
                            name="heading"
                            value={updatedTodo.heading}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Text</label>
                        <textarea
                            name="text"
                            value={updatedTodo.text}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
