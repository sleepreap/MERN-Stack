import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return{
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts: [action.payload, ...state.workouts]
            }
            case 'DELETE_WORKOUT':
                return { 
                  workouts: state.workouts.filter(w => w._id !== action.payload._id) 
                }
        
        default :
        return state
    }
}






export const WorkoutsContextProvider = ({children}) => {
    //  {Children} is passed in represents whatever props the workoutcontextprovider 
    // has wrapped which is the root app which means all component has access to this context
    //<WorkoutContext.Provider> need to wrap whatever components that need to access the context

    const [state, dispatch ]= useReducer(workoutsReducer, {workouts: null})
    // useReducer is similar to useState but global, it takes in a function, workoutReducer, 
    // and an initial value. 
    //dispatch is a function that takes in a "type" and a payload which is the data required to perform the type, 
    // the whole dispatch is also known as an action for the workoutsReducer

    return(
        <WorkoutsContext.Provider value= {{...state, dispatch}} >
            {/* ...state will spread workouts into its 3 values  */}
            {children}
        </WorkoutsContext.Provider>

    )

}