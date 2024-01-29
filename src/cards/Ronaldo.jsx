import ronaldo from '../images/ronaldo.png'

function Rnldo() {
    return (
      <div id='bg1' className='border-none w-80 shadow-lg shadow-slate-500' >
      <div 
      className='text-6xl float-start pl-7 pt-10 drop-shadow-lg text-white'
      >96<br />ST</div>
      <div 
      id='image' 
      className='flex flex-wrap justify-center'
      >
        <img src={ronaldo} alt="ronaldo" height={60} width={160}/>
      </div>
      <p className='text-3xl pl-12 pb-2 text-white'>Cristiano Ronaldo</p>
      <div
        className='bg-slate-300 pt-4 border-none h-24 w-80 grid grid-col-6 grid-flow-col gap-2 justify-between px-3'
      >
        <div className='text-xl'>PAC<br /><p className='pl-1'>90</p></div>
        <div className='text-xl'>SHO<br /><p className='pl-1'>95</p></div>
        <div className='text-xl'>PAS<br /><p className='pl-1'>78</p></div>
        <div className='text-xl'>DRI<br /><p className='pl-1'>86</p></div>
        <div className='text-xl'>DEF<br /><p className='pl-1'>38</p></div>
        <div className='text-xl'>PHY<br /><p className='pl-1'>80</p></div>

      </div>
    </div>
    )
}
export default Rnldo