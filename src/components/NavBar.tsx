import { Avatar, Hidden, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
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

  return (
    <div id="myMenu" className={classes.root}>
      <Hidden xsDown>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <IconButton className={classes.iconButton}>
              <Avatar alt="React logo" src="logo192.png" />
            </IconButton>
            <Button color="inherit" onClick={() => props.fullpageApi.moveTo(1)}>
              HOME
            </Button>
            <Button color="inherit" onClick={() => props.fullpageApi.moveTo(2)}>
              PROFESSIONAL
            </Button>
            <Button color="inherit" onClick={() => props.fullpageApi.moveTo(3)}>
              EXPERIENCE
            </Button>
            <Button color="inherit" onClick={() => props.fullpageApi.moveTo(4)}>
              PORTFOLIO
            </Button>
            <Button color="inherit" onClick={() => props.fullpageApi.moveTo(5)}>
              CONTACT
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  )
}

export default NavBar
