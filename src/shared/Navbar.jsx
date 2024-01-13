import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full p-3 transition-all duration-300 ${scrolling ? 'bg-[#285A43] shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                    <Link to="#" className="text-white text-xl flex items-end">
                        <h1 className='text-3xl font-[LeckerliOne]'>Lush</h1>
                        <img src="/src/assets/LOGO_png 1.png" alt="" />
                    </Link>
                    <div className="md:hidden">
                        {/* Hamburger icon for mobile menu */}
                        <button className={`text-white transition-transform duration-300 transform ${mobileMenuOpen ? 'rotate-180' : ''}`} onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className={`hidden md:flex text-white text-lg font-medium space-x-8 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                        <li className='hover:border-b transition-all duration-300'><Link to="#">Home</Link></li>
                        <li className='hover:border-b transition-all duration-300'><Link to="#">About</Link></li>
                        <li className='hover:border-b transition-all duration-300'><Link to="#">Planters</Link></li>
                        <li className='hover:border-b transition-all duration-300'><Link to="#">Contact</Link></li>
                        <li><Link to="#" className='border border-white rounded-md px-12 py-[10px] hover:text-[#285A43] hover:bg-white'>Call Us</Link></li>
                    </ul>
                </div>
                {/* Mobile menu */}
                <div className={`md:hidden fixed inset-0 bg-[#285A43] mt-[60px] ${mobileMenuOpen ? 'h-full w-1/2' : 'h-0 w-0 overflow-hidden'} transition-all duration-300`}>
                    <ul className="flex flex-col space-y-3 font-semibold p-2 mt-5">
                        <li className='py-1'><Link to="#" className="text-white ps-5">Home</Link></li>
                        <li className='py-1'><Link to="#" className="text-white ps-5">About Us</Link></li>
                        <li className='py-1'><Link to="#" className="text-white ps-5">Planters</Link></li>
                        <li className='py-1'><Link to="#" className="text-white ps-5">Contact</Link></li>
                        <li><Link to="#" className='border rounded-md px-12 py-[10px] text-white'>Call Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
