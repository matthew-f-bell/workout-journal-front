import React, { useEffect, useState } from "react";
import * as WorkoutDataService from "../../api/workout.service";
import * as ExerciseService from "../../api/exercise.service";
import ExerciseCheckbox from "../exercisechkbox";
import { currentUser } from "../../api/auth.service";

const CreateWorkout = () => {
    let [name, setName] = useState("");
    let [exercises, setExercises] = useState("");
    let [sets, setSets] = useState("");
    let [creator, setCreator] = useState("");

    const getExercises = async () => {
        await ExerciseService.getAll().then((res) => {
            console.log(res.data)
            setExercises(res.data)
        })
    }

    const user = currentUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(creator);
        await WorkoutDataService.create(name, exercises, sets, creator).then(() => {
            setName = "";
            setExercises = "";
            setSets = "";
            setCreator = "";
        });
    };

    useEffect(() => {
        getExercises()
    }, [])

    return (
        <>
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
                <input type="submit" value="Create" onClick={handleSubmit}/>
                <button>Cancel</button>
            </form>
        </>
    )
}

export default CreateWorkout;