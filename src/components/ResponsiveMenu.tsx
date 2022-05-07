import { Hidden, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { buttonList, IButton } from '../buttons'
import { IFullPageApi } from './FullPages'
import HomeIcon from './HomeIcon'

const useStyles = makeStyles(() => ({
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
  fullpageApi: IFullPageApi
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = (props) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onMenuItemClick = (i: number) => () => {
    setAnchorEl(null)
    props.fullpageApi.moveTo(i + 2)
  }

  const onHomeIconClick = () => {
    setAnchorEl(null)
    props.fullpageApi.moveTo(1)
  }

  return (
    <div id="myMenu" className={classes.root}>
      <Hidden smUp={true}>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted={true}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.homeIcon} onClick={onHomeIconClick}>
            <HomeIcon onClick={onHomeIconClick} />
          </MenuItem>
          {buttonList.map((button: IButton, i: number) => (
            <MenuItem key={i} onClick={onMenuItemClick(i)}>
              {button.name}
            </MenuItem>
          ))}
        </Menu>
      </Hidden>
    </div>
  )
}

export default ResponsiveMenu
