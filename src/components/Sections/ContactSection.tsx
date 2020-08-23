import { makeStyles } from '@material-ui/core'
import React from 'react'
import { StyledTextH1 } from '../common/StyledTextH1'

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
        <StyledTextH1>CONTACT</StyledTextH1>
        <p>Feel free to contact me.</p>
      </div>
    </div>
  )
}
