import RegisterForm from '../../components/RegisterForm';
import styles from './Register.module.css';

function Register(){
    return (
        <div className={styles.mainContainer}>
            <RegisterForm />
        </div>
    )
}
        
export default Register;