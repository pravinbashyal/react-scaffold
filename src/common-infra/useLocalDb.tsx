import { values } from 'lodash-es'
import { createContext, useContext } from 'react'
import { LocalDb } from '../common-domain/LocalDb'
import { useLocalStorage } from './useLocalStorage'

const LocalDbContext = (<T extends {}>(_t: T) =>
  createContext<
    | {
        local: LocalDb<T>
        setLocal: (local: LocalDb<T>) => {}
      }
    | undefined
  >(undefined))('dummy')

export const LocalDbProvider = ({ children }) => {
  const initialValueFromStorageSerialized = localStorage.getItem('local')
  const initialValue = initialValueFromStorageSerialized
    ? JSON.parse(initialValueFromStorageSerialized)
    : {}
  const [local, setLocal] = useLocalStorage('favorites', initialValue)
  return <LocalDbContext.Provider value={{ local, setLocal }}>{children}</LocalDbContext.Provider>
}

export const uselocalDb = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const localDb = useContext(LocalDbContext)
  if (!localDb) {
    throw Error('uselocalDb should be called inside the scope of LocalDbProvider')
  }

  const get = (repoId: string) => {
    const repository = localDb.local[repoId]
    if (!repository) {
      return null
    }
    return repository
  }

  const getAll = () => values(localDb.local).filter(Boolean)

  const deleteValue = (id: string) => {
    localDb.setLocal({ ...localDb.local, [id]: undefined })
  }

  const add = (local: string) => {
    // use id instead
    localDb.setLocal({ ...localDb.local, [local]: local })
  }

  return { get, getAll, deleteValue, add }
}
