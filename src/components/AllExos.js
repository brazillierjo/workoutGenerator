import React from 'react';

export default function AllExos(props) {
    return <div>
        {props.exercices.map(exo => {
            return <div className='bg-gray-200 p-4 rounded-md my-3 mx-2' key={exo.name}>
                <div className='flex'>
                    <img className='w-2/6 rounded mr-5' src={`${exo.path}`} alt={exo.name} />
                    <div className='w-4/6'>
                        <h2 className='text-xl'>{exo.name}</h2>
                        <p>Nombre de séries : {exo.set}</p>
                        <p>Nombre de rép : {exo.reps}</p>
                        <p>Muscles solicités : <br />
                            <span className='space-x-2'>
                                {exo?.secondary?.map(k => {
                                    return <span className='bg-white px-1 rounded-md' key={k}>{k}</span>
                                })}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        })}
    </div>
}