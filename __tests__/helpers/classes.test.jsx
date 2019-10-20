import classes from "../../lib/helpers/classes"


describe('classes',()=>{
  it('接受一个className,返回 merry-ui-${className}',()=>{
    const result = classes('className')
    expect(result).toBe('merry-ui-className')
  })
  it('接受两个className,返回空格拼接的字符串',()=>{
    const result = classes('one','two')
    expect(result).toBe('merry-ui-one merry-ui-two')
  })
  it('接受一个空格',()=>{
    const result = classes('')
    expect(result).toBe('')
  })
})