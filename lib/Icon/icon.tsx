import * as React from 'react';
import classes from '../helpers/classes';
import './icon.styl';
import '../helpers/importIcons';
import creatIconFont from './iconFont';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

interface IconComponent<P> extends React.FC<P> {
    creatIconFont: typeof creatIconFont
}

const Icon: IconComponent<IconProps> =
    ({className, name, ...restProps}) => {
        return (
            <svg className={`${classes(className, 'icon')}`}
                 {...restProps} >
                <use xlinkHref={`#${name}`}/>
            </svg>
        );
    };

Icon.creatIconFont = creatIconFont;

export default Icon;
