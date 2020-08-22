import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import { NavBar } from './NavBar'
import { IntroduceSection } from './Sections/IntroduceSection'

interface FullPagesProps {}

export interface IfullpageApi {
  moveTo: (a: number) => void
}
export const FullPages: React.FC<FullPagesProps> = props => {
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={['orange', 'purple', 'green']}
      anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']}
      menu={'#myMenu'}
      render={props => {
        return (
          <div>
            <NavBar fullpageApi={props.fullpageApi} />
            <div id="fullpage-wrapper">
              <IntroduceSection />
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
                <button onClick={() => props.fullpageApi.moveTo(1)}>Move top</button>
              </div>
              <div className="section">
                <h3>Section 4</h3>
              </div>
              <div className="section">
                <h3>Section 5</h3>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
