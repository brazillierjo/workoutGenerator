import React, { useEffect, useState } from 'react';
import workoutexercices from '../data/workoutexercices.json';
import FilteredExos from '../components/FilteredExos';

export default function Lists() {
    const [exercices, setExercices] = useState([])

    useEffect(() => {
        setExercices(workoutexercices);
    }, []);

    return (
        <div className='min-h-screen pb-8'>
            <h1 className="uppercase rounded-md my-4 mx-2 p-2 text-white text-center">Exercices par muscles</h1>
            <FilteredExos exercices={exercices} />
        </div>
    )
}