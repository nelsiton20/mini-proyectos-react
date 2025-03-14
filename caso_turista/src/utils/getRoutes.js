export const getRoutes = (routes) => {
    console.log("entrando a obtener las rutas")
    const paths = [];

    const mainStreet = []
    for (const route of routes){

        const instructionDistance = route.instructions.map((instruction) => instruction.distance);

        instructionDistance.sort();
        let mainStreetDistance;

        for(const distance of instructionDistance){
            for (const instruction of route.instructions){
                if (instruction.distance == distance && instruction.street_name && !mainStreetDistance){
                    mainStreetDistance = distance;
                    break;
                }
            }
        }

        for (const instruction of route.instructions){
            if (instruction.distance == mainStreetDistance && !mainStreet.includes(instruction.street_name) && instruction.street_name){
                mainStreet.push(instruction.street_name);
            }
        }
    }

    console.log(mainStreet);
    return mainStreet;
}