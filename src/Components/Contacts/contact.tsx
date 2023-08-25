import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styled from '@emotion/styled'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi'
import ContactSvg from '../Svg/ContactSvg'

const Title = styled.h1`
  color: #cfcbcb;
  font-size: 34px;
  text-align: center;
  margin-top: 0px;
  text-decoration: underline;
`

const ContactForm = () => {
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
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500">Full Name</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-500">Email Address</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-500">Phone Number</label>
                  <input
                    className="w-full p-2 border rounded"
                    type="tel"
                    placeholder="01XXX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-500">Your Message</label>
                  <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    aria-label="Submit contact form"
                    className="w-max rounded-full border-2 border-blue-400 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                    type="submit"
                  >
                    Send Message
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
