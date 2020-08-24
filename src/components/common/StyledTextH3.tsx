import { Typography } from '@material-ui/core'
import React from 'react'

interface StyledTextH3Props {}
const StyledTextH3: React.FC<StyledTextH3Props> = props => {
  return <Typography variant="h3">{props.children}</Typography>
}

export default StyledTextH3
