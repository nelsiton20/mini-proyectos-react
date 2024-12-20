import { useGetTask } from '../../hooks/useGetTask';
import styles from './TaskContainer.module.css';
import { useEffect, useState } from "react";
import Task from './Task/Task';
import FilterButton from './components/FilterButton';

function TaskContainer({ lastId }){
    const { tasks, handleChange, handleFilterChange, filter } = useGetTask(lastId);
    const filterValues = ['TODO', 'COMPLETADAS', 'PENDIENTES'];

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                {filterValues.map((value, i) => (
                    <FilterButton key={i} handleFilterChange={handleFilterChange} buttonClass={styles.filterButton} filterValue={value} filter={filter} />
                ))}
            </div>
            <div className={styles.taskContainer}>
                {tasks.length > 0 ? tasks.map((task)=>(
                    <Task key={task.id} taskContent={task.description} isCompleted={task.isCompleted} id={task.id} handleChange={handleChange}/>
                )) : <div>No hay tareas disponibles</div>}
            </div>
        </div>
    );
}

export default TaskContainer;