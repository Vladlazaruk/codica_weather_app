import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer as weatherSlice } from '../redux/weather/weatherSlice'
import { IChildren } from './type'

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({ reducer: { weatherData: weatherSlice }, preloadedState }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: IChildren) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
