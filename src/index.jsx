import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { MantineProvider } from '@mantine/core'

const root = document.createElement("div")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root)
rootDiv.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
