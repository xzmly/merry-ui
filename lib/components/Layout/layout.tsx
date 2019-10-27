import * as React from 'react';
import classes from '../../helpers/classes';
import Header,{ HeaderProps }from "./header"
import Content,{ ContentProps }from "./content"
import Footer,{ FooterProps } from "./footer"
import Aside,{ AsideProps }from "./aside"
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

  const { className,children } = props

  return (
      <div className={classes(className,'layout')}>
        {children}
      </div>
  )
};

Layout.Content = Content;
Layout.Aside = Aside;
Layout.Header = Header;
Layout.Footer = Footer;


export default Layout
