import { ListItemIcon, makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'
import StyledTextH2 from '../common/StyledTextH2'
import StyledTextH3 from '../common/StyledTextH3'
import StyledTextLink from '../common/StyledTextLink'

const useStyles = makeStyles(() => ({
  root: {
    color: '#0f0',
    textAlign: 'center',
  },
  icon: {
    minWidth: '30px',
  },
}))

interface ContactSectionProps {}
export const ContactSection: React.FC<ContactSectionProps> = props => {
  const classes = useStyles()
  return (
    <div className="section">
      <div className={classes.root}>
        <StyledTextH2>CONTACT</StyledTextH2>
        <StyledTextH3>Feel free to contact me.</StyledTextH3>
        <StyledTextLink>Pornchanok.A@alumni.chula.ac.th</StyledTextLink>
        <StyledTextH3>Tel: +66917689666</StyledTextH3>
        <ListItemIcon className={classes.icon}>
          <GitHubIcon />
          <LinkedInIcon />
          <FacebookIcon />
        </ListItemIcon>
      </div>
    </div>
  )
}
