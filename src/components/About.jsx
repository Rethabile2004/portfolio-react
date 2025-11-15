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
                <p className='text-slate-600 mt-8 leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nam distinctio eius laborum assumenda earum? Veritatis provident reprehenderit repellendus, ducimus rerum architecto maxime sapiente consequuntur, eligendi, nobis esse iure dolore.
                </p>
                    
                </article>
            </div>
        </div>
    )
}

export default About