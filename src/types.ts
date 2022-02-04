declare global { 
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

}

export { }