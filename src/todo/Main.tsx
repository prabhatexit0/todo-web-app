import '../index.css'
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import Global from './context/Global'
import Todo from './components/Todo'


declare global {
    interface todoType {
        task: string;
        subtext: string;
        type: string;
    }
}

const Main = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [todos, setTodos] = useState<todoType[]>([]);
    
    let index = 0;

    const toggler = () => {
        setToggle(!toggle);
    }
    return (
        <div id="main-page"
            className="
                bg-gray-300
                flex
                flex-col
                justify-end
                items-center
                border-l-4
                border-gray-900
                w-full
                lg:w-[40%]
                h-screen " >

            <Global.Provider value={{ toggler, todos, setTodos }}>

                <div
                    className="
                        h-full 
                        w-full 
                        flex
                        flex-wrap
                        justify-center
                        content-start
                        overflow-y-scroll
                        p-5
                        ">
                    {todos.map(todo => {
                        return <div key={index++} >
                            <Todo todo={todo} />
                        </div>
                    })}

                </div>

                {toggle ? <TodoForm /> : null}
            </Global.Provider>


            <button
                onClick={() => setToggle(!toggle)}
                className="
                    bg-slate-600
                    w-2/5
                    max-w-[20rem]
                    p-3
                    m-5
                    font-bold
                    rounded-full
                    text-xl
                    text-white ">
                Add
            </button>

        </div>
    )
}

export default Main;