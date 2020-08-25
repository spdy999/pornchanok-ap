import { Link, Typography } from '@material-ui/core'
import React from 'react'

interface StyledTextLinkProps {}
const StyledTextLink: React.FC<StyledTextLinkProps> = props => {
  const mailLink = `mailto:${props.children}`
  return (
    <Typography variant="h3">
      <Link href={mailLink} color="inherit" variant="inherit">
        {props.children}
      </Link>
    </Typography>
  )
}

export default StyledTextLink
