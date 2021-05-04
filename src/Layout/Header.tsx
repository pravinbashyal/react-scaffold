import React from 'react'
import { NavBar } from './NavBar'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  pageBanner: {
    display: 'flex',
  },
  pageHeader: {
    display: 'flex',
  },
}))

export const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.pageHeader}>
      <Typography className={classes.pageBanner}></Typography>
      <NavBar></NavBar>
    </header>
  )
}
