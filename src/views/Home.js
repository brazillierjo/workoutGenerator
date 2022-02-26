import React from 'react'
import exercices from '../data/workoutexercices.json'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

export default function Home() {
    const [group, setGroup] = React.useState([])
    const [workout, setWorkout] = React.useState([])
    const [showGenerator, setShowGenerator] = React.useState(true)

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
        let localDatas = localStorage.getItem('workout')
        let parsedLocalDatas = JSON.parse(localDatas)
        setWorkout(parsedLocalDatas)
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

        if (muscle3 !== '') {
            for (let i = 0; i < nbr3; i++) {
                let random = Math.floor(Math.random() * exo3.length)
                if (workout.includes(exo3[random])) {
                    i--
                } else {
                    workout.push(exo3[random])
                }
            }
        }

        if (muscle4 !== '') {
            for (let i = 0; i < nbr4; i++) {
                let random = Math.floor(Math.random() * exo4.length)
                if (workout.includes(exo4[random])) {
                    i--
                } else {
                    workout.push(exo4[random])
                }
            }
        }

        if (muscle5 !== '') {
            for (let i = 0; i < nbr5; i++) {
                let random = Math.floor(Math.random() * exo5.length)
                if (workout.includes(exo5[random])) {
                    i--
                } else {
                    workout.push(exo5[random])
                }
            }
        }

        if (muscle6 !== '') {
            for (let i = 0; i < nbr6; i++) {
                let random = Math.floor(Math.random() * exo6.length)
                if (workout.includes(exo6[random])) {
                    i--
                } else {
                    workout.push(exo6[random])
                }
            }
        }

        if (muscle7 !== '') {
            for (let i = 0; i < nbr7; i++) {
                let random = Math.floor(Math.random() * exo7.length)
                if (workout.includes(exo7[random])) {
                    i--
                } else {
                    workout.push(exo7[random])
                }
            }
        }

        if (muscle8 !== '') {
            for (let i = 0; i < nbr8; i++) {
                let random = Math.floor(Math.random() * exo8.length)
                if (workout.includes(exo8[random])) {
                    i--
                } else {
                    workout.push(exo8[random])
                }
            }
        }

        if (muscle9 !== '') {
            for (let i = 0; i < nbr9; i++) {
                let random = Math.floor(Math.random() * exo9.length)
                if (workout.includes(exo9[random])) {
                    i--
                } else {
                    workout.push(exo9[random])
                }
            }
        }
        setWorkout(workout)
        localStorage.setItem('workout', JSON.stringify(workout))
        if (workout.length > 0) setShowGenerator(false)
    }

    function handleChecked(e) {
        let upperDiv = e.target.parentNode
        if (e.target.checked) {
            upperDiv.classList.add('border-black')
        }
        if (!e.target.checked) {
            upperDiv.classList.remove('border-black')
        }

    }

    return (
        <div className='h-screen'>
            {showGenerator ?
                <div className='bg-gray-200 rounded-md p-3'>
                    <h1 className='text-xl text-center mb-4'>Quel groupe musculaire doit-on travailler ?</h1>

                    <div id='displayedDiv'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
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
                            <FormControl className='w-4/12'>
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
                        <div id='divPlus1' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div2').classList.remove('hidden')
                                    document.getElementById('divPlus1').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-2 ml-2'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div2' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
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
                            <FormControl className='w-4/12'>
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
                        <div id='divPlus2' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div3').classList.remove('hidden')
                                    document.getElementById('divPlus2').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div3' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle3}
                                    onChange={(e) => setMuscle3(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr3}
                                    onChange={(e) => setNbr3(e.target.value)}>
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
                        <div id='divPlus3' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div4').classList.remove('hidden')
                                    document.getElementById('divPlus3').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div4' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle4}
                                    onChange={(e) => setMuscle4(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr4}
                                    onChange={(e) => setNbr4(e.target.value)}>
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
                        <div id='divPlus4' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div5').classList.remove('hidden')
                                    document.getElementById('divPlus4').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div5' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle5}
                                    onChange={(e) => setMuscle5(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr5}
                                    onChange={(e) => setNbr5(e.target.value)}>
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
                        <div id='divPlus5' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div6').classList.remove('hidden')
                                    document.getElementById('divPlus5').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div6' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle6}
                                    onChange={(e) => setMuscle6(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr6}
                                    onChange={(e) => setNbr6(e.target.value)}>
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
                        <div id='divPlus6' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div7').classList.remove('hidden')
                                    document.getElementById('divPlus6').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div7' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle7}
                                    onChange={(e) => setMuscle7(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr7}
                                    onChange={(e) => setNbr7(e.target.value)}>
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
                        <div id='divPlus7' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div8').classList.remove('hidden')
                                    document.getElementById('divPlus7').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div8' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle8}
                                    onChange={(e) => setMuscle8(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr8}
                                    onChange={(e) => setNbr8(e.target.value)}>
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
                        <div id='divPlus8' className='text-center my-2'>
                            <Divider>Ajouter un groupe musculaire
                                <button onClick={() => {
                                    document.getElementById('div9').classList.remove('hidden')
                                    document.getElementById('divPlus8').classList.add('hidden')
                                }} className='rounded-full bg-black text-white px-1 ml-3'>+</button>
                            </Divider>
                        </div>
                    </div>

                    <div id='div9' className='hidden'>
                        <div className='flex justify-between my-2'>
                            <FormControl className='w-7/12'>
                                <InputLabel>Groupe musculaire</InputLabel>
                                <Select
                                    label="Groupe musculaire"
                                    value={muscle9}
                                    onChange={(e) => setMuscle9(e.target.value)}>
                                    {group.map(a => {
                                        return <MenuItem value={a} key={a}>{a}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl className='w-4/12'>
                                <InputLabel>Nombre d'exos</InputLabel>
                                <Select
                                    label="Nombre d'exos"
                                    value={nbr9}
                                    onChange={(e) => setNbr9(e.target.value)}>
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
                    </div>

                    <div className='text-center mt-4'>
                        <button onClick={generateWorkout}
                            className="rounded-full bg-black hover:border-teal-500 px-10 py-2"
                        >
                            <AiFillCaretRight size={15} color='white' />
                        </button>
                    </div>
                </div> :
                <div className='ml-2 mt-2 mb-2'>
                    <button className='px-1 py-1 rounded-full bg-gray-200' onClick={() => setShowGenerator(true)}><AiFillCaretLeft className='mx-auto' color='#06B6D4' size={15} /></button>
                </div>
            }


            {workout?.map(x => {
                return <div className='border-2 relative bg-gray-200 p-2 rounded-md my-3 text-sm mx-2' key={x.name}>
                    <input onClick={handleChecked} className='absolute w-5 h-5 right-2 top-2 text-teal-500' type="checkbox" />
                    <div className='flex'>
                        <img className='w-2/6 rounded mr-5' src={`${x.path}`} alt={x.name} />
                        <div className='w-4/6'>
                            <h2 className='text-lg mb-3 w-11/12'>{x.name}</h2>
                            <p>Séries : {x.set}</p>
                            <p>Répétitions : {x.reps}</p>
                            {x.secondary ? <p>Autre muscle solicité : <br />
                                <span className='space-x-2 flex flex-wrap'>
                                    {x?.secondary?.map(k => {
                                        return <span className='bg-white px-1 mt-1 rounded-md' key={k}>{k}</span>
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
