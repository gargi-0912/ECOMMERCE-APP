import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            At Forever, we believe that fashion is more than just clothing—it's a reflection of who you are and how you want to express yourself. Our journey began with a vision to create an online space where style enthusiasts can discover high-quality, trend-forward pieces that resonate with their unique tastes.
          </p>

          <p>
            Our commitment to excellence doesn’t end with our products; it extends to the entire shopping experience. At Forever, we prioritize customer satisfaction above all. With seamless navigation, responsive support, and reliable delivery, we make shopping for your favorite looks easy and enjoyable.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission at Forever is to make timeless, high-quality fashion accessible to everyone. We’re dedicated to offering stylish, affordable pieces that empower you to express your unique style with confidence.
          </p>


        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >
            At Forever, quality is our top priority. Every product undergoes rigorous checks to ensure it meets our standards for durability, comfort, and style. 
          </p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
          Shopping at Forever is designed with your convenience in mind. From easy navigation to quick checkout and fast, reliable delivery, we make it simple to
          </p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
          At Forever, we are committed to providing exceptional customer service every step of the way. Our team is dedicated to ensuring your experience is smooth, responsive, and personalized, ready to assist with any questions or needs.   </p>


        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About