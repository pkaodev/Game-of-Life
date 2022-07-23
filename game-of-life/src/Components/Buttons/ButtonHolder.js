import React from 'react'
import AdvanceButton from './AdvanceButton'
import AutoButtons from './AutoButtons'
import CreateBoardButtons from './CreateBoardButtons'
import TextGeneration from './TextGeneration'
import WrappingButton from './WrappingButton'

export default function ButtonHolder() {
  return (
    <div className='button-holder'>
        <TextGeneration />
        <WrappingButton />
        <CreateBoardButtons />
        <AutoButtons />
        <AdvanceButton />
    </div>
  )
}
