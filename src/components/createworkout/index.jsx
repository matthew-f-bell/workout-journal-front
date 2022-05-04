import React, { useEffect, useState } from "react";
import * as WorkoutDataService from "../../api/workout.service";
import * as ExerciseService from "../../api/exercise.service";
import ExerciseCheckbox from "../exercisechkbox";
import { currentUser } from "../../api/auth.service";
import { NavLink, useNavigate } from "react-router-dom";
import ExerciseList from "../exerciseList";

const CreateWorkout = () => {
    let [name, setName] = useState("");
    let [exercises, setExercises] = useState([]);
    let [sets, setSets] = useState(1);
    let [reps, setReps] = useState(1);
    let [creator, setCreator] = useState();
    let [exerciseList, setExerciseList] = useState([]);

    const navigate = useNavigate()

    const getExercises = async () => {
        await ExerciseService.getAll().then((res) => {
            console.log(res.data)
            setExercises(res.data)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("creator", creator)
        data.append("name", name)
        data.append("Exercises", JSON.stringify(exerciseList))
        console.log(exerciseList)
        await WorkoutDataService.create(data).then(() => {
            setName = "";
            setExercises = "";
            setCreator = "";
            navigate("/workouts")
        });
    };

    const addExercise = () => {
        let select = document.getElementById("exerciseSelect");
        let optIdx = select.selectedIndex;
        let newCount = {id:exercises[optIdx].pk, reps:reps, sets:sets, name:select.options[optIdx].value}
        setExerciseList([...exerciseList,newCount])
        console.log(exerciseList)
        setReps(1);
        setSets(1);
    }

    useEffect(() => {
        getExercises()
        setCreator(JSON.parse(localStorage.getItem("user")).pk)
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

                <p>Added Exercises:</p>
                <ExerciseList exerciseList={exerciseList}/>
                <label htmlFor="exercises">Add Exercises</label>
                <br />
                <select id="exerciseSelect" name="Exercise">
                    {
                        exercises.map(exercise => 
                            {
                                return (
                                    <option value={exercise.id}>{exercise.name}</option>
                                )
                            }
                        )
                    }
                </select>
                <p>Enter number of Sets</p>
                <input name="sets" value={sets} onChange={(e) => setSets(e.target.value)} defaultValue="1" />
                <p>Enter number of Reps</p>
                <input name="reps" value={reps} onChange={(e) => setReps(e.target.value)} defaultValue="1" />
                <br />
                <button type="button" onClick={addExercise}>Add Exercise</button>
                <br/><br /><br />
                <input className="login-btn" type="submit" value="Create" onClick={handleSubmit}/>

            </form>
            <br/>
            <button className="signup-btn" ><NavLink to="/workouts"><div className="signup">Cancel</div></NavLink></button>
        </div>
    )
}

export default CreateWorkout;