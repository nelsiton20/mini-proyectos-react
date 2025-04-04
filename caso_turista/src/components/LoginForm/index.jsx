import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { addUserLogin } from '../../utils/addUserLogin';
import { isUserAuthenticated } from "../../utils/isUserAuthenticated";

function LoginForm(){
    const navigate = useNavigate();
        
    useEffect(() => {
        if (isUserAuthenticated()) navigate('/home');
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password){
            const users = JSON.parse(localStorage.getItem('users'));
            if (users){
                const user = users.filter((element) => {
                    return ((element.username === username && element.password === password) ? true : false );
                })
                
                if(user.length > 0 ){
                    addUserLogin(username);
                    navigate('/home');
                } 
                else setError(true);
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}className={styles.form}>
                <div className={styles.formGroup}>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="usuario"/>
                </div>
                <div className={styles.formGroup}>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="contraseña"/>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Entrar</button>
                </div>
                {error && <p>Credenciales incorrectas</p>}
            </form>
            <div className={styles.optionContainer}>
                <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
            </div>
        </div>
    )
}

export default LoginForm;