import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/do2.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
    <Link to='home' smooth={true} duration={500}>
    <div>
				<img src={Logo} to='home' alt="Logo" style={{ width: '100px' }} />
			</div>
          </Link>
			

			{/* Menu */}
			<ul className="hidden md:flex ">
      <li className='hover:scale-105 hover:duration-300 '>
          <Link to='home' smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='hover:scale-105 hover:duration-300 '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-105 hover:duration-300 '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-105 hover:duration-300 '>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:scale-105 hover:duration-300 '>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
			</ul>

			{/* Burget */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>
			{/* Mobile Menu */}
			<ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-2xl'>
        <div className='pt-12'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedin />
                  </div>
                </a>
                <a
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link to='contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <FaGithub />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
        </li>

      </ul>
      <div className={!nav
            ? 'hidden'
            : 'flex fixed flex-col'}>
				<img src={Logo} alt="Logo" style={{ width: '100px' }} />
			</div>
			{/* Social Icon */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
				<ul>
					<li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/saniok/"
						>
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/Demchenk0"
						>
							Github
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto:santadyr2020@gmail.com"
						>
							Mail
							<HiOutlineMail size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
