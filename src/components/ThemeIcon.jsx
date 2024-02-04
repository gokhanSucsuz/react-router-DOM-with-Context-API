/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { darkThemeIcon, lightThemeIcon } from './icons'
import { ThemeContext } from '../context/ThemeContext'


export default function ThemeIcon(props) {
  const {themeName, handleTheme} = useContext(ThemeContext)
  
  return (
    <>
      {themeName === 'light' ? (
        <button className="btn btn-sm" onClick={handleTheme}>
          {darkThemeIcon}
          <span className="px-2">Dark</span>
        </button>
      ) : (
        <button className="btn btn-sm" onClick={handleTheme}>
          {lightThemeIcon}
          <span className="px-2">Light</span>
        </button>
      )}
    </>
  )
}
