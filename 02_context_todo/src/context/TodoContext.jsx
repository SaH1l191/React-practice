import React, { useContext, useEffect, useState } from "react"

const initialTodos = [
    {
        id: 1,
        heading: "Work",
        text: "Complete the project report",
        done: false
    },
    {
        id: 2,
        heading: "Personal",
        text: "Buy groceries for the week",
        done: false
    },
    {
        id: 3,
        heading: "Home",
        text: "Clean the living room",
        done: true
    },
    {
        id: 4,
        heading: "Fitness",
        text: "Go for a run in the morning",
        done: false
    },
    {
        id: 5,
        heading: "Study",
        text: "Read a chapter of React documentation",
        done: false
    },
    {
        id: 6,
        heading: "Work",
        text: "Attend team meeting at 3 PM",
        done: false
    },
    {
        id: 7,
        heading: "Personal",
        text: "Call family for updates",
        done: true
    }
];

const TodoContext = React.createContext({

})

const TodoProvider = ({ children }) => {


    const loadTodosFromLocalStorage = () => {
        const storedTodos = localStorage.getItem("todos")
        if (storedTodos) {
            return JSON.parse(storedTodos);
        } else {
            return initialTodos;
        }

    }

    const [todos, setTodos] = useState(loadTodosFromLocalStorage)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const addTodo = (todo) => {
        const newTodo = { ...todo, id: Date.now() };
        setTodos((prev) => [...prev, todo])
    }
    const removeTodo = (id) => (
        setTodos((prev) => prev.filter(todo => todo.id !== id))
    )


    //When you update state in React, you need to return the updated array ........
    const updateTodo = (updatedTodo) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo));
    }


    const value = {
        todos,
        addTodo,
        removeTodo,
        updateTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

//to make it easier 
export const useTodo = () => {
    return useContext(TodoContext)
}

export default TodoProvider;
