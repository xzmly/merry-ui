import * as React from "react"

export interface ContextType {
  selectedName?: string | undefined
}

export type RestDataType = {
  item: object
}

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (keys: Array<string>,restData?: RestDataType) => void
  defaultOpenNames?: Array<string>
  onSelect?: (name: string,restData?: RestDataType) => void
}

const MenuContext = React.createContext<ContextType & MenuContextProps>({
  openNames: [],
  onSubMenuChange: (names: Array<string>,restData: RestDataType) => null,
  defaultOpenNames: [],
  onSelect: (name: string) => null
});

export default MenuContext