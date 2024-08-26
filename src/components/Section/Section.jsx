import React from 'react'
import "../Header/style.css"

import ellipse from "../../images/Group 15.svg"
import strelka from "../../images/Group 29.svg"
import ellipse2 from "../../images/Group 15 (1).svg"
import ellipse3 from "../../images/Group 15 (2).svg"
import photo from "../../images/dribbble mockup 1.svg"
import photo2 from "../../images/dribbble mockup 1 (1).svg"
import photo3 from "../../images/dribbble mockup 1 (2).svg"
import photo4 from "../../images/dribbble mockup 1 (3).svg"
import imagefour from "../../images/image (4).png"
import sila from "../../images/Group.svg"
import levo from "../../images/Group 40.svg"
import pravo from "../../images/Group 39.svg"
import secfinal from "../../images/Rectangle 18.svg"

export default function Section() {
  return (
    <>
      <section className='pb-[200px]'>
        <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1200px]:mx-auto max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
          <div className='relative'>
            <div className='w-[1200px] h-[320px] mx-auto bg-[#ffffff] rounded-[30px] drop-shadow-2xl absolute top-[-170px] pl-[200px] flex flex-col justify-center max-[1200px]:w-[1000px] max-[1200px]:pl-[150px] max-[1020px]:w-[800px] max-[1020px]:pl-[50px] max-[800px]:w-[500px] max-[800px]:pl-[20px] max-[580px]:w-[350px] max-[580px]:mx-auto'>
              <p className='text-[24px] text-[#265A6A] font-[Inter] font-[600] max-[800px]:text-[18px] max-[580px]:text-center'>STATISTIC</p>
              <div className='flex items-center gap-[40px] mt-[40px] max-[580px]:flex max-[580px]:flex-wrap max-[580px]:justify-center max-[580px]:items-center'>
                <div className='flex flex-col justify-center'>
                  <p className='text-[48px] text-[#08546C] font-[Inter] font-[600] max-[800px]:text-[30px] text-center'>300+</p>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[400] text-center'>Project Delivery</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-[48px] text-[#08546C] font-[Inter] font-[600] max-[800px]:text-[30px] text-center'>8</p>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[400] text-center'>Years Experience</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-[48px] text-[#08546C] font-[Inter] font-[600] max-[800px]:text-[30px] text-center'>16</p>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[400] text-center'>Awards</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-[48px] text-[#08546C] font-[Inter] font-[600] max-[800px]:text-[30px] text-center'>70+</p>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[400] text-center'>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <p className='pt-[360px] text-center'><u className='text-[24px] text-[#265A6A] font-[Schoolbell] font-[400] text-center'>Services</u></p>
          <h2 className='text-[45px] text-[#265A6A] font-[Inter] font-[600] text-center mt-[20px]'>Building Digital Product <br />
            With Better Experience</h2>
          <div className='flex items-center justify-between mt-[70px] max-[1200px]:flex max-[1200px]:flex-wrap max-[1200px]:justify-center max-[1200px]:gap-[30px]'>
            <div className='w-[250px] h-[250px] bg-[#ffffff] justify-center items-center drop-shadow-xl flex max-[1200px]:w-[340px] max-[1200px]:h-[340px]'>
              <div>
                <img src={ellipse} alt="" />
                <p className='text-[24px] text-[#0F1221] font-[Inter] font-[600] pt-[25px]'>UI/UX Design</p>
                <p className='text-[16px] text-[#696969] font-[Inter] font-[400] pt-[10px]'>I’ve created a user interface <br />
                  and user experience with <br />
                  some proccess and method.</p>
              </div>
            </div>
            <div className='w-[250px] h-[250px] bg-[#08546C] justify-center items-center drop-shadow-xl flex max-[1200px]:w-[340px] max-[1200px]:h-[340px]'>
              <div>
                <img src={ellipse2} alt="" />
                <p className='text-[24px] text-[#ffffff] font-[Inter] font-[600] pt-[25px]'>UI/UX Design</p>
                <p className='text-[16px] text-[#B2BBBD] font-[Inter] font-[400] pt-[10px]'>I’ve created a user interface <br />
                  and user experience with <br />
                  some proccess and method.</p>
              </div>
            </div>
            <div className='w-[250px] h-[250px] bg-[#ffffff] justify-center items-center drop-shadow-xl flex max-[1200px]:w-[340px] max-[1200px]:h-[340px]'>
              <div>
                <img src={ellipse3} alt="" />
                <p className='text-[24px] text-[#0F1221] font-[Inter] font-[600] pt-[25px]'>Visual Branding</p>
                <p className='text-[16px] text-[#696969] font-[Inter] font-[400] pt-[10px]'>I’ve created a user interface <br />
                  and user experience with <br />
                  some proccess and method.</p>
              </div>
            </div>
            <div className='w-[250px] h-[250px] bg-[#ffffff] justify-center items-center drop-shadow-xl flex max-[1200px]:w-[340px] max-[1200px]:h-[340px]'>
              <div>
                <img src={ellipse} alt="" />
                <p className='text-[24px] text-[#0F1221] font-[Inter] font-[600] pt-[25px]'>App Developme nt</p>
                <p className='text-[16px] text-[#696969] font-[Inter] font-[400] pt-[10px]'>I’ve created a user interface <br />
                  and user experience with <br />
                  some proccess and method.</p>
              </div>
            </div>
          </div>
          <h2 className='text-[48px] text-[#08546C] font-[Inter] font-[600] mt-[200px] max-[1200px]:text-center'>Featured My Portfolio</h2>
          <p className='text-[18px] text-[#757575] font-[Inter] font-[400] mt-[10px] max-[1200px]:text-center'>Explore some of my latest website projects. Non suscipit ex blandit <br />
            vitae. Pellentesque vel urna id massa sagittis luctus Fusce iaculis.</p>
          <div className='flex justify-between items-center mt-[60px] max-[1020px]:flex max-[1020px]:flex-col gap-[100px]'>
            <div>
              <img className='max-[1200px]:w-[450px]' src={photo} alt="" />
              <p className='text-[30px] text-[#08546C] font-[Inter] font-[600] mt-[40px]'>Website Design</p>
              <p className='text-[16px] text-[#757575] font-[Inter] font-[400] mt-[10px]'>Our website designers have penetrated the mysteries of <br />
                emotional response to color, image,  and eye-tracking. <br />
                Every element is geared to create maximum appeal.</p>
              <button className='mt-[20px] duration-[500ms] hover:ml-[30px] hover:cursor-pointer'>
                <div className='flex items-center gap-[15px]'>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[500]'>Read Case Study</p>
                  <img src={strelka} alt="img" />
                </div>
              </button>
            </div>
            <div>
              <img className='max-[1200px]:w-[450px]' src={photo2} alt="" />
              <p className='text-[30px] text-[#08546C] font-[Inter] font-[600] mt-[40px]'>Product Design</p>
              <p className='text-[16px] text-[#757575] font-[Inter] font-[400] mt-[10px]'>Our website designers have penetrated the mysteries of <br />
                emotional response to color, image,  and eye-tracking. <br />
                Every element is geared to create maximum appeal.</p>
              <button className='mt-[20px] duration-[500ms] hover:ml-[30px] hover:cursor-pointer'>
                <div className='flex items-center gap-[15px]'>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[500]'>Read Case Study</p>
                  <img src={strelka} alt="img" />
                </div>
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center mt-[60px] max-[1020px]:flex max-[1020px]:flex-col gap-[100px]'>
            <div>
              <img className='max-[1200px]:w-[450px]' src={photo3} alt="" />
              <p className='text-[30px] text-[#08546C] font-[Inter] font-[600] mt-[40px]'>App Design</p>
              <p className='text-[16px] text-[#757575] font-[Inter] font-[400] mt-[10px]'>Our website designers have penetrated the mysteries of <br />
                emotional response to color, image,  and eye-tracking. <br />
                Every element is geared to create maximum appeal.</p>
              <button className='mt-[20px] duration-[500ms] hover:ml-[30px] hover:cursor-pointer'>
                <div className='flex items-center gap-[15px]'>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[500]'>Read Case Study</p>
                  <img src={strelka} alt="img" />
                </div>
              </button>
            </div>
            <div>
              <img className='max-[1200px]:w-[450px]' src={photo4} alt="" />
              <p className='text-[30px] text-[#08546C] font-[Inter] font-[600] mt-[40px]'>DashBoard Design</p>
              <p className='text-[16px] text-[#757575] font-[Inter] font-[400] mt-[10px]'>Our website designers have penetrated the mysteries of <br />
                emotional response to color, image,  and eye-tracking. <br />
                Every element is geared to create maximum appeal.</p>
              <button className='mt-[20px] duration-[500ms] hover:ml-[30px] hover:cursor-pointer'>
                <div className='flex items-center gap-[15px]'>
                  <p className='text-[18px] text-[#08546C] font-[Inter] font-[500]'>Read Case Study</p>
                  <img src={strelka} alt="img" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='secbg bg-[#08546C] pt-[100px] pb-[100px]'>
        <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1200px]:mx-auto max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
          <div className='flex items-center justify-between max-[1020px]:flex max-[1020px]:flex-col'>
            <img className='max-[1200px]:w-[400px] max-[1020px]:mx-auto' src={imagefour} alt="" />
            <div>
              <img className='max-[1020px]:mx-auto max-[1020px]:mt-[50px]' src={sila} alt="" />
              <p className='text-[16px] text-[#ffffff] font-[Inter] font-[500] mt-[40px] max-[1020px]:text-center max-[800px]:text-[30px]'>Managed Services team acts like an extension of yours to expertly <br />
                respond to any and all feedback, and scan and evaluate reviews for <br />
                any legal concerns, profanity or slander, or any policy violations of <br />

                community and content. Services, analytics and reports can be <br />
                customized by location, project or initiative.</p>
              <p className='text-[16px] text-[#AABFC6] font-[Inter] font-[400] mt-[20px] max-[1020px]:text-center max-[1020px]:mt-[30px]'>Mohammad Musa  - CEO at Company</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[200px]'>
        <div className='w-[1200px] mx-auto max-[1200px]:w-[1000px] max-[1200px]:mx-auto max-[1020px]:w-[800px] max-[1020px]:mx-auto max-[800px]:w-[500px] max-[800px]:mx-auto max-[580px]:w-[400px] max-[580px]:mx-auto'>
          <div className='flex items-start justify-start gap-[135px] max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:items-center'>
            <div className='max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:justify-center max-[1020px]:items-center'>
              <img className='max-[1200px]:w-[450px]' src={secfinal} alt="" />
              <p className='text-[35px] text-[#08546C] font-[Inter] font-[600] mt-[40px] max-[1200px]:text-center'>How This Agency Helped My <br />
                Business And Career Journey?</p>
              <p className='text-[16px] text-[#757575] font-[Inter] font-[400] mt-[20px] max-[1200px]:text-[15px] max-[1200px]:text-center'>A successful marketing plan relies heavily on the pulling-power of advertising <br />
                copy. writing result-oriented ad copy is dificult, as it must appeal to, entice, <br />
                and onviced consumers tp action.</p>
              <div className='flex items-center gap-[150px] mt-[20px]'>
                <div className='flex items-center gap-[20px]'>
                  <button className='text-[14px] text-[#757575] font-[Inter] font-[400] max-[1200px]:text-[11px]'>PUBLISHED IN</button>
                  <button className='w-[136px] h-[48px] bg-[#FFF8EB] rounded-[30px] text-[14px] text-[#FFA800] font-[Inter] font-[400]'>Marketing</button>
                  <button className='text-[14px] text-[#757575] font-[Inter] font-[400] max-[1200px]:text-[11px]'>Category</button>
                </div>
                <p className='text-[14px] text-[#757575] font-[Inter] font-[400]'>05 jun, 2021</p>
              </div>
            </div>
            <div className='max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:items-center'>
              <p className='text-[45px] text-[#08546C] font-[Inter] font-[600] max-[1200px]:text-center'>My Blog <br /> And News</p>
              <p className='text-[18px] text-[#757575] font-[Inter] font-[400] mt-[20px] max-[1200px]:text-[16px] max-[1200px]:text-center  '>If It’s abillboard ad, you’ll need a super <br />
                catchy headline due to the speed at <br />
                which people will pass.</p>
              <button className='w-[190px] h-[60px] bg-[#FFA63A] text-[18px] text-[#ffffff] font-[Inter] font-[600] rounded-[30px] mt-[60px]'>Go To The Blog</button>
              <div className='flex items-center gap-[30px] mt-[191px]'>
                <img src={levo} alt="" />
                <img src={pravo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className='w-[100%] h-[2px] bg-[#D4D4D4] mt-[100px]' />
      </section>
    </>
  )
}
