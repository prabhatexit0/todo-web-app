import React, { useEffect, useState, useContext } from "react";
import Global from '../context/Global'

const selection: todoType = {task: "", subtext: "", type: ""};

const TodoForm = () => {

    return (
        <div 
            className="
                bg-gray-50
                py-4
                flex
                flex-col
                justify-between
                w-[300px]
                h-[235px]
                items-center
                rounded-md
                absolute
                overflow-y-auto
                shadow-lg
                bottom-0
                mb-20
                transition-all
                hover:bg-slate-600
            ">
            <Input placeholderText="Enter Task Name" type="task"/>
            <Input placeholderText="Enter Sub Text" type="subtext"/>
            <Color/>
            <Button text={"SUBMIT"} type={"submit"} />
            <Button text={"LEAVE"} type={"leave"} />


        </div>
    )
}



interface inputBox {
    placeholderText: string;
    type: string;
}

const Input: React.FC<inputBox> = ({placeholderText, type}) => {
    const [inputVal, setInputVal] = useState("");

    useEffect(() => {
        if(type === "task") {
            selection.task = inputVal;
        } else {
            selection.subtext = inputVal;
        }
    }, [inputVal])
    
    return (
        <input 
            type="text"
            value={inputVal}
            onChange={e => { setInputVal(e.target.value)}}
            placeholder={placeholderText}
            className="
                p-2
                w-11/12
                focus:outline-none
                text-gray-500
                text-sm
                font-semibold
            "
        />
    )
}

interface radioInput {
    id: number;
    label: string;
    value: string;
}

const RadioColor: React.FC<radioInput> = ({id, label, value}) => {
    const [val, setVal] = useState(value);

    return (
        <div 
            className="
                flex
                items-center
                text-sm
            "
        >
            <input
                type="radio"
                name="radioColor"
                value={val}
                id={id.toString()}
                className="
                    mx-1
                "
            />
            <label
                className="
                "
                htmlFor={id.toString()}>
                {label}
            </label>
        </div>
    )
}

const Color: React.FC = () => {
    const colors: radioInput[] = [
        {id: 123, label: "UI", value: "UI"},
        {id: 124, label: "UNI", value: "UNI"},
        {id: 125, label: "NUI", value: "NUI"},
        {id: 126, label: "NUNI", value: "NUNI"},
    ] 

    const changeRadio = (e: React.FormEvent<HTMLDivElement>) => {
        selection.type = (e.target as HTMLInputElement).value
    }

    return (
        <div
            className="
                flex
                w-11/12
                justify-around
                items-center
                bg-slate-200
                p-[0.4rem]
                rounded-sm
            "
        >
            {
                colors.map(color => {
                    return <div 
                        onChange ={(e) => changeRadio(e)} key={color.id}>  
                        <RadioColor id={color.id} label={color.label} value={color.value}/>
                    </div>
                })
            }
        </div>
    )
}

interface buttonProps {
    text: string;
    type: string;
}

const Button: React.FC<buttonProps> = ({text, type}) => {
    const context = useContext(Global);

    const buttonClicked = () => {
        if(type === "submit") {
            context?.setTodos([...context.todos, {type: selection.type, subtext: selection.subtext, task: selection.task} ]);
        } 
        context?.toggler();
    }
    return (
        <button
            onClick={buttonClicked}
            className="
                bg-slate-200
                py-1
                w-11/12
                font-bold
                text-gray-500
            "
        >
            {text}
        </button>
    )
}

export default TodoForm 