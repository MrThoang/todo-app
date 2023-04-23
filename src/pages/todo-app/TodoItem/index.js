import { useMemo } from "react";

export function TodoItem({ jobs, setJobs, checkList, setCheckList }) {

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
        if (!isCheckedItem(itemId)) {
            setCheckList([...checkList, itemId])
        }
        if (!checked) {
            setCheckList(checkList.filter((value) => value !== itemId))
        }
    }

    const handleEdit = (id) => {
        console.log(id);
    }

    return (
        <ul className="todo-list">
            {jobs?.map((jobItem, index) =>
                <li className="flex justify-between pl-2.5 px-5 p-2 border text-2xl"
                    key={index}
                >
                    <div className="flex items-center flex-1">
                        <input
                            type="checkbox"
                            onChange={(e) => handleSelect(e, jobItem.id)}
                            checked={isCheckedItem(jobItem.id)}
                            className="mr-4 w-8 h-8 rounded-full appearance-none"
                            value={jobItem.id} />
                        <div
                            className="flex-1"
                            onDoubleClick={() => {
                                handleEdit(jobItem.id)
                            }}
                        >
                            {jobItem.value}
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