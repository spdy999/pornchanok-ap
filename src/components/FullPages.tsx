import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import NavBar from './NavBar'
import ResponsiveMenu from './ResponsiveMenu'
import { ContactSection } from './Sections/ContactSection'
import { IntroduceSection } from './Sections/IntroduceSection'
import { SlideSection } from './Sections/SlideSection'

interface FullPagesProps {}

export interface IfullpageApi {
  moveTo: (a: number) => void
}
export const FullPages: React.FC<FullPagesProps> = props => {
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={['', 'orange', 'purple', 'green']}
      anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']}
      menu={'#myMenu'}
      render={props => {
        return (
          <div>
            <NavBar fullpageApi={props.fullpageApi} />
            <ResponsiveMenu />
            <div id="fullpage-wrapper">
              <IntroduceSection />
              <SlideSection />
              <div className="section">
                <h3>Section 3</h3>
                <button onClick={() => props.fullpageApi.moveTo(1)}>Move top</button>
              </div>
              <div className="section">
                <h3>Section 4</h3>
              </div>
              <ContactSection />
            </div>
          </div>
        )
      }}
    />
  )
}
