
const prefix: string = 'merry-ui';
const classes = (...names: Array<number|string|undefined>): string =>
    names
        .filter(Boolean)
        .map(name => `${prefix}-${name}`)
        .join(' ');

export default classes