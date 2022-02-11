import React, { useEffect, useState } from 'react';
import workoutexercices from '../data/workoutexercices.json';
import FilteredExos from '../components/FilteredExos';

export default function Lists() {
    const [exercices, setExercices] = useState([])

    useEffect(() => {
        setExercices(workoutexercices);
    }, []);

    return (
        <div>
            <h1 className="bg-gray-300 uppercase rounded-md my-4 mx-2 p-2 text-center">Exercices par muscles</h1>
            <FilteredExos exercices={exercices} />
        </div>
    )
}