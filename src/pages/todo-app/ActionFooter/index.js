import { Button } from '~/components/Button';

export function TodoActionFooter({
    jobs,
    setJobs,
    activeJobCount,
    completedCount,
    setNowShowing,
    nowShowing
}) {
    const handleClearComplete = () => {
        const items = jobs.filter(job => job.completed === false)
        setJobs(items)
    }

    const pluralize = (count, word) => {
        return count === 1 ? word : word + 's';
    }

    return (
        <>
            {jobs?.length > 0 && (
                <div
                    className="h-[50px]  relative
                            before:shadow-shadowPrimary before:absolute before:h-full
                            before:inset-x-0 before:top-0 before:overflow-hidden">
                    <span className="p-4 text-lg flex justify-between relative z-10 text-gray-500">
                        <span className='w-[100px] inline-block'>
                            {activeJobCount} {pluralize(activeJobCount, 'item')} left
                        </span>
                        <div className="flex gap-x-2">
                            <Button
                                onClick={() => setNowShowing('all')}
                                title="All"
                                isActive={nowShowing === 'all' ? true : false}
                            />
                            <Button
                                onClick={() => setNowShowing('active')}
                                title="Active"
                                isActive={nowShowing === 'active' ? true : false}
                            />
                            <Button
                                onClick={() => setNowShowing('completed')}
                                title="Complete"
                                isActive={nowShowing === 'completed' ? true : false}
                            />
                        </div>
                        <div onClick={() => handleClearComplete()}
                            className={`hover:underline cursor-pointer visible  ${completedCount > 0 ? '' : 'collapse'}`}>Clear completed</div>
                    </span>
                </div>
            )}
        </>
    )
}