import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store, setupStore } from './src/app/store';

const AllTheProviders = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const customRender = (ui, options) =>{
    const AllTheProviders = ({ children }) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }    
    render(ui, { wrapper: AllTheProviders, ...options })

}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

export function renderWithProviders(
    ui,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      store= setupStore(),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }