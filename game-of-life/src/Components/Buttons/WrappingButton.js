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

  return <>
  <p className='button-text'>Wrap at edges</p>
  <button
  className={`button wrapping-button-${wrapping}`}
  onClick={()=>{setWrapping(!wrapping)}}>
    {`${!wrapping ? 'Disabled' : 'Enabled'}`}
    </button>
  </>
}
