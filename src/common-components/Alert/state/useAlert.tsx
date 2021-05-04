import { useEffect, useState } from 'react'
import { AlertContext, useAlertContext } from './AlertContext'
import { AlertLevel } from '../domain/AlertLevel'
import { AlertType } from '../domain/Alert'

export const useAlert = (): {
  alert: AlertType
  clearAlert: () => void
  addAlert: (alert: AlertType) => void
} => {
  const { alert, setAlert } = useAlertContext()
  const clearAlert = () => {
    setAlert(undefined)
  }

  const addAlert = (alert: AlertType) => {
    setAlert(alert)
  }

  return {
    alert,
    clearAlert,
    addAlert,
  }
}

export const useAddErrorAlert = (error: string) => {
  const { addAlert } = useAlert()
  useEffect(() => {
    if (!!error) {
      addAlert({ message: 'Could not fetch repositories', alertLevel: AlertLevel.Error })
    }
  }, [error])
}

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState<AlertType | undefined>()
  return <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>
}
