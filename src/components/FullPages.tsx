import ReactFullpage from '@fullpage/react-fullpage'
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
  interface IfullpageApi {
    moveTo: (a: number, b: number) => void
  }
  //   const onLeave = (origin, destination, direction) => {
  //     console.log('Leaving section ' + origin.index)
  //   }
  //   const afterLoad = (origin, destination, direction) => {
  //     console.log('After load: ' + destination.index)
  //   }
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={['orange', 'purple', 'green']}
      //   onLeave={this.onLeave.bind(this)}
      //   afterLoad={this.afterLoad.bind(this)}
      render={props => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <h3>Section 1</h3>
            </div>
            <div className="section">
              <div className="slide">
                <h3>Slide 2.1</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.2</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.3</h3>
              </div>
            </div>
            <div className="section">
              <h3>Section 3</h3>
              <button onClick={() => props.fullpageApi.moveTo(1, 0)}>Move top</button>
            </div>
          </div>
        )
      }}
    />
  )
}
