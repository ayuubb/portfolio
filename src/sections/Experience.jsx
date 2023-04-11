import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import { experiences, skillIcons } from '../Data.jsx';

const Experience = () => {
    const [active, setActive] = useState(1);
    return (
        <section className={'pt-16 pb-8 lg:pt-24'}>
            <div className={'text-center mb-8 lg:mb-14'}>
                <span className={'text-sm mb-2'}>My abilities</span>
                <h2 className={'text-xl text-gray-400'}>Skills And Experience</h2>
            </div>
            <div className={'flex gap-3 justify-center pb-8 lg:pb-16'}>
                <Button
                    onClick={() => setActive(1)}
                    className={active === 0 ? 'border-solid border-2 border-blue-900 bg-transparent' : ''}
                    text={'Skills'}
                />
                <Button
                    onClick={() => setActive(0)}
                    className={active === 1 ? 'border-solid border-2 border-blue-900 bg-transparent' : ''}
                    text={'Experiences'}
                />
            </div>
            {active === 1 ? (
                <div className={'grid grid-cols-2 gap-4 lg:grid-cols-4 px-10 lg:px-48 h-60 lg:h-48'}>
                    {skillIcons.map((icon, index) => {
                        return (
                            <div className={'mx-auto px-3'} key={index}>
                                {icon}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className={'grid grid-cols-1 gap-4 px-6 lg:px-48 h-60 lg:h-48'}>
                    {experiences.map((experience, index) => {
                        return (
                            <div className={'grid grid-cols-2 gap-2 justify-between'} key={index}>
                                <h4 className={'text-2xl lg:text-3xl text-center'}>{experience.year}</h4>
                                <div className='flex flex-col justify-center'>
                                    <span className={'text-left'}>{experience.position}</span>
                                    <a className={'text-sm text-gray-400'} href='#'>
                                        {experience.company}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Experience;
