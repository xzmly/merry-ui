import * as React from 'react';
import classes from '../../helpers/classes';
import Icon from '../Icon/icon'
import './button.styl';

type IconType = {
    position?: 'left' | 'right'
    name: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode | string | React.ReactElement
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'gray'
    size?: 'default' | 'small' | 'big'
    outline?: boolean
    shape?: 'rounded' | 'circle'
    icon?: IconType
    block?: boolean
}

const Button: React.FC<ButtonProps> =
    props => {

        const {
            className, children,
            color, size,
            outline, shape,
            icon, block, ...restProps
        } = props;

        const restClassName =
            (name:string|undefined|boolean):string => name ? `btn-${name}` : '';

        const visibleLeftAndRightIcon =
            (position: string):boolean | undefined =>
                icon && shape !== 'circle' && icon.position === position

        return (
            <button className={
                        classes(className, 'btn',
                            restClassName(color || 'primary'),
                            restClassName(size === 'default' || !size ? '' : size),
                            restClassName(shape),
                            restClassName(block && 'block'),
                            restClassName(outline && 'outline')
                        )}
                    {...restProps}>
                {
                    visibleLeftAndRightIcon('left') &&
                    icon && <Icon name={icon.name} style={{marginRight: '5px'}}/>
                }
                {
                    shape !== 'circle' ?
                        <span>{children}</span> :
                        icon && <Icon name={icon.name}/>
                }
                {
                    visibleLeftAndRightIcon('right') &&
                    icon && <Icon name={icon.name} style={{marginLeft: '5px'}}/>
                }
            </button>
        );
    };

export default Button;
