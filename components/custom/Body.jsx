'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
const features = [
    {
        icon: '🧠',
        title: 'AI-Powered',
        desc: 'Leverages advanced AI to generate professional emails instantly.'
    },
    {
        icon: '🎨',
        title: 'Customizable',
        desc: 'Easily edit and style your emails to match your brand.'
    },
    {
        icon: '⚡',
        title: 'Fast & Efficient',
        desc: 'Save time with quick email creation and export options.'
    }
];

const Body = () => {
    const fullText = 'Create beautiful emails with AI';
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, current + 1));
            current++;
            if (current === fullText.length) clearInterval(interval);
        }, 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-br from-violet-400 via-white to-violet-200 px-10 md:px-28 lg:px-44 flex flex-col items-center py-12 relative overflow-hidden'>
            {/* Animated Background Layer */}
            <div style={{position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden'}}>
                {/* Animated SVG Blob */}
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" style={{position: 'absolute', top: '-120px', left: '-120px', opacity: 0.25, animation: 'blobMove 9s ease-in-out infinite alternate'}}>
                  <defs>
                    <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#blobGradient)" d="M421.5,320Q410,390,340,410Q270,430,210,390Q150,350,170,280Q190,210,250,170Q310,130,370,170Q430,210,421.5,320Z"/>
                </svg>
                {/* Floating Circles */}
                <span style={{position: 'absolute', top: '10%', left: '80%', width: 80, height: 80, background: 'rgba(139,92,246,0.18)', borderRadius: '50%', filter: 'blur(2px)', animation: 'float1 6s ease-in-out infinite alternate'}} />
                <span style={{position: 'absolute', top: '70%', left: '10%', width: 60, height: 60, background: 'rgba(139,92,246,0.13)', borderRadius: '50%', filter: 'blur(1.5px)', animation: 'float2 7s ease-in-out infinite alternate'}} />
                <span style={{position: 'absolute', top: '60%', left: '70%', width: 100, height: 100, background: 'rgba(139,92,246,0.10)', borderRadius: '50%', filter: 'blur(3px)', animation: 'float3 8s ease-in-out infinite alternate'}} />
                {/* Keyframes for animation */}
                <style>{`
                  @keyframes blobMove {
                    0% { transform: scale(1) translateY(0px) translateX(0px) rotate(0deg); }
                    100% { transform: scale(1.1) translateY(40px) translateX(30px) rotate(8deg); }
                  }
                  @keyframes float1 {
                    0% { transform: translateY(0) scale(1); }
                    100% { transform: translateY(-40px) scale(1.08); }
                  }
                  @keyframes float2 {
                    0% { transform: translateY(0) scale(1); }
                    100% { transform: translateY(30px) scale(0.95); }
                  }
                  @keyframes float3 {
                    0% { transform: translateY(0) scale(1); }
                    100% { transform: translateY(-30px) scale(1.12); }
                  }
                `}</style>
            </div>
            {/* Main Content */}
            <h1 className='text-6xl font-bold text-center'>Ai Powered <span className='text-violet-400 font-bold'>Email Builder</span></h1>
            <p className='text-2xl mt-2 text-violet-700 text-center'>Transform your ideas into professional emails in seconds</p>
            <p className='text-3xl font-bold flex justify-center font-mono mt-4'>{displayedText}<span className='animate-pulse'>|</span></p>
            <p className='text-lg font-medium text-center mt-4 max-w-2xl'>
                An intelligent email builder that crafts professional emails in seconds using AI — just enter your prompt, and let the model do the rest.<br />
                Build better emails, faster. This AI-powered tool turns natural language into structured, styled email templates instantly.
            </p>
            <div className='flex gap-6 mt-6'>
                <Link href="/landing">
                <Button size="lg" className="text-lg px-8 py-4 shadow-lg">Get Started</Button>
                </Link>
                
                <Button variant={'outline'} size="lg" className="text-lg px-8 py-4">Try Demo</Button>
            </div>
            {/* Feature Highlights */}
            <div className='flex flex-wrap justify-center gap-8 mt-12 '>
                {features.map((feature, idx) => (
                    <div key={idx} className='bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64 hover:scale-105 transition-transform duration-300 hover:shadow-lg'>
                        <span className='text-4xl mb-2'>{feature.icon}</span>
                        <h3 className='font-bold text-xl mb-1'>{feature.title}</h3>
                        <p className='text-center text-gray-600'>{feature.desc}</p>
                    </div>
                ))}
            </div>
            {/*  Call to Action Section */}
            <div className='mt-12 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Ready to create stunning emails?</h2>
                <p className='text-lg mb-6'>Join thousands of users who trust our AI Email Builder.</p>
                <Button size="lg" className="text-lg px-8 py-4 shadow-lg">Start Building Now</Button>
            </div>
            {/* Overview Images Section */}
            <div className='flex flex-wrap justify-center gap-6 mt-10 '>
                <img src='/overview.png' alt='Template Editor Overview 1' className='rounded-lg shadow-md w-80 h-48 object-cover hover:scale-105 transition-transform duration-300 hover:shadow-lg' />
                <img src='/overview2.png' alt='Template Editor Overview 2' className='rounded-lg shadow-md w-80 h-48 object-cover hover:scale-105 transition-transform duration-300 hover:shadow-lg' />
                <img src='/overview3.png' alt='Template Editor Overview 3' className='rounded-lg shadow-md w-80 h-48 object-cover hover:scale-105 transition-transform duration-300 hover:shadow-lg' />
            </div>
        </div>
    )
}
export default Body