import { Avatar, Hidden, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React, { useState } from 'react'
import { buttonList, IButton } from '../buttons'
import { IfullpageApi } from './FullPages'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    right: 0,
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  toolBar: {
    alignSelf: 'center',
  },
}))

interface NavBarProps {
  fullpageApi: IfullpageApi
}

const NavBar: React.FC<NavBarProps> = props => {
  const classes = useStyles()

  const [buttons] = useState(buttonList)

  return (
    <div id="myMenu" className={classes.root}>
      <Hidden xsDown>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <IconButton className={classes.iconButton}>
              <Avatar alt="React logo" src="logo192.png" />
            </IconButton>
            {buttons.map((button: IButton, i: number) => (
              <Button color="inherit" onClick={() => props.fullpageApi.moveTo(i + 1)}>
                {button.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  )
}

export default NavBar
