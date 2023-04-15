import { useState } from "react";

function Home() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"))
        return storageJobs ?? [];
    })

    const handleAddToDo = () => {
        setJobs(prev => {
            if (job !== '' && prev.includes(job) === false) {
                const newJobs = [...prev, job]
                const jsonJob = JSON.stringify(newJobs)
                localStorage.setItem('jobs', jsonJob)
                return newJobs
            }
            return prev
        })
        setJob('')
    }

    const handleDelete = (item) => {
        const deleteJob = jobs.filter(job => job !== item)

        setJobs(() => {
            localStorage.setItem('jobs', JSON.stringify(deleteJob))
            return deleteJob
        })
    }

    return (
        <div className="max-w-2xl mx-auto bg-white">
            <div className="relative my-5">
                <h1 className="text-center text-primary text-[100px]">todos</h1>
                <input className="pl-[60px] p-4 text-2xl text-gray-400 italic w-full focus-visible:outline-none shadow-2xl"
                    placeholder="What needs to be done?"
                    type='text'
                    value={job}
                    autoFocus
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleAddToDo()
                        }
                    }}
                    onChange={e => setJob(e.target.value)}
                />
                <div className="bg-white shadow-2xl z-10 absolute w-full">
                    <ul className="">
                        {jobs?.map((job, index) =>
                            <li className="flex justify-between px-5 p-2 border text-2xl"
                                key={index}
                            >
                                <div>
                                    <input type="radio" className="mr-4 text-3xl" value={index} />
                                    {job}
                                </div>
                                <span className="cursor-pointer" onClick={() => handleDelete(job)}>x</span>
                            </li>
                        )}
                    </ul>
                    {
                        jobs.length > 0 && <div className="shadow-shadowPrimary">
                            ádasdasd
                        </div>
                    }
                </div>
            </div>

        </div>)
}

export default Home;