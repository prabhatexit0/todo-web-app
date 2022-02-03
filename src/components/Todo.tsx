import { useContext } from "react";
import Global from '../context/Global'

const Todo: React.FC<{ todo: todoType; }> = (todo: { todo: todoType }) => {
    const context = useContext(Global);
    const taskDone = () => {
        context?.setTodos( context.todos.filter(curr => {
            return (curr !== todo.todo);
        }) )
    }
    return (
        <div
            className="
                bg-slate-500 
                w-80
                max-w-[25rem]
                m-5
                p-3
                rounded-xl
                shadow-lg
                text-white
            "
        >
            <h2 className="font-bold text-2xl">{todo.todo.task}</h2>
            <p>{todo.todo.subtext}</p>
            <p className="font-bold text-yellow-400">{todo.todo.type}</p>
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