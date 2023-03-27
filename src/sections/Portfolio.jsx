import React from 'react';
import { works } from '../Data.jsx';
import { IconArrowNarrowRight } from '@tabler/icons-react';

const Portfolio = () => {
    return (
        <section className={'pt-16 pb-8 lg:pt-24'}>
            <div className={'text-center mb-8 lg:mb-14'}>
                <span className={'text-sm mb-2'}>My Work</span>
                <h2 className={'text-xl text-gray-400'}>Best Projects</h2>
            </div>
            <div className={'grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2'}>
                {works.map((work, index) => {
                    return (
                        <a href={work.href} target='_blank'>
                            <div className={'overflow-hidden cursor-pointer rounded-xl relative group'} key={index}>
                                <div className='rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-gray-900 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-50 text-white flex items-end'>
                                    <div>
                                        <div className='transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out'>
                                            <div className='font-bold'>{work.name}</div>

                                            <div className='opacity-60 text-sm'>
                                                <a href='#' className='flex items-center'>
                                                    Visit <IconArrowNarrowRight className='gap-x-2' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className='object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out'
                                    src={work.img}
                                    alt={work.name}
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
