import * as React from 'react';
import classes from '../helpers/classes';
import './button.styl';

interface ButtonProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode | string | React.ReactElement
    type?: 'default' | 'warning'
}

const Button: React.FC<ButtonProps> =
    props => {

        const { className,children,type } = props
        const typeClass: string =  'btn-' + (type || 'default')

        return (
            <button className={classes(className,'btn', typeClass)}>
                <span>{children}</span>
            </button>
        );
    };

export default Button;
