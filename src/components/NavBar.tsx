import { Hidden } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { buttonList, IButton } from '../buttons'
import { IFullPageApi } from './FullPages'
import HomeIcon from './HomeIcon'

const useStyles = makeStyles((theme) => ({
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
  fullpageApi: IFullPageApi
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const classes = useStyles()

  const onClickHomeIcon = () => props.fullpageApi.moveTo(1)
  const onClickBtnList = (i: number) => () => props.fullpageApi.moveTo(i + 2)

  return (
    <div id="myMenu" className={classes.root}>
      <Hidden xsDown={true}>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <HomeIcon onClick={onClickHomeIcon} />
            {buttonList.map((button: IButton, i: number) => (
              <Button key={i} color="inherit" onClick={onClickBtnList(i)}>
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
