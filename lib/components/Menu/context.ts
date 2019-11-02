import * as React from "react"
import {MenuContextProps} from "./menu"

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (names: Array<string>) => null,
  defaultOpenNames: [],
  onClick: (name: string) => null
});

export default MenuContext