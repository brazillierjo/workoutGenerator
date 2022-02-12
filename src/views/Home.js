import React from 'react'
import exercices from '../data/workoutexercices.json'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Home() {
    const [group, setGroup] = React.useState([])
    const [workout, setWorkout] = React.useState([])

    const [muscle1, setMuscle1] = React.useState('')
    const [nbr1, setNbr1] = React.useState(0)

    const [muscle2, setMuscle2] = React.useState('')
    const [nbr2, setNbr2] = React.useState(0)

    const [muscle3, setMuscle3] = React.useState('')
    const [nbr3, setNbr3] = React.useState(0)

    const [muscle4, setMuscle4] = React.useState('')
    const [nbr4, setNbr4] = React.useState(0)

    const [muscle5, setMuscle5] = React.useState('')
    const [nbr5, setNbr5] = React.useState(0)

    const [muscle6, setMuscle6] = React.useState('')
    const [nbr6, setNbr6] = React.useState(0)

    const [muscle7, setMuscle7] = React.useState('')
    const [nbr7, setNbr7] = React.useState(0)

    const [muscle8, setMuscle8] = React.useState('')
    const [nbr8, setNbr8] = React.useState(0)

    const [muscle9, setMuscle9] = React.useState('')
    const [nbr9, setNbr9] = React.useState(0)

    React.useEffect(() => {
        const groupFilter = exercices.map(exo => {
            return exo.id
        })
        let x = [groupFilter]
        x = x.flat().filter((v, i, a) => a.indexOf(v) === i)
        x.sort()
        setGroup(x)
    }, [])

    function generateWorkout() {
        setWorkout([])
        let workout = []
        let exo1 = exercices.filter(exo => exo.id === muscle1)
        let exo2 = exercices.filter(exo => exo.id === muscle2)
        let exo3 = exercices.filter(exo => exo.id === muscle3)
        let exo4 = exercices.filter(exo => exo.id === muscle4)
        let exo5 = exercices.filter(exo => exo.id === muscle5)
        let exo6 = exercices.filter(exo => exo.id === muscle5)
        let exo7 = exercices.filter(exo => exo.id === muscle5)
        let exo8 = exercices.filter(exo => exo.id === muscle5)
        let exo9 = exercices.filter(exo => exo.id === muscle5)

        if (muscle1 !== '') {
            for (let i = 0; i < nbr1; i++) {
                let random = Math.floor(Math.random() * exo1.length)
                if (workout.includes(exo1[random])) {
                    i--
                } else {
                    workout.push(exo1[random])
                }
            }
        }

        if (muscle2 !== '') {
            for (let i = 0; i < nbr2; i++) {
                let random = Math.floor(Math.random() * exo2.length)
                if (workout.includes(exo2[random])) {
                    i--
                } else {
                    workout.push(exo2[random])
                }
            }
        }


        setWorkout(workout)
        console.log('workout', workout)
    }

    return (
        <div>
            <div className='bg-gray-200 rounded-md p-3 m-3'>
                <h1 className='text-2xl text-center mb-4'>Ma séance personnalisée</h1>
                <div className='flex justify-between my-2'>
                    <FormControl className='w-8/12'>
                        <InputLabel>Groupe musculaire</InputLabel>
                        <Select
                            label="Groupe musculaire"
                            value={muscle1}
                            onChange={(e) => setMuscle1(e.target.value)}>
                            {group.map(a => {
                                return <MenuItem value={a} key={a}>{a}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className='w-3/12'>
                        <InputLabel>Nombre d'exos</InputLabel>
                        <Select
                            label="Nombre d'exos"
                            value={nbr1}
                            onChange={(e) => setNbr1(e.target.value)}>
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='flex justify-between my-2'>
                    <FormControl className='w-8/12'>
                        <InputLabel>Groupe musculaire</InputLabel>
                        <Select
                            label="Groupe musculaire"
                            value={muscle2}
                            onChange={(e) => setMuscle2(e.target.value)}>
                            {group.map(a => {
                                return <MenuItem value={a} key={a}>{a}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className='w-3/12'>
                        <InputLabel>Nombre d'exos</InputLabel>
                        <Select
                            label="Nombre d'exos"
                            value={nbr2}
                            onChange={(e) => setNbr2(e.target.value)}>
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                </div>



                <div className='text-center mt-8'>
                    <button onClick={generateWorkout}
                        className="border-2 text-xl rounded hover:bg-teal-500 hover:text-white border-teal-500 px-4 py-2"
                    >
                        Générer ma séance
                    </button>
                </div>

            </div>
            {workout?.map(x => {
                return <div className='bg-gray-200 p-4 rounded-md my-3 mx-2' key={x.name}>
                    <div className='flex'>
                        <img className='w-2/6 rounded mr-5' src={`${x.path}`} alt={x.name} />
                        <div className='w-4/6'>
                            <h2 className='text-xl'>{x.name}</h2>
                            <p>Nombre de séries : {x.set}</p>
                            <p>Nombre de rép : {x.reps}</p>
                            {x.secondary ? <p>Muscles solicités : <br />
                                <span className='space-x-2'>
                                    {x?.secondary?.map(k => {
                                        return <span className='bg-white px-1 rounded-md' key={k}>{k}</span>
                                    })}
                                </span>
                            </p> : null}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
