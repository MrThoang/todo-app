import { useMemo } from "react";
import clsx from 'clsx';

export function TodoItem({ jobs, setJobs, checkList, setCheckList, showList, setShowList }) {

    const handleDelete = (itemId) => {
        const deleteJob = jobs.filter(job => job.id !== itemId)
        setJobs(deleteJob)
    }

    const isCheckedItem = useMemo(
        () => (jobId) => checkList?.find((selected) => selected === jobId),
        [checkList]
    )

    const handleSelect = (e, itemId) => {
        const { checked } = e.target;
        console.log(itemId);
        if (!isCheckedItem(itemId)) {
            setCheckList([...checkList, itemId])
        }
        if (!checked) {
            setCheckList(checkList.filter((value) => value !== itemId))
        }
    }

    const handleEdit = (id) => {
        console.log(checkList.find((item) => item === id));
    }

    return (
        <ul className="todo-list">
            {showList?.map((jobItem, index) =>
                <li className="flex justify-between pl-2.5 px-5 p-2 border text-2xl"
                    key={index}
                >
                    <div className="flex items-center flex-1">
                        <input
                            type="checkbox"
                            onChange={(e) => handleSelect(e, jobItem.id)}
                            checked={isCheckedItem(jobItem.id)}
                            className="mr-4 w-8 h-8 rounded-full appearance-none"
                            value={jobItem.id}
                        />
                        <div
                            className="flex-1"
                            onDoubleClick={() => {
                                handleEdit(jobItem.id)
                            }}
                        >
                            <p
                                className={clsx(`${checkList.find((item) => item === jobItem.id ? true : false) ?
                                    "line-through text-gray-400 transition" : ""}
                            `)}
                            >
                                {jobItem.value}
                            </p>
                        </div>
                    </div>
                    <span className="cursor-pointer text-text-primary-color"
                        onClick={() => handleDelete(jobItem.id)}
                    >
                        x
                    </span>
                </li>
            )}
        </ul>
    )
}