import * as React from 'react';
import classes from '../../helpers/classes';
import './icon.styl';
import '../../helpers/importIcons';
import createIconFont from './iconFont';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

interface IconComponent<P> extends React.FC<P> {
    createIconFont: typeof createIconFont
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

Icon.createIconFont = createIconFont;

export default Icon;
