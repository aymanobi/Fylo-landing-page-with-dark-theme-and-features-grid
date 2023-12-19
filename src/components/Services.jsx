import { SERVICES, CTA } from '../constants/index'
import icon from '../images/icon-arrow.svg'
const Services = () => {
    return (
        <section className='w-full px-3 mt-[100px]'>
            <div className='w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {SERVICES.map((service, i) => {
                    return (
                        <div key={i} className='flex items-center justify-center flex-col gap-4 p-3'>
                            <img src={service.img} alt="logo" width={92} height={64} />
                            <h2 className='font-bold tracking-wider text-xl'>{service.heading}</h2>
                            <p className='text-normal text-center'>{service.text}</p>
                        </div>
                    )
                })}
            </div>


            <div className='mt-[100px] px-5 lg:w-4/5 mx-auto'>
                {CTA.map((item, i) => {
                    return (
                        <div key={i} className='lg:flex items-center gap-6'>
                            <img src={item.img} alt="stay prodective" className='my-10' />
                            <div>
                                <h2 className='font-bold text-xl lg:text-3xl my-4'>{item.heading}</h2>
                                <p className='my-5'>{item.txt1}</p>
                                <p className='my-5'>{item.txt2}</p>
                                <div className="text-Cyan w-[50%] lg:w-[45%] border-b flex items-center gap-4">
                                    <a href="/">{item.cta} </a>
                                    <img src={icon} alt="icon" />
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Services