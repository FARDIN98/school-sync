import logo from '../../assets/images/logo.png'

const LandingPage = () => {
  return (
    <section>
        <header>
            <nav>
                <div>
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3 no-underline">
                        <img src={logo} alt="" className='w-10 inline-block items-center' /> <span className='text-red no-underline'>S<span className='text-[#263238]'>chool-Sync</span></span>
                    </a>
                </div>
            </nav>
        </header>
    </section>
  )
}

export default LandingPage