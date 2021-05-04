import React from 'react'

import { Header } from './Header'
import { Main } from './Main'
import { AlertGlobal } from '../common-components/Alert/view/Alert'

export function AppLayout() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <AlertGlobal></AlertGlobal>
    </>
  )
}
