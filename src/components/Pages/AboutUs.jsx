import React from 'react'
import css from './AboutUs.css'
import {RiTimeFill} from "react-icons/ri"
import aboutUsMainImage from '../../assets/aboutus1.jpg'
import aboutUsImage2 from '../../assets/aboutus2.jpg'
import aboutUsImage3 from '../../assets/Mario and Adrian b.jpg'
import PageTopSection from './Page-components/PageTopSection'

const AboutUs = () => {
    const aboutArticle = (Image, BoldText, Para, ClassName) => {
        return (
            <section className='section'>
                <div className='container'>
                    <img className={`page-main-image ${ClassName}`} src={Image} alt="error" />
                    <div>
                        <p>
                            <span className='bigBold'>{BoldText}</span>
                            {Para}
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    const aboutArticlePara = {
        FirstPara: `ittle Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.
        `,
        
        SecondPara :`ittle Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.
        `
    }

  return (
    <>
    <PageTopSection
        heading={top_section_heading}
        sub_text={top_section_text}
        image={top_section_image}
        image_position={top_section_image_position}
        type_for_sub_text={top_section_type_for_sub_text}
    />
    <section className='aboutus-para'> 
        {aboutArticle(aboutUsImage2, "L", aboutArticlePara.FirstPara, "aboutFirstImage")}
        {aboutArticle(aboutUsImage3, "L", aboutArticlePara.SecondPara, "aboutSecondImage")}
    </section>
    
    <section className='section'>
        <div className='container grid-container'>
            <h2 className='text-green'>Come visit us!</h2>
        </div>
    </section>
    <section className='section'>
        <div className='container grid-container'>
            <h2>Hours of Operation</h2>
            <div className='aboutTiming'>
                <div>
                    <h3>Sunday - Thursday</h3>
                    <p className='about-us-timing'>
                        <span><RiTimeFill/></span>
                        <span className='about-timing'>
                            11:00 am - 09:00 pm
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Friday - Saturday</h3>
                    <p className='about-us-timing'>
                        <span><RiTimeFill/></span>
                        <span className='about-timing'>
                            11:00 am - 10:00 pm
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs

const top_section_heading = 'Discover Our Mediterranean Journey';
const top_section_text = `Where Flavors Meet Tradition, 
and Every Meal Tells a Story.`;
const top_section_image = aboutUsMainImage;
const top_section_image_position = 'left';
const top_section_type_for_sub_text = 'h3';