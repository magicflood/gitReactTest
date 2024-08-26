import React from 'react'
import "./style.css"
import photo from "../../images/image (3).png"

export default function Header() {
  return (
    <>
      <header className='bgHead bg-[#08546C] pt-[100px]'>
        <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
          <div className='flex items-center justify-between max-[1020px]:flex   max-[1020px]:flex-col max-[1020px]:text-center'>
            <div>
              <button className='w-[195px] h-[65px] bg-[#094556] rounded-[30px] text-[24px] text-[#ffffff] font-[Schoolbell] font-[400]'>Hey, I’m Musa</button>
              <h1 className='mt-[40px] text-[64px] text-[#ffffff] font-[Inter] font-[700] max-[1200px]:text-[50px]'>Building Digital <br />
                Products, Brands <br />
                & Experience.</h1>
              <p className='mt-[30px] text-[18px] text-[#849499] font-[Inter] font-[400] max-[1200px]:text-[15px]'>A Product Design and Visual Designer in SF I”m Specialize in <br />
                UI/UX, Responsive web design, and visual Development. </p>
              <div className='flex mt-[50px] gap-[50px] max-[1020px]:flex max-[1020px]:justify-center'>
                <button className='w-[137px] h-[60px] bg-[#FFA63A] rounded-[25px] text-[18px] text-[#ffffff] font-[Inter] font-[600]'>Hire Me</button>
                <button className='bg-none text-[18px] text-[#B6CDD4] font-[Inter] font-[600]'>My Work</button>
              </div>
            </div>
            <img className='max-[1200px]:w-[400px] max-[1020px]:mt-[50px] max-[580px]:w-[300px]' src={photo} alt="img"/>
          </div>
        </div>
      </header>
    </>
  )
}
