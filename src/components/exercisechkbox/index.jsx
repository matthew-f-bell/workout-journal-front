import React, { useEffect, useState } from 'react'
import * as exerciseService from "../../api/exercise.service"

const ExerciseCheckbox = (props) => {

    const [exercises, setExercises] = useState([]);

    const getExercise = async () => {
        await exerciseService.get(props.exerciseID).then((res) => {
            setExercises(res.data.name)
        })
    }
    useEffect(() => {
        getExercise()
    }, [])

    return (
        <div>
            <input type="checkbox" />
        </div>
    )
}