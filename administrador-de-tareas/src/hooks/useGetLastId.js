import { useEffect, useState } from "react";

export const useGetLastId = () => {
    if (!localStorage.getItem('last_id')){
        localStorage.setItem('last_id', 1)
    }

    const [lastId, setLastId] = useState(localStorage.getItem('last_id'));

    useEffect(()=>{
        localStorage.setItem('last_id', lastId);
    }, [lastId])

    return { lastId, setLastId };
}