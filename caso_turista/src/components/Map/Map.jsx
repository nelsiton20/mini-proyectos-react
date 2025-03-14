import { useState } from "react";
import { useGetPath } from "../../hooks/useGetPath";

import { MapContainer, TileLayer, Polyline, Marker,Tooltip } from "react-leaflet";
import polyline from "@mapbox/polyline";
import "leaflet/dist/leaflet.css";

function Map({coordinates}){
    const routes = useGetPath(coordinates)
    const routePoints = (routes) ? (routes.map((route) => (
        polyline.decode(route.points) 
    ))) : null;
    const labels = ['A', 'B', 'C'];
    const routeMarkers = (routes) ? (routePoints.map((route, i) => {
        const mitad = Math.round(route.length / 2);
        return {'position': route[mitad], 'label' : labels[i]};         
    })) : null;
    const colors = ['blue', 'red', 'green'];
    console.log(routeMarkers)

    return (
        <>
        {(!routes) ? 'Ingresa una ruta' : (
           <MapContainer center={routePoints[0][0]} zoom={14} style={{ height: "300px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {routePoints.map((point, i) => (
                    <Polyline positions={point} color={colors[i]} />
                ))}

                {routeMarkers.map((marker, index) => (
                        <Marker key={index} position={marker.position}>
                        <Tooltip permanent>{marker.label}</Tooltip>
                        </Marker>
                    ))}
            </MapContainer>
        )}
        </>
    )
}

export default Map;