import classes from "../../../lib/helpers/classes"

describe('classes',()=>{
  it('接受propsClassName',()=>{
    const result = classes('className')
    expect(result).toBe('className')
  })
  it('接受className',()=>{
    const result = classes('','className')
    expect(result).toBe('merry-className')
  })
  it('propsClassName为空',()=>{
    const result = classes()
    expect(result).toBe('')
  })
  it('接受propsClassName 和 names',()=>{
    const result = classes('className','className')
    expect(result).toBe('merry-className className')
  })
})
