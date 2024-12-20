import { useEffect, useState } from "react"

export const useGetTask = (lastId) => {
    const [tasks, setTask] = useState([]);
    const [change, setChange] = useState(false);
    const [filter, setFilter] = useState('TODO');

    const handleChange = () => {
        setChange(!change);
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    useEffect(()=>{
        let getTasks = [];

        for (let i = 1; i < lastId; i++){
            if (localStorage.getItem(i)){
                let task = JSON.parse(localStorage.getItem(i));
                getTasks.push(task);
            }
        }

        if (filter != 'TODO') getTasks = getTasks.filter((task) => task.isCompleted == (filter == 'COMPLETADAS' ? true : false));

        setTask(getTasks);

    }, [lastId, change, filter])

    return { tasks, handleChange, handleFilterChange, filter };
}