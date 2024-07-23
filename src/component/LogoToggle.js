import React from 'react'

const LogoToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <img
        className="block h-8 w-auto"
        src={theme === 'dark' ? "Assets/img/logo-dark.svg" : "Assets/img/logo-light.svg"}
        alt="Tribeto logo"
      />
    </div>
    </div>
  )
}

export default LogoToggle
