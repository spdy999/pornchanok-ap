import { Box, Container, makeStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React from 'react'
import StyledTextH2 from '../common/StyledTextH2'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10%',
    fontWeight: 500,
    alignContent: 'space-between',
  },
}))

const StyledNameText = withStyles({
  root: {
    fontWeight: 'bold',
    fontSize: '3em',
    // fontSize: 70,
    m: 1,
    textOverflow: 'ellipsis',
    component: 'div',
  },
})(Box)

interface FirstSectionProps {}
export const FirstSection: React.FC<FirstSectionProps> = props => {
  const classes = useStyles()

  return (
    <div className="section section1">
      <Container className={classes.container}>
        <Box>
          <StyledNameText>I'M</StyledNameText>
          <StyledNameText>PORNCHANOK</StyledNameText>
          <StyledNameText>AP.</StyledNameText>
        </Box>
        <Box mb={30}></Box>
        <Box>
          <StyledTextH2>WEB & MOBILE</StyledTextH2>
          <StyledTextH2>DEVELOPER</StyledTextH2>
        </Box>
      </Container>
    </div>
  )
}
export default FirstSection
