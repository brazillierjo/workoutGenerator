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
    const [nbr1, setNbr1] = React.useState(1)

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
        let exos = exercices.filter(exo => exo.id === muscle1)
        for (let i = 0; i < nbr1; i++) {
            let random = Math.floor(Math.random() * exos.length)
            if (workout.includes(exos[random])) {
                i--
            } else {
                workout.push(exos[random])
            }
        }
        setWorkout(workout)
        console.log('workout', workout)
    }

    return (
        <div>
            <div className='bg-gray-200 rounded-md p-3 m-3'>
                <h1 className='text-2xl text-center mb-4'>Ma séance personnalisée</h1>
                <div className='flex justify-between'>
                    <FormControl className='w-5/12'>
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
                    <FormControl className='w-5/12'>
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
