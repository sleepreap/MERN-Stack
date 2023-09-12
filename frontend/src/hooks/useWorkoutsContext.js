import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

//creating a custom hook. This can just be done with useContext

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext)

//check that context is not null
    if (!context){
        throw Error('useWorkoutContext must be used inside an WorkoutsContextProvider')
    }

    return context
}