import * as React from "react"
import {MenuContextProps, RestDataType} from "./menu"

export interface ContextType {
  selectedName?: string | undefined
}

const MenuContext = React.createContext<ContextType & MenuContextProps>({
  openNames: [],
  onSubMenuChange: (names: Array<string>,restData: RestDataType) => null,
  defaultOpenNames: [],
  onSelect: (name: string) => null
});

export default MenuContext