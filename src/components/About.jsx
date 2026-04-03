import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                <SectionTitle title="code and cofee" />
                <p className='text-slate-600 mt-8 leading-loose'>I build modern, full-featured web applications with clean, maintainable code and a strong focus on user experience. My codebase reflects a passion for writing efficient, scalable solutions using the latest technologies. From designing intuitive interfaces with Next.js and Tailwind CSS to implementing secure authentication, database integration, and payment processing, I take pride in crafting digital products that are both functional and polished. Whether it's an e-commerce platform like Next Commerce or other full-stack projects, every line of code is written with attention to performance, security, and long-term maintainability.
                </p>
                    
                </article>
            </div>
        </div>
    )
}

export default About