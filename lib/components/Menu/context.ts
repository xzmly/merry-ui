import * as React from "react"
import {MenuContextProps} from "./menu"

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (names: Array<string>) => null,
  defaultOpenNames: []
});

export default MenuContext