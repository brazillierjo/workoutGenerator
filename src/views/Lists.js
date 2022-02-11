import React, { useEffect, useState } from 'react';
import workoutexercices from '../data/workoutexercices.json';
import AllExos from '../components/AllExos';
import { Tab } from '@headlessui/react'
import FilteredExos from '../components/FilteredExos';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Lists() {
    const [exercices, setExercices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setExercices(workoutexercices);
        setLoading(false)
    }, []);

    return (
        <div>
            {loading ?
                <div> Loading... </div> :
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl my-4 mx-2">
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                selected
                                    ? 'bg-teal-500 shadow'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }>Tous les exercices</Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                selected
                                    ? 'bg-teal-500 shadow'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }>Exercices par muscles</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel><AllExos exercices={exercices} /></Tab.Panel>
                        <Tab.Panel><FilteredExos exercices={exercices} /></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>}
        </div>
    )
}