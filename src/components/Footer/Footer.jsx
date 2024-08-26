import React from 'react'
import logofoot from "../../images/Group 45.svg"
import sotseti from "../../images/Group 48.svg"

export default function Footer() {
  return (
    <>
      <footer className='pt-[100px] pb-[100px]'>
        <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1200px]:mx-auto max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
          <div className='flex items-start justify-between max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:justify-center max-[1020px]:items-center max-[1020px]:gap-[80px]'>
            <div className='max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:items-center'>
              <img src={logofoot} alt="" />
              <p className='text-[18px] text-[#757575] font-[Inter] font-[400] mt-[20px] max-[1020px]:text-center'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Lectus mattis nunc <br />
                aliquam tincidunt est non.</p>
              <div className='mt-[50px]'>
                <img src={sotseti} alt="" />
              </div>
            </div>
            <div className='flex items-start gap-[100px] max-[580px]:flex max-[580px]:flex-col max-[580px]:items-center max-[580px]:justify-center'>
              <ul>
                <li className='text-[24px] text-[#08546C] font-[Inter] font-[500]'>Pages</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[28px]'>Home</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>About</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Service</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Portfolio</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Blog</li>
              </ul>
              <ul>
                <li className='text-[24px] text-[#08546C] font-[Inter] font-[500]'>Services</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[28px]'>Web Design</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>App Design</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Dashboard</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Illustration</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>Development</li>
              </ul>
              <ul>
                <li className='text-[24px] text-[#08546C] font-[Inter] font-[500]'>Contact</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[28px]'>+00 88 999 888 22</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>example@gmail.com</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>www.portfolio.com</li>
                <li className='text-[18px] text-[#787878] font-[Inter] font-[400] mt-[10px]'>44, Housing State, 3200</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
