import { useState } from "react";
import { useGetPath } from "../../hooks/useGetPath"
import styles from './Result.module.css'
import { formatTime } from "../../utils/formatTime";
import { formatDistance } from "../../utils/formatDistance";

function Result({coordinates}){
    const routes = useGetPath(coordinates)
    const labels = ['A', 'B', 'C']

    return (
        <div>
            {(!routes) ? 'Ingresa una ruta' : (
                routes.map((path, i) => (
                    <div key={i} className={styles.resultItem}>
                        <p className={styles.itemTitle}>Ruta <span>{labels[i]}</span></p>
                        <p className={styles.resultDescription}>{formatTime(path.time)} - {formatDistance(path.distance)}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Result