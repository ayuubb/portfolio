import React from 'react';
import { works } from '../Data.jsx';

const Portfolio = () => {
    return (
        <section className={'pt-16 pb-8 lg:pt-24'}>
            <div className={'text-center mb-8 lg:mb-14'}>
                <span className={'text-sm mb-2'}>My Work</span>
                <h2 className={'text-xl text-gray-400'}>Best Projects</h2>
            </div>
            <div className={'grid grid-cols-2 gap-4 lg:grid-cols-3 px-10 lg:px-48'}>
                {works.map((work, index) => {
                    return (
                        <div className={'mx-auto p-3'} key={index}>
                            <img className='rounded-md' src={work.img} alt='' />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
