import { useState } from "react";
import { TodoItem } from "../TodoItem";
import { TodoActionFooter } from "../ActionFooter";
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { useStoreTodo } from "~/hooks";
import { actions } from "~/store";

export function TodoAppContext() {
    const [nowShowing, setNowShowing] = useState('all')
    const [initialState, dispatch] = useStoreTodo()

    const handleAddToDo = () => {
        const checkValue = initialState.todos?.find((item) => item.value === initialState.todoInput)
        if (initialState.todoInput.trim() && !checkValue) {
            const value = {
                id: uuidv4(),
                value: initialState.todoInput,
                completed: false
            }
            dispatch(actions.addTodoInput(value))
            dispatch(actions.setTodoInput(''))
        }
    }

    const handleSelectAll = (e) => {
        const { checked } = e.target
        console.log(checked);
        const activeAll = initialState.todos?.map((todo) => {
            console.log(todo);
            return { ...todo, completed: checked }
        })
        dispatch(actions.setActiveAllTodo(activeAll))
        console.log(initialState.todos);
    }

    const activeJobCount = initialState.todos.reduce((accum, job) => {
        return job.completed ? accum : accum + 1;
    }, 0)

    const completedCount = initialState.todos.length - activeJobCount;

    const showTodos = initialState.todos.filter((job) => {
        switch (nowShowing) {
            case 'active':
                return !job.completed;
            case 'completed':
                return job.completed;
            default:
                return true
        }
    })

    const todoItems = showTodos?.map((job) => {
        return (
            <TodoItem
                todo={job}
            />)
    })

    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="relative my-5">
                <h1 className="text-center text-primary text-[100px]">todos</h1>
                <div>
                    {initialState.todos?.length > 0 && (
                        <>
                            <label htmlFor="toggle-all"
                                className={clsx(`toggle-all ${activeJobCount ? 'text-[#e6e6e6]' : 'text-[#737373]'}`)}
                            />
                            <input
                                id="toggle-all"
                                type="checkbox"
                                className="hidden"
                                onClick={(e) =>
                                    handleSelectAll(e)
                                }
                                checked={activeJobCount === 0}
                            />
                        </>
                    )}
                    <input
                        className="pl-[60px] p-4 text-2xl text-gray-400 italic 
                               w-full focus:outline-none focus-visible::outline-none 
                               border-none shadow-2xl"
                        placeholder="What needs to be done?"
                        value={initialState.todoInput}
                        autoFocus
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleAddToDo()
                            }
                        }}
                        onChange={e => dispatch(actions.setTodoInput(e.target.value))}
                    />
                </div>
                <div className="bg-white shadow-2xl z-10 absolute w-full">
                    {todoItems}
                    <TodoActionFooter
                        activeJobCount={activeJobCount}
                        completedCount={completedCount}
                        setNowShowing={setNowShowing}
                        nowShowing={nowShowing}
                    />
                </div>
            </div>
        </div>)
}

export default TodoAppContext;