import { Typography } from '@material-ui/core'
import React from 'react'

interface StyledTextH2Props {}
const StyledTextH2: React.FC<StyledTextH2Props> = props => {
  return <Typography variant="h2">{props.children}</Typography>
}

export default StyledTextH2
