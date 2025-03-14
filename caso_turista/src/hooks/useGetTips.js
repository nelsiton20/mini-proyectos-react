import { useEffect, useState } from "react"

export const useGetTips = (input) => {
    const [directions, setDirections] = useState(null)

    useEffect(() => {
        if (!input) return

        const getDirections = async () => {
            const response = await fetch(`https://graphhopper.com/api/1/geocode?q=${encodeURIComponent(input)}&locale=es&limit=5&key=762d1880-ff74-44ce-8820-1e9a43fc9582`)
            const data = await response.json()
            const place = `${data.hits[0].name}, ${data.hits[0].city}, ${data.hits[0].country}`

            if (place == input){
                setDirections(null)
            } else {
                setDirections(data)
            }
        }
    
        getDirections()

    }, [input])

    return directions
}