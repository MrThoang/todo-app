import { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem";
import { TodoActionFooter } from "../ActionFooter";
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const [nowShowing, setNowShowing] = useState('all')

    const handleAddToDo = () => {
        const checkValue = jobs.find((item) => item.value === job)
        if (job.trim() && !checkValue) {
            setJobs(prev => [...prev, {
                id: uuidv4(),
                value: job,
                completed: false
            }])
        }
        setJob('')
    }

    const handleSelectAll = (e) => {
        const { checked } = e.target
        const activeAll = jobs.map((job) => {
            return { ...job, completed: checked }
        })
        setJobs(activeAll)
    }

    const activeJobCount = jobs.reduce((accum, job) => {
        return job.completed ? accum : accum + 1;
    }, 0)

    const completedCount = jobs.length - activeJobCount;

    const showTodos = jobs.filter((job) => {
        switch (nowShowing) {
            case 'active':
                return !job.completed;
            case 'completed':
                return job.completed;
            default:
                return true
        }
    })

    const todoItems = showTodos.map((job) => {
        return (
            <TodoItem
                key={job.id}
                todo={job}
                jobs={jobs}
                setJobs={setJobs}
            />)
    })

    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="relative my-5">
                <h1 className="text-center text-primary text-[100px]">todos</h1>
                <div>
                    {jobs?.length > 0 && (
                        <>
                            <label htmlFor="toggle-all"
                                className={clsx(`toggle-all ${activeJobCount ? 'text-[#e6e6e6]' : 'text-[#737373]'}`)}
                            />
                            <input
                                id="toggle-all"
                                type="checkbox"
                                className="hidden"
                                onClick={(e) => handleSelectAll(e)}
                                checked={activeJobCount === 0}
                            />
                        </>
                    )}
                    <input
                        className="pl-[60px] p-4 text-2xl text-gray-400 italic 
                               w-full focus:outline-none focus-visible::outline-none 
                               border-none shadow-2xl"
                        placeholder="What needs to be done?"
                        value={job}
                        autoFocus
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleAddToDo()
                            }
                        }}
                        onChange={e => setJob(e.target.value)}
                    />
                </div>
                <div className="bg-white shadow-2xl z-10 absolute w-full">
                    {todoItems}
                    <TodoActionFooter
                        jobs={jobs}
                        setJobs={setJobs}
                        activeJobCount={activeJobCount}
                        completedCount={completedCount}
                        setNowShowing={setNowShowing}
                        nowShowing={nowShowing}
                    />
                </div>
            </div>
        </div>)
}

export default TodoApp;