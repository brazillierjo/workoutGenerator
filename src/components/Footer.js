import React from 'react'

export default function Footer() {
    return (
        <footer className='absolute bg-gray-100 bottom-0 w-full p-1 border-t-2 border-black'>
            <p className='text-center text-sm mb-4'>
                Site web créé et développé par BRAZIILLIER Johan.
            </p>
            <ul className='flex justify-center space-x-5 text-sm'>
                <li className='bg-white p-1 shadow-lg animate-bounce rounded-md'><a href="https://github.com/brazillierjo" target="_blank" rel="noreferrer">GitHub</a></li>
                <li className='bg-white p-1 shadow-lg animate-bounce rounded-md'><a href="https://www.linkedin.com/in/johan-r-brazillier-9b917a174/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li className='bg-white p-1 shadow-lg animate-bounce rounded-md'><a href="https://brazillierjohan.fr/" target="_blank" rel="noreferrer">Portfolio</a></li>
            </ul>
        </footer>
    )
}
