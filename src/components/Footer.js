import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-cyan-500 text-white text-sm p-5 mt-14 text-center'>
            <p className='text-sm'>Site web créé et développé par BRAZILLIER Johan</p>
            <div className='flex justify-center space-x-8 mt-1'>
                <a href="https://github.com/brazillierjo" rel='noreferrer' target="_blank" className='flex'>GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/johan-brazillier-9b917a174/" rel='noreferrer' target="_blank" className='flex'>LinkedIn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://brazillierjohan.fr/en" rel='noreferrer' target="_blank" className='flex'>Portfolio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </footer>
    )
}
