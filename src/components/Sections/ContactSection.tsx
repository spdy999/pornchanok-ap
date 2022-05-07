import { Grid, GridSpacing, IconButton, makeStyles } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React, { useState } from 'react'
import StyledTextH2 from '../common/StyledTextH2'
import StyledTextH3 from '../common/StyledTextH3'
import StyledTextLink from '../common/StyledTextLink'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0f0',
    textAlign: 'center',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(9),
  },
  icon: {
    minWidth: '30px',
  },
}))

export const ContactSection: React.FC = () => {
  const classes = useStyles()
  const [spacing] = useState<GridSpacing>(2)

  const onClickGithubIcon = () => window.open('https://www.Github.com/spdy999')
  const onClickLinkedinIcon = () => window.open('https://www.Linkedin.com/in/pornchanok-ap')
  const onClickFacebookIcon = () => window.open('https://www.facebook.com/pornchanok.ap')

  return (
    <div className="section">
      <div className={classes.root}>
        <StyledTextH2>CONTACT</StyledTextH2>
        <StyledTextH3>Feel free to contact me.</StyledTextH3>
        <StyledTextLink>Pornchanok.A@alumni.chula.ac.th</StyledTextLink>
        <StyledTextH3>Tel: +66917689666</StyledTextH3>
        <Grid item={true} xs={12}>
          <Grid container={true} justify="center" spacing={spacing}>
            <IconButton color="inherit" aria-label="Github.com" onClick={onClickGithubIcon}>
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Linkedin.com" onClick={onClickLinkedinIcon}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Facebook.com" onClick={onClickFacebookIcon}>
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
