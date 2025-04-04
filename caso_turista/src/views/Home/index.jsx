import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Form from '../../components/Form/Form'
import Result from '../../components/Result/Result'
import Map from '../../components/Map/Map'
import { setDestinationCoordinates } from '../../utils/setDestinationCoordinates'
import { setStartCoordinates } from '../../utils/setStartCoordinates'
import Routes from '../../components/Routes/Routes'
import { isUserAuthenticated } from '../../utils/isUserAuthenticated'
import { useNavigate } from 'react-router-dom';
import { deleteLogin } from '../../utils/deleteLogin'

function Home(){
    const navigate = useNavigate();
    const [coordinates, setCoordinates] = useState({'startCoordinates' : null, 'destinationCoordinates': null})

    useEffect(() => {
        if (!isUserAuthenticated()) navigate('/');

        setStartCoordinates(coordinates, setCoordinates)
    }, [])

    const handleClickButton = () => {
        deleteLogin();
        navigate('/');
    }

    
    const handleSetDestination = (direction) => {
        setDestinationCoordinates(direction, setCoordinates, coordinates)
    }

    return (
        <>
            <div className={styles.logOutContainer}>
                <button onClick={handleClickButton}>Cerrar sesión</button>
            </div>
            <h1>Sugerencia de Rutas</h1>
            <section className={styles.mainContainer}>
                <article className={styles.articleContainer}>
                    <h3>Ingresa tu dirección</h3>
                    <Form handleSetDestination={handleSetDestination} />
                </article>
                <article className={styles.articleContainer}>
                    <h3>Rutas</h3>
                    <Routes coordinates={coordinates} />
                </article>
                <article className={styles.articleContainer}>
                    <h3>Mapa</h3>  
                    <Map coordinates={coordinates}/>
                </article>
                <article className={styles.articleContainer}>
                    <h3>Métricas</h3>
                    <Result coordinates={coordinates}/>
                </article>
            </section>
        </>
    )
}

export default Home;