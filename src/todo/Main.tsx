import '../index.css'
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import Global from './context/Global'
import Todo from './components/Todo'



const Main = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoType[]>([]);

    const [UI, setUI] = useState<TodoType[]>([]);
    const [NUI, setNUI] = useState<TodoType[]>([]);
    const [NUNI, setNUNI] = useState<TodoType[]>([]);
    const [UNI, setUNI] = useState<TodoType[]>([]);


    const which  = ({ type }: TodoType) => {
        switch (type) {
            case "UI":
                return { state: UI, setState: setUI };
            case "UNI":
                return { state: UNI, setState: setUNI };
            case "NUI":
                return { state: NUI, setState: setNUI };
            case "NUNI":
                return { state: NUNI, setState: setNUNI };
            default:
                return { state: UI, setState: setUI };
        }
    }

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

            <Global.Provider value={{ toggler, todos, setTodos, which }}>

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
                    {UI.map(todo => {
                        return <div key={index++} >
                            <Todo todo={todo} />
                        </div>
                    })}
                    {UNI.map(todo => {
                        return <div key={index++} >
                            <Todo todo={todo} />
                        </div>
                    })}
                    {NUI.map(todo => {
                        return <div key={index++} >
                            <Todo todo={todo} />
                        </div>
                    })}
                    {NUNI.map(todo => {
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