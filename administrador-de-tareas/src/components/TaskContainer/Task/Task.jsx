import completeIcon from '../../../assets/icons/portapapeles.png'; 
import incompleteIcon from '../../../assets/icons/incompleto.png';
import deleteIcon from '../../../assets/icons/borrar.png';

import styles from './Task.module.css';

function Task({taskContent, isCompleted, id, handleChange}){
    const deleteTask = () => {
        localStorage.removeItem(id);
        handleChange()
    }

    const changeIsCompleted = () => {
        const userTask = {'id':id ,'description': taskContent, 'isCompleted': !isCompleted};
        localStorage.setItem(id, JSON.stringify(userTask));
        handleChange()
    }

    return (
        <div className={styles.taskContainer}>
            <div className={styles.descriptionContainer}>
                <p>{taskContent}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={changeIsCompleted} className={styles.button}>
                    <img src={isCompleted ? completeIcon : incompleteIcon} className={styles.icon} />
                </button>
                <button onClick={deleteTask} className={styles.button}>
                    <img src={deleteIcon} className={styles.icon}/>
                </button>
            </div>
        </div>
    );
}

export default Task;