import React from 'react'
import Footer from '../components/Footer'

export default function Infos() {
    return (
        <>
            <div className='m-3 min-h-screen'>
                <div className='flex rounded-full justify-between bg-white shadow-lg px-8 py-5 my-8'>
                    <p>Lundi</p>
                    <p>Pectoraux / Biceps</p>
                </div>

                <div className='flex rounded-full justify-between bg-white shadow-lg px-8 py-5 my-8'>
                    <p>Mardi</p>
                    <p>Dos / Triceps</p>
                </div>

                <div className='flex rounded-full justify-between bg-white shadow-lg px-8 py-5 my-8'>
                    <p>Jeudi</p>
                    <p className='capitalize'>épaules / Abdos</p>
                </div>

                <div className='flex rounded-full justify-between bg-white shadow-lg px-8 py-5 my-8'>
                    <p>Vendredi</p>
                    <p>Biceps / Triceps</p>
                </div>
            </div>

            <Footer />
        </>
    )
}
