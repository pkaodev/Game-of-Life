import React, {useContext, useEffect} from 'react'
import BoardContext from '../../contexts/boardContext'

export default function WrappingButton() {
    const { wrapping, setWrapping } = useContext(BoardContext)
    //print wrapping state whenever it changes
    useEffect(() => {
        console.log(`Wrapping: ${wrapping}`)
    }
    , [wrapping])
     
    console.log('HI-->',`wrapping-button-${wrapping}` )

  return <div className='button-holder'>
  <p className='text--terminal'>Wrap at edges</p>
  <button
  className={`button wrapping-button-${wrapping}`}
  onClick={()=>{setWrapping(!wrapping)}}>
    {`${!wrapping ? 'Disabled' : 'Enabled'}`}
    </button>
  </div>
}
