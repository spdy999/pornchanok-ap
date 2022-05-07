import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  cover: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    background: 'black',
    margin: 0,
    // zIndex: -1,
    padding: 0,
    // '-webkit-background-size': 'cover',
    // '-moz-background-size': 'cover',
    // '-o-background-size': 'cover',
    // 'background-size': 'cover',
    // 'box-shadow': 'inset 0px -120px 100px -10px rgba(0, 0, 0, 0.7)',
    // color: 'rgb(255, 255, 255)',
  },
  filler: {
    'line-height': 1.5,
    position: 'absolute',
    'vertical-align': 'middle',
    // height: '100vh',
    // left: 0,
    width: '100%',
    top: '40%',
    left: '20%',
    // 'text-align': 'center',
    // margin: 0,
    'z-index': 2,
    fontSize: 45,
  },
  overlay: {
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // background: 'rgba(0, 0, 0, 0.5)',
    background: 'red',
    'z-index': 1,
  },
}))

export const Cover = () => {
  const classes = useStyles()

  return (
    <div className={classes.cover}>
      {/* <NavBar /> */}
      <div className={classes.filler}>
        <div>I'm Pornchanpk Ap.</div>
        <div>| Developer |</div>
      </div>
      {/* <div className={classes.overlay}></div> */}
    </div>
  )
}
