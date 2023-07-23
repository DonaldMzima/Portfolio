import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hooks-useform'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import ContactSvg from '../Svg/ContactSvg'

const schema = Yup.object({
  name: Yup.string().required('enter your name'),
  email: Yup.string().email().required('email required'),
  surname: Yup.string().required('enter your surame'),
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

    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm({
    //   defaultValues: {
    //     name: '',
    //     email: '',
    //     message: '',
    //   },
    //   resolver: yupResolver(schema),
    // })
  }
  return (
    <div id="contact" className="w-full items-center ">
      <h1 className=" text-center text-gray-500 xl:text-center text-xl ">
        Contact Me
      </h1>
      {submitting && <div>Form submitted</div>}
      <div className="relative flex h-screen w-full items-center justify-center">
        <form
          className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
          onSubmit={Submit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              placeholder="Name"
              required
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="email"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="massage"
            >
              Massage
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength={250}
              name="message"
              placeholder="Message"
              required
              rows={6}
            />
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
        </form>
      </div>
      <div className="flex flex-col items-left justify-left mt-10">
        <ContactSvg />
        {/* Social media platforms */}
        <div className="flex gap-4 mt-4">
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
          {/* Add other social media platforms */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
