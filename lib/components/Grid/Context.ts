import * as React from "react"

export interface RowContextProps {
  totalWidth: number,
  grids: number,
  spacing?: string
}

const RowContext = React.createContext<RowContextProps>({
  totalWidth: 0,
  grids: 24
});

export default RowContext