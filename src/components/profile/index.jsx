import React, { useEffect, useState } from "react";
import { currentUser } from "../../api/auth.service";
import * as workoutDataService from "../../api/workout.service"
import CreateProfile from "../createprofile";
import Workout from "../workout";

const Profile = () => {
    const user = currentUser();
    const [workouts, setWorkouts] = useState([])

    const getWorkouts = async() => {
        await workoutDataService.getAll(user.id).then((res) =>
            setWorkouts(res.data)
        )
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return (
        <div>
            <img src={user.image} alt="profile" />
            <h1>{user.first_name} {user.last_name}</h1>
            <div>
                Workouts
                {workouts.map((workout) => {
                    if (user.id === workout.creator) {
                        return (
                            <>
                                <Workout name={workout.name} creator={workout.Creator} exercises={workout.Exercises}/>
                            </>
                        )
                    }
                })}
            </div>
            <CreateProfile />
        </div>
    )
}

export default Profile;