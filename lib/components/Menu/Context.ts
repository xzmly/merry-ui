import * as React from "react"

export type RestDataType = {
  item: object
}

export type OnChangeType = {
  keys: Array<string>
  event:React.MouseEvent
  restData?: RestDataType
};

export interface MenuContextProps {
  openKeys?: Array<string>
  onSubMenuChange?: (params: OnChangeType) => void
  defaultOpenKeys?: Array<string>

  onSelect?: (params: OnChangeType) => void
  defaultSelectedKeys?: Array<string>
  selectedKeys?: Array<string>
}

const MenuContext = React.createContext<MenuContextProps>({});

export default MenuContext