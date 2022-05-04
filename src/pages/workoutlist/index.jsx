import NavBar from "../../components/navbar";
import Workout from "../../components/workout";

import * as workoutService from "../../api/workout.service"
import { useEffect, useState } from "react";
import CreateWorkout from "../../components/createworkout";
import { NavLink } from "react-router-dom";

import "./index.css"

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([])

    const getWorkouts = async () => {
        await workoutService.getAll().then((res) => {
            setWorkouts(res.data)
        })
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return(
        <>
            <NavBar/>
            <br/>
            <div className="workout-page">
                <button className="btn" ><NavLink to="/workouts/create"><div className="btn-txt">Create A Workout</div></NavLink></button>
                <h1 className="workout-title">Workouts</h1>
                {workouts.map((workout) => {
                    return (
                        <>
                            <Workout name={workout.name} creator={workout.Creator} exercises={workout.Exercises}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default WorkoutList;