"use client"

import { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('') // Error state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('') // Reset error message on new submission

    try {
      // Simulate form submission (replace with actual submission logic, e.g., API call)
      await new Promise<void>((resolve, reject) => {
        const isSuccess = Math.random() > 0.5
        if (isSuccess) {
          resolve()
        } else {
          reject('Something went wrong, please try again later.')
        }
      })
        .then(() => {
          setSuccess(true)
          setFormData({ name: '', email: '', message: '' })
        })
        .catch((err) => {
          setError(err as string)
        })
    } catch (err) {
      setError(err as string) // Set error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#ffffff] text-[#10121a] py-20">

      {/* Heading Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4 text-[#400101]">Contact Us</h1>
        <p className="text-lg text-gray-600">We&apos;d love to hear from you! Please reach out to us with any questions or inquiries.</p>
      </section><br /><br />

      {/* Contact Form and Map Section */}
      <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Map Section */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-xl font-semibold mb-4 text-[#400101]">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097746!2d144.95592831531695!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8d3e26e5f4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633378423557!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Our Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          {success && (
            <div className="mb-4 text-green-600">
              <p>Thank you for your message! We&apos;ll get back to you shortly.</p>
            </div>
          )}

          {/* Display error message */}
          {error && (
            <div className="mb-4 text-red-600">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#400101]">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-2 rounded-lg bg-[#f8f8f8] text-[#10121a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#400101] transition-all duration-300 ease-in-out transform hover:ring-2 hover:ring-[#400101] focus:ring-offset-2 focus:ring-offset-gray-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#400101]">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-2 rounded-lg bg-[#f8f8f8] text-[#10121a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#400101] transition-all duration-300 ease-in-out transform hover:ring-2 hover:ring-[#400101] focus:ring-offset-2 focus:ring-offset-gray-100"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#400101]">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 mt-2 rounded-lg bg-[#f8f8f8] text-[#10121a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#400101] transition-all duration-300 ease-in-out transform hover:ring-2 hover:ring-[#400101] focus:ring-offset-2 focus:ring-offset-gray-100"
                placeholder="Type your message here"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 mt-6 text-lg font-semibold rounded-lg ${isSubmitting ? 'bg-[#10121a]' : 'bg-[#400101] hover:bg-[#A19367]'} text-white focus:outline-none focus:ring-2 focus:ring-[#400101] transition-all duration-300 ease-in-out`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
