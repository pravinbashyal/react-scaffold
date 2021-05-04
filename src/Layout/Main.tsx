import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DummyComponent } from '../pages/DummyComponent'

export const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/dummy">
          <DummyComponent></DummyComponent>
        </Route>
        <Route path="/">
          <DummyComponent></DummyComponent>
        </Route>
      </Switch>
    </main>
  )
}
