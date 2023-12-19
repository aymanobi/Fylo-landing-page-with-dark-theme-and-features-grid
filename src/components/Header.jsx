import logo from '../images/logo.svg'
import { NAV_LINKS } from '../constants/index'
const Header = () => {
    return (
        <header className='mb-5'>
            <nav className='px-4 py-3 flex items-center justify-between'>
                <img src={logo} alt="logo" width={176} height={52} />
                <ul className='flex items-center justify-between gap-2 md:gap-10'>
                    {
                        NAV_LINKS.map((link, i) => {
                            return (
                                <li key={i} className='text-[#bbb] hover:text-White'><a href={link.href}>{link.label}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header