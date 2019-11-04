import * as React from "react"

export type RestDataType = {
  item: object
}

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (keys: Array<string>,restData?: RestDataType) => void
  defaultOpenNames?: Array<string>

  onSelect?: (names: Array<string>,restData?: RestDataType) => void
  defaultSelectedNames?: Array<string>
  selectedNames?: Array<string>
}

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (names: Array<string>,restData: RestDataType) => null,
  defaultOpenNames: [],
  onSelect: (names: Array<string>,restData?: RestDataType) => null,
  defaultSelectedNames: [],
  selectedNames: []
});

export default MenuContext