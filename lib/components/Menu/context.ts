import * as React from "react"

interface contextProps {
  openNames: Array<string | number>
  onSubMenuChange: (keys: Array<string | number>) => void
}

const Context = React.createContext<contextProps>({
  openNames: [],
  onSubMenuChange: (keys: Array<string | number>) => null
});

export default Context