import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { findKey } from 'lodash-es'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  pageNavigation: {
    '& ul': {
      listStyle: 'none',
      padding: 0,
    },
    '& ul>li': {
      padding: theme.spacing(2),
    },
  },
}))

enum NavMenu {
  Hello = 'hello',
}

const navMenuUrl: Record<NavMenu, string> = {
  [NavMenu.Hello]: '/hello',
}

export const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState<NavMenu>()
  const location = useLocation()
  useEffect(() => {
    const navMenu = findKey(navMenuUrl, (value) => value === location.pathname)
    if (!navMenu) {
      return
    }
    setSelectedTab(navMenu as NavMenu)
  }, [selectedTab, location])

  const classes = useStyles()

  return (
    <nav className={classes.pageNavigation}>
      <ul>
        <li>
          <Link to={navMenuUrl[NavMenu.Hello]}>hello</Link>
        </li>
      </ul>
    </nav>
  )
}
