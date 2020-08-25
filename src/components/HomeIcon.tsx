import { Avatar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  iconButton: {
    marginRight: theme.spacing(2),
  },
}))

interface HomeIconProps {
  onClick: () => void
}

const HomeIcon: React.FC<HomeIconProps> = props => {
  const classes = useStyles()

  return (
    <IconButton onClick={props.onClick} className={classes.iconButton}>
      <Avatar alt=":)" src="smile6.png" />
    </IconButton>
  )
}

export default HomeIcon
