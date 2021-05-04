import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { FC, useEffect } from 'react'
import { useAlert } from '../state/useAlert'

export const AlertGlobal: FC<{}> = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const { alert } = useAlert()
  useEffect(() => {
    if (alert) {
      setIsOpen(true)
    }
  }, [alert])
  const handleClose = () => {
    setIsOpen(false)
  }
  return !!alert ? (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={alert.alertLevel}>
        {alert.message}
      </Alert>
    </Snackbar>
  ) : null
}
