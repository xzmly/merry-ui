import * as React from 'react';
import classes from '../../helpers/classes';
import Header,{ HeaderProps }from "./Header/header"
import Content,{ ContentProps }from "./Content/content"
import Footer,{ FooterProps } from "./Footer/footer"
import Aside,{ AsideProps }from "./Aside/aside"
import './layout.styl';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
}

export interface LayoutComponent<P> extends React.FC<P> {
  Header: React.FC<HeaderProps>
  Content: React.FC<ContentProps>
  Footer: React.FC<FooterProps>
  Aside: React.FC<AsideProps>
}

const Layout: LayoutComponent<LayoutProps> =
        props => {

  const { className,children } = props;

  const hasAside: string =
      children instanceof Array &&
      children.some((v:any) => v.type && v.type.name === 'Aside')
      ? "layout-has-aside" : '';

  return (
      <section className={classes(className,'layout',hasAside)}>
        {children}
      </section>
  )
};

Layout.Content = Content;
Layout.Aside = Aside;
Layout.Header = Header;
Layout.Footer = Footer;


export default Layout
