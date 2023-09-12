import { useEffect} from "react";

//components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () =>{
    const { workouts, dispatch} = useWorkoutsContext()

    useEffect( () =>{
        const fetchWorkouts = async ()=>{
            //using proxy so that dont have cors error
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
                {/* When using parentheses, the arrow function implicitly returns the JSX element,
                When using curly braces, you need to include an explicit return statement to return the JSX element 
                from the arrow function. */}
                {/* component must start with uppercase so that react can differentiate component from html */}
            </div>
            <div>
                <WorkoutForm/>
            </div>
        </div>
    )
}

export default Home;