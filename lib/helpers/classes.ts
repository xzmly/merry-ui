const prefix: string = 'merry';

const classes = (
    propsClassName?: string,
    ...names: Array<number | string | undefined>
): string => names
    .filter(Boolean)
    .map(name => `${prefix}-${name}`)
    .concat(propsClassName ? propsClassName.split(' ') : [])
    .join(' ');

export default classes;
