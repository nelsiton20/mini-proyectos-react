export const setStartCoordinates = (coordinates, setCoordinates) => {
    let latitud;
    let longitud;

    navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({...coordinates, 'startCoordinates': {'lat': position.coords.latitude, 'lng': position.coords.longitude}})
    })
}