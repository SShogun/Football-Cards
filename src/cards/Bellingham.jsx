import bellingham from '../images/bellingham2.png'

function Blnghm() {
    return (
        <>
        <div id='bg2' className='border-none h-[28rem] w-80 shadow-lg shadow-slate-700 rounded-xl cursor-pointer hover:shadow-[#D6A225] hover:shadow-9xl hover:transition-shadow hover:duration-300'>
            <div 
            className='text-6xl float-start pl-4 pt-12 drop-shadow-lg text-white'
            >96<br />CM</div>
            <div 
            id='image' 
            className='flex flex-wrap justify-center pt-5'
            >
                <img src={bellingham} alt="Bellingham" height={800} width={800}/>
        </div>
                <p className='text-3xl pl-12 mt-4 text-white'>Jude Bellingham</p>
            <div
                className='pt-4 text-white border-none h-24 w-80 grid grid-col-6 grid-flow-col gap-2 justify-between px-3'
                >
                <div className='text-xl'>PAC<br /><p className='pl-1'>87</p></div>
                <div className='text-xl'>SHO<br /><p className='pl-1'>88</p></div>
                <div className='text-xl'>PAS<br /><p className='pl-1'>94</p></div>
                <div className='text-xl'>DRI<br /><p className='pl-1'>95</p></div>
                <div className='text-xl'>DEF<br /><p className='pl-1'>85</p></div>
                <div className='text-xl'>PHY<br /><p className='pl-1'>84</p></div>

            </div>
            </div>
        
        </>
    )
}
export default Blnghm
