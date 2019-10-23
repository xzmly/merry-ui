import * as React from 'react';
import classes from '../helpers/classes';
import './button.styl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode | string | React.ReactElement
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark'
    size?: 'default' | 'small' | 'big'
    outline?: boolean
    
}

const Button: React.FC<ButtonProps> =
    props => {

        const {className, children, color, size, outline, ...restProps} = props;

        const colorClass: string = 'btn-' + (color || 'primary');
        const sizeClass: string = size === 'default' || !size ?  '' : 'btn-' + (size || '');

        return (
            <button data-merry-ui-outline={outline}
                    className={
                    classes(className, 'btn', colorClass, sizeClass)}
                    {...restProps}>
                <span>{children}</span>
            </button>
        );
    };

export default Button;
