import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styled from '@emotion/styled'
import { FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import ContactSvg from '../Svg/ContactSvg'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const Title = styled.h1`
  color: #cfcbcb;
  font-size: 34px;
  text-align: center;
  margin-top: 0px;
  text-decoration: underline;
`
const schema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  message: Yup.string().required('Message is required'),
})

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)

  const Submit = (event: any) => {
    event.preventDefault()
    setSubmitting(true)
    emailjs

      .sendForm(
        'service_9l68yag',
        'template_6ey4pkw',

        event.target,
        'wcEzEMeePpQMJBII6',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          toast.error('Message Not Send :-(', {
            position: toast.POSITION.TOP_RIGHT,
          })
        },
      )

    toast.success('Message Send :-)', {
      position: toast.POSITION.TOP_RIGHT,
    })

    setTimeout(() => {
      setSubmitting(false)
    }, 1750)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: ' ',
      message: '',
    },
    resolver: yupResolver(schema),
  })

  return (
    <div id="contact" className="py-10">
      <Title>Contact Me</Title>
      <div className="py-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* SVG and icons */}
          <div className="w-full md:w-1/2 md:pr-5">
            <div className="space-y-4 text-left text-2xl text-gray-300 font-xl ">
              <h1>Keep In Touch</h1>

              <ContactSvg />
              {/* Social media platforms */}
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <AiFillLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/DonaldMzima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <AiFillGithub size={24} />
                </a>

                <a
                  href="mailto:donaldmzima8@gmail.com"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <HiOutlineMail size={24} />
                </a>
                {/* Add phone number link */}
                <a
                  href="tel:+0789941731"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <FaPhone size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 md:pl-5 mt-8 md:mt-0">
            <form onSubmit={handleSubmit(Submit)}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500">Full Name</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Your full name"
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-500">Email Address</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="email"
                    placeholder="name@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-500">Phone Number</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="tel"
                    placeholder="01XXX XXX XXX"
                    {...register('phoneNumber')}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-500">Your Message</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    // aria-label="Submit contact form"
                    className="w-max rounded-full border-2 border-blue-400 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
