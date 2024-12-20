import { useGetTask } from "./hooks/useGetTask";

function Component(){
    const nombre = useGetTask();

    return (
        <p>Soy una prueba</p>
    );
};

export default Component;