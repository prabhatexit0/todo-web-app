import React from "react";

interface globalContext {
    toggler: () => void;
    setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
    todos: todoType[];
}

const Context = React.createContext<globalContext | undefined>(undefined);
export default Context;