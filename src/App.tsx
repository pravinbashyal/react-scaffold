import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayout } from './Layout/AppLayout'
import { AlertProvider } from './common-components/Alert/state/useAlert'
import { LocalDbProvider } from './common-infra/useLocalDb'
import { ThemeProvider } from './theme'

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <AlertProvider>
            <LocalDbProvider>
              <AppLayout></AppLayout>
            </LocalDbProvider>
          </AlertProvider>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
