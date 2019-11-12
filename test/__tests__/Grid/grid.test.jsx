import renderer from 'react-test-renderer'
import Row from '../../../lib/components/Grid/Row'
import React from 'react'
import {mount} from "enzyme/build/index";

const { Col } = Row;

describe('Grid',()=>{
  it('render row and col',()=>{
    const json = renderer.create(<Row>
      <Col>123</Col>
    </Row>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('spacing',()=>{
    const c = mount(
        <Row spacing={[8,8]}>
          <Col>123</Col>
        </Row>
    );
    expect(c.find('.merry-col-spacing-box').exists()).toBe(true)
  });
  it('Align Justify',()=>{
    const c = mount(
        <Row align={'center'} justify={'end'}>
          <Col style={{background: 'red'}}>123</Col>
        </Row>
    );
    expect(c.props().align).toBe('center');
    expect(c.props().justify).toBe('end');
    expect(c.find('.merry-row').getElement().props.style.alignItems).toBe('center')
    expect(c.find('.merry-row').getElement().props.style.justifyContent).toBe('flex-end')
  });
  it('col spacing pull push background',()=>{
    const c = mount(
        <Row>
          <Col style={{background: 'red'}} spacing={[8,8]} pull={5} push={10}>123</Col>
        </Row>
    );
    expect(c.find('.merry-col-spacing-box').exists()).toBe(true);
    expect(c.find('.merry-col').getElement().props.style.padding).toBe('8px 8px');
    expect(c.find('.merry-col').getElement().props.style.marginLeft).toBe('5px');
    expect(c.find('.merry-col').getElement().props.style.marginRight).toBe('10px');
  });
});