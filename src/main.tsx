import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CountryContext } from './context/context.tsx'
import { Provider } from 'react-redux'
import { store } from './reduxToolkit/store.tsx'



createRoot(document.getElementById('root')!).render(
    <CountryContext>
        <Provider store={store}>
            <App />
        </Provider>
    </CountryContext>
)
