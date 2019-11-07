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
  openKeys?: Array<string>
  onSubMenuChange?: (params: OnChangeType) => void
  defaultOpenKeys?: Array<string>

  onSelect?: (params: OnChangeType) => void
  defaultSelectedKeys?: Array<string>
  selectedKeys?: Array<string>
}

const MenuContext = React.createContext<MenuContextProps>({
  openKeys: [],
  onSubMenuChange: (params: OnChangeType) => null,
  defaultOpenKeys: [],
  onSelect: (params: OnChangeType) => null,
  defaultSelectedKeys: [],
  selectedKeys: []
});

export default MenuContext