import { makeStyles } from '@material-ui/core'
import React from 'react'
import StyledTextH2 from '../common/StyledTextH2'
import StyledTextH3 from '../common/StyledTextH3'
import StyledTextLink from '../common/StyledTextLink'

const useStyles = makeStyles(() => ({
  root: {
    color: '#0f0',
    textAlign: 'center',
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
      </div>
    </div>
  )
}
