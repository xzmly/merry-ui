import * as React from 'react';
import classes from '../../helpers/classes';
import Aside,{ AsideProps }from "./aside"
import './layout.styl';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

interface ChildrenProps extends LayoutProps{
  typeName: 'header' | 'main' | 'footer'
  initClassName: string
}

export interface LayoutComponent<P> extends React.FC<P> {
  Header: React.ComponentClass<LayoutProps>
  Content: React.ComponentClass<LayoutProps>
  Footer: React.ComponentClass<LayoutProps>
  Aside: React.FC<AsideProps>
}


const Layout: LayoutComponent<LayoutProps> =
        props => {

  const { className,children,style } = props;

  const hasAside: string =
      children &&
      !(children instanceof Array) &&
      (children as any).type &&
      (children as any).type.name === 'Aside'
      ||
      children instanceof Array &&
      children.some((v:any) => v.type && v.type.name === 'Aside')
      ? "layout-has-aside" : '';


  return (
      <section style={style} className={classes(className,'layout',hasAside)}>
        {children}
      </section>
  )
};


const createComponent = (ExpectComponent: any,{typeName,initClassName}: ChildrenProps) =>
    class Component extends React.Component<ChildrenProps,any>{
      render(){
        const { className,children,...restProps } = this.props;
        return(
            <ExpectComponent typeName={typeName}
                             className={classes(className,`layout-${initClassName}`)}
                             children={children}
                             {...restProps}/>
        )
      }
    };

const createElement = (props: ChildrenProps) => {
  const { typeName,children,...restProps } = props;
  return React.createElement(typeName,{ ...restProps },children)
};

Layout.Header = createComponent(createElement,{
  typeName: 'header',
  initClassName: 'header'
});

Layout.Content = createComponent(createElement,{
  typeName: 'main',
  initClassName: 'content'
});

Layout.Footer = createComponent(createElement,{
  typeName: 'footer',
  initClassName: 'footer'
});

Layout.Aside = Aside;

export default Layout
