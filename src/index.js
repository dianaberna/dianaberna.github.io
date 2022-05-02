import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'

function AppWithCallbackAfterRender() {
  return <App />
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<AppWithCallbackAfterRender />)
