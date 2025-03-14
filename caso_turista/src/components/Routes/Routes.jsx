import { useGetPath } from "../../hooks/useGetPath";
import { getRoutes } from "../../utils/getRoutes";
import styles from './Routes.module.css';

function Routes({coordinates}){
    const routes = useGetPath(coordinates);
    const mainRoutes = (routes) ? getRoutes(routes) : null;
    const routeOption = ['A', 'B', 'C'];

    return (
        <div>
            {(!mainRoutes) ? "Ingresa una ruta" : (
                mainRoutes.map((route, i) => (
                    <div key={i} className={styles.itemRoute}>
                        <p className={styles.itemTitle}>Ruta <span>{routeOption[i]}</span></p>
                        <p className={styles.routeDescription}>Por <span>{route}</span></p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Routes;