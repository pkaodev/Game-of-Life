import React from 'react'
import AdvanceButton from './Buttons/AdvanceButton'
import AutoButtons from './Buttons/AutoButtons'
import CreateBoardButtons from './Buttons/CreateBoardButtons'
import TextGeneration from './Buttons/TextGeneration'
import WrappingButton from './Buttons/WrappingButton'
import InfoBox from './InfoBox'

export default function HolderHolder() {
  return (
    <div className='holder-holder'>
        <TextGeneration />
        <WrappingButton />
        <CreateBoardButtons />
        <AutoButtons />
        <AdvanceButton />
        <InfoBox />
    </div>
  )
}
