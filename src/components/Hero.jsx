import { HERO_PARA } from '../constants/index'
import illustration from '../images/illustration-intro.png'
import Buttons from './Buttons'

const Hero = () => {
    return (
        <div className='lg:w-3/4 mx-auto'>
            <img src={illustration} alt="illustration intro" className='w-[450px] lg:w-[520px] mx-auto' />

            {HERO_PARA.map((item, i) => {
                return (
                    <div key={i} className="w-4/5 mx-auto text-center mt-5">
                        <h1 className='font-bold text-3xl leading-10 mb-5'>{item.h1}</h1>
                        <p className='text-sm tracking-wider px-10'>{item.p}</p>
                        <Buttons label='Get Started' />
                    </div>
                )
            })}


        </div>
    )
}

export default Hero