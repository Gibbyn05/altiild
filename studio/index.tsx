import React from 'react'
import ReactDOM from 'react-dom/client'
import {Studio} from 'sanity'
import config from './sanity.config'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Studio config={config} />
    </React.StrictMode>
  )
}
