import React from 'react';
import clsx from 'clsx';
const Button = (props) => {
    const { className = '', children, text } = props;
    return (
        <button {...props} className={clsx(className, 'flex items-center gap-x-2 bg-blue-900 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    );
};

export default Button;
