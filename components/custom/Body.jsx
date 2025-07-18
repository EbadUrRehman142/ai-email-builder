'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'

const Body = () => {
    const fullText = 'Create beautiful emails with AI';
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, current + 1));
            current++;
            if (current === fullText.length) clearInterval(interval);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-10 md:px-28 lg:px-44 xl flex flex-col items-center mt-9'>
            <h1 className='text-6xl font-bold'>Ai Powered <span className='text-violet-300 font-bold'>Email Builder</span></h1>
            <p className='text-3xl fontx-bold flex justify-center font-mono'>{displayedText}<span className='animate-pulse'>|</span></p>
            <p className='text-bold'>An intelligent email builder that crafts professional emails in seconds using AI — just enter your prompt, and let the model do the rest.Build better emails, faster. This AI-powered tool turns natural language into structured, styled email templates instantly.</p>
            <div className='flex gap-4 mt-2'>
                <Button>Get Started</Button>
                <Button variant={'outline'}>Try Demo</Button>
            </div>
            {/* Overview Images Section */}
            <div className='flex flex-wrap justify-center gap-6 mt-10'>
                <img src='/editor1.png' alt='Template Editor Overview 1' className='rounded-lg shadow-md w-100 h-70 object-cover' />
            </div>
        </div>
    )
}

export default Body