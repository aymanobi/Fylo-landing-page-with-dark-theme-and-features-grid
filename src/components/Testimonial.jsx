import { TESTIMONIALS } from "../constants"
const Testimonial = () => {
    return (
        <section className="w-full py-5 px-10 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5" >
            {TESTIMONIALS.map((test, i) => {
                return (
                    <div key={i} className="bg-testimonials_background p-10 lg:p-5 rounded-lg shadow-2xl">
                        <p className="text-sm lg:text-lg">{test.txt}</p>
                        <div className="flex items-center gap-3 my-4">
                            <img src={test.user_img} alt="image" className="w-[45px] h-[45px] rounded-full"/>
                            <div>
                                <p className="font-bold">{test.user_name}</p>
                                <p className="text-sm">{test.user_job}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Testimonial