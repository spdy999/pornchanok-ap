import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  chair: {
    height: '60%',
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -70%)',
  },
}))

interface FullPagesProps {}

export const FullPages: React.FC<FullPagesProps> = props => {
  const classes = useStyles()
  return (
    <div id="fullpage">
      <section className="section s1">s1</section>
      <section className="section s2">
        <p>s2</p>
        <img className={classes.chair} src="mac1.jpg" alt="mac1" />
        <img className={classes.chair} src="mac2.jpg" alt="mac2" />
        <img className={classes.chair} src="mac3.jpg" alt="mac3" />
      </section>
      <section className="section s3">
        <h1>Other</h1>
      </section>
    </div>
  )
}
