import { Hidden, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { buttonList, IButton } from '../buttons'
import { IfullpageApi } from './FullPages'
import HomeIcon from './HomeIcon'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  homeIcon: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

interface ResponsiveMenuProps {
  fullpageApi: IfullpageApi
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = props => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div id="myMenu" className={classes.root}>
      <Hidden smUp>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.homeIcon}>
            <HomeIcon onClick={() => props.fullpageApi.moveTo(1)} />
          </MenuItem>
          {buttonList.map((button: IButton, i: number) => (
            <MenuItem
              onClick={() => {
                setAnchorEl(null)
                props.fullpageApi.moveTo(i + 1)
              }}
            >
              {button.name}
            </MenuItem>
          ))}
        </Menu>
      </Hidden>
    </div>
  )
}

export default ResponsiveMenu
