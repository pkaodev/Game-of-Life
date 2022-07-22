import React, { useContext } from 'react'
import BoardContext from '../contexts/boardContext'

export default function TextGeneration() {
    const { generation } = useContext(BoardContext)
  return (
    <div className='text-generation'>GENERATION: {generation}</div>
  )
}
