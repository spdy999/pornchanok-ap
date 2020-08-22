import { Avatar, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    left: 0,
    'z-index': 1,
  },
  iconButton: {
    marginRight: theme.spacing(2),
    // 'aria-label': 'menu',
    // edge: 'start',
    // color: 'inherit',
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  toolBar: {
    'align-self': 'center',
  },
}))

export const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.iconButton}>
            {/* <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="menu"> */}
            <Avatar alt="React logo" src="logo192.png" />
          </IconButton>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">PROFESSIONAL</Button>
          <Button color="inherit">EXPERIENCE</Button>
          <Button color="inherit">PORTFOLIO</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
