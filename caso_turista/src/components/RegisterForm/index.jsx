import { useEffect, useState } from "react";
import { addUser } from "../../utils/addUser";
import styles from './RegisterForm.module.css';
import { useNavigate, Link, isRouteErrorResponse } from 'react-router-dom';
import { userExists } from "../../utils/userExists";
import { isUserAuthenticated } from "../../utils/isUserAuthenticated";
import { addUserLogin } from "../../utils/addUserLogin";

function RegisterForm(){
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isUserAuthenticated()) navigate('/home');
    }, []);
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(name && password && password2 && username){
            if (!userExists(username)){
                if (password == password2){
                    addUser(name, username, password);
                    addUserLogin(username);
                    navigate('/home');
                } else {
                    setErrorMessage("Las contraseñas no coinciden");
                }
            } else setErrorMessage("El username está registrado");
        } else {
            setErrorMessage("Todos los campos son obligatorios");
        }
    }

    return (
        <div className={styles.formMainContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Confirm password</label>
                    <input type="password" onChange={(e) => setPassword2(e.target.value)}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Registrar</button>
                </div>
            </form>
            <div>
                {errorMessage && (
                    <p>{errorMessage}</p>
                )}
            </div>
            <div className={styles.optionContainer}>
                <p>¿Tienes una cuenta? <Link to="/">Entra</Link></p>
            </div>
        </div>
    )
}

export default RegisterForm;