import * as React from "react"
import {MenuContextProps} from "./menu"

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (keys: Array<string>) => null,
  defaultOpenNames: []
});

export default MenuContext