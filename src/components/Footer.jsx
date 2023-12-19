import logo from '../images/logo.svg'
import location from '../images/icon-location.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import { PiFacebookLogoLight } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";


import { FOOTER_LINK1, FOOTER_LINK2 } from '../constants'

const Footer = () => {
    return (
        <footer className='bg-footer_background pt-32 px-7 pb-5'>
            <img src={logo} alt="logog" />

            <div className='lg:flex items-start justify-between mt-7'>

                <div className='flex items-start gap-5 max-w-xs mb-5'>
                    <img src={location} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='flex flex-col gap-4 mb-5'>
                    <div className='flex items-start gap-5'><img src={phone} alt="logo" /><p>+1-543-123-4567</p></div>
                    <div className='flex items-start gap-5'><img src={email} alt="logo" /><p>example@fylo.com</p></div>
                </div>
                <div className='flex flex-col gap-12 lg:flex-row'>
                    <div>
                        {FOOTER_LINK1.map((link, i) => {
                            return (
                                <ul key={i} >
                                    <li className='mb-2 hover:underline'><a href={link.href}>{link.label}</a></li>
                                </ul>
                            )
                        })}
                    </div>

                    <div>
                        {FOOTER_LINK2.map((link, i) => {
                            return (
                                <ul key={i}>
                                    <li className='mb-2 hover:underline'><a href={link.href}>{link.label}</a></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>

                <div className='font-bold text-3xl flex items-center justify-center gap-10 lg:mt-0'>
                    <PiFacebookLogoLight className='cursor-pointer'/>
                    <BsTwitterX className='cursor-pointer'/>
                    <FaInstagram className='cursor-pointer'/>
                </div>
            </div>

        </footer>
    )
}

export default Footer