import React, { useEffect, useState } from 'react';
import workoutexercices from '../data/workoutexercices.json';
import FilteredExos from '../components/FilteredExos';
import Footer from '../components/Footer';

export default function Lists() {
    const [exercices, setExercices] = useState([])

    useEffect(() => {
        setExercices(workoutexercices);
    }, []);

    return (
        <>
        <div>
            <h1 className="uppercase rounded-md my-4 mx-2 p-2 text-center">Exercices par muscles</h1>
            <FilteredExos exercices={exercices} />
        </div>

            <Footer />
        </>
    )
}