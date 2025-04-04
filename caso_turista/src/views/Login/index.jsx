import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

function Login(){
    return (
        <div className={styles.mainContainer}>
            <LoginForm />
        </div>
    )
}

export default Login;