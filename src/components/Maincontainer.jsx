import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import Content from './Content'

export default function Maincontainer() {
  const [themeColor, setThemeColor] = useState("#c40aca")

  const textColor = document.querySelectorAll('.textTheme')
  textColor.forEach((text) => {
    text.style.color = themeColor

  })
  
  return (
    <>
      <SideNav themeColor={themeColor} />
      <Content  setThemeColor={setThemeColor} />
     
    </>
  )
}
