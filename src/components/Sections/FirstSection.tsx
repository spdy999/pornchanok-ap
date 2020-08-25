import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import StyledTextH1 from '../common/StyledTextH1'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '30%',
  },
}))

interface FirstSectionProps {}
export const FirstSection: React.FC<FirstSectionProps> = props => {
  const classes = useStyles()

  return (
    <div className="section section1">
      <Container className={classes.container}>
        <StyledTextH1>I'M</StyledTextH1>
        <StyledTextH1>PORNCHANOK</StyledTextH1>
        <StyledTextH1>AP.</StyledTextH1>
      </Container>
    </div>
  )
}
export default FirstSection
