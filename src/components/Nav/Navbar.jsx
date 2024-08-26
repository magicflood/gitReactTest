import React from 'react'
import "../Header/style.css"
import logo from "../../images/Group 44.svg"

export default function Navbar() {
    return (
        <>
            <nav className='bgImage pt-[50px] pb-[50px] bg-[#08546C]'>
                <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1200px]:mx-auto max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
                    <div className='flex items-center justify-between'>
                        <img src={logo} alt="img" />
                        <ul className='flex items-center gap-[50px] max-[1020px]:hidden'>
                            <li><a className='text-[18px] text-[#A1B5BB] font-[Inter] font-[600]' href="#">Home</a></li>
                            <li><a className='text-[18px] text-[#A1B5BB] font-[Inter] font-[600]' href="#">About</a></li>
                            <li><a className='text-[18px] text-[#A1B5BB] font-[Inter] font-[600]' href="#">Service</a></li>
                            <li><a className='text-[18px] text-[#A1B5BB] font-[Inter] font-[600]' href="#">Portfolio</a></li>
                            <li><a className='text-[18px] text-[#A1B5BB] font-[Inter] font-[600]' href="#">Blog</a></li>
                        </ul>
                        <div className='flex items-center gap-[30px]'>
                            <button className='bg-[#145E76] w-[140px] h-[60px] rounded-[25px] text-[18px] text-[#ffffff] font-[Inter] font-[700]'>Contact</button>
                            <select className='w-[100px] h-[60px] rounded-[5px] flex hidden items-center justify-center pl-[10px] pr-[10px] text-[18px] text-white font-[Inter] font-[700] bg-[#145E76] max-[1020px]:block'>
                                <option value="">Home</option>
                                <option value="">About</option>
                                <option value="">Service</option>
                                <option value="">Portfolio</option>
                                <option value="">Blog</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
