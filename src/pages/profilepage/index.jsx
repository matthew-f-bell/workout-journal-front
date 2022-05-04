import NavBar from "../../components/navbar";
import Profile from "../../components/profile"
import Workout from "../../components/workout"
import { useState, useEffect} from 'react'
import * as authService from "../../api/auth.service"
import * as workoutService from "../../api/workout.service"
import { NavLink } from "react-router-dom";

import "../../stylesheets/login.css"

const ProfilePage = () => {
    const user = authService.currentUser()
    const [workouts, setWorkouts] = useState([])

    const getWorkouts = async () => {
        await workoutService.getAll().then((res) => {
            setWorkouts(res.data)
        })
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return (
        <>
            <NavBar/>
            <h1>Profile</h1>
            <button className="btn" ><NavLink to="/profile/update"><div className="btn-txt">Update Profile</div></NavLink></button>
            <Profile user={user} />
            <h2>Workouts Created:</h2>
            {workouts.map((workout) => {
                if(workout.Creator.id == user.id) {
                    return (
                        <>
                            <Workout name={workout.name} creator={workout.Creator} exercises={workout.Exercises}/>
                        </>
                    )
                } else {
                    return (
                        <div>User has not created any workouts!</div>
                    )
                }
            })}
            <span>
                <NavLink to="/profile/update">Update Profile</NavLink>
            </span>
        </>
    )
}

export default ProfilePage;