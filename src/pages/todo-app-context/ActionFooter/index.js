import { Button } from '~/components/Button';
import { useStoreTodo } from '~/hooks';
import { actions } from '~/store';

export function TodoActionFooter({
    activeJobCount,
    completedCount,
    setNowShowing,
    nowShowing
}) {
    const [initialState, dispatch] = useStoreTodo()

    const handleClearComplete = () => {
        dispatch(actions.clearTodoComplete())
    }

    const pluralize = (count, word) => {
        return count === 1 ? word : word + 's';
    }

    return (
        <>
            {initialState.todos?.length > 0 && (
                <div
                    className="h-[50px]  relative
                            before:shadow-shadowPrimary before:absolute before:h-full
                            before:inset-x-0 before:top-0 before:overflow-hidden">
                    <span className="p-4 text-lg flex justify-between relative z-10 text-gray-500">
                        <span className='w-[100px] inline-block'>
                            {activeJobCount} {pluralize(activeJobCount, 'item')} left
                        </span>
                        <div className="flex gap-x-2">
                            <a href='#/all'>
                                <Button
                                    onClick={() => setNowShowing('all')}
                                    title="All"
                                    isActive={nowShowing === 'all' ? true : false}
                                />
                            </a>
                            <a href='#/active'>
                                <Button
                                    onClick={() => setNowShowing('active')}
                                    title="Active"
                                    isActive={nowShowing === 'active' ? true : false}
                                />
                            </a>
                            <a href='#/completed'>
                                <Button
                                    onClick={() => setNowShowing('completed')}
                                    title="Complete"
                                    isActive={nowShowing === 'completed' ? true : false}
                                />
                            </a>
                        </div>
                        <div onClick={() => handleClearComplete()}
                            className={`hover:underline cursor-pointer visible  ${completedCount > 0 ? '' : 'collapse'}`}>Clear completed</div>
                    </span>
                </div>
            )}
        </>
    )
}