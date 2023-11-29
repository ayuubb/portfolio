import React from 'react';
import Card from '../components/Card.jsx';
import hero from '../assets/images/ayub.png';
import Button from '../components/Button.jsx';

const About = () => {
    return (
        <section id='#about' className={'pb-8 h-100vh'}>
            <div className={'text-center mb-8 lg:mb-14'}>
                <span className={'text-sm mb-2'}>My Intro</span>
                <h2 className={'text-xl text-gray-400'}>About Me</h2>
            </div>
            <div className={'grid lg:grid-cols-2 grid-cols-1 justify-center gap-4'}>
                <div className={'w-80 mx-auto'}>
                    <img alt='img-hero' src={hero} />
                </div>
                <div className={'flex-col justify-center lg:justify-start'}>
                    <div className='flex justify-center gap-x-3'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className={'my-8 text-center lg:text-left'}>
                        Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with
                        the projects carried out.
                    </div>
                    <Button className={'lg:ml-0 mx-auto'} text={'Contact Me'} />
                </div>
            </div>
        </section>
    );
};

export default About;
