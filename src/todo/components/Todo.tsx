import { useContext } from "react";
import Global from '../context/Global'

const Todo = ({todo}: TodoProps) => {
    const context = useContext(Global);

    const taskDone = () => {
        context?.setTodos( context.todos.filter(curr => {
            return (curr !== todo);
        }) )
    }

    return (
        <div
            className="
                bg-slate-500 
                w-80
                max-w-[25rem]
                p-3
                mb-10
                rounded-xl
                shadow-lg
                text-white
            ">

            <h2 
                className="
                    font-bold 
                    text-2xl">
                {todo.task}
            </h2>

            <p>{todo.subtext}</p>

            <p 
                className="
                    font-bold 
                    text-yellow-400">
                {todo.type}
            </p>

            <button
                onClick={taskDone}
                className="
                    px-2 py-1
                    float-right
                    text-sm 
                    font-bold
                    rounded-md 
                    bg-slate-800">
                Done
            </button>
        </div>
    )
}

export default Todo;