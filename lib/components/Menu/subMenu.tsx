import * as React from 'react';
import classes from '../../helpers/classes';

interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {

}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const { className,children } = props;

      return (
          <div className={classes(className,'sub-menu')}>
            {children}
          </div>
      )
    };

export default SubMenu