import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rnldo from './cards/Ronaldo'
import Blnghm from './cards/Bellingham'
import Mbappe from './cards/Mbappe'


function props() {
  return (
    <div className='w-screen h-vh grid grid-cols-3 gap-4 grid-flow-col justify-items-center'>
      <Rnldo />
      <Blnghm />
      <Mbappe />
    </div>
  )
}
export default props