declare global {
    interface globalContext {
        toggler: () => void;
        setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
        todos: TodoType[];
        which: ({ type }: TodoType) => StateCouple;
    }

    interface TodoProps {
        todo: TodoType
    }

    interface InputProps {
        placeholderText: string;
        type: string;
    }


    interface RadioProps {
        id: number;
        label: string;
        value: string;
    }

    interface ButtonProps {
        text: string;
        type: string;
    }

    interface TodoType {
        task: string;
        subtext: string;
        type: string;
    }

    interface StateCouple {
        state: TodoType[];
        setState: React.Dispatch<React.SetStateAction<TodoType[]>>;
    }

}

export { }