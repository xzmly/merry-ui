import * as React from "react"

export interface MenuContextProps {
  openNames?: Array<string | number>
  onSubMenuChange?: (keys: Array<string | number>) => void
  defaultOpenNames?: Array<string | number>
}

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (keys: Array<string | number>) => null,
  defaultOpenNames: []
});

export default MenuContext