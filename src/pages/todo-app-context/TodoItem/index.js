import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useStoreTodo } from '~/hooks';
import { actions } from '~/store';

export function TodoItem({ todo }) {
    const [editValue, setEditValue] = useState();
    const editField = useRef()
    const [initialState, dispatch] = useStoreTodo()

    const handleDelete = (todoId) => {
        dispatch(actions.deleteTodo(todoId))
    };

    const handleSelect = (todoId) => {
        dispatch(actions.setActiveTodo(todoId))
    };

    const handleEdit = (todoItem) => {
        setEditValue(todoItem);
    };

    const handleSubmit = (todoId) => {
        const itemEdited = editField.current.value
        if (editField !== '') {
            dispatch(actions.editTodo(todoId, itemEdited))
        }
        setEditValue('')
    }

    const handleKeyDown = (e, todoId) => {
        if (e.key === "Enter") {
            handleSubmit(todoId)
        }
    }

    const handleChange = (e) => {
        const { value } = e.target
        setEditValue(value)
    }

    return (
        <ul className="todo-list">
            <li
                className="flex justify-between pl-2.5 px-5 p-2 border text-2xl"
                key={todo.id}
                onDoubleClick={() => handleEdit(todo)}
            >
                {' '}
                {!editValue && (
                    <div className="flex items-center flex-1">
                        <input
                            type="checkbox"
                            onChange={() => handleSelect(todo.id)}
                            checked={todo.completed}
                            className="mr-4 w-8 h-8 rounded-full z-10"
                            value={todo.id}
                        />
                        <div className="flex-1">
                            <p
                                className={clsx(`${todo.completed ? 'line-through text-gray-400 transition duration-300' : ''
                                    }
                    `)}
                            >
                                {todo.value}
                            </p>
                        </div>
                        <span
                            className="cursor-default text-text-primary-color px-2.5 before:content-['×']"
                            onClick={() => handleDelete(todo.id)}
                        ></span>
                    </div>
                )}
                {editValue &&
                    <input
                        autoFocus
                        ref={editField}
                        value={editValue?.value}
                        onBlur={() => handleSubmit(todo.id)}
                        onChange={(e) => handleChange(e)}
                        onKeyDown={(e) => handleKeyDown(e, todo.id)}
                        className='w-full ml-12'
                    />
                }
            </li>
        </ul>
    );
}
