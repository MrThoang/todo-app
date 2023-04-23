import { Button } from '~/components/Button';

export function TodoActionFooter(
    { jobs,
        activeButton,
        handleShowAll,
        handleShowActive,
        handleComplete,
        isDelete,
        isSelectAll,
        setJobs,
        setCheckList }
) {
    const handleDeleteAll = () => {
        if (isDelete) {
            setJobs([])
            setCheckList([])
        }
    }
    return (
        <>
            {jobs?.length > 0 && (
                <div
                    className="h-[50px]  relative
                            before:shadow-shadowPrimary before:absolute before:h-full
                            before:inset-x-0 before:top-0 before:overflow-hidden">
                    <span className="p-4 text-lg flex justify-between relative z-10 text-gray-500">
                        <span >
                            <span>{jobs?.length} item left</span>
                        </span>
                        <div className="flex gap-x-2">
                            <Button
                                onClick={() => handleShowAll()}
                                isActive={activeButton === 1 ? true : false}
                                title="All"
                            />
                            <Button
                                onClick={() => handleShowActive()}
                                isActive={activeButton === 2 ? true : false}
                                title="Active"
                            />
                            <Button
                                onClick={() => handleComplete()}
                                isActive={activeButton === 3 ? true : false}
                                title="Complete"
                            />
                        </div>
                        <div onClick={() => handleDeleteAll()}
                            className={`hover:underline cursor-pointer visible  ${isSelectAll ? '' : 'collapse'}`}>Clear completed</div>
                    </span>
                </div>
            )}
        </>
    )
}