import clsx from 'clsx';
import { useState } from 'react';

export function TodoItem({ jobs, setJobs, key, todo }) {
    const [editValue, setEditValue] = useState();

    const handleDelete = (itemId) => {
        const deleteJob = jobs.filter((job) => job.id !== itemId);
        setJobs(deleteJob);
    };

    const handleSelect = (itemId) => {
        const itemSelect = jobs.map((job) => {
            return job.id !== itemId ? job : { ...job, completed: !job.completed };
        });
        setJobs(itemSelect);
    };

    const handleEdit = (jobItem) => {
        setEditValue(jobItem);
    };

    const handleSubmit = () => {
        const itemEdited = editValue.value.trim()
    }

    const handleChange = (e) => {
        const { value } = e.target
        setEditValue(value)
    }

    return (
        <ul className="todo-list">
            <li
                className="flex justify-between pl-2.5 px-5 p-2 border text-2xl"
                key={key}
                onDoubleClick={() => handleEdit(todo)}
            >
                {' '}
                {!editValue && (
                    <div className="flex items-center flex-1">
                        <input
                            type="checkbox"
                            onChange={() => handleSelect(todo.id)}
                            checked={todo.completed}
                            className="mr-4 w-8 h-8 rounded-full appearance-none"
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
                        value={editValue?.value}
                        onBlur={() => handleSubmit()}
                        onChange={(e) => handleChange(e)}
                    />
                }
            </li>
        </ul>
    );
}
