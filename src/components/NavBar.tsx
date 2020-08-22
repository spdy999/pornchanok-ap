import { Avatar, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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