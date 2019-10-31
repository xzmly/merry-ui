import * as React from "react"

export interface MenuContextProps {
  openNames: Array<string | number>
  onSubMenuChange: (keys: Array<string | number>) => void
}

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (keys: Array<string | number>) => null
});

export default MenuContext