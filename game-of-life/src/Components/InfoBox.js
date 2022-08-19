import React from 'react'

export default function InfoBox() {
    const openWiki = () => {
        window.open('https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', '_blank')
    }

  return (
    <div className='button-holder info-box' onClick={()=>openWiki()}>
        Learn more about <br />
        Conway's Game of Life.
    </div>
  )
}
