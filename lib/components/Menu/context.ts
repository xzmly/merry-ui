import * as React from "react"

export type RestDataType = {
  item: object
}

export type OnChangeType = {
  names: Array<string>
  event:React.MouseEvent
  restData?: RestDataType
};

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (params: OnChangeType) => void
  defaultOpenNames?: Array<string>

  onSelect?: (params: OnChangeType) => void
  defaultSelectedNames?: Array<string>
  selectedNames?: Array<string>
}

const MenuContext = React.createContext<MenuContextProps>({
  openNames: [],
  onSubMenuChange: (params: OnChangeType) => null,
  defaultOpenNames: [],
  onSelect: (params: OnChangeType) => null,
  defaultSelectedNames: [],
  selectedNames: []
});

export default MenuContext