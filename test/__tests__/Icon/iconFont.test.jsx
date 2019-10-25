import creatIconFont from '../../../lib/Icon/iconFont'describe('iconFont',()=>{  it('config为空',()=>{    creatIconFont({config: ''})    const script = document.querySelector(`script[src=xxxxx]`)    expect(script).toBe(null)  })  it('接收一个config',()=>{      const url = 'xxx'      creatIconFont({config: url})      const script = document.querySelector(`script[src=${url}]`)      expect(script.getAttribute('src')).toBe(url)  })  it('重复设置config,结果只会是设置的第一个',()=>{    creatIconFont({config: 'xxxxx'})    creatIconFont({config: 'xxx'})    const script = document.querySelector(`script[src=xxxxx]`)    expect(script.getAttribute('src')).toBe('xxxxx')  })})