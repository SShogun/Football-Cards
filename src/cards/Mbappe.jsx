import mbappe from '../images/mbappe.png'

function Mbappe() {
    return (
      <div id='bg3' className='border-none h-[28rem] w-80 shadow-lg shadow-slate-700 rounded-xl 
      cursor-pointer hover:shadow-[#730BB4] hover:shadow-9xl hover:transition-shadow hover:duration-300'>
            <div 
            className='text-6xl float-start pl-4 pt-16 drop-shadow-lg text-white '
            >96<br />LW</div>
            <div 
                id='image' 
                className='flex flex-wrap justify-center pt-5'
                >
              <img src={mbappe} alt="Mbappe" width={220}/>
            </div>
                <p className='text-3xl pl-16 pt-7 text-white'>Kylian Mbappe</p>
                <div
                    className='bg-transparent text-white pt-5 border-none h-24 w-80 grid grid-col-6 grid-flow-col gap-2 justify-between px-3'
                >
                    <div className='text-xl text-white'>PAC<br /><p className='pl-1'>90</p></div>
                    <div className='text-xl text-white'>SHO<br /><p className='pl-1'>95</p></div>
                    <div className='text-xl text-white'>PAS<br /><p className='pl-1'>78</p></div>
                    <div className='text-xl text-white'>DRI<br /><p className='pl-1'>86</p></div>
                    <div className='text-xl text-white'>DEF<br /><p className='pl-1'>38</p></div>
                    <div className='text-xl text-white'>PHY<br /><p className='pl-1'>80</p></div>

                </div>
        </div>
    )
}
export default Mbappe
