function Item({direction, city, country, setDirection}){
    const handleClickElement = () => {
        setDirection(`${direction}, ${city}, ${country}`)
    }

    return <li onClick={handleClickElement}>{`${direction}, ${city}, ${country}`}</li>
}

export default Item;