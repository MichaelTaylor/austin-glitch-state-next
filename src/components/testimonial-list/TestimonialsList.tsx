import React from 'react'
import { Testimonials } from '../data/Testimonials'
import Border from '../shared/reusable-components/Border'

const TestimonialsList = () => {

  const renderTestimonials =  Testimonials.map((testimonial, index) => {
      return (
        <div key={index} className="flex flex-col items-center justify-center">
          <p className="text-md w-3/5 xl:text-4xl xl:w-4/5 font-custom">{testimonial.quote}</p>
        </div>
      )
    })

  return (
    <div>
      {renderTestimonials}
      <Border/>
    </div>
  )
}

export default TestimonialsList