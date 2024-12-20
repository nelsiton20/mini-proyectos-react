import { useState } from 'react';
import style from './Form.module.css';

function Form({ lastId, setLastId }){
    const [task, setTask] = useState('');

    const handleChange = (evt) => {
        if (evt.target.value === ' ') return
        setTask(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const userTask = {'id':lastId ,'description': task, 'isCompleted': false};
        localStorage.setItem(lastId, JSON.stringify(userTask));
        setLastId(parseInt(lastId)+1);
        setTask('')
    }


    return(
        <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="" className={style.label}>Agrega una nueva tarea...
                    <textarea className={style.message} onChange={handleChange} value={task}></textarea>
                </label>
                <div className={style.buttonContainer}>
                    <button type="submit" className={style.btn}>Agregar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;