import React, { useContext } from 'react'

export default function NtkUseContext2() {
        const theme = useContext(ThemeContext);
  return (
    <div className={theme + ' m-3 '}>
      <h2>NtkUseContext2</h2>
      <p>
        <b>2210900033</b>
        <b>Nguyễn Trực Kiên</b>
        <i> K22CNT4</i>
      </p>
    </div>
  )
}
