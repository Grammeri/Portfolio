import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment
)
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
)

reportWebVitals()
