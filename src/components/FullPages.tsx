import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'

interface FullPagesProps {}

export const FullPages: React.FC<FullPagesProps> = props => {
  interface IfullpageApi {
    moveTo: (a: number, b: number) => void
  }
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={['orange', 'purple', 'green']}
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
