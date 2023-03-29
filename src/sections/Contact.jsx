import { IconArrowNarrowRight, IconBrandWhatsapp, IconMailForward } from '@tabler/icons-react';
import React from 'react';

const Contact = () => {
    return (
        <section className='pt-16 pb-8 lg:pt-24'>
            <div className={'text-center mb-8 lg:mb-14'}>
                <span className={'text-sm mb-2'}>Get in touch</span>
                <h2 className={'text-xl text-gray-400'}>Contact Me</h2>
            </div>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <h3 className='mb-6 text-center'>Talk to me</h3>
                    <div className='grid grid-cols-1 gap-4'>
                        {' '}
                        <div className={'p-4 bg-slate-800 text-center rounded-lg'}>
                            <IconMailForward className={'mx-auto mb-2'} />
                            <h4>Email</h4>
                            <p className='mb-3'>ayubbkj2@gmail.com</p>
                            <a className='flex justify-center text-sm' href='mailto:ayubbkj2@gmail.com' target='_blank'>
                                Write me <IconArrowNarrowRight className='mx-2' />
                            </a>
                        </div>
                        <div className={'p-4 bg-slate-800 text-center rounded-lg'}>
                            <IconBrandWhatsapp className={'mx-auto mb-2'} />
                            <h4>Whatsapp</h4>
                            <p className='mb-3'>+62-8121-6444-924</p>
                            <a
                                className='flex justify-center items-center text-sm'
                                href='https://api.whatsapp.com/send/?phone=%2B6281216444924&text&type=phone_number&app_absent=0'
                                target='_blank'
                            >
                                Write me <IconArrowNarrowRight className='mx-2' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3 className='mb-6 text-center'>Write me your project</h3>
                </div>
            </div>
        </section>
    );
};

export default Contact;
