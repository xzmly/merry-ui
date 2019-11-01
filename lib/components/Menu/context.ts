import * as React from "react"

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (keys: Array<string>) => void
  defaultOpenNames?: Array<string>
}

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (keys: Array<string>) => null,
  defaultOpenNames: []
});

export default MenuContext