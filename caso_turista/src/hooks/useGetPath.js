import { useEffect, useState } from "react"

export const useGetPath = (coordenadas) => {
    const [routes, setRoutes] = useState(null)
    console.log(coordenadas)
    
    useEffect(() => {
        if (!coordenadas.startCoordinates || !coordenadas.destinationCoordinates) return 

        const getRoutes = async () => {
            const response = await fetch(`https://graphhopper.com/api/1/route?point=${coordenadas.startCoordinates.lat},${coordenadas.startCoordinates.lng}&point=${coordenadas.destinationCoordinates.lat},${coordenadas.destinationCoordinates.lng}&vehicle=car&locale=es&algorithm=alternative_route&alternative_route.max_paths=3&key=762d1880-ff74-44ce-8820-1e9a43fc9582`)
            const data = await response.json()

            console.log(data)

            const routesResponse = data.paths.map((path) => {
                return {'time': path.time, 'distance': path.distance, 'points': path.points, 'instructions' : path.instructions}
            })

            setRoutes(routesResponse)
        }

        getRoutes()
    }, [coordenadas])

    return routes
}