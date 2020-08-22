import React from 'react'

interface SlideSectionProps {}
export const SlideSection: React.FC<SlideSectionProps> = props => {
  return (
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
  )
}
