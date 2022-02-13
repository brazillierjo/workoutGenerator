import React from 'react'

export default function FilteredExos(props) {
    const [selectedMuscle, setSelectedMuscle] = React.useState('Abdominaux');
    const [group, setGroup] = React.useState()

    React.useEffect(() => {
        const groupFilter = props.exercices.map(exo => {
            return exo.id
        })
        let x = [groupFilter]
        x = x.flat().filter((v, i, a) => a.indexOf(v) === i)
        x.sort()
        setGroup(x)
    }, [props.exercices])

    return <div>
        <div className='flex flex-wrap justify-around bg-gray-200 py-1 mx-8 rounded-md outline-none'>
            {group?.map(group => {
                return <button className={selectedMuscle === group ? 'bg-teal-500 shadow px-6 py-2.5 text-sm leading-5 font-medium text-white rounded-md outline-none focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60' : 'px-6 py-2 rounded-md'} key={group} onClick={() => setSelectedMuscle(group)}>{group}</button>
            })}
        </div>
        <br />
        {
            props.exercices.map(exo => {
                if (exo.id === selectedMuscle) {
                    return <div className='bg-gray-200 p-2 text-sm rounded-md my-3 mx-2' key={exo.name}>
                        <div className='flex'>
                            <img className='w-2/6 rounded mr-5' src={`${exo.path}`} alt={exo.name} />
                            <div className='w-4/6'>
                                <h2 className='text-lg w-11/12'>{exo.name}</h2>
                                <p>Nombre de séries : {exo.set}</p>
                                <p>Nombre de rép : {exo.reps}</p>
                                {exo.secondary ? <p>Muscles solicités : <br />
                                    <span className='space-x-2 flex flex-wrap'>
                                        {exo?.secondary?.map(k => {
                                            return <span className='bg-white px-1 mt-1 rounded-md' key={k}>{k}</span>
                                        })}
                                    </span>
                                </p> : null}
                            </div>
                        </div>
                    </div>
                } else {
                    return null
                }
            })
        }
    </div >
}