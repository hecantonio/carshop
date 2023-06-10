import React from 'react'
import { useUiContext } from '../context/UiContext';
import { ButtonIcon } from './Buttons';

export const Header = () => {

  const { ui, dispatch } = useUiContext();

  return (
    <header>
      <div className="d-flex p-2 justify-content-center">
        <h1>Taller Automotriz "Bootcamp Espol"</h1>
        <div className="d-flex justify-content-end">
        <ButtonIcon
            modeDark={ui.darkMode}
            onSubmit={() => dispatch({ type: 'setDarkMode', payload: !ui.darkMode })}
          />
        </div>        
      </div>
    </header>
  )
}
