import React, { createContext, useState } from "react";
import {TodoType} from '../types/todo';

export const TodoContext = createContext<TodoType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({children}) => {
    const [list, setList] = useState<string[]>([]);
    return <TodoContext.Provider value={{list: list, changeList: setList}}>{children}</TodoContext.Provider>
};

export default TodoProvider;