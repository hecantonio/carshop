import React from 'react'
import { useUiContext } from '../context/UiContext';
import { ButtonPrimary } from './Buttons';

export const Header = () => {

  const { ui, dispatch } = useUiContext();

  return (
    <header>
      <h1 className="text-center">Taller Automotriz "El Fullstack"</h1>
      <ButtonPrimary 
        title={` Modo oscuro: ${ui.darkMode}`}
        onSubmit={() => dispatch({ type: 'setDarkMode', payload: !ui.darkMode})}
      />
    </header>
  )
}
