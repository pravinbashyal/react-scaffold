import { BrowserRouter as Router } from 'react-router-dom'
import React, { FC } from 'react'
import { LocalDbProvider } from '../common-infra/useLocalDb'
import { AlertProvider } from '../common-components/Alert/state/useAlert'

export const Wrapper: FC<{}> = ({ children }) => (
  <AlertProvider>
    <LocalDbProvider>
      <Router>{children}</Router>
    </LocalDbProvider>
  </AlertProvider>
)
