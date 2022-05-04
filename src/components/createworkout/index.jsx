import React, { useEffect, useState } from "react";
import * as WorkoutDataService from "../../api/workout.service";
import * as ExerciseService from "../../api/exercise.service";
import ExerciseCheckbox from "../exercisechkbox";
import { currentUser } from "../../api/auth.service";
import { NavLink } from "react-router-dom";

const CreateWorkout = () => {
    let [name, setName] = useState("");
    let [exercises, setExercises] = useState("");
    let [sets, setSets] = useState("");
    let [creator, setCreator] = useState();

    const getExercises = async () => {
        await ExerciseService.getAll().then((res) => {
            console.log(res.data)
            setExercises(res.data)
        })
    }

    const user = currentUser();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("creator", creator)
        data.append("name", name)

        await WorkoutDataService.create(data).then(() => {
            setName = "";
            setExercises = "";
            setSets = "";
            setCreator = "";
        });
    };

    useEffect(() => {
        getExercises()
        setCreator(JSON.parse(localStorage.getItem("user")).id)
    }, [])

    return (
        <div className="login">
            <h2>Create Workout</h2>
            <form action="post">
                <label htmlFor="name">Name: </label>
                <input
                        type="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                />
                <br/><br/>
                <label htmlFor="exercises">Exercises</label>
                <ExerciseCheckbox />
                <br/>
                <input type="hidden" name="creator" onChange={(e) => setCreator(e.target.value)} value={user.first_name} />
                <input type="hidden" name="sets" onChange={(e) => setSets(e.taget.value)} defaultValue="5" />
                <input className="login-btn" type="submit" value="Create" onClick={handleSubmit}/>
            </form>
            <br/>
            <button className="signup-btn" ><NavLink to="/workouts"><div className="signup">Cancel</div></NavLink></button>
        </div>
    )
}

export default CreateWorkout;