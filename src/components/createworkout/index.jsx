import React, { useEffect, useState } from "react";
import * as WorkoutDataService from "../../api/workout.service";
import * as ExerciseService from "../../api/exercise.service";
import ExerciseCheckbox from "../exercisechkbox";

const CreateWorkout = () => {
    let [name, setName] = useState("");
    let [exercises, setExercises] = useState("");
    let [sets, setSets] = useState("");
    let [reps, setReps] = useState("");

    const getExercises = async () => {
        await ExerciseService.getAll().then((res) => {
            setExercises(res.data)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await WorkoutDataService.create(name, exercises, sets).then(() => {
            setName = "";
            setExercises = "";
            setSets = "";
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
                <input type="submit" value="Create" onClick={handleSubmit}/>
                <button>Cancel</button>
            </form>
        </>
    )
}

export default CreateWorkout;