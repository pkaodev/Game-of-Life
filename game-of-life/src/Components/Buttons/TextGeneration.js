import React, { useContext } from 'react'
import BoardContext from '../../contexts/boardContext'

export default function TextGeneration() {
    const { generation } = useContext(BoardContext)
  return (
    <p className='text--terminal text--important basic-border'>GENERATION: {generation}</p>
  )
}
