import React, {useContext, useEffect} from 'react'
import BoardContext from '../contexts/boardContext'

export default function WrappingButton() {
    const { wrapping, setWrapping } = useContext(BoardContext)


    //print wrapping state whenever it changes
    useEffect(() => {
        console.log(`Wrapping: ${wrapping}`)
    }
    , [wrapping])
     


  return <button
  className='wrapping-button'
  onClick={()=>{setWrapping(!wrapping)}}>
    {`Wrapping ${!wrapping ? 'Disabled' : 'Enabled'}`}
    </button>
}
