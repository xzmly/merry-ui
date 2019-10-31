import * as React from "react"

interface contextProps {
  openKeys: Array<string | number>
  onSubMenuChange: (keys: Array<string | number>) => void
}

const Context = React.createContext<contextProps>({
  openKeys: [],
  onSubMenuChange: (keys: Array<string | number>) => null
});

export default Context