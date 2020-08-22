import { Avatar, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/styles'
import React from 'react'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    left: 0,
    'z-index': 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const StyledAppBar = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
})(AppBar)

const StyledToolBar = withStyles({
  root: {
    'align-self': 'center',
  },
})(Toolbar)

export const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StyledAppBar>
        <StyledToolBar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar alt="React logo" src="logo192.png" />
          </IconButton>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">PROFESSIONAL</Button>
          <Button color="inherit">EXPERIENCE</Button>
          <Button color="inherit">PORTFOLIO</Button>
          <Button color="inherit">CONTACT</Button>
        </StyledToolBar>
      </StyledAppBar>
    </div>
  )
}
