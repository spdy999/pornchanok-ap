import ReactFullpage from '@fullpage/react-fullpage'
import React from 'react'
import NavBar from './NavBar'
import ResponsiveMenu from './ResponsiveMenu'
import { ContactSection } from './Sections/ContactSection'
import FirstSection from './Sections/FirstSection'
import { SlideSection } from './Sections/SlideSection'

export interface IFullPageApi {
  // fullpageApi: {
  moveTo: (a: number) => void
  // }
}

export const FullPages: React.FC = () => {
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={['', 'orange', 'purple', 'green']}
      anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']}
      menu={'#myMenu'}
      render={FullPageRender}
    />
  )
}

const FullPageRender: React.FC<IFullPageApi> = (props) => {
  const onClickMoveToTop = () => props.moveTo(1)
  return (
    <div>
      <NavBar fullpageApi={props} />
      <ResponsiveMenu fullpageApi={props} />
      <div id="fullpage-wrapper">
        <FirstSection />
        <SlideSection />
        <div className="section">
          <h3>Section 3</h3>
          <button onClick={onClickMoveToTop}>Move top</button>
        </div>
        <div className="section">
          <h3>Section 4</h3>
        </div>
        <ContactSection />
      </div>
    </div>
  )
}
