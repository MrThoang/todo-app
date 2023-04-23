import { useState, useEffect } from "react";
import { TodoItem } from "../TodoItem";
import { TodoActionFooter } from "../ActionFooter";
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const [checkList, setCheckList] = useState([])
    const [activeButton, setActiveButton] = useState(1)
    const [isSelectAll, setIsSelectAll] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const [showList, setShowList] = useState([])

    const handleAddToDo = () => {
        const checkValue = jobs.find((item) => item.value === job)
        if (job !== "" && !checkValue) {
            setJobs(prev => [...prev, {
                id: uuidv4(),
                value: job
            }])
        }
        setJob('')
    }

    useEffect(() => {
        setShowList(jobs)
    }, [jobs])

    const handleShowAll = () => {
        setActiveButton(1)
        setShowList(jobs)
    }

    const handleShowActive = () => {
        setActiveButton(2)
        if (checkList?.length < 1) {
            setShowList(jobs)
        }
        else {
            const itemActive = jobs?.filter(job => !checkList.includes(job.id));
            setShowList(itemActive);
        }
    }

    const handleComplete = () => {
        setActiveButton(3)
        let itemComplete = []
        checkList.forEach((item) => {
            const job = jobs.filter(job => job.id === item)
            itemComplete.push(...job)
        })
        setShowList(itemComplete);
    }

    const handleSelectAll = () => {
        setIsSelectAll(!isSelectAll)
        const checkListAll = jobs.map((job) => {
            return job.id
        })
        setCheckList(checkListAll)
        if (isSelectAll) {
            setCheckList([]);
        }
    }

    useEffect(() => {
        if (checkList &&
            checkList?.length > 0 &&
            checkList?.length === jobs?.length
        ) {
            setIsSelectAll(true)

        } else {
            setIsSelectAll(false)
        }

        if (checkList &&
            checkList?.length > 0) {
            setIsDelete(true)
        } else {
            setIsDelete(false)
        }
    }, [checkList, jobs])

    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="relative my-5">
                <h1 className="text-center text-primary text-[100px]">todos</h1>
                <div>
                    {jobs?.length > 0 && (
                        <span
                            onClick={() => handleSelectAll()}
                            className={clsx(`toggle-all ${isSelectAll === true ? 'text-[#737373]' : 'text-[#e6e6e6]'}`)} ></span>
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
                    <TodoItem
                        jobs={jobs}
                        checkList={checkList}
                        setJobs={setJobs}
                        setCheckList={setCheckList}
                        isSelectAll={isSelectAll}
                        setIsSelectAll={setIsSelectAll}
                        showList={showList}
                        setShowList={setShowList}
                    />
                    <TodoActionFooter
                        jobs={jobs}
                        handleShowAll={handleShowAll}
                        handleShowActive={handleShowActive}
                        handleComplete={handleComplete}
                        activeButton={activeButton}
                        setIsDelete={setIsDelete}
                        isDelete={isDelete}
                        isSelectAll={isSelectAll}
                        setJobs={setJobs}
                        setCheckList={setCheckList}
                        checkList={checkList}
                    />
                </div>
            </div>

        </div>)
}

export default TodoApp;