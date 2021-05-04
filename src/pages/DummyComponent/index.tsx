import { Typography } from '@material-ui/core'
import React from 'react'
import { useAddErrorAlert } from '../../common-components/Alert/state/useAlert'

const sectionId = 'dummy-header'

export const DummyComponent = () => {
  useAddErrorAlert('hello')

  return (
    <section aria-labelledby={sectionId}>
      <Typography variant="h1">Dummy</Typography>
      Dummy Component
      <section>
        <Typography variant="h2">dummy component section</Typography>
        dummy component body
      </section>
    </section>
  )
}
