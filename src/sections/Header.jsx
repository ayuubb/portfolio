import React, { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';

const Header = () => {
    const [active, setActive] = useState(0);
    return (
        <nav className={'mb-10 md:mb-16 lg:mb-16 2xl:mb-28 border-b border-slate-300/10 sticky top-0 z-40 w-full backdrop-blur'}>
            <div className='container mx-auto py-4 flex justify-between items-center'>
                <span className={'lg:text-2xl text-xl leading-none'}>Ayprojex</span>
                <ul className='flex items-center gap-8 cursor-pointer'>
                    <li>
                        <a
                            className={
                                active
                                    ? 'ease-out duration-300 p-2 font-black leading-tight from-sky-200 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent'
                                    : ''
                            }
                            onClick={() => setActive(1)}
                            href='#about'
                        >
                            About
                        </a>
                    </li>{' '}
                    <li>
                        <a
                            className={
                                active
                                    ? 'ease-out duration-300 p-2 font-black leading-tight from-sky-200 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent'
                                    : ''
                            }
                            onClick={() => setActive(1)}
                            href='#about'
                        >
                            About
                        </a>
                    </li>
                </ul>
                <ul className={'flex items-center'}>
                    <li>
                        <a className={'px-4 py-2 flex gap-1 items-center'} href='#'>
                            Resume
                            <IconDownload size={'16'} className={'text-sm'} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
