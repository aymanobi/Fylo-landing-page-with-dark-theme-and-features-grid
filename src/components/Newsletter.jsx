import Buttons from "./Buttons"


const Newsletter = () => {
    return (
        <section className="relative w-4/5 lg:w-3/4 mx-auto mt-20 -mb-20 bg-intro_and_email_sign_up rounded-lg shadow-md">
            <div className="text-center px-7 py-3 lg:flex flex-col items-center justify-center">
                <div className="lg:w-1/2">
                    <h2 className="font-bold text-3xl mb-3">Get early access today</h2>
                    <p className="text-sm font-normal">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>

                <div className="w-full lg:w-1/2 p-3 mt-5 lg:flex items-center justify-between gap-3">
                    <input type="email" name="email" id="email" className="w-64 lg:w-5/6 py-2 px-4 rounded-full outline-none" placeholder="email@example.com"/>
                    <Buttons label="Get Started For Free" />
                </div>
            </div>
        </section>
    )
}

export default Newsletter