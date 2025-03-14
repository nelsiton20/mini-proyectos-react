export const setDestinationCoordinates = (direction, setDestination, coordinates) => {
    const callAPI = async () => {
        const response = await fetch(`https://graphhopper.com/api/1/geocode?q=${encodeURIComponent(direction)}&locale=es&limit=1&key=762d1880-ff74-44ce-8820-1e9a43fc9582`)
        const data = await response.json()
        setDestination({...coordinates, 'destinationCoordinates' : {'lat': data.hits[0].point.lat, 'lng': data.hits[0].point.lng}})
    }

    callAPI();
}