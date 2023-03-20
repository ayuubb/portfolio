import React from 'react';
import Card from '../components/Card.jsx';
import hero from '../assets/images/ayub.jpg';

const About = () => {
    return (
        <div>
            <div className={'text-center'}>
                <span className={'text-sm mb-2'}>My Intro</span>
                <h2 className={'text-xl text-gray-400'}>About Me</h2>
            </div>
            <div className={'flex'}>
                <div className={'w-60 mx-auto'}>
                    <img className={'rounded-md'} src={hero} />
                </div>
                <div className='md:flex gap-3 md:flex md:items-center md:justify-center'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default About;
