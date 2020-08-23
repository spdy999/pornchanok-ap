import { Typography } from '@material-ui/core'
import React from 'react'

interface StyledTextH1Props {}
export const StyledTextH1: React.FC<StyledTextH1Props> = props => {
  return <Typography variant="h1">{props.children}</Typography>
}
